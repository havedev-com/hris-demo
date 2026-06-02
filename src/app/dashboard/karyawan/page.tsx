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
	Download,
	Filter,
	Plus,
	Printer,
	Search,
	Upload,
} from "lucide-react";

export default function KaryawanPage() {
	const employees = [
		{
			id: "111",
			name: "Contoh Karyawan 1",
			gender: "Laki-laki",
			citizen: "WNI",
			idType: "KTP",
			idNumber: "1234567890",
			kkNumber: "-",
			birthPlace: "Jakarta",
			initials: "C1",
			color: "bg-green-500",
		},
		{
			id: "222",
			name: "Contoh Karyawan 2",
			gender: "Perempuan",
			citizen: "WNI",
			idType: "KTP",
			idNumber: "0987654321",
			kkNumber: "-",
			birthPlace: "Bandung",
			initials: "C2",
			color: "bg-orange-400",
		},
		{
			id: "333",
			name: "Contoh Karyawan 3",
			gender: "Perempuan",
			citizen: "WNI",
			idType: "KTP",
			idNumber: "0987654321",
			kkNumber: "-",
			birthPlace: "Yogyakarta",
			initials: "C3",
			color: "bg-purple-300",
		},
		{
			id: "200000",
			name: "Siti Aminah",
			gender: "Perempuan",
			citizen: "WNI",
			idType: "KTP",
			idNumber: "3505014114",
			kkNumber: "5325325555554",
			birthPlace: "Blitar",
			initials: "DD",
			color: "bg-yellow-200",
		},
		{
			id: "560101",
			name: "Nucholis Indrawan",
			gender: "Laki-laki",
			citizen: "WNI",
			idType: "KTP",
			idNumber: "3505042366",
			kkNumber: "125633333654896",
			birthPlace: "Blitar",
			initials: "NI",
			avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			color: "bg-slate-200",
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
						<BreadcrumbPage className="font-medium text-foreground">
							Karyawan
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">Karyawan</h1>
					<div className="flex flex-wrap items-center gap-3">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Tambah Karyawan
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button variant="outline" className="gap-2 font-normal">
									<Upload className="h-4 w-4" /> Import{" "}
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
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
						<Button variant="outline" className="w-fit gap-2 font-normal">
							<Filter className="h-4 w-4" /> Filter
						</Button>
						<div className="relative w-full md:max-w-xs">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input type="search" placeholder="Cari" className="pl-9 " />
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
										<TableHead className="font-semibold min-w-[120px]">
											ID Karyawan
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">
											Jenis Kelamin
										</TableHead>
										<TableHead className="font-semibold min-w-[100px]">Warga</TableHead>
										<TableHead className="font-semibold min-w-[130px]">
											Data Identitas
										</TableHead>
										<TableHead className="font-semibold min-w-[160px]">
											ID Kartu Identitas
										</TableHead>
										<TableHead className="font-semibold min-w-[180px]">
											Nomor Kartu Keluarga
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Tempat Lahir
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
														className={`h-8 w-8 ${employee.avatarUrl ? "" : employee.color} text-white`}>
														<AvatarImage src={employee.avatarUrl} alt={employee.name} />
														<AvatarFallback className="bg-transparent ont-medium text-xs">
															{employee.initials}
														</AvatarFallback>
													</Avatar>
													<span className="font-medium hover:underline cursor-pointer">
														{employee.name}
													</span>
												</div>
											</TableCell>
											<TableCell>{employee.id}</TableCell>
											<TableCell>{employee.gender}</TableCell>
											<TableCell>{employee.citizen}</TableCell>
											<TableCell>{employee.idType}</TableCell>
											<TableCell>{employee.idNumber}</TableCell>
											<TableCell>{employee.kkNumber}</TableCell>
											<TableCell>{employee.birthPlace}</TableCell>
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
