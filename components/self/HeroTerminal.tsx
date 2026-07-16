'use client';

import { useEffect, useState } from 'react';

type Line = {
    prefix: string;
    text: string;
    indent?: boolean;
    bold?: boolean;
    muted?: boolean;
    promptColor?: boolean;
};

const LINES: Line[] = [
    { prefix: '$ ', text: 'whoami', promptColor: true },
    { prefix: '> ', text: 'Darius M. — Full-stack Developer', indent: true, bold: true },
    { prefix: '$ ', text: 'cat mission.txt', promptColor: true },
    { prefix: '> ', text: 'I build fast, focused products with clean code and sharper design.', indent: true, muted: true },
];

export function HeroTerminal() {
    // how many characters of each line are "typed" so far
    const [progress, setProgress] = useState<number[]>(Array(LINES.length).fill(0));
    const [done, setDone] = useState(false);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            setProgress(LINES.map((l) => l.text.length));
            setDone(true);
            return;
        }

        let cancelled = false;

        async function run() {
            for (let i = 0; i < LINES.length; i++) {
                const text = LINES[i].text;
                for (let c = 1; c <= text.length; c++) {
                    if (cancelled) return;
                    setProgress((prev) => {
                        const next = [...prev];
                        next[i] = c;
                        return next;
                    });
                    await new Promise((r) => setTimeout(r, 28));
                }
                await new Promise((r) => setTimeout(r, 200));
            }
            if (!cancelled) setDone(true);
        }

        run();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="px-8 py-9 font-mono text-base leading-loose sm:text-lg">
            {LINES.map((line, i) => {
                const typed = line.text.slice(0, progress[i]);
                const rest = line.text.slice(progress[i]);
                return (
                    <p
                        key={i}
                        className={
                            (line.indent ? 'pl-2 ' : '') +
                            (line.bold ? 'font-semibold ' : '') +
                            (line.muted ? 'text-gray-300 ' : '')
                        }
                    >
                        <span className={line.promptColor ? 'text-[#7ee787]' : ''}>{line.prefix}</span>
                        <span>{typed}</span>
                        <span className="opacity-0">{rest}</span>
                    </p>
                );
            })}
            <span
                className={
                    'ml-1 inline-block h-[1.05em] w-[0.55em] bg-[#7ee787] align-text-bottom transition-opacity ' +
                    (done ? 'opacity-100 animate-caret-blink' : 'opacity-0')
                }
            />
        </div>
    );
}