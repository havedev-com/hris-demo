import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SalarySummaryCards() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Card>
				<CardHeader className="pb-2">
					<CardTitle className="text-sm font-bold uppercase text-foreground">Total Gaji Bulan Ini</CardTitle>
				</CardHeader>
				<CardContent className="flex justify-between items-end">
					<div className="text-2xl font-bold text-foreground">Rp 22.395.000</div>
					<div className="flex flex-col items-end">
						<TrendingUp className="h-8 w-8 text-green-500 mb-1 stroke-[3px]" />
						<span className="text-xs font-bold">10%</span>
						<span className="text-xs text-muted-foreground">dari bulan sebelumnya</span>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="pb-2">
					<CardTitle className="text-sm font-bold uppercase text-foreground">Rata - rata Gaji Bulan Ini</CardTitle>
				</CardHeader>
				<CardContent className="flex justify-between items-end">
					<div className="text-2xl font-bold text-foreground">Rp 4.479.000</div>
					<div className="flex flex-col items-end">
						<TrendingUp className="h-8 w-8 text-green-500 mb-1 stroke-[3px]" />
						<span className="text-xs font-bold">120%</span>
						<span className="text-xs text-muted-foreground">dari bulan sebelumnya</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
