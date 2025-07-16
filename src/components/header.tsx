import Image from "next/image"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

// Modified version to work with entry point /student for the static project
export default function Header() {
    return (
        <header className="bg-white/90 dark:bg-background/90 backdrop-blur border-b border-muted shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo + Title */}
                <div className="flex items-center gap-4">
                    <a href="/">
                        <Image
                            src="/students/img/logo_lcyrc.png"
                            alt="NDS Lab Logo"
                            width={50}
                            height={50}
                            unoptimized
                            className="w-8 sm:w-[50px] h-auto dark:invert dark:brightness-0 dark:contrast-100"
                            priority
                        />
                    </a>
                    <div className="hidden sm:block leading-tight">
                        <a href="/" className="text-l font-semibold text-foreground dark:text-foreground-dark">
                            Network & Data Science Lab
                        </a>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            CIC - IPN
                        </div>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        {/* Use <a> for Home to escape basePath */}
                        <a href="/" className="hover:text-primary transition-colors">Home</a>
                        <a href="/faculty" className="hover:text-primary transition-colors">Faculty</a>
                        <a href="/students" className="hover:text-primary transition-colors">Students</a>
                        <a href="/alumni" className="hover:text-primary transition-colors">Alumni</a>
                        <a href="/classes" className="hover:text-primary transition-colors">Classes</a>
                        <a href="/directions" className="hover:text-primary transition-colors">Directions</a>
                    </nav>
                    <div className="border-l border-muted pl-2">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="sm">Menu</Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <nav className="flex flex-col gap-4 mt-6 text-sm pl-4 font-medium">
                                <a href="/" className="hover:text-primary transition-colors">Home</a>
                                <a href="/faculty" className="hover:text-primary transition-colors">Faculty</a>
                                <a href="/students" className="hover:text-primary transition-colors">Students</a>
                                <a href="/alumni" className="hover:text-primary transition-colors">Alumni</a>
                                <a href="/classes" className="hover:text-primary transition-colors">Classes</a>
                                <a href="/directions" className="hover:text-primary transition-colors">Directions</a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
