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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	ChevronDown,
	Download,
	Filter,
	Pencil,
	Plus,
	Search,
	Trash2,
	Upload,
} from "lucide-react";

export default function UserManagementPage() {
	const users = [
		{
			id: "1",
			name: "Dimas Andriano Herlambang",
			email: "superadmin@havedev.com",
			role: "Superadmin",
			status: "Active",
			lastLogin: "03-06-2026 10:00:00",
			initials: "DA",
			color: "bg-indigo-500",
		},
		{
			id: "2",
			name: "Jane Doe",
			email: "hradmin@havedev.com",
			role: "Admin",
			status: "Active",
			lastLogin: "02-06-2026 15:30:00",
			initials: "JD",
			color: "bg-emerald-500",
		},
		{
			id: "3",
			name: "John Smith",
			email: "finance@havedev.com",
			role: "Admin",
			status: "Inactive",
			lastLogin: "20-05-2026 09:15:00",
			initials: "JS",
			color: "bg-gray-500",
		},
	];

	const getRoleBadge = (role: string) => {
		switch (role) {
			case "Superadmin":
				return (
					<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200">
						Superadmin
					</Badge>
				);
			case "Admin":
				return (
					<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
						Admin
					</Badge>
				);
			default:
				return <Badge variant="outline">{role}</Badge>;
		}
	};

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "Active":
				return (
					<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
						Active
					</Badge>
				);
			case "Inactive":
				return (
					<Badge variant="outline" className="text-gray-600 bg-gray-50 border-gray-200">
						Inactive
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
							Pengaturan
						</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="font-medium text-foreground">
							User Management
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="p-6 rounded-md border-border border">
				{/* Header and Actions */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<h1 className="text-2xl font-bold tracking-tight">User Management</h1>
					<div className="flex flex-wrap items-center gap-3">
						<Button>
							<Plus className="mr-2 h-4 w-4" /> Tambah User
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger
								render={
									<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
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
								<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
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
									<SelectValue placeholder="Role" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="superadmin">Superadmin</SelectItem>
									<SelectItem value="admin">Admin</SelectItem>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className="w-full sm:w-[150px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="active">Active</SelectItem>
									<SelectItem value="inactive">Inactive</SelectItem>
								</SelectContent>
							</Select>

							<Button variant="outline" className="gap-2 font-normal w-full sm:w-auto">
								<Filter className="h-4 w-4" /> More Filters
							</Button>
						</div>

						<InputGroup className="w-full md:max-w-xs">
							<InputGroupAddon>
								<Search className="text-muted-foreground" />
							</InputGroupAddon>
							<InputGroupInput type="search" placeholder="Cari User/Email..." />
						</InputGroup>
					</div>

					{/* Table */}
					<div className="rounded-md border overflow-hidden">
						<div className="overflow-x-auto">
							<Table>
								<TableHeader className="bg-muted/50">
									<TableRow>
										<TableHead className="w-12 text-center font-semibold">
											No.
										</TableHead>
										<TableHead className="font-semibold min-w-[250px]">
											Nama User
										</TableHead>
										<TableHead className="font-semibold min-w-[150px]">
											Role
										</TableHead>
										<TableHead className="font-semibold min-w-[120px]">
											Status
										</TableHead>
										<TableHead className="font-semibold min-w-[200px]">
											Login Terakhir
										</TableHead>
										<TableHead className="font-semibold min-w-[100px] text-right">
											Aksi
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{users.map((user, index) => (
										<TableRow key={user.id}>
											<TableCell className="text-center font-medium">
												{index + 1}
											</TableCell>
											<TableCell>
												<div className="flex items-center gap-3">
													<Avatar
														className={`h-9 w-9 ${user.color} text-white`}
													>
														<AvatarFallback className="bg-transparent font-medium text-xs">
															{user.initials}
														</AvatarFallback>
													</Avatar>
													<div className="flex flex-col">
														<span className="font-medium hover:underline cursor-pointer">
															{user.name}
														</span>
														<span className="text-xs text-muted-foreground">
															{user.email}
														</span>
													</div>
												</div>
											</TableCell>
											<TableCell>{getRoleBadge(user.role)}</TableCell>
											<TableCell>{getStatusBadge(user.status)}</TableCell>
											<TableCell className="text-muted-foreground text-sm">
												{user.lastLogin}
											</TableCell>
											<TableCell className="text-right">
												<div className="flex items-center justify-end gap-2">
													<Button variant="ghost" size="icon" title="Edit">
														<Pencil className="h-4 w-4 text-muted-foreground" />
													</Button>
													<Button variant="ghost" size="icon" title="Hapus">
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
