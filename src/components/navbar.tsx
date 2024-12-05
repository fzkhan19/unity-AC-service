"use client";

import { ToggleTheme as ToggleThemeComponent } from "@/components/layout/toggle-theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const routes = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/contact", label: "Contact" },
	{ href: "/calculator", label: "AC Calculator" },
];

export function Navbar() {
	const pathname = usePathname();
	const ToggleTheme = React.memo(ToggleThemeComponent);
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-16 items-center justify-between px-4">
				<div className="flex w-full grow items-center space-x-2">
					<Link href="/" className="flex items-center space-x-2">
						<span className="font-bold text-xl">❄️ Unity A.C. Service</span>
					</Link>
				</div>

				<nav className="hidden w-full items-center justify-between gap-4 md:flex">
					<div className="flex w-full items-center justify-end gap-4">
						{routes.map((route) => (
							<Link
								key={route.href}
								href={route.href}
								className={cn(
									"font-medium text-sm transition-colors hover:text-primary",
									pathname === route.href
										? "text-foreground"
										: "text-muted-foreground",
								)}
							>
								{route.label}
							</Link>
						))}
					</div>
					<Link href={"tel:9712142195"} className="pl-4">
						<Button size="sm" variant={"destructive"}>
							<PhoneCall className="mr-2 h-4 w-4" />
							Emergency Service
						</Button>
					</Link>
					<ToggleTheme className="hidden md:flex" />
				</nav>

				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<div className="flex items-center">
						<ToggleTheme className="md:hidden" />
						<SheetTrigger asChild className="md:hidden">
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
					</div>
					<SheetContent side="right">
						<nav className="flex flex-col space-y-4">
							{routes.map((route) => (
								<Link
									key={route.href}
									href={route.href}
									className={cn(
										"font-medium text-sm transition-colors hover:text-primary",
										pathname === route.href
											? "text-foreground"
											: "text-muted-foreground",
									)}
									onClick={() => setIsOpen(false)}
								>
									{route.label}
								</Link>
							))}
							<Link href={"tel:9712142195"} className="pt-4">
								<Button size="sm" variant={"destructive"}>
									<PhoneCall className="mr-2 h-4 w-4" />
									Emergency Service
								</Button>
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
