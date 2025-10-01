"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
      <div
          data-slot="table-container"
          className="relative w-full overflow-x-auto"
      >
        <table
            data-slot="table"
            className={cn("w-full caption-bottom text-sm", className)}
            {...props}
        />
      </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
      <thead
          data-slot="table-header"
          className={cn(
              "bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 [&_tr]:border-b-2 [&_tr]:border-primary/40",
              className
          )}
          {...props}
      />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
      <tbody
          data-slot="table-body"
          className={cn(
              "[&_tr:last-child]:border-0 [&_tr:nth-child(even)]:bg-primary/3",
              className
          )}
          {...props}
      />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
      <tfoot
          data-slot="table-footer"
          className={cn(
              "bg-gradient-to-r from-primary/8 via-accent/8 to-primary/8 border-t-2 border-primary/40 font-semibold [&>tr]:last:border-b-0",
              className
          )}
          {...props}
      />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
      <tr
          data-slot="table-row"
          className={cn(
              "hover:bg-gradient-to-r hover:from-primary/8 hover:via-accent/8 hover:to-primary/8 data-[state=selected]:bg-gradient-to-r data-[state=selected]:from-accent/15 data-[state=selected]:via-primary/15 data-[state=selected]:to-accent/15 border-b border-primary/15 transition-all duration-300",
              className
          )}
          {...props}
      />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
      <th
          data-slot="table-head"
          className={cn(
              "bg-gradient-to-br from-primary/5 to-accent/5 text-primary h-10 px-2 text-left align-middle font-bold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] border-r border-primary/10 last:border-r-0",
              className
          )}
          {...props}
      />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
      <td
          data-slot="table-cell"
          className={cn(
              "p-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
              className
          )}
          {...props}
      />
  )
}

function TableCaption({
                        className,
                        ...props
                      }: React.ComponentProps<"caption">) {
  return (
      <caption
          data-slot="table-caption"
          className={cn("text-muted-foreground mt-4 text-sm", className)}
          {...props}
      />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}