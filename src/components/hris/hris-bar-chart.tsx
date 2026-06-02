"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export interface HrisBarChartProps {
	title: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any[];
	config: ChartConfig;
	xAxisKey: string;
	barKeys: string[];
}

export function HrisBarChart({
	title,
	data,
	config,
	xAxisKey,
	barKeys,
}: HrisBarChartProps) {
	return (
		<Card className="flex flex-col w-full">
			<CardHeader className="items-start pb-2">
				<CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={config}
					className="w-full min-h-[300px] max-h-[400px]">
					<BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 20 }}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey={xAxisKey}
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={10}
							tickFormatter={(value) => {
								if (value >= 1000000) {
									return `Rp ${value / 1000000}M`;
								}
								return value;
							}}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						{barKeys.map((key) => (
							<Bar key={key} dataKey={key} fill={`var(--color-${key})`} radius={4} />
						))}
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
