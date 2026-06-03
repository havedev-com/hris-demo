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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
	ChevronDown,
	Download,
	Filter,
	Pencil,
	Plus,
	Search,
	Trash2,
	Upload,
} from "lucide-react";

export default function PotonganGajiPage() {
	const deductions = [
		{
			id: "1",
			name: "Dimas Andriano Herlambang",
			nik: "EMP-2023-001",
			type: "Denda Keterlambatan",
			description: "Terlambat 3x bulan berjalan",
			period: "Mei 2026",
			amount: "Rp 150.000",
		},
		{
			id: "2",
			name: "Jane Doe",
			nik: "EMP-2023-002",
			type: "Cicilan Koperasi",
			description: "Cicilan ke 3 dari 10",
			period: "Mei 2026",
			amount: "Rp 500.000",
		},
		{
			id: "3",
			name: "John Smith",
			nik: "EMP-2023-003",
			type: "Aset Hilang/Rusak",
			description: "Penggantian mouse hilang",
			period: "Mei 2026",
			amount: "Rp 250.000",
		},
	];

	const getTypeBadge = (type: string) => {
		switch (type) {
			case "Denda Keterlambatan":
				return <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">{type}</Badge>;
			case "Cicilan Koperasi":
				return <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">{type}</Badge>;
			case "Aset Hilang/Rusak":
				return <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">{type}</Badge>;
			default:
				return <Badge variant="outline">{type}</Badge>;
		}
	};

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
						<BreadcrumbPage className="font-medium text-muted-foreground">
							Payroll
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Potongan Gaji
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Potongan Gaji</h1>
					<div className="flex flex-wrap items-center gap-3">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Tambah Potongan
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger
								render={
									<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
										<Upload className="h-4 w-4" /> Import{" "}
										<ChevronDown className="h-4 w-4" />
									</Button>
								}
							/>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Import Excel</DropdownMenuItem>
								<DropdownMenuItem>Import CSV</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
									<Download className="h-4 w-4" /> Ekspor{" "}
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Ekspor Excel</DropdownMenuItem>
								<DropdownMenuItem>Ekspor PDF</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					{/* Filter and Search */}
					<div className="flex flex-col md:flex-row justify-between gap-4 pt-6 w-full">
						<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
							<Select>
								<SelectTrigger className="w-full sm:w-[200px]">
									<SelectValue placeholder="Tipe Potongan" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="denda">Denda Keterlambatan</SelectItem>
									<SelectItem value="koperasi">Cicilan Koperasi</SelectItem>
									<SelectItem value="aset">Aset Hilang/Rusak</SelectItem>
									<SelectItem value="lainnya">Lain-lain</SelectItem>
								</SelectContent>
							</Select>

							<Select defaultValue="mei-2026">
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Periode" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="mei-2026">Mei 2026</SelectItem>
									<SelectItem value="apr-2026">April 2026</SelectItem>
									<SelectItem value="mar-2026">Maret 2026</SelectItem>
								</SelectContent>
							</Select>

							<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
								<Filter className="h-4 w-4" /> More Filters
							</Button>
						</div>

						<InputGroup className="w-full md:max-w-xs">
							<InputGroupAddon>
								<Search className="text-muted-foreground" />
							</InputGroupAddon>
							<InputGroupInput type="search" placeholder="Cari Karyawan/NIK..." />
						</InputGroup>
					</div>

					{/* Table */}
					<div className="rounded-md border overflow-hidden">
						<div className="overflow-x-auto">
							<Table>
								<TableHeader className="bg-muted/50">
									<TableRow>
										<TableHead className="w-12 text-center font-semibold">
											No.
										</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Karyawan
										</TableHead>
										<TableHead className="font-semibold min-w-[180px]">
											Tipe Potongan
										</TableHead>
										<TableHead className="font-semibold min-w-[250px]">
											Deskripsi
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">
											Periode Payroll
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Nominal
										</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{deductions.map((item, index) => (
										<TableRow key={item.id}>
											<TableCell className="text-center font-medium">
												{index + 1}
											</TableCell>
											<TableCell>
												<div className="flex flex-col">
													<span className="font-medium hover:underline cursor-pointer">
														{item.name}
													</span>
													<span className="text-xs text-muted-foreground">
														{item.nik}
													</span>
												</div>
											</TableCell>
											<TableCell>{getTypeBadge(item.type)}</TableCell>
											<TableCell className="text-muted-foreground">
												{item.description}
											</TableCell>
											<TableCell>{item.period}</TableCell>
											<TableCell className="text-red-600 font-medium">
												{item.amount}
											</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													<Button variant="ghost" size="icon" title="Edit">
														<Pencil className="h-4 w-4 text-muted-foreground" />
													</Button>
													<Button variant="ghost" size="icon" title="Hapus">
														<Trash2 className="h-4 w-4 text-muted-foreground" />
													</Button>
												</div>
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
