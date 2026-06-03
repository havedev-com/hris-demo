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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	ChevronDown,
	Filter,
	HelpCircle,
	Search,
	Settings,
	Smartphone,
} from "lucide-react";

export default function JadwalKerjaPage() {
	const employees = [
		{
			id: "1",
			name: "Nucholis Indrawan",
			org: "HRGA",
			role: "HRD Staff",
			rank: "Staff",
			schedule: "Jadwal Kantor",
			initials: "NI",
			avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			color: "bg-slate-200",
		},
		{
			id: "2",
			name: "Bambang",
			org: "IT Division",
			role: "IT Manager",
			rank: "Manager",
			schedule: "Jadwal Kantor",
			initials: "DD",
			color: "bg-orange-400",
		},
		{
			id: "3",
			name: "Contoh Karyawan 3",
			org: "BOD",
			role: "CEO",
			rank: "Commisioner",
			schedule: "Jadwal Kantor",
			initials: "C3",
			color: "bg-[#e8b5c0]",
		},
		{
			id: "4",
			name: "Contoh Karyawan 2",
			org: "BOD",
			role: "CEO",
			rank: "Commisioner",
			schedule: "Jadwal Kantor",
			initials: "C2",
			color: "bg-[#f2dfbe]",
		},
		{
			id: "5",
			name: "Contoh Karyawan 1",
			org: "BOD",
			role: "CEO",
			rank: "Commisioner",
			schedule: "Jadwal Kantor",
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
							Jadwal Kerja
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Jadwal Kerja</h1>

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
					{/* Tabs */}
					<Tabs defaultValue="tetap" className="w-full">
						<TabsList className="h-auto flex flex-wrap justify-start">
							<TabsTrigger value="tetap">Jadwal Tetap</TabsTrigger>
							<TabsTrigger value="shift">Jadwal Shift</TabsTrigger>
						</TabsList>
					</Tabs>

					{/* Filter and Search */}
					<div className="flex flex-col md:flex-row justify-between gap-4">
						<Button variant="outline" className="w-fit gap-2 font-normal">
							<Filter className="h-4 w-4" /> Filter
						</Button>
						<InputGroup className="w-full md:max-w-xs">
							<InputGroupAddon>
								<Search className="text-muted-foreground" />
							</InputGroupAddon>
							<InputGroupInput type="search" placeholder="Cari" />
						</InputGroup>
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
											Organisasi
										</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">Jabatan</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">Pangkat</TableHead>
										<TableHead className="font-semibold min-w-full sm:w-[150px]">Jadwal</TableHead>
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
											<TableCell>{employee.org}</TableCell>
											<TableCell>{employee.role}</TableCell>
											<TableCell>{employee.rank}</TableCell>
											<TableCell>{employee.schedule}</TableCell>
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
