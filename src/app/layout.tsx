import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	Plus_Jakarta_Sans,
	Inter,
	JetBrains_Mono,
} from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMonoJetbrainsMono = JetBrains_Mono({
	subsets: [
		"cyrillic",
		"cyrillic-ext",
		"greek",
		"latin",
		"latin-ext",
		"vietnamese",
	],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrains-mono",
});

const interInter = Inter({
	subsets: [
		"cyrillic",
		"cyrillic-ext",
		"greek",
		"greek-ext",
		"latin",
		"latin-ext",
		"vietnamese",
	],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const plusJakartaSansPlusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-plus-jakarta-sans",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "HRIS - CV Bumi Indah Group",
	description: "Human Resource Information System",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				plusJakartaSansPlusJakartaSans.variable,
				interInter.variable,
				jetbrainsMonoJetbrainsMono.variable,
			)}
			suppressHydrationWarning>
			<body className="min-h-full flex flex-col">
				<TooltipProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</TooltipProvider>
			</body>
		</html>
	);
}
