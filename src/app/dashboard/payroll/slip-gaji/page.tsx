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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Download, Eye, Filter, Mail, Search, Send } from "lucide-react";

export default function SlipGajiPage() {
	const payslips = [
		{
			id: "1",
			name: "Dimas Andriano Herlambang",
			nik: "EMP-2023-001",
			position: "Software Developer",
			department: "IT",
			period: "Mei 2026",
			netPay: "Rp 12.500.000",
			status: "Sent",
			initials: "DA",
			color: "bg-blue-500",
		},
		{
			id: "2",
			name: "Jane Doe",
			nik: "EMP-2023-002",
			position: "UI/UX Designer",
			department: "Product",
			period: "Mei 2026",
			netPay: "Rp 10.000.000",
			status: "Generated",
			initials: "JD",
			color: "bg-green-500",
		},
		{
			id: "3",
			name: "John Smith",
			nik: "EMP-2023-003",
			position: "Marketing Manager",
			department: "Marketing",
			period: "Mei 2026",
			netPay: "Rp 15.200.000",
			status: "Failed",
			initials: "JS",
			color: "bg-orange-500",
		},
	];

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "Sent":
				return (
					<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
						Terkirim
					</Badge>
				);
			case "Generated":
				return (
					<Badge
						variant="outline"
						className="text-gray-600 bg-gray-50 border-gray-200">
						Draft/Generated
					</Badge>
				);
			case "Failed":
				return (
					<Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">
						Gagal Kirim
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
							Payroll
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Slip Gaji
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Slip Gaji</h1>
					<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
						<Button variant="outline" className="gap-2">
							<Send className="h-4 w-4" /> Kirim Email Massal
						</Button>
						<Button variant="outline" className="gap-2">
							<Download className="h-4 w-4" /> Unduh ZIP
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					{/* Filter and Search */}
					<div className="flex flex-col md:flex-row justify-between gap-4 pt-6">
						<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
							<Select defaultValue="mei-2026">
								<SelectTrigger className="w-full sm:w-[180px]">
									<SelectValue placeholder="Periode" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="mei-2026">Mei 2026</SelectItem>
									<SelectItem value="apr-2026">April 2026</SelectItem>
									<SelectItem value="mar-2026">Maret 2026</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[180px]">
									<SelectValue placeholder="Divisi" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="it">IT</SelectItem>
									<SelectItem value="product">Product</SelectItem>
									<SelectItem value="marketing">Marketing</SelectItem>
									<SelectItem value="hr">HR</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="sent">Terkirim</SelectItem>
									<SelectItem value="generated">Draft/Generated</SelectItem>
									<SelectItem value="failed">Gagal</SelectItem>
								</SelectContent>
							</Select>

							<Button variant="outline" className="gap-2 font-normal">
								<Filter className="h-4 w-4" /> Filter Lain
							</Button>
						</div>

						<div className="relative w-full md:max-w-xs">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Cari Karyawan/NIK..."
								className="pl-9 "
							/>
						</div>
					</div>

					{/* Table */}
					<div className="rounded-md border overflow-hidden">
						<div className="overflow-x-auto">
							<Table>
								<TableHeader className="bg-muted/50">
									<TableRow>
										<TableHead className="w-12 text-center font-semibold">No.</TableHead>
										<TableHead className="font-semibold min-w-[250px]">
											Karyawan
										</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Jabatan & Divisi
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Periode Payroll
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Gaji Bersih
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Status Pengiriman
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{payslips.map((slip, index) => (
										<TableRow key={slip.id}>
											<TableCell className="text-center font-medium">
												{index + 1}
											</TableCell>
											<TableCell>
												<div className="flex items-center gap-3">
													<Avatar className={`h-9 w-9 ${slip.color} text-white`}>
														<AvatarFallback className="bg-transparent font-medium text-xs">
															{slip.initials}
														</AvatarFallback>
													</Avatar>
													<div className="flex flex-col">
														<span className="font-medium hover:underline cursor-pointer">
															{slip.name}
														</span>
														<span className="text-xs text-muted-foreground">{slip.nik}</span>
													</div>
												</div>
											</TableCell>
											<TableCell>
												<div className="flex flex-col">
													<span className="font-medium">{slip.position}</span>
													<span className="text-xs text-muted-foreground">
														{slip.department}
													</span>
												</div>
											</TableCell>
											<TableCell>{slip.period}</TableCell>
											<TableCell className="font-medium">{slip.netPay}</TableCell>
											<TableCell>{getStatusBadge(slip.status)}</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													<Button variant="ghost" size="icon" title="Lihat Slip">
														<Eye className="h-4 w-4 text-muted-foreground" />
													</Button>
													<Button variant="ghost" size="icon" title="Unduh PDF">
														<Download className="h-4 w-4 text-muted-foreground" />
													</Button>
													<Button variant="ghost" size="icon" title="Kirim Email">
														<Mail className="h-4 w-4 text-muted-foreground" />
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
