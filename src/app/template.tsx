"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<TooltipProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				disableTransitionOnChange>
				{children}
			</ThemeProvider>
		</TooltipProvider>
	);
}
