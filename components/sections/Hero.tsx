"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Build Websites with
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> AI Power</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Create stunning websites in minutes with our AI-powered builder. No coding required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                <Sparkles className="h-5 w-5" />
                Start Building Free
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Watch Demo <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((id) => (
                  <Image
                    key={id}
                    src={`https://picsum.photos/32/32?random=${id}`}
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">10,000+</span> websites created
              </div>
            </div>
          </div>
          <div className="relative lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-600/20 rounded-3xl blur-3xl" />
            <div className="relative">
              <Image
                src="https://picsum.photos/800/600"
                alt="Website Builder Interface"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-4 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">AI Powered</p>
                  <p className="text-sm text-muted-foreground">Smart Suggestions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}