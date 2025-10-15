import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
      <nav
          aria-label="Pagination"
          className={cn(
              "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6",
              className
          )}
          {...props}
      />
  )
}

function PaginationContent({
                             className,
                             ...props
                           }: React.ComponentProps<"div">) {
  return (
      <div
          className={cn(
              "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
              className
          )}
          {...props}
      />
  )
}

function PaginationItem({
                          isActive,
                          children,
                          className,
                          ...props
                        }: React.ComponentProps<"a"> & { isActive?: boolean }) {
  return (
      <a
          aria-current={isActive ? "page" : undefined}
          className={cn(
              "relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0",
              isActive
                  ? "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
              className
          )}
          {...props}
      >
        {children}
      </a>
  )
}

function PaginationPrevious({
                              className,
                              ...props
                            }: React.ComponentProps<"a">) {
  return (
      <a
          className={cn(
              "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
              className
          )}
          {...props}
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="size-5" />
      </a>
  )
}

function PaginationNext({
                          className,
                          ...props
                        }: React.ComponentProps<"a">) {
  return (
      <a
          className={cn(
              "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
              className
          )}
          {...props}
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="size-5" />
      </a>
  )
}

function PaginationEllipsis() {
  return (
      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300">
      ...
    </span>
  )
}

export {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
}