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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
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
      name: "Dony Damara",
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
    }
  ];

  return (
    <div className="flex flex-col gap-6 w-full min-h-full">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" className="text-muted-foreground hover:text-foreground">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-muted-foreground">Kehadiran</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-foreground">Jadwal Kerja</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="p-6 rounded-md border-border border">
        {/* Header and Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-slate-700">Jadwal Kerja</h1>
          
          {/* Top Right Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="icon" className="text-slate-600 font-normal">
              <Smartphone className="h-4 w-4" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 text-[#f04f74] border-[#f04f74]/40 hover:bg-[#f04f74]/5 hover:text-[#f04f74] font-normal">
                  <HelpCircle className="h-4 w-4" /> Panduan <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Dokumentasi</DropdownMenuItem>
                <DropdownMenuItem>Video Tutorial</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="gap-2 text-[#f04f74] border-[#f04f74]/40 hover:bg-[#f04f74]/5 hover:text-[#f04f74] font-normal">
              <Settings className="h-4 w-4" /> Atur Jadwal Kerja
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Tabs */}
          <div className="pt-6 pb-2 border-b border-slate-200">
            <Tabs defaultValue="tetap" className="w-full">
              <TabsList className="bg-transparent h-auto p-0 flex flex-wrap gap-1 sm:gap-4 justify-start border-none">
                <TabsTrigger 
                  value="tetap" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f04f74] data-[state=active]:text-[#f04f74] rounded-none px-2 pb-3 pt-2 text-slate-600 font-medium"
                >
                  Jadwal Tetap
                </TabsTrigger>
                <TabsTrigger 
                  value="shift" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f04f74] data-[state=active]:text-[#f04f74] rounded-none px-2 pb-3 pt-2 text-slate-500 hover:text-slate-700 font-medium"
                >
                  Jadwal Shift
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Filter and Search */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Button variant="outline" className="w-fit gap-2 font-normal text-slate-600">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari"
                className="pl-9 bg-white"
              />
            </div>
          </div>

          {/* Table */}
          <div className="rounded-md overflow-hidden border">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow className="border-b border-slate-100 hover:bg-transparent">
                    <TableHead className="w-[50px]">
                      <div className="flex items-center justify-center">
                        <Checkbox className="rounded-[4px] border-slate-300 data-[state=checked]:bg-[#f04f74] data-[state=checked]:border-[#f04f74]" />
                      </div>
                    </TableHead>
                    <TableHead className="w-[50px] font-semibold text-slate-700">No.</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[200px]">Nama</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[150px]">Organisasi</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[150px]">Jabatan</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[150px]">Pangkat</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[150px]">Jadwal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee, index) => (
                    <TableRow key={employee.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                      <TableCell>
                        <div className="flex items-center justify-center">
                          <Checkbox className="rounded-[4px] border-slate-300 data-[state=checked]:bg-[#f04f74] data-[state=checked]:border-[#f04f74]" />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-slate-600">{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className={`h-8 w-8 ${employee.avatarUrl ? "" : employee.color} text-white`}>
                            <AvatarImage src={employee.avatarUrl} alt={employee.name} />
                            <AvatarFallback className="bg-transparent text-white font-medium text-xs">{employee.initials}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-[#f04f74] hover:underline cursor-pointer">{employee.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-600">{employee.org}</TableCell>
                      <TableCell className="text-slate-600">{employee.role}</TableCell>
                      <TableCell className="text-slate-600">{employee.rank}</TableCell>
                      <TableCell className="text-slate-600">{employee.schedule}</TableCell>
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
