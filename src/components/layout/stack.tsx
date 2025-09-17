import React from "react";
import clsx from "clsx";

type Direction = "row" | "col";
type GapSize = "none" | "sm" | "md" | "lg";
type AlignItems = "start" | "center" | "end" | "stretch";
type JustifyContent = "start" | "center" | "end" | "between" | "around";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: Direction;
    gap?: GapSize;
    align?: AlignItems;
    justify?: JustifyContent;
    className?: string;
    children: React.ReactNode;
}

// Tailwind class maps
const gapMap: Record<GapSize, string> = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
};

const alignMap: Record<AlignItems, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
};

const justifyMap: Record<JustifyContent, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
};

const Stack: React.FC<StackProps> = ({
                                         direction = "col",
                                         gap = "md",
                                         align = "stretch",
                                         justify = "start",
                                         className = "",
                                         children,
                                         ...rest
                                     }) => {
    return (
        <div
            className={clsx(
                "flex w-full",
                direction === "row" ? "flex-row" : "flex-col",
                gapMap[gap],
                alignMap[align],
                justifyMap[justify],
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Stack;
