"use client";
import * as React from "react";
import { HrisPieChart } from "./hris-pie-chart";
import { HrisBarChart } from "./hris-bar-chart";
import { ChartConfig } from "@/components/ui/chart";

// Mock Data Based on PDF

export function AgeDistributionChart() {
	const data = [
		{ name: "21-25 (40%)", value: 40 },
		{ name: "26-30 (40%)", value: 40 },
		{ name: "36-40 (20%)", value: 20 },
	];
	const config = {
		chart1: { label: "21-25", color: "var(--color-chart-1)" },
		chart2: { label: "26-30", color: "var(--color-chart-2)" },
		chart3: { label: "36-40", color: "var(--color-chart-3)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Usia" data={data} config={config} />;
}

export function EducationDistributionChart() {
	const data = [
		{ name: "S1 (40%)", value: 40 },
		{ name: "D3 (20%)", value: 20 },
		{ name: "D1 (40%)", value: 40 },
	];
	const config = {
		chart1: { label: "S1", color: "var(--color-chart-1)" },
		chart2: { label: "D3", color: "var(--color-chart-2)" },
		chart3: { label: "D1", color: "var(--color-chart-3)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Pendidikan" data={data} config={config} />;
}

export function MaritalStatusChart() {
	const data = [
		{ name: "Menikah (60%)", value: 60 },
		{ name: "Belum Menikah (40%)", value: 40 },
	];
	const config = {
		chart1: { label: "Menikah", color: "var(--color-chart-1)" },
		chart2: { label: "Belum Menikah", color: "var(--color-chart-2)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Status Perkawinan" data={data} config={config} />;
}

export function LengthOfServiceChart() {
	const data = [{ name: "0 - 5 Year (100%)", value: 100 }];
	const config = {
		chart1: { label: "0 - 5 Year", color: "var(--color-chart-1)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Lama Kerja" data={data} config={config} />;
}

export function ReligionDistributionChart() {
	const data = [
		{ name: "Islam (20%)", value: 20 },
		{ name: "Kristen (60%)", value: 60 },
		{ name: "Katolik (20%)", value: 20 },
	];
	const config = {
		chart1: { label: "Islam", color: "var(--color-chart-1)" },
		chart2: { label: "Kristen", color: "var(--color-chart-2)" },
		chart3: { label: "Katolik", color: "var(--color-chart-3)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Agama" data={data} config={config} />;
}

export function GenderDistributionChart() {
	const data = [
		{ name: "Laki-laki (60%)", value: 60 },
		{ name: "Perempuan (40%)", value: 40 },
	];
	const config = {
		chart1: { label: "Laki-laki", color: "var(--color-chart-1)" },
		chart2: { label: "Perempuan", color: "var(--color-chart-2)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Jenis Kelamin" data={data} config={config} />;
}

export function PersonnelBySalaryChart() {
	const data = [
		{ name: "Rp 0 - Rp 1.000.000 (5)", value: 50 },
		{ name: "Rp 1.000.001 - Rp 2.000.000 (1)", value: 10 },
		{ name: "Rp 2.000.001 - Rp 3.000.000 (1)", value: 10 },
		{ name: "Rp 3.000.001 - Rp 4.000.000 (1)", value: 10 },
		{ name: "Rp 5.000.001 - Rp 6.000.000 (1)", value: 10 },
		{ name: "Rp 6.000.001 - Rp 7.000.000 (1)", value: 10 },
	];
	const config = {
		chart1: { label: "Rp 0 - Rp 1.000.000", color: "var(--color-chart-1)" },
		chart2: {
			label: "Rp 1.000.001 - Rp 2.000.000",
			color: "var(--color-chart-2)",
		},
		chart3: {
			label: "Rp 2.000.001 - Rp 3.000.000",
			color: "var(--color-chart-3)",
		},
		chart4: {
			label: "Rp 3.000.001 - Rp 4.000.000",
			color: "var(--color-chart-4)",
		},
		chart5: {
			label: "Rp 5.000.001 - Rp 6.000.000",
			color: "var(--color-chart-5)",
		},
		chart6: {
			label: "Rp 6.000.001 - Rp 7.000.000",
			color: "var(--color-chart-1)",
		},
	} satisfies ChartConfig;

	return (
		<HrisPieChart
			title="Total Personalia Berdasarkan Gaji"
			data={data}
			config={config}
		/>
	);
}

export function EmployeesByOrgPieChart() {
	const data = [{ name: "IT Division (100%)", value: 100 }];
	const config = {
		chart1: { label: "IT Division", color: "var(--color-chart-1)" },
	} satisfies ChartConfig;

	return (
		<HrisPieChart
			title="Jumlah Karyawan Per Organisasi"
			data={data}
			config={config}
		/>
	);
}

export function SalaryComponentsChart() {
	const data = [
		{ name: "Gaji Pokok", value: 22000000 },
		{ name: "Tunjangan Pulsa", value: 545000 },
		{ name: "Koperasi", value: 150000 },
	];
	const config = {
		chart1: { label: "Gaji Pokok", color: "var(--color-chart-1)" },
		chart2: { label: "Tunjangan Pulsa", color: "var(--color-chart-2)" },
		chart3: { label: "Koperasi", color: "var(--color-chart-3)" },
	} satisfies ChartConfig;

	return (
		<HrisPieChart
			title="Gaji Per Komponen Bulan Ini"
			data={data}
			config={config}
		/>
	);
}

// BAR CHARTS
export function SalaryByOrgChart() {
	const data = [
		{ org: "IT Division", value: 5500000 },
		{ org: "Finance & Accounting", value: 0 },
		{ org: "Marketing", value: 0 },
		{ org: "HRGA", value: 5000000 },
	];
	const config = {
		value: { label: "Jumlah", color: "var(--color-chart-2)" },
	} satisfies ChartConfig;

	return (
		<HrisBarChart
			title="Gaji Per Organisasi Bulan Ini"
			data={data}
			config={config}
			xAxisKey="org"
			barKeys={["value"]}
		/>
	);
}

export function EmployeesByStatusChart() {
	const data = [
		{ status: "Tetap Percobaan", value: 3 },
		{ status: "PKWT", value: 2 },
	];
	const config = {
		value: { label: "Total", color: "var(--color-chart-2)" },
	} satisfies ChartConfig;

	return (
		<HrisBarChart
			title="Jumlah Karyawan Berdasarkan Status"
			data={data}
			config={config}
			xAxisKey="status"
			barKeys={["value"]}
		/>
	);
}

export function LeaveStatisticsChart() {
	const data = [{ name: "Izin", value: 0 }];
	const config = {
		value: { label: "Jumlah Hari", color: "var(--color-chart-2)" },
	} satisfies ChartConfig;

	return (
		<HrisBarChart
			title="Statistik Izin / Cuti Karyawan"
			data={data}
			config={config}
			xAxisKey="name"
			barKeys={["value"]}
		/>
	);
}

export function AttendanceStatisticsChart() {
	const data = [{ name: "Karyawan Terbanyak Terlambat", value: 0 }];
	const config = {
		value: { label: "Jumlah Hari", color: "var(--color-chart-2)" },
	} satisfies ChartConfig;

	return (
		<HrisBarChart
			title="Statistik Kehadiran Karyawan"
			data={data}
			config={config}
			xAxisKey="name"
			barKeys={["value"]}
		/>
	);
}
