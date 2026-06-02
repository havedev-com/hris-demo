"use client";
import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";

export function EmployeesPerMonthChart() {
	const data = [
		{ month: "May 2026", baru: 2, aktif: 7, berhentiKerja: 0 },
		{ month: "Jun 2026", baru: 0, aktif: 5, berhentiKerja: 0 },
	];
	const config = {
		baru: { label: "Baru", color: "var(--color-chart-3)" },
		aktif: { label: "Aktif", color: "var(--color-chart-2)" },
		berhentiKerja: { label: "Berhenti Kerja", color: "var(--color-chart-1)" },
	} satisfies ChartConfig;

	return (
		<Card className="flex flex-col w-full">
			<CardHeader className="items-start pb-2">
				<CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
					Jumlah Karyawan Per Bulan
				</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={config}
					className="w-full min-h-[300px] max-h-[400px]">
					<BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 20 }}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={10}
							domain={[0, 10]}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<ChartLegend content={<ChartLegendContent />} />
						<Bar
							dataKey="aktif"
							stackId="a"
							fill="var(--color-chart-2)"
							radius={[0, 0, 4, 4]}
						/>
						<Bar dataKey="baru" stackId="a" fill="var(--color-chart-3)" radius={0} />
						<Bar
							dataKey="berhentiKerja"
							stackId="a"
							fill="var(--color-chart-1)"
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
