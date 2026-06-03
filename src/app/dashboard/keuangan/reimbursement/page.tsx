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
import {
	Calendar as CalendarIcon,
	CheckCircle,
	ChevronDown,
	Download,
	FileText,
	Filter,
	Plus,
	Search,
	XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReimbursementPage() {
	const reimbursements = [
		{
			id: "REIM-2026-001",
			name: "Dimas Andriano Herlambang",
			nik: "EMP-2023-001",
			date: "02 Jun 2026",
			type: "Medis",
			amount: "Rp 850.000",
			attachment: "struk_rs.pdf",
			status: "Pending",
		},
		{
			id: "REIM-2026-002",
			name: "Jane Doe",
			nik: "EMP-2023-002",
			date: "28 Mei 2026",
			type: "Transportasi",
			amount: "Rp 450.000",
			attachment: "tiket_kereta.pdf",
			status: "Approved",
		},
		{
			id: "REIM-2026-003",
			name: "John Smith",
			nik: "EMP-2023-003",
			date: "20 Mei 2026",
			type: "Entertainment",
			amount: "Rp 1.200.000",
			attachment: "bill_resto.jpg",
			status: "Paid",
		},
		{
			id: "REIM-2026-004",
			name: "Sarah Williams",
			nik: "EMP-2023-004",
			date: "15 Mei 2026",
			type: "Lain-lain",
			amount: "Rp 150.000",
			attachment: "struk_atk.pdf",
			status: "Rejected",
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
						Paid
					</Badge>
				);
			case "Rejected":
				return (
					<Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">
						Rejected
					</Badge>
				);
			default:
				return <Badge variant="outline">{status}</Badge>;
		}
	};

	const getTypeBadge = (type: string) => {
		switch (type) {
			case "Medis":
				return (
					<Badge
						variant="secondary"
						className="bg-pink-100 text-pink-800 hover:bg-pink-200">
						{type}
					</Badge>
				);
			case "Transportasi":
				return (
					<Badge
						variant="secondary"
						className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
						{type}
					</Badge>
				);
			case "Entertainment":
				return (
					<Badge
						variant="secondary"
						className="bg-purple-100 text-purple-800 hover:bg-purple-200">
						{type}
					</Badge>
				);
			default:
				return (
					<Badge variant="outline" className="text-gray-600">
						{type}
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
							Keuangan
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Reimbursement
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Reimbursement</h1>
					<div className="flex flex-wrap items-center gap-3">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Ajukan Klaim
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button
									variant="outline"
									className="gap-2 font-normal w-full sm:w-auto">
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
									<SelectValue placeholder="Tipe Klaim" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="medis">Medis</SelectItem>
									<SelectItem value="transportasi">Transportasi</SelectItem>
									<SelectItem value="entertainment">Entertainment</SelectItem>
									<SelectItem value="lainnya">Lain-lain</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="pending">Pending</SelectItem>
									<SelectItem value="approved">Approved</SelectItem>
									<SelectItem value="paid">Paid</SelectItem>
									<SelectItem value="rejected">Rejected</SelectItem>
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
										<TableHead className="font-semibold min-w-[150px]">
											ID Klaim
										</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Karyawan
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">
											Tipe Klaim
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">Tanggal</TableHead>
										<TableHead className="font-semibold min-w-[150px]">Nominal</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-center">
											Lampiran
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">Status</TableHead>
										<TableHead className="font-semibold min-w-[120px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{reimbursements.map((item, index) => (
										<TableRow key={item.id}>
											<TableCell className="text-center font-medium">
												{index + 1}
											</TableCell>
											<TableCell className="font-medium text-primary">{item.id}</TableCell>
											<TableCell>
												<div className="flex flex-col">
													<span className="font-medium hover:underline cursor-pointer">
														{item.name}
													</span>
													<span className="text-xs text-muted-foreground">{item.nik}</span>
												</div>
											</TableCell>
											<TableCell>{getTypeBadge(item.type)}</TableCell>
											<TableCell>{item.date}</TableCell>
											<TableCell className="font-medium">{item.amount}</TableCell>
											<TableCell className="text-center">
												<Button variant="ghost" size="icon" title={item.attachment}>
													<FileText className="h-4 w-4 text-blue-500" />
												</Button>
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
													{item.status === "Approved" && (
														<Button variant="outline" size="sm" className="text-xs h-8">
															Mark as Paid
														</Button>
													)}
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
