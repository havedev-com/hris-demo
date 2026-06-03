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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	ChevronDown,
	Download,
	FileText,
	Filter,
	Pencil,
	RefreshCw,
	Search,
} from "lucide-react";

export default function PajakBpjsPage() {
	const taxes = [
		{
			id: "1",
			name: "Dimas Andriano Herlambang",
			nik: "EMP-2023-001",
			ptkp: "TK/0",
			bpjsKes: "Rp 120.000",
			bpjsTk: "Rp 360.000",
			pph21: "Rp 250.000",
			total: "Rp 730.000",
			initials: "DA",
			color: "bg-indigo-500",
		},
		{
			id: "2",
			name: "Jane Doe",
			nik: "EMP-2023-002",
			ptkp: "K/1",
			bpjsKes: "Rp 100.000",
			bpjsTk: "Rp 300.000",
			pph21: "Rp 150.000",
			total: "Rp 550.000",
			initials: "JD",
			color: "bg-emerald-500",
		},
		{
			id: "3",
			name: "John Smith",
			nik: "EMP-2023-003",
			ptkp: "K/2",
			bpjsKes: "Rp 150.000",
			bpjsTk: "Rp 450.000",
			pph21: "Rp 850.000",
			total: "Rp 1.450.000",
			initials: "JS",
			color: "bg-gray-500",
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
						<BreadcrumbPage className="font-medium text-muted-foreground">
							Payroll
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Pajak & BPJS
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Pajak & BPJS</h1>
					<div className="flex flex-wrap items-center gap-3">
						<Button variant="outline" className="gap-2">
							<RefreshCw className="h-4 w-4" /> Sinkronisasi Tarif
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
									<Download className="h-4 w-4" /> Unduh Laporan{" "}
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Laporan SIPP BPJS</DropdownMenuItem>
								<DropdownMenuItem>Bupot PPh 21 (1721-A1)</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					{/* Filter and Search */}
					<div className="flex flex-col md:flex-row justify-between gap-4 pt-6 w-full">
						<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
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

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Divisi" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="it">IT</SelectItem>
									<SelectItem value="hr">HR</SelectItem>
									<SelectItem value="finance">Finance</SelectItem>
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
										<TableHead className="font-semibold min-w-[250px]">
											Karyawan
										</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-center">
											PTKP
										</TableHead>
										<TableHead className="font-semibold min-w-[120px] text-right">
											BPJS Kes (1%)
										</TableHead>
										<TableHead className="font-semibold min-w-[120px] text-right">
											BPJS TK (JHT, JP)
										</TableHead>
										<TableHead className="font-semibold min-w-[120px] text-right">
											PPh 21
										</TableHead>
										<TableHead className="font-semibold min-w-[150px] text-right">
											Total Potongan Wajib
										</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{taxes.map((item, index) => (
										<TableRow key={item.id}>
											<TableCell className="text-center font-medium">
												{index + 1}
											</TableCell>
											<TableCell>
												<div className="flex items-center gap-3">
													<Avatar
														className={`h-9 w-9 ${item.color} text-white`}
													>
														<AvatarFallback className="bg-transparent font-medium text-xs">
															{item.initials}
														</AvatarFallback>
													</Avatar>
													<div className="flex flex-col">
														<span className="font-medium hover:underline cursor-pointer">
															{item.name}
														</span>
														<span className="text-xs text-muted-foreground">
															{item.nik}
														</span>
													</div>
												</div>
											</TableCell>
											<TableCell className="text-center">
												<Badge variant="outline" className="bg-muted/50">
													{item.ptkp}
												</Badge>
											</TableCell>
											<TableCell className="text-right text-muted-foreground">
												{item.bpjsKes}
											</TableCell>
											<TableCell className="text-right text-muted-foreground">
												{item.bpjsTk}
											</TableCell>
											<TableCell className="text-right text-red-600 font-medium">
												{item.pph21}
											</TableCell>
											<TableCell className="text-right font-semibold">
												{item.total}
											</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													<Button variant="ghost" size="icon" title="Edit Status Pajak">
														<Pencil className="h-4 w-4 text-muted-foreground" />
													</Button>
													<Button variant="ghost" size="icon" title="Unduh Bupot">
														<FileText className="h-4 w-4 text-muted-foreground" />
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
