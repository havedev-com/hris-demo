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
	CheckSquare,
	ChevronDown,
	Download,
	Eye,
	Filter,
	Plus,
	Search,
} from "lucide-react";

export default function OffboardingPage() {
	const offboardings = [
		{
			id: "1",
			name: "Jane Doe",
			nik: "EMP-2023-002",
			department: "HR Dept",
			type: "Resign",
			dateRequested: "15 Mei 2026",
			dateEffective: "15 Jun 2026",
			status: "Clearance",
			initials: "JD",
			color: "bg-emerald-500",
		},
		{
			id: "2",
			name: "John Smith",
			nik: "EMP-2023-003",
			department: "Finance",
			type: "Pensiun",
			dateRequested: "01 Feb 2026",
			dateEffective: "01 Jul 2026",
			status: "Selesai",
			initials: "JS",
			color: "bg-amber-500",
		},
		{
			id: "3",
			name: "Sarah Williams",
			nik: "EMP-2023-004",
			department: "Marketing",
			type: "PHK",
			dateRequested: "28 Mei 2026",
			dateEffective: "30 Mei 2026",
			status: "Pending",
			initials: "SW",
			color: "bg-pink-500",
		},
	];

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "Pending":
				return (
					<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200">
						Menunggu
					</Badge>
				);
			case "Clearance":
				return (
					<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
						Proses Clearance
					</Badge>
				);
			case "Selesai":
				return (
					<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
						Selesai (Offboarded)
					</Badge>
				);
			default:
				return <Badge variant="outline">{status}</Badge>;
		}
	};

	const getTypeBadge = (type: string) => {
		switch (type) {
			case "Resign":
				return <Badge variant="outline" className="text-gray-600 bg-gray-50">{type}</Badge>;
			case "PHK":
				return <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">{type}</Badge>;
			case "Pensiun":
				return <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">{type}</Badge>;
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
							Karyawan
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Offboarding
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Proses Offboarding</h1>
					<div className="flex flex-wrap items-center gap-3">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Ajukan Offboarding
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
									<Download className="h-4 w-4" /> Ekspor{" "}
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Laporan Offboarding Excel</DropdownMenuItem>
								<DropdownMenuItem>Form Clearance PDF</DropdownMenuItem>
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
									<SelectValue placeholder="Tipe Berhenti" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="resign">Resign</SelectItem>
									<SelectItem value="phk">PHK</SelectItem>
									<SelectItem value="pensiun">Pensiun</SelectItem>
									<SelectItem value="kontrak">Habis Kontrak</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="pending">Menunggu</SelectItem>
									<SelectItem value="clearance">Proses Clearance</SelectItem>
									<SelectItem value="selesai">Selesai</SelectItem>
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
							<InputGroupInput type="search" placeholder="Cari Karyawan / NIK..." />
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
											Tipe Berhenti
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Tgl Pengajuan
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Tgl Efektif Keluar
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Status
										</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{offboardings.map((item, index) => (
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
															{item.nik} • {item.department}
														</span>
													</div>
												</div>
											</TableCell>
											<TableCell>{getTypeBadge(item.type)}</TableCell>
											<TableCell className="text-muted-foreground text-sm">
												{item.dateRequested}
											</TableCell>
											<TableCell className="font-medium">
												{item.dateEffective}
											</TableCell>
											<TableCell>{getStatusBadge(item.status)}</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													{item.status !== "Selesai" && (
														<Button variant="outline" size="sm" className="text-xs h-8 gap-1 border-blue-200 text-blue-700 hover:bg-blue-50">
															<CheckSquare className="h-3 w-3" /> Clearance
														</Button>
													)}
													<Button variant="ghost" size="icon" title="Detail Offboarding">
														<Eye className="h-4 w-4 text-muted-foreground" />
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
