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
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Calendar as CalendarIcon,
	Filter,
	Pencil,
	Plus,
	Search,
	Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function GajiTambahanPage() {
	const additions = [
		{
			id: "1",
			name: "Dimas Andriano Herlambang",
			nik: "EMP-2023-001",
			type: "Lembur",
			description: "Lembur weekend project A",
			period: "15 Mei 2026",
			amount: "Rp 500.000",
			status: "Approved",
		},
		{
			id: "2",
			name: "Jane Doe",
			nik: "EMP-2023-002",
			type: "Bonus",
			description: "Bonus Kinerja Q1",
			period: "01 Mei 2026",
			amount: "Rp 2.000.000",
			status: "Paid",
		},
		{
			id: "3",
			name: "John Smith",
			nik: "EMP-2023-003",
			type: "Insentif",
			description: "Pencapaian Target Sales",
			period: "20 Mei 2026",
			amount: "Rp 1.500.000",
			status: "Pending Review",
		},
	];

	const [date, setDate] = React.useState<Date>();

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "Approved":
				return (
					<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
						Approved
					</Badge>
				);
			case "Paid":
				return (
					<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
						Paid
					</Badge>
				);
			case "Pending Review":
				return (
					<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200">
						Pending Review
					</Badge>
				);
			default:
				return <Badge variant="outline">{status}</Badge>;
		}
	};

	const getTypeBadge = (type: string) => {
		switch (type) {
			case "Lembur":
				return (
					<Badge
						variant="secondary"
						className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
						{type}
					</Badge>
				);
			case "Bonus":
				return (
					<Badge
						variant="secondary"
						className="bg-pink-100 text-pink-800 hover:bg-pink-200">
						{type}
					</Badge>
				);
			case "Insentif":
				return (
					<Badge
						variant="secondary"
						className="bg-purple-100 text-purple-800 hover:bg-purple-200">
						{type}
					</Badge>
				);
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
							Gaji Tambahan
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Gaji Tambahan</h1>
					<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Input Manual
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					{/* Filter and Search */}
					<div className="flex flex-col md:flex-row justify-between gap-4 pt-6">
						<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
							<Select>
								<SelectTrigger className="w-full sm:w-[180px]">
									<SelectValue placeholder="Tipe Tambahan" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="lembur">Lembur</SelectItem>
									<SelectItem value="bonus">Bonus</SelectItem>
									<SelectItem value="insentif">Insentif</SelectItem>
									<SelectItem value="thr">THR</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="pending">Pending Review</SelectItem>
									<SelectItem value="approved">Approved</SelectItem>
									<SelectItem value="paid">Paid</SelectItem>
								</SelectContent>
							</Select>

							{/* Date Picker Filter */}
							<Popover>
								<PopoverTrigger
									render={
										<Button
											variant={"outline"}
											className={cn(
												"w-full sm:w-[240px] justify-start text-left font-normal gap-2",
												!date && "text-muted-foreground",
											)}>
											<CalendarIcon className="h-4 w-4" />
											{date ? format(date, "dd MMM yyyy") : <span>Rentang Tanggal</span>}
										</Button>
									}
								/>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar mode="single" selected={date} onSelect={setDate} />
								</PopoverContent>
							</Popover>

							<Button variant="outline" className="gap-2 font-normal">
								<Filter className="h-4 w-4" /> More Filters
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
										<TableHead className="font-semibold min-w-[200px]">
											Karyawan
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">Tipe</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Keterangan
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">Tanggal</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">Nominal</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">Status</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{additions.map((item, index) => (
										<TableRow key={item.id}>
											<TableCell className="text-center font-medium">
												{index + 1}
											</TableCell>
											<TableCell>
												<div className="flex flex-col">
													<span className="font-medium hover:underline cursor-pointer">
														{item.name}
													</span>
													<span className="text-xs text-muted-foreground">{item.nik}</span>
												</div>
											</TableCell>
											<TableCell>{getTypeBadge(item.type)}</TableCell>
											<TableCell className="text-muted-foreground">
												{item.description}
											</TableCell>
											<TableCell>{item.period}</TableCell>
											<TableCell className="font-medium">{item.amount}</TableCell>
											<TableCell>{getStatusBadge(item.status)}</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													<Button
														variant="ghost"
														size="icon"
														title="Edit"
														disabled={item.status === "Paid"}>
														<Pencil className="h-4 w-4 text-muted-foreground" />
													</Button>
													<Button
														variant="ghost"
														size="icon"
														title="Hapus"
														disabled={item.status === "Paid"}>
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
