"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Newspaper } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const CompanyList: { title: string; href: string }[] = [
    {
        title: "About",
        href: "/",
    },
    {
        title: "Feature",
        href: "/",
    },
    {
        title: "Work",
        href: "/",
    },
    {
        title: "Career",
        href: "/",
    },
]

const HelpList: { title: string; href: string }[] = [
    {
        title: "Customer Support",
        href: "/",
    },
    {
        title: "Delivery Details",
        href: "/",
    },
    {
        title: "Terms & Conditions",
        href: "/",
    },
    {
        title: "Privacy Policy",
        href: "/",
    },
]

export function Footer() {
    const { setTheme } = useTheme()

    return (

        <footer
            style={
                {
                    "--header-height": "calc(var(--spacing) * 30)",
                } as React.CSSProperties
            }
            className="flex min-h-(--header-height) py-10 lg:py-20 mt-10 border-t shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="grid lg:grid-cols-6 gap-10 px-4 lg:px-6">
                <div className="col-span-2">
                    <div className="space-y-2 pb-2 border-b">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="flex items-center dark:text-foreground"
                            >
                                <Newspaper />
                                <div className="ml-1 text-lg font-semibold">Paper Stack</div>
                            </Link>

                        </div>
                        <p className="text-muted-foreground text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div className="flex space-x-4 pt-2">
                        <Facebook className="text-muted-foreground" />
                        <Instagram className="text-muted-foreground" />
                        <Linkedin className="text-muted-foreground" />
                        <Github className="text-muted-foreground" />
                    </div>
                </div>
                <div>
                    <div className="text-lg font-semibold pb-2">Company</div>
                    <ul className="space-y-2">
                        {CompanyList.map((item, index) => (
                            <ListItem key={index} title={item.title} href={item.href} />

                        ))}
                    </ul>
                </div>
                <div>
                    <div className="text-lg font-semibold pb-2">Help</div>
                    <ul className="space-y-2">
                        {HelpList.map((item, index) => (
                            <ListItem key={index} title={item.title} href={item.href} />

                        ))}
                    </ul>
                </div>
                <div className="col-span-2">
                    <div className="text-lg font-semibold pb-2">Subscribe to newsletter</div>
                    <div className="flex items-center gap-2">
                        <Input type="email" placeholder="Email" />
                        <Button size="icon">
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function ListItem({
    title,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <Link href={href}>
                {title}
            </Link>
        </li>
    )
}
