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
	ChevronDownIcon,
	Filter,
	HelpCircle,
	Search,
	Settings,
	Smartphone,
} from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

export default function PresensiPage() {
	const [date, setDate] = React.useState<Date>();
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
			checkIn: "08:00",
			checkOut: "17:00",
			late: "00:00",
			overtime: "00:00",
			note: "",
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
			checkIn: "08:00",
			checkOut: "17:00",
			late: "00:00",
			overtime: "00:00",
			note: "",
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
			checkIn: "08:00",
			checkOut: "17:00",
			late: "00:00",
			overtime: "00:00",
			note: "",
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
			checkIn: "08:00",
			checkOut: "17:00",
			late: "00:00",
			overtime: "00:00",
			note: "",
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
			checkIn: "08:00",
			checkOut: "17:00",
			late: "00:00",
			overtime: "00:00",
			note: "",
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
							Presensi
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Presensi</h1>

					{/* Top Right Actions */}
					<div className="flex flex-wrap items-center gap-3">
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
						<Button variant="outline" className="w-fit gap-2 font-normal">
							<Filter className="h-4 w-4" /> Filter
						</Button>
						<div className="flex items-center gap-4">
							<Button
								variant="outline"
								className="w-fit gap-2 font-normal"
								onClick={() => setDate(new Date())}>
								Hari Ini
							</Button>
							<Popover>
								<PopoverTrigger
									render={
										<Button
											variant={"outline"}
											data-empty={!date}
											className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground">
											{date ? format(date, "dd MMM yyyy") : <span>Pick a date</span>}
											<ChevronDownIcon data-icon="inline-end" />
										</Button>
									}
								/>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										defaultMonth={date}
									/>
								</PopoverContent>
							</Popover>
							<div className="relative w-full md:max-w-xs">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input type="search" placeholder="Cari" className="pl-9 " />
							</div>
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
										<TableHead className="font-semibold min-w-[150px]">
											Organisasi
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">Jabatan</TableHead>
										<TableHead className="font-semibold min-w-[150px]">Pangkat</TableHead>
										<TableHead className="font-semibold min-w-[150px]">Shift</TableHead>
										<TableHead className="font-semibold min-w-[150px]">Masuk</TableHead>
										<TableHead className="font-semibold min-w-[150px]">Keluar</TableHead>
										<TableHead className="font-semibold min-w-[150px]">Lembur</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Terlambat
										</TableHead>
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
											<TableCell>{employee.checkIn}</TableCell>
											<TableCell>{employee.checkOut}</TableCell>
											<TableCell>{employee.overtime}</TableCell>
											<TableCell>{employee.late}</TableCell>
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
