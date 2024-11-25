"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Sparkles } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">WebCraft AI</span>
        </Link>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-background md:static md:block md:w-auto md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
            <li><Link href="#features" className="block py-2 text-muted-foreground hover:text-primary">Features</Link></li>
            <li><Link href="#templates" className="block py-2 text-muted-foreground hover:text-primary">Templates</Link></li>
            <li><Link href="#pricing" className="block py-2 text-muted-foreground hover:text-primary">Pricing</Link></li>
            <li className="md:hidden lg:block"><Link href="#docs" className="block py-2 text-muted-foreground hover:text-primary">Documentation</Link></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="hidden md:inline-flex">
            <Sparkles className="mr-2 h-4 w-4" /> Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </header>
  );
}