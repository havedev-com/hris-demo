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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	ChevronDown,
	Filter,
	HelpCircle,
	Plus,
	Search,
	Settings,
	Smartphone,
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

export default function IzinCutiPage() {
	const types = [
		{ value: "all", label: "Semua Jenis Pengajuan" },
		{ value: "cuti-tahunan", label: "Cuti Tahunan" },
		{ value: "cuti-khusus", label: "Cuti Khusus" },
		{ value: "sakit", label: "Sakit" },
		{ value: "izin", label: "Izin" },
		{ value: "cuti-tidak-dibayar", label: "Cuti Tidak Dibayar" },
	];
	const status = [
		{ value: "all", label: "Semua Status" },
		{ value: "pending", label: "Pending" },
		{ value: "approved", label: "Disetujui" },
		{ value: "rejected", label: "Ditolak" },
	];
	const employees = [
		{
			id: "1",
			name: "Nucholis Indrawan",
			date: "2022-01-01",
			duration: "1",
			period: "2022-01-01",
			status: "pending",
			initials: "NI",
			avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			color: "bg-slate-200",
		},
		{
			id: "2",
			name: "Bambang",
			date: "2022-01-01",
			duration: "3",
			period: "2022-01-01",
			status: "pending",
			initials: "DD",
			color: "bg-orange-400",
		},
		{
			id: "3",
			name: "Contoh Karyawan 3",
			date: "2022-01-01",
			duration: "2",
			period: "2022-01-01",
			status: "pending",
			initials: "C3",
			color: "bg-[#e8b5c0]",
		},
		{
			id: "4",
			name: "Contoh Karyawan 2",
			date: "2022-01-01",
			duration: "5",
			period: "2022-01-01",
			status: "pending",
			initials: "C2",
			color: "bg-[#f2dfbe]",
		},
		{
			id: "5",
			name: "Contoh Karyawan 1",
			date: "2022-01-01",
			duration: "4",
			period: "2022-01-01",
			status: "pending",
			initials: "C1",
			color: "bg-[#addde0]",
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
						<span className="text-muted-foreground">Kehadiran</span>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Izin & Cuti
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Izin & Cuti</h1>

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

						<Button variant="outline" className="gap-2 font-normal">
							<Settings className="h-4 w-4" /> Atur Jadwal Kerja
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-6 mt-6">
					{/* Filter and Search */}
					<div className="flex flex-col md:flex-row justify-between gap-4">
						<div className="flex items-center gap-4">
							<Button variant="outline" className="w-fit gap-2 font-normal">
								<Filter className="h-4 w-4" /> Filter
							</Button>
							<Select items={types}>
								<SelectTrigger className="w-full min-w-48">
									<SelectValue placeholder="Jenis Pengajuan" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Jenis Pengajuan</SelectLabel>
										{types.map((item) => (
											<SelectItem key={item.value} value={item.value}>
												{item.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<Select items={status}>
								<SelectTrigger className="w-full min-w-48">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Status</SelectLabel>
										{status.map((item) => (
											<SelectItem key={item.value} value={item.value}>
												{item.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="flex items-center gap-4">
							<Button className="w-fit gap-2 font-normal">
								<Plus className="h-4 w-4" /> Tambah Pengajuan
							</Button>
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
										<TableHead className="font-semibold min-w-[200px]">Nama</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Tgl Pengajuan
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Durasi Cuti
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Periode Cuti
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{employees.map((employee, index) => (
										<TableRow key={employee.id}>
											<TableCell className="font-medium ">{index + 1}</TableCell>
											<TableCell>
												<div className="flex items-center gap-3">
													<Avatar
														className={`h-8 w-8 ${employee.avatarUrl ? "" : employee.color} `}>
														<AvatarImage src={employee.avatarUrl} alt={employee.name} />
														<AvatarFallback className="bg-transparent  font-medium text-xs">
															{employee.initials}
														</AvatarFallback>
													</Avatar>
													<span className="font-medium  hover:underline cursor-pointer">
														{employee.name}
													</span>
												</div>
											</TableCell>
											<TableCell>{employee.date}</TableCell>
											<TableCell>{employee.duration}</TableCell>
											<TableCell>{employee.period}</TableCell>
											<TableCell>{employee.status}</TableCell>
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
