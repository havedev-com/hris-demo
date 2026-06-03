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
	Laptop,
	Pencil,
	Plus,
	RotateCcw,
	Search,
	Upload,
} from "lucide-react";

export default function ManajemenAsetPage() {
	const assets = [
		{
			id: "AST-IT-001",
			name: "Macbook Pro M2 14-inch",
			category: "Elektronik",
			assignee: "Dimas Andriano Herlambang",
			assigneeRole: "IT Dept",
			initials: "DA",
			color: "bg-indigo-500",
			dateAssigned: "10 Jan 2024",
			condition: "Baik",
		},
		{
			id: "AST-IT-002",
			name: "Monitor Dell UltraSharp 27",
			category: "Elektronik",
			assignee: "Jane Doe",
			assigneeRole: "HR Dept",
			initials: "JD",
			color: "bg-emerald-500",
			dateAssigned: "15 Mar 2024",
			condition: "Perbaikan",
		},
		{
			id: "AST-VH-001",
			name: "Toyota Avanza Operasional",
			category: "Kendaraan",
			assignee: "John Smith",
			assigneeRole: "General Affairs",
			initials: "JS",
			color: "bg-amber-500",
			dateAssigned: "01 Feb 2024",
			condition: "Baik",
		},
		{
			id: "AST-IT-003",
			name: "ThinkPad T14 Gen 3",
			category: "Elektronik",
			assignee: "-",
			assigneeRole: "-",
			initials: "",
			color: "bg-gray-200",
			dateAssigned: "-",
			condition: "Tersedia",
		},
	];

	const getConditionBadge = (condition: string) => {
		switch (condition) {
			case "Baik":
				return (
					<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
						Baik
					</Badge>
				);
			case "Perbaikan":
				return (
					<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200">
						Perbaikan
					</Badge>
				);
			case "Tersedia":
				return (
					<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
						Tersedia / Gudang
					</Badge>
				);
			case "Rusak":
				return (
					<Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">
						Rusak
					</Badge>
				);
			default:
				return <Badge variant="outline">{condition}</Badge>;
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
							Fasilitas
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Manajemen Aset
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Manajemen Aset</h1>
					<div className="flex flex-wrap items-center gap-3">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Tambah Aset
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
									<SelectValue placeholder="Kategori" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="elektronik">Elektronik</SelectItem>
									<SelectItem value="kendaraan">Kendaraan</SelectItem>
									<SelectItem value="furniture">Furniture</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Kondisi" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="baik">Baik</SelectItem>
									<SelectItem value="tersedia">Tersedia</SelectItem>
									<SelectItem value="perbaikan">Perbaikan</SelectItem>
									<SelectItem value="rusak">Rusak</SelectItem>
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
							<InputGroupInput type="search" placeholder="Cari ID / Nama Aset..." />
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
											Aset
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Kategori
										</TableHead>
										<TableHead className="font-semibold min-w-[250px]">
											Ditugaskan Kepada
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Tgl Peminjaman
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Kondisi
										</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{assets.map((item, index) => (
										<TableRow key={item.id}>
											<TableCell className="text-center font-medium">
												{index + 1}
											</TableCell>
											<TableCell>
												<div className="flex flex-col">
													<span className="font-medium hover:underline cursor-pointer">
														{item.name}
													</span>
													<span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
														<Laptop className="h-3 w-3" /> {item.id}
													</span>
												</div>
											</TableCell>
											<TableCell>{item.category}</TableCell>
											<TableCell>
												{item.assignee !== "-" ? (
													<div className="flex items-center gap-3">
														<Avatar
															className={`h-8 w-8 ${item.color} text-white`}
														>
															<AvatarFallback className="bg-transparent font-medium text-[10px]">
																{item.initials}
															</AvatarFallback>
														</Avatar>
														<div className="flex flex-col">
															<span className="text-sm font-medium">
																{item.assignee}
															</span>
															<span className="text-xs text-muted-foreground">
																{item.assigneeRole}
															</span>
														</div>
													</div>
												) : (
													<span className="text-muted-foreground italic text-sm">Belum Ditugaskan</span>
												)}
											</TableCell>
											<TableCell className="text-muted-foreground text-sm">
												{item.dateAssigned}
											</TableCell>
											<TableCell>{getConditionBadge(item.condition)}</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													{item.assignee !== "-" && (
														<Button variant="ghost" size="icon" title="Tarik Aset (Revoke)" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
															<RotateCcw className="h-4 w-4" />
														</Button>
													)}
													<Button variant="ghost" size="icon" title="Edit Aset">
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
