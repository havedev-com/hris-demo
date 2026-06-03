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
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	Calendar as CalendarIcon,
	CheckCircle,
	ChevronDown,
	Download,
	Eye,
	Filter,
	Search,
	XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function KasbonPage() {
	const advances = [
		{
			id: "KSB-2026-001",
			name: "Dimas Andriano Herlambang",
			nik: "EMP-2023-001",
			date: "01 Jun 2026",
			amount: "Rp 2.000.000",
			purpose: "Biaya sekolah anak",
			tenor: "4 Bulan",
			status: "Pending",
			initials: "DA",
			color: "bg-indigo-500",
		},
		{
			id: "KSB-2026-002",
			name: "Jane Doe",
			nik: "EMP-2023-002",
			date: "20 Mei 2026",
			amount: "Rp 1.500.000",
			purpose: "Kebutuhan mendesak keluarga",
			tenor: "3 Bulan",
			status: "Approved",
			initials: "JD",
			color: "bg-emerald-500",
		},
		{
			id: "KSB-2026-003",
			name: "John Smith",
			nik: "EMP-2023-003",
			date: "10 Mar 2026",
			amount: "Rp 3.000.000",
			purpose: "Perbaikan kendaraan operasional",
			tenor: "6 Bulan",
			status: "Paid",
			initials: "JS",
			color: "bg-gray-500",
		},
		{
			id: "KSB-2026-004",
			name: "Sarah Williams",
			nik: "EMP-2023-004",
			date: "05 Mei 2026",
			amount: "Rp 500.000",
			purpose: "Peminjaman sementara",
			tenor: "1 Bulan",
			status: "Rejected",
			initials: "SW",
			color: "bg-pink-500",
		},
	];

	const [date, setDate] = React.useState<Date>();

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "Pending":
				return (
					<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200">
						Pending
					</Badge>
				);
			case "Approved":
				return (
					<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
						Approved
					</Badge>
				);
			case "Paid":
				return (
					<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
						Lunas
					</Badge>
				);
			case "Rejected":
				return (
					<Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">
						Ditolak
					</Badge>
				);
			default:
				return <Badge variant="outline">{status}</Badge>;
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
							Keuangan
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Kasbon
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Pengajuan Kasbon</h1>
					<div className="flex flex-wrap items-center gap-3">
						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button
									variant="outline"
									className="gap-2 font-normal w-full sm:w-auto">
									<Download className="h-4 w-4" /> Ekspor Data{" "}
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
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="pending">Pending</SelectItem>
									<SelectItem value="approved">Approved</SelectItem>
									<SelectItem value="paid">Lunas</SelectItem>
									<SelectItem value="rejected">Ditolak</SelectItem>
								</SelectContent>
							</Select>

							{/* Date Picker Filter */}
							<Popover>
								<PopoverTrigger
									render={
										<Button
											variant={"outline"}
											className={cn(
												"w-full sm:w-[200px] justify-start text-left font-normal gap-2",
												!date && "text-muted-foreground",
											)}>
											<CalendarIcon className="h-4 w-4" />
											{date ? date.toLocaleDateString() : <span>Rentang Tanggal</span>}
										</Button>
									}
								/>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar mode="single" selected={date} onSelect={setDate} />
								</PopoverContent>
							</Popover>

							<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
								<Filter className="h-4 w-4" /> More Filters
							</Button>
						</div>

						<InputGroup className="w-full md:max-w-xs">
							<InputGroupAddon>
								<Search className="text-muted-foreground" />
							</InputGroupAddon>
							<InputGroupInput type="search" placeholder="Cari ID / Karyawan..." />
						</InputGroup>
					</div>

					{/* Table */}
					<div className="rounded-md border overflow-hidden">
						<div className="overflow-x-auto">
							<Table>
								<TableHeader className="bg-muted/50">
									<TableRow>
										<TableHead className="w-12 text-center font-semibold">No.</TableHead>
										<TableHead className="font-semibold min-w-[130px]">
											ID Kasbon
										</TableHead>
										<TableHead className="font-semibold min-w-[220px]">
											Karyawan
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">Tanggal</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Nominal Pengajuan
										</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Keperluan
										</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-center">
											Tenor
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">Status</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{advances.map((item, index) => (
										<TableRow key={item.id}>
											<TableCell className="text-center font-medium">
												{index + 1}
											</TableCell>
											<TableCell className="font-medium text-primary">{item.id}</TableCell>
											<TableCell>
												<div className="flex items-center gap-3">
													<Avatar className={`h-9 w-9 ${item.color} text-white`}>
														<AvatarFallback className="bg-transparent font-medium text-xs">
															{item.initials}
														</AvatarFallback>
													</Avatar>
													<div className="flex flex-col">
														<span className="font-medium hover:underline cursor-pointer">
															{item.name}
														</span>
														<span className="text-xs text-muted-foreground">{item.nik}</span>
													</div>
												</div>
											</TableCell>
											<TableCell>{item.date}</TableCell>
											<TableCell className="font-semibold">{item.amount}</TableCell>
											<TableCell className="text-muted-foreground text-sm">
												{item.purpose}
											</TableCell>
											<TableCell className="text-center font-medium">
												{item.tenor}
											</TableCell>
											<TableCell>{getStatusBadge(item.status)}</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													{item.status === "Pending" && (
														<>
															<Button
																variant="ghost"
																size="icon"
																title="Approve"
																className="text-green-600 hover:text-green-700 hover:bg-green-50">
																<CheckCircle className="h-4 w-4" />
															</Button>
															<Button
																variant="ghost"
																size="icon"
																title="Reject"
																className="text-red-600 hover:text-red-700 hover:bg-red-50">
																<XCircle className="h-4 w-4" />
															</Button>
														</>
													)}
													<Button variant="ghost" size="icon" title="Detail">
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
