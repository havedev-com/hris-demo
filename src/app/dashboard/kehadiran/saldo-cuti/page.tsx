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
	Filter,
	History,
	Pencil,
	Plus,
	Search,
	Upload,
} from "lucide-react";

export default function SaldoCutiPage() {
	const leaveBalances = [
		{
			id: "1",
			name: "Dimas Andriano Herlambang",
			nik: "EMP-2023-001",
			department: "IT",
			totalAllowance: 12,
			used: 3,
			remaining: 9,
			status: "Active",
			initials: "DA",
			color: "bg-indigo-500",
		},
		{
			id: "2",
			name: "Jane Doe",
			nik: "EMP-2023-002",
			department: "HR",
			totalAllowance: 12,
			used: 12,
			remaining: 0,
			status: "Active",
			initials: "JD",
			color: "bg-emerald-500",
		},
		{
			id: "3",
			name: "John Smith",
			nik: "EMP-2023-003",
			department: "Finance",
			totalAllowance: 12,
			used: 5,
			remaining: 7,
			status: "Active",
			initials: "JS",
			color: "bg-gray-500",
		},
	];

	const getRemainingBadge = (remaining: number) => {
		if (remaining === 0) {
			return (
				<Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">
					Habis
				</Badge>
			);
		} else if (remaining <= 3) {
			return (
				<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200">
					Sisa {remaining} Hari
				</Badge>
			);
		} else {
			return (
				<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
					Sisa {remaining} Hari
				</Badge>
			);
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
							Kehadiran
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Saldo Cuti
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Saldo Cuti</h1>
					<div className="flex flex-wrap items-center gap-3">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Sesuaikan Saldo
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
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Divisi" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="it">IT</SelectItem>
									<SelectItem value="hr">HR</SelectItem>
									<SelectItem value="finance">Finance</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="active">Active</SelectItem>
									<SelectItem value="inactive">Inactive</SelectItem>
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
							<InputGroupInput type="search" placeholder="Cari Karyawan..." />
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
										<TableHead className="font-semibold min-w-[150px]">
											Divisi
										</TableHead>
										<TableHead className="font-semibold min-w-[120px] text-center">
											Jatah Tahunan
										</TableHead>
										<TableHead className="font-semibold min-w-[120px] text-center">
											Cuti Terpakai
										</TableHead>
										<TableHead className="font-semibold min-w-[150px] text-center">
											Sisa Saldo
										</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{leaveBalances.map((item, index) => (
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
											<TableCell>{item.department}</TableCell>
											<TableCell className="text-center font-medium">
												{item.totalAllowance}
											</TableCell>
											<TableCell className="text-center">
												{item.used}
											</TableCell>
											<TableCell className="text-center">
												{getRemainingBadge(item.remaining)}
											</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													<Button variant="ghost" size="icon" title="Riwayat Cuti">
														<History className="h-4 w-4 text-muted-foreground" />
													</Button>
													<Button variant="ghost" size="icon" title="Sesuaikan Saldo">
														<Pencil className="h-4 w-4 text-muted-foreground" />
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
