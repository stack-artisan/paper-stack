"use client"

import { cn } from "@/lib/utils"

export function H5({ className, ...props }: React.ComponentProps<"h5">) {
    return (
        <h5
            className={cn(
                "scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    )
}
