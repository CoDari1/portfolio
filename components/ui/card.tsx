import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

import Image from "next/image";

type ProjectCardProps = {
  filename: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
};

function ProjectCard({ filename, name, description, tags, href, image }: ProjectCardProps) {
  return (
      <div className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:border-muted-foreground">

        {/* Title bar */}
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-2 text-xs font-mono text-muted-foreground">{filename}</span>
        </div>

        {/* Image preview */}
        <div className="relative aspect-video border-b border-border overflow-hidden bg-background">
          <Image
              src={image}
              alt={`${name} preview`}
              fill
              className="object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
          />
          {/* subtle scanline tint to keep it in the terminal world */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 px-5 py-5 font-mono text-sm">
          <p className="text-muted-foreground italic mb-3">{`// ${description}`}</p>
          <p className="text-foreground">
            <span className="text-[#D2A8FF]">const</span>{" "}
            <span className="text-[#79C0FF]">project</span> = {"{"}
          </p>
          <p className="pl-4 text-foreground">
            name: <span className="text-primary">{`"${name}"`}</span>,
          </p>
          <p className="text-foreground mb-4">{"}"}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="text-[10.5px] text-muted-foreground border border-border rounded px-2 py-0.5"
                >
              {tag}
            </span>
            ))}
          </div>

          {/* Visit link */}

         <a href={href}
          className="mt-auto inline-flex items-center gap-1.5 text-primary text-sm w-fit border-b border-transparent hover:border-primary transition-colors animate-pulse"
         target='_blank'
         >
          $ open --project {name.toLowerCase().replace(/\s+/g, "-")} →
        </a>
      </div>
</div>
);
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  ProjectCard,
}
