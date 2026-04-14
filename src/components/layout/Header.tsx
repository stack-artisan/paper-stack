"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Moon, Newspaper, Sun } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function NavigationMenuHeader() {
    const isMobile = useIsMobile()
    const { setTheme } = useTheme()

    return (

        <header style={
            {
                "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
        }
            className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        rel="noopener noreferrer"
                        className="flex items-center dark:text-foreground"
                    >
                        <Newspaper />
                        <div className="ml-1 text-lg font-semibold">Paper Stack</div>
                    </Link>
                </div>
                <NavigationMenu viewport={isMobile} className="ml-auto z-10">
                    <NavigationMenuList className="flex-wrap">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                                href="/"
                                            >
                                                <div className="mb-2 text-lg font-medium sm:mt-4">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    Beautifully designed components built with Tailwind CSS.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger>List</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">Components</div>
                                                <div className="text-muted-foreground">
                                                    Browse all components in the library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">Documentation</div>
                                                <div className="text-muted-foreground">
                                                    Learn how to use the library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">
                                                <div className="font-medium">Blog</div>
                                                <div className="text-muted-foreground">
                                                    Read our latest blog posts.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">Components</Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">Documentation</Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="#">Blocks</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="ml-auto flex items-center gap-2">
                    <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
                        <a
                            href="https://github.com/stack-artisan/paper-stack"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="dark:text-foreground"
                        >
                            GitHub
                        </a>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
