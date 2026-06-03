"use client";
import * as React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	ChevronDown,
	Download,
	Filter,
	HelpCircle,
	Printer,
	Search,
	Smartphone,
	Upload,
} from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function PayrollPage() {
	const months = [
		{
			value: "1",
			label: "Januari",
		},
		{
			value: "2",
			label: "Februari",
		},
		{
			value: "3",
			label: "Maret",
		},
		{
			value: "4",
			label: "April",
		},
		{
			value: "5",
			label: "Mei",
		},
		{
			value: "6",
			label: "Juni",
		},
		{
			value: "7",
			label: "Juli",
		},
		{
			value: "8",
			label: "Agustus",
		},
		{
			value: "9",
			label: "September",
		},
		{
			value: "10",
			label: "Oktober",
		},
		{
			value: "11",
			label: "November",
		},
		{
			value: "12",
			label: "Desember",
		},
	];
	const years = Array.from({ length: 5 }).map((_, index) => {
		return {
			value: (new Date().getFullYear() - index).toString(),
			label: (new Date().getFullYear() - index).toString(),
		};
	});
	const payroll = [
		{
			id: "1",
			name: "Gaji Bulanan",
			periode: "Oktober 2026",
			employee: "10",
			readyPay: "100",
			donePay: "50",
		},
		{
			id: "2",
			name: "THR",
			periode: "Mei 2026",
			employee: "10",
			readyPay: "100",
			donePay: "80",
		},
	];

	return (
		<div className="flex flex-col gap-6 w-full min-h-full">
			{/* Breadcrumb */}
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink
							href="/dashboard"
							className="text-muted-foreground hover:text-foreground">
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<span className="text-muted-foreground">Payroll</span>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Payroll
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Payroll</h1>

					{/* Top Right Actions */}
					<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
						<Button variant="outline" size="icon" className="font-normal">
							<Smartphone className="h-4 w-4" />
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button variant="outline" className="gap-2  font-normal">
									<HelpCircle className="h-4 w-4" /> Panduan{" "}
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Dokumentasi</DropdownMenuItem>
								<DropdownMenuItem>Video Tutorial</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button variant="outline" className="gap-2 font-normal">
									<Upload className="h-4 w-4" /> Import{" "}
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Import Excel</DropdownMenuItem>
								<DropdownMenuItem>Import CSV</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button variant="outline" className="gap-2 font-normal">
									<Download className="h-4 w-4" /> Ekspor{" "}
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Ekspor Excel</DropdownMenuItem>
								<DropdownMenuItem>Ekspor PDF</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<Button variant="outline" className="gap-2 font-normal">
							<Printer className="h-4 w-4" /> Print
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-6 mt-6">
					{/* Filter and Search */}
					<div className="flex flex-col md:flex-row justify-between gap-4">
						<Button variant="outline" className="w-fit gap-2 font-normal">
							<Filter className="h-4 w-4" /> Filter
						</Button>
						<div className="flex items-center gap-4">
							<Button variant="outline" className="w-fit gap-2 font-normal">
								Bulan Ini
							</Button>
							<Select items={months}>
								<SelectTrigger className="w-full min-w-48">
									<SelectValue placeholder="Bulan" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Bulan</SelectLabel>
										{months.map((item) => (
											<SelectItem key={item.value} value={item.value}>
												{item.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<Select items={years}>
								<SelectTrigger className="w-full min-w-48">
									<SelectValue placeholder="Tahun" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Tahun</SelectLabel>
										{years.map((item) => (
											<SelectItem key={item.value} value={item.value}>
												{item.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<InputGroup className="w-full md:max-w-xs">
								<InputGroupAddon>
									<Search className="text-muted-foreground" />
								</InputGroupAddon>
								<InputGroupInput type="search" placeholder="Cari" />
							</InputGroup>
						</div>
					</div>

					{/* Table */}
					<div className="rounded-md overflow-hidden">
						<div className="overflow-x-auto">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[50px] font-semibold">No.</TableHead>
										<TableHead className="font-semibold min-w-[200px]">Slip</TableHead>
										<TableHead className="font-semibold min-w-[200px]">Periode</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Karyawan
										</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Siap Bayar
										</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Sudah Bayar
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{payroll.map((pay, index) => (
										<TableRow key={pay.id}>
											<TableCell className="font-medium ">{index + 1}</TableCell>
											<TableCell>{pay.name}</TableCell>
											<TableCell>{pay.periode}</TableCell>
											<TableCell>{pay.employee}</TableCell>
											<TableCell>
												<Progress
													value={Number(pay.readyPay)}
													className="w-full max-w-sm"
												/>
											</TableCell>
											<TableCell>
												<Progress value={Number(pay.donePay)} className="w-full max-w-sm" />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
