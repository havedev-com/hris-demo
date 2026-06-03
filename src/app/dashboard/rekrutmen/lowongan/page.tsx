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
import {
	ChevronDown,
	Download,
	Filter,
	Plus,
	Printer,
	Search,
	Upload,
} from "lucide-react";

export default function LowonganPekerjaanPage() {
	const jobOpenings = [
		{
			id: "1",
			title: "Software Developer",
			status: "Open",
			designation: "Software Developer",
			department: "Operations - K",
			employmentType: "Full-time",
			description: "Lorem",
		},
		{
			id: "2",
			title: "UI/UX Designer",
			status: "Closed",
			designation: "UI/UX Designer",
			department: "Product",
			employmentType: "Contract",
			description: "Designing interfaces",
		},
		{
			id: "3",
			title: "Marketing Specialist",
			status: "Draft",
			designation: "Marketing Specialist",
			department: "Marketing",
			employmentType: "Part-time",
			description: "Marketing campaigns",
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
						<BreadcrumbPage className="font-medium text-muted-foreground">
							Rekrutmen
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							Lowongan Pekerjaan
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Lowongan Pekerjaan</h1>
					<div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Tambah Lowongan
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
							<Select>
								<SelectTrigger className="w-full sm:w-[180px]">
									<SelectValue placeholder="Employment Type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="apprentice">Apprentice</SelectItem>
									<SelectItem value="commission">Commission</SelectItem>
									<SelectItem value="contract">Contract</SelectItem>
									<SelectItem value="full-time">Full-time</SelectItem>
									<SelectItem value="intern">Intern</SelectItem>
									<SelectItem value="part-time">Part-time</SelectItem>
									<SelectItem value="piecework">Piecework</SelectItem>
									<SelectItem value="probation">Probation</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="open">Open</SelectItem>
									<SelectItem value="closed">Closed</SelectItem>
									<SelectItem value="draft">Draft</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Department" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="operations">Operations</SelectItem>
									<SelectItem value="product">Product</SelectItem>
									<SelectItem value="marketing">Marketing</SelectItem>
									<SelectItem value="sales">Sales</SelectItem>
									<SelectItem value="hr">HR</SelectItem>
								</SelectContent>
							</Select>

							<Button variant="outline" className="gap-2 font-normal">
								<Filter className="h-4 w-4" /> More Filters
							</Button>
						</div>

						<InputGroup className="w-full md:max-w-xs">
							<InputGroupAddon>
								<Search className="text-muted-foreground" />
							</InputGroupAddon>
							<InputGroupInput type="search" placeholder="Cari Lowongan..." />
						</InputGroup>
					</div>

					{/* Table */}
					<div className="rounded-md overflow-hidden">
						<div className="overflow-x-auto">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="w-12 text-center">No.</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Job Title
										</TableHead>
										<TableHead className="font-semibold min-w-[100px]">Status</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Designation
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Department
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">
											Employment Type
										</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Description
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{jobOpenings.map((job, index) => (
										<TableRow key={job.id}>
											<TableCell className="text-center">{index + 1}</TableCell>
											<TableCell className="font-medium">{job.title}</TableCell>
											<TableCell>
												<Badge
													variant={
														job.status === "Open"
															? "default"
															: job.status === "Closed"
																? "secondary"
																: "outline"
													}
													className={
														job.status === "Open"
															? "bg-green-100 text-green-800 hover:bg-green-200 border-green-200"
															: ""
													}>
													{job.status}
												</Badge>
											</TableCell>
											<TableCell>{job.designation}</TableCell>
											<TableCell>{job.department}</TableCell>
											<TableCell>{job.employmentType}</TableCell>
											<TableCell className="text-muted-foreground">
												{job.description}
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
