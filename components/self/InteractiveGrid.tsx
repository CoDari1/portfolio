'use client'

import { useEffect, useRef, useState } from 'react';

// Matches the 44px background-size used by .hero-grid-bg so the interactive
// cells line up with the painted grid behind them.
const CELL = 44;
const TRAIL_FADE_MS = 520;

export default function InteractiveGrid() {
    const ref = useRef<HTMLDivElement>(null);
    const [dims, setDims] = useState({ cols: 0, rows: 0 });
    const [tick, setTick] = useState(0);
    const [hoveredCell, setHoveredCell] = useState<number | null>(null);
    const activationsRef = useRef<Map<number, number>>(new Map());
    const lastCellRef = useRef<number | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const measure = () => {
            const { width, height } = el.getBoundingClientRect();
            setDims({
                cols: Math.max(1, Math.ceil(width / CELL)),
                rows: Math.max(1, Math.ceil(height / CELL)),
            });
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el || dims.cols === 0 || dims.rows === 0) return;

        let frame = 0;
        let animationFrame = 0;

        const runFadeLoop = () => {
            const now = performance.now();
            let hasActive = false;

            activationsRef.current.forEach((activatedAt, cell) => {
                if (now - activatedAt >= TRAIL_FADE_MS) {
                    activationsRef.current.delete(cell);
                    return;
                }
                hasActive = true;
            });

            setTick(now);
            if (hasActive) {
                animationFrame = requestAnimationFrame(runFadeLoop);
            } else {
                animationFrame = 0;
            }
        };

        const updateActiveCell = (x: number, y: number) => {
            if (frame) cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const relX = x - rect.left;
                const relY = y - rect.top;

                if (relX < 0 || relY < 0 || relX >= rect.width || relY >= rect.height) {
                    setHoveredCell(null);
                    return;
                }

                const col = Math.min(dims.cols - 1, Math.max(0, Math.floor(relX / CELL)));
                const row = Math.min(dims.rows - 1, Math.max(0, Math.floor(relY / CELL)));
                const nextCell = row * dims.cols + col;
                setHoveredCell(nextCell);

                if (lastCellRef.current === nextCell) return;
                lastCellRef.current = nextCell;
                activationsRef.current.set(nextCell, performance.now());
                if (!animationFrame) {
                    animationFrame = requestAnimationFrame(runFadeLoop);
                }
            });
        };

        const onMove = (event: MouseEvent) => updateActiveCell(event.clientX, event.clientY);
        const onLeave = () => setHoveredCell(null);

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mouseleave', onLeave);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
            if (frame) cancelAnimationFrame(frame);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [dims.cols, dims.rows]);

    const count = dims.cols * dims.rows;
    const getCellStyle = (index: number) => {
        if (hoveredCell === index) {
            return {
                backgroundColor: 'rgba(126, 231, 135, 0.26)',
                boxShadow: 'inset 0 0 18px rgba(126, 231, 135, 0.45)',
            };
        }

        const activatedAt = activationsRef.current.get(index);
        if (activatedAt === undefined) return undefined;

        const age = Math.max(0, tick - activatedAt);
        const progress = Math.max(0, 1 - age / TRAIL_FADE_MS);
        if (progress <= 0) return undefined;

        const alpha = 0.22 * progress;
        const glow = 0.38 * progress;
        return {
            backgroundColor: `rgba(126, 231, 135, ${alpha})`,
            boxShadow: `inset 0 0 16px rgba(126, 231, 135, ${glow})`,
        };
    };

    return (
        <div
            ref={ref}
            className="grid h-full w-full overflow-hidden bg-[#08090a]"
            style={{
                gridTemplateColumns: `repeat(${dims.cols}, ${CELL}px)`,
                gridTemplateRows: `repeat(${dims.rows}, ${CELL}px)`,
            }}
        >
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="border-r border-b border-border/30"
                    style={getCellStyle(i)}
                />
            ))}
        </div>
    );
}
