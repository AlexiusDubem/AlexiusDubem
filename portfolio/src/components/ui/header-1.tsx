"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);
    const pathname = usePathname();

    const links = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Resume", href: "#resume" },
        { label: "Projects", href: "#projects" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close menu on route change
    React.useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
                {
                    "bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border backdrop-blur-lg shadow-sm":
                        scrolled,
                }
            )}
        >
            <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="#home" className="group flex items-center gap-2">
                    <span className="text-xl font-black tracking-tight text-foreground">
                        Alexius Dubem
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-1 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "sm" }),
                                "text-muted-foreground hover:text-foreground transition-colors",
                                pathname === link.href && "text-foreground bg-accent"
                            )}
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop actions */}
                <div className="hidden items-center gap-2 md:flex">
                    <Button variant="outline" size="sm" asChild>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                        >
                            <i className="fa-brands fa-github text-sm" />
                            GitHub
                        </a>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="#contact" className="gap-2">
                            <i className="fa-regular fa-envelope text-sm" />
                            Hire Me
                        </Link>
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                >
                    <MenuToggleIcon open={open} className="size-5" duration={300} />
                </Button>
            </nav>

            <MobileMenu open={open} className="flex flex-col justify-between gap-4">
                <div className="grid gap-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "justify-start text-base font-medium text-muted-foreground",
                                pathname === link.href && "text-foreground bg-accent"
                            )}
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-2 border-t border-border pt-4">
                    <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github" />
                            GitHub
                        </a>
                    </Button>
                    <Button className="w-full gap-2" asChild>
                        <Link href="#contact" onClick={() => setOpen(false)}>
                            <i className="fa-regular fa-envelope" />
                            Hire Me
                        </Link>
                    </Button>
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<"div"> & { open: boolean };

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !open) return null;

    return createPortal(
        <div
            id="mobile-menu"
            className={cn(
                "bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur-lg",
                "fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y border-border md:hidden"
            )}
        >
            <div
                data-slot={open ? "open" : "closed"}
                className={cn(
                    "data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out",
                    "size-full p-6",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body
    );
}

