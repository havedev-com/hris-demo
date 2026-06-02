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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Filter,
  Search,
  InboxIcon,
} from "lucide-react";
import Link from "next/link";

export default function ApprovalPresensiPage() {
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
            <span className="text-muted-foreground">Presensi</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-foreground">Approval Presensi</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="p-6 rounded-md border-border border">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-slate-700">Approval Presensi</h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Filter and Search */}
          <div className="flex flex-col md:flex-row justify-between gap-4 pt-6">
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

          {/* Selects */}
          <div className="flex flex-col sm:flex-row gap-4 border-b border-slate-200 pb-4">
            <Select defaultValue="disetujui">
              <SelectTrigger className="w-[200px] text-[#f04f74] font-medium border-[#f04f74] focus:ring-[#f04f74]/20">
                <SelectValue placeholder="Status Persetujuan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="menunggu">Menunggu Persetujuan</SelectItem>
                <SelectItem value="disetujui">Disetujui</SelectItem>
                <SelectItem value="ditolak">Ditolak</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="semua">
              <SelectTrigger className="w-[200px] text-slate-600">
                <SelectValue placeholder="Tipe Presensi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semua">Semua</SelectItem>
                <SelectItem value="presensi">Presensi</SelectItem>
                <SelectItem value="istirahat">Istirahat</SelectItem>
                <SelectItem value="lembur">Lembur</SelectItem>
                <SelectItem value="kunjungan">Kunjungan Klien</SelectItem>
              </SelectContent>
            </Select>
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
                    <TableHead className="font-semibold text-slate-700 min-w-[120px]">Tipe</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[120px]">Waktu</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[150px]">Lokasi</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[130px]">IP</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[180px]">Keterangan</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[100px] text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Empty State */}
                  <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={9} className="h-[400px]">
                      <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-2">
                        <InboxIcon className="h-16 w-16 text-slate-300 mb-4 stroke-1" />
                        <p className="text-sm">Presensi karyawan yang telah disetujui akan masuk ke tabel ini.</p>
                        <p className="text-sm">
                          Tidak semua presensi memerulan approval, Anda dapat mengatur kreteria presensi yang membutuhkan approval melalui menu pengaturan <Link href="/dashboard/pengaturan" className="text-[#f04f74] hover:underline">di sini</Link>.
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
