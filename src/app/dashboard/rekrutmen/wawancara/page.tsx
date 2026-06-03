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
	Star,
	Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WawancaraPage() {
	const interviews = [
		{
			id: "HR-INT-2026-0001",
			name: "Dimas Andriano Hartono",
			applicant: "dimas.andriano.h@gmail.com",
			status: "Pending",
			designation: "Software Developer",
			scheduledOn: "04-06-2026",
			fromTime: "14:56:56",
			toTime: "19:55:15",
			rating: 0,
			comments: 0,
			timeAgo: "5 m",
		},
		{
			id: "HR-INT-2026-0002",
			name: "John Doe",
			applicant: "john.doe@example.com",
			status: "Under Review",
			designation: "UI/UX Designer",
			scheduledOn: "05-06-2026",
			fromTime: "09:00:00",
			toTime: "10:00:00",
			rating: 3,
			comments: 2,
			timeAgo: "1 d",
		},
		{
			id: "HR-INT-2026-0003",
			name: "Jane Smith",
			applicant: "jane.smith@example.com",
			status: "Cleared",
			designation: "Marketing Specialist",
			scheduledOn: "03-06-2026",
			fromTime: "11:00:00",
			toTime: "11:30:00",
			rating: 4,
			comments: 5,
			timeAgo: "3 d",
		},
	];

	const [date, setDate] = React.useState<Date>();

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Pending":
				return "bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200";
			case "Under Review":
				return "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200";
			case "Cleared":
				return "bg-green-100 text-green-800 hover:bg-green-200 border-green-200";
			case "Rejected":
				return "bg-red-100 text-red-800 hover:bg-red-200 border-red-200";
			case "Cancelled":
				return "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200";
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
							Wawancara
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Wawancara</h1>
					<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Tambah Wawancara
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
							<Select>
								<SelectTrigger className="w-full sm:w-[180px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="pending">Pending</SelectItem>
									<SelectItem value="under_review">Under Review</SelectItem>
									<SelectItem value="cleared">Cleared</SelectItem>
									<SelectItem value="rejected">Rejected</SelectItem>
									<SelectItem value="cancelled">Cancelled</SelectItem>
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
											{date ? date.toLocaleDateString() : <span>Pilih Tanggal</span>}
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
							<InputGroupInput type="search" placeholder="Cari Pelamar..." />
						</InputGroup>
					</div>

					{/* Table */}
					<div className="rounded-md border overflow-hidden">
						<div className="overflow-x-auto">
							<Table>
								<TableHeader className="bg-muted/50">
									<TableRow>
										<TableHead className="w-12 text-center">No</TableHead>
										<TableHead className="font-semibold min-w-[200px]">Nama</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Job Applicant
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">Status</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Designation
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">
											Scheduled On
										</TableHead>
										<TableHead className="font-semibold min-w-[100px]">
											From Time
										</TableHead>
										<TableHead className="font-semibold min-w-[100px]">To Time</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[180px]">
											Obtained Average Rating
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{interviews.map((interview, index) => (
										<TableRow key={interview.id}>
											<TableCell className="text-center">{index + 1}</TableCell>
											<TableCell className="font-medium">{interview.name}</TableCell>
											<TableCell className="font-medium">{interview.applicant}</TableCell>
											<TableCell>
												<Badge
													variant={interview.status === "Cleared" ? "default" : "outline"}
													className={getStatusColor(interview.status)}>
													{interview.status}
												</Badge>
											</TableCell>
											<TableCell>{interview.designation}</TableCell>
											<TableCell>{interview.scheduledOn}</TableCell>
											<TableCell>{interview.fromTime}</TableCell>
											<TableCell>{interview.toTime}</TableCell>
											<TableCell>
												<div className="flex items-center gap-1">
													{[1, 2, 3, 4, 5].map((star) => (
														<Star
															key={star}
															className={cn(
																"h-4 w-4",
																star <= interview.rating
																	? "fill-yellow-400 text-yellow-400"
																	: "fill-muted text-muted-foreground",
															)}
														/>
													))}
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
