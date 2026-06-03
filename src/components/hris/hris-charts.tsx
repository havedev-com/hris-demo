"use client";
import * as React from "react";
import { HrisPieChart } from "./hris-pie-chart";
import { HrisBarChart } from "./hris-bar-chart";
import { ChartConfig } from "@/components/ui/chart";

// Mock Data Based on PDF

export function AgeDistributionChart() {
	const data = [
		{ name: "21-25", value: 40 },
		{ name: "26-30", value: 40 },
		{ name: "36-40", value: 20 },
	];
	const config = {
		"21-25": { label: "21-25", color: "var(--color-chart-1)" },
		"26-30": { label: "26-30", color: "var(--color-chart-2)" },
		"36-40": { label: "36-40", color: "var(--color-chart-3)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Usia" data={data} config={config} />;
}

export function EducationDistributionChart() {
	const data = [
		{ name: "S1", value: 40 },
		{ name: "D3", value: 20 },
		{ name: "D1", value: 40 },
	];
	const config = {
		S1: { label: "S1", color: "var(--color-chart-1)" },
		D3: { label: "D3", color: "var(--color-chart-2)" },
		D1: { label: "D1", color: "var(--color-chart-3)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Pendidikan" data={data} config={config} />;
}

export function MaritalStatusChart() {
	const data = [
		{ name: "Menikah", value: 60 },
		{ name: "Belum Menikah", value: 40 },
	];
	const config = {
		Menikah: { label: "Menikah", color: "var(--color-chart-1)" },
		"Belum Menikah": { label: "Belum Menikah", color: "var(--color-chart-2)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Status Perkawinan" data={data} config={config} />;
}

export function LengthOfServiceChart() {
	const data = [{ name: "0 - 5 Year", value: 100 }];
	const config = {
		"0 - 5 Year": { label: "0 - 5 Year", color: "var(--color-chart-1)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Lama Kerja" data={data} config={config} />;
}

export function ReligionDistributionChart() {
	const data = [
		{ name: "Islam", value: 20 },
		{ name: "Kristen", value: 60 },
		{ name: "Katolik", value: 20 },
	];
	const config = {
		Islam: { label: "Islam", color: "var(--color-chart-1)" },
		Kristen: { label: "Kristen", color: "var(--color-chart-2)" },
		Katolik: { label: "Katolik", color: "var(--color-chart-3)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Agama" data={data} config={config} />;
}

export function GenderDistributionChart() {
	const data = [
		{ name: "Laki-laki", value: 60 },
		{ name: "Perempuan", value: 40 },
	];
	const config = {
		"Laki-laki": { label: "Laki-laki", color: "var(--color-chart-1)" },
		Perempuan: { label: "Perempuan", color: "var(--color-chart-2)" },
	} satisfies ChartConfig;

	return <HrisPieChart title="Jenis Kelamin" data={data} config={config} />;
}

export function PersonnelBySalaryChart() {
	const data = [
		{ name: "Rp 0 - Rp 1jt", value: 50 },
		{ name: "Rp 1jt - Rp 2jt", value: 10 },
		{ name: "Rp 2jt - Rp 3jt", value: 10 },
		{ name: "Rp 3jt - Rp 4jt", value: 10 },
		{ name: "Rp 5jt - Rp 6jt", value: 10 },
		{ name: "Rp 6jt - Rp 7jt", value: 10 },
	];
	const config = {
		"Rp 0 - Rp 1jt": {
			label: "Rp 0 - Rp 1jt",
			color: "var(--color-chart-1)",
		},
		"Rp 1jt - Rp 2jt": {
			label: "Rp 1jt - Rp 2jt",
			color: "var(--color-chart-2)",
		},
		"Rp 2jt - Rp 3jt": {
			label: "Rp 2jt - Rp 3jt",
			color: "var(--color-chart-3)",
		},
		"Rp 3jt - Rp 4jt": {
			label: "Rp 3jt - Rp 4jt",
			color: "var(--color-chart-4)",
		},
		"Rp 5jt - Rp 6jt": {
			label: "Rp 5jt - Rp 6jt",
			color: "var(--color-chart-5)",
		},
		"Rp 6jt - Rp 7jt": {
			label: "Rp 6jt - Rp 7jt",
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
	const data = [{ name: "IT Division", value: 100 }];
	const config = {
		"IT Division": { label: "IT Division", color: "var(--color-chart-1)" },
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
		"Gaji Pokok": { label: "Gaji Pokok", color: "var(--color-chart-1)" },
		"Tunjangan Pulsa": {
			label: "Tunjangan Pulsa",
			color: "var(--color-chart-2)",
		},
		Koperasi: { label: "Koperasi", color: "var(--color-chart-3)" },
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
