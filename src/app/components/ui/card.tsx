import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card"
          className={cn(
              "bg-gradient-to-br from-card via-card to-primary/5 text-card-foreground flex flex-col gap-3 rounded-xl border border-primary/20 py-6 shadow-lg transition-all duration-300 p-6 backdrop-blur-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-transparent before:via-accent/5 before:to-transparent before:opacity-50",
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
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-3 [.border-b]:border-primary/20 relative z-10",
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
          className={cn("leading-none font-semibold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", className)}
          {...props}
      />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card-description"
          className={cn("text-muted-foreground text-sm leading-relaxed", className)}
          {...props}
      />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card-action"
          className={cn(
              "col-start-2 row-span-2 row-start-1 self-start justify-self-end text-accent transition-colors relative z-10",
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
          className={cn("px-6 relative z-10", className)}
          {...props}
      />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="card-footer"
          className={cn("flex items-center px-6 [.border-t]:pt-6 [.border-t]:border-primary/20 [.border-t]:mt-2 relative z-10", className)}
          {...props}
      />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}