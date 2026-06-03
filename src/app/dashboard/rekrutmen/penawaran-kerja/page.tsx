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
	ChevronDown,
	Download,
	Filter,
	Plus,
	Printer,
	Search,
	Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function PenawaranKerjaPage() {
	const statusItems = [
		{ label: "Draft", value: "draft" },
		{ label: "Awaiting Response", value: "awaiting_response" },
		{ label: "Accepted", value: "accepted" },
		{ label: "Rejected", value: "rejected" },
	];

	const offers = [
		{
			id: "1",
			applicantName: "Dimas Andriano Herlambang",
			status: "Awaiting Response",
			designation: "Software Developer",
			timeAgo: "2 h",
			comments: 1,
		},
		{
			id: "2",
			applicantName: "Dimas Andriano Herlambang",
			status: "Draft",
			designation: "Software Developer",
			timeAgo: "1 d",
			comments: 0,
		},
		{
			id: "3",
			applicantName: "John Doe",
			status: "Accepted",
			designation: "UI/UX Designer",
			timeAgo: "3 d",
			comments: 2,
		},
		{
			id: "4",
			applicantName: "Jane Smith",
			status: "Rejected",
			designation: "Marketing Specialist",
			timeAgo: "1 w",
			comments: 0,
		},
	];

	const [date, setDate] = React.useState<Date>();

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Awaiting Response":
				return "bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200";
			case "Draft":
				return "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200";
			case "Accepted":
				return "bg-green-100 text-green-800 hover:bg-green-200 border-green-200";
			case "Rejected":
				return "bg-red-100 text-red-800 hover:bg-red-200 border-red-200";
			default:
				return "";
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
							Rekrutmen
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Penawaran Kerja
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Penawaran Kerja</h1>
					<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Tambah Penawaran
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger
								render={
									<Button variant="outline" className="gap-2 font-normal">
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
								<Button variant="outline" className="gap-2 font-normal">
									<Download className="h-4 w-4" /> Ekspor{" "}
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Ekspor Excel</DropdownMenuItem>
								<DropdownMenuItem>Ekspor PDF</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<Button variant="outline" className="gap-2 font-normal">
							<Printer className="h-4 w-4" /> Print
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					{/* Filter and Search */}
					<div className="flex flex-col md:flex-row justify-between gap-4 pt-6">
						<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
							{/* Status Filter */}
							<Select items={statusItems}>
								<SelectTrigger className="w-full sm:w-[180px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									{statusItems.map((item) => (
										<SelectItem key={item.value} value={item.value}>
											{item.label}
										</SelectItem>
									))}
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
											{date ? format(date, "dd MMMM yyyy") : <span>Pilih Tanggal</span>}
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

						<InputGroup className="w-full md:max-w-xs">
							<InputGroupAddon>
								<Search className="text-muted-foreground" />
							</InputGroupAddon>
							<InputGroupInput type="search" placeholder="Cari Penawaran..." />
						</InputGroup>
					</div>

					{/* Table */}
					<div className="rounded-md border overflow-hidden">
						<div className="overflow-x-auto">
							<Table>
								<TableHeader className="bg-muted/50">
									<TableRow>
										<TableHead className="w-12 text-center">No</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Applicant Name
										</TableHead>
										<TableHead className="font-semibold min-w-full ">Status</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Designation
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{offers.map((offer, index) => (
										<TableRow key={offer.id}>
											<TableCell className="text-center">{index + 1}</TableCell>
											<TableCell className="font-medium">{offer.applicantName}</TableCell>
											<TableCell>
												<Badge
													variant={offer.status === "Accepted" ? "default" : "outline"}
													className={getStatusColor(offer.status)}>
													{offer.status}
												</Badge>
											</TableCell>
											<TableCell>{offer.designation}</TableCell>
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
