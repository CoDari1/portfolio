'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number; // ms
    y?: number;     // px to rise from
}

export function Reveal({ children, className = '', delay = 0, y = 24 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) {
            setInView(true);
            return;
        }

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                transitionDelay: `${delay}ms`,
                transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
            }}
            className={`transition-all duration-700 ease-out ${inView ? 'opacity-100' : 'opacity-0'} ${className}`}
        >
            {children}
        </div>
    );
}
