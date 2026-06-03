"use client";

import * as React from "react";
import { Pie, PieChart, Cell } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";

export interface HrisPieChartProps {
	title: string;
	data: { name: string; value: number }[];
	config: ChartConfig;
}

export function HrisPieChart({ title, data, config }: HrisPieChartProps) {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-start pb-2">
				<CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={config}
					className="mx-auto aspect-square max-h-[300px]">
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent nameKey="name" />}
						/>
						<Pie
							data={data}
							dataKey="value"
							nameKey="name"
							innerRadius={0}
							stroke="none">
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={`var(--color-${Object.keys(config)[index]})`}
								/>
							))}
						</Pie>
						<ChartLegend
							content={<ChartLegendContent nameKey="name" />}
							className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
