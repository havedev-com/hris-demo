"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InboxIcon } from "lucide-react";

function EmptyState() {
	return (
		<div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
			<InboxIcon className="h-12 w-12 opacity-20 mb-4" />
			<p className="text-sm">Tidak ada data</p>
		</div>
	);
}

export function AttendanceToday() {
	return (
		<Card>
			<CardHeader className="pb-2">
				<CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
					Kehadiran Karyawan Hari Ini
				</CardTitle>
				<div className="flex gap-4 mt-2 text-xs font-medium">
					<span className="text-pink-500 border-b-2 border-pink-500 pb-1">
						Terlambat
					</span>
					<span className="text-muted-foreground cursor-pointer">Izin & Cuti</span>
				</div>
			</CardHeader>
			<CardContent>
				<EmptyState />
			</CardContent>
		</Card>
	);
}

export function EndOfEmployment() {
	return (
		<Card>
			<CardHeader className="pb-2">
				<CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
					Masa Akhir Kerja Karyawan
				</CardTitle>
			</CardHeader>
			<CardContent>
				<EmptyState />
			</CardContent>
		</Card>
	);
}

export function StatusAttendanceToday() {
	return (
		<Card>
			<CardHeader className="pb-2">
				<CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
					Status Kehadiran Karyawan Hari Ini
				</CardTitle>
			</CardHeader>
			<CardContent>
				<EmptyState />
			</CardContent>
		</Card>
	);
}
