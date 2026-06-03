import {
	AgeDistributionChart,
	AttendanceStatisticsChart,
	EducationDistributionChart,
	EmployeesByOrgPieChart,
	EmployeesByStatusChart,
	GenderDistributionChart,
	LeaveStatisticsChart,
	LengthOfServiceChart,
	MaritalStatusChart,
	PersonnelBySalaryChart,
	ReligionDistributionChart,
	SalaryByOrgChart,
	SalaryComponentsChart,
} from "./hris/hris-charts";
import { EmployeesPerMonthChart } from "./hris/hris-stacked-bar-chart";
import { SalarySummaryCards } from "./hris/hris-summary-cards";
import {
	AttendanceToday,
	EndOfEmployment,
	StatusAttendanceToday,
} from "./hris/hris-attendance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	Plus,
	Users,
	CalendarClock,
	HandCoins,
	Megaphone,
	Cake,
} from "lucide-react";
import Link from "next/link";

export function Dashboard() {
	const upcomingBirthdays = [
		{
			name: "Dimas Andriano",
			role: "IT Dept",
			date: "Besok",
			initials: "DA",
			color: "bg-indigo-500",
		},
		{
			name: "Jane Doe",
			role: "HR Dept",
			date: "12 Jun",
			initials: "JD",
			color: "bg-emerald-500",
		},
		{
			name: "John Smith",
			role: "Finance",
			date: "15 Jun",
			initials: "JS",
			color: "bg-amber-500",
		},
	];

	return (
		<div className="flex flex-col gap-8 w-full">
			{/* Top Hero / Quick Actions */}
			<section className="flex flex-col lg:flex-row gap-6">
				<div className="flex-1 space-y-4">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">
							Selamat Datang, Admin
						</h1>
						<p className="text-muted-foreground mt-1">
							Berikut adalah ringkasan operasional HRIS hari ini.
						</p>
					</div>

					{/* Quick Actions Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
						<Link href="/dashboard/karyawan">
							<Card className="hover:bg-muted/50 cursor-pointer transition-colors border-border">
								<CardContent className="p-4 flex flex-col items-center justify-center gap-3 text-center">
									<div className="p-3 bg-blue-100 text-blue-700 rounded-full">
										<Users className="w-5 h-5" />
									</div>
									<span className="font-medium text-sm">Karyawan</span>
								</CardContent>
							</Card>
						</Link>
						<Link href="/dashboard/kehadiran/izin-cuti">
							<Card className="hover:bg-muted/50 cursor-pointer transition-colors border-border">
								<CardContent className="p-4 flex flex-col items-center justify-center gap-3 text-center">
									<div className="p-3 bg-orange-100 text-orange-700 rounded-full">
										<CalendarClock className="w-5 h-5" />
									</div>
									<span className="font-medium text-sm">Approval Cuti</span>
								</CardContent>
							</Card>
						</Link>
						<Link href="/dashboard/payroll">
							<Card className="hover:bg-muted/50 cursor-pointer transition-colors border-border">
								<CardContent className="p-4 flex flex-col items-center justify-center gap-3 text-center">
									<div className="p-3 bg-green-100 text-green-700 rounded-full">
										<HandCoins className="w-5 h-5" />
									</div>
									<span className="font-medium text-sm">Proses Payroll</span>
								</CardContent>
							</Card>
						</Link>
						<Card className="hover:bg-muted/50 cursor-pointer transition-colors border-border">
							<CardContent className="p-4 flex flex-col items-center justify-center gap-3 text-center">
								<div className="p-3 bg-purple-100 text-purple-700 rounded-full">
									<Megaphone className="w-5 h-5" />
								</div>
								<span className="font-medium text-sm">Pengumuman</span>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Upcoming Birthdays Widget */}
				<div className="w-full lg:w-[350px]">
					<Card className="h-full border-border">
						<CardHeader className="pb-3 flex flex-row items-center justify-between">
							<CardTitle className="text-base font-semibold flex items-center gap-2">
								<Cake className="w-5 h-5 text-pink-500" /> Ulang Tahun Terdekat
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col gap-4">
							{upcomingBirthdays.map((person, i) => (
								<div key={i} className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Avatar className={`h-10 w-10 ${person.color} text-white`}>
											<AvatarFallback className="bg-transparent text-xs font-medium">
												{person.initials}
											</AvatarFallback>
										</Avatar>
										<div className="flex flex-col">
											<span className="text-sm font-semibold">{person.name}</span>
											<span className="text-xs text-muted-foreground">{person.role}</span>
										</div>
									</div>
									<div className="text-xs font-medium bg-muted px-2 py-1 rounded-md">
										{person.date}
									</div>
								</div>
							))}
							<Button variant="outline" className="w-full mt-2 text-xs h-8">
								Lihat Semua (5)
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Overview Section */}
			<section className="space-y-4">
				<h2 className="text-xl font-bold mb-4">Overview</h2>
				<SalarySummaryCards />
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					<AgeDistributionChart />
					<EducationDistributionChart />
					<MaritalStatusChart />
					<LengthOfServiceChart />
					<ReligionDistributionChart />
					<GenderDistributionChart />
				</div>
			</section>

			{/* Salary and Organization Section */}
			<section>
				<h2 className="text-xl font-bold mb-4">Salary & Organization</h2>
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4">
					<SalaryByOrgChart />
					<PersonnelBySalaryChart />
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					<EmployeesByOrgPieChart />
					<SalaryComponentsChart />
					<EmployeesByStatusChart />
				</div>
			</section>

			{/* Attendance & Employment Section */}
			<section>
				<h2 className="text-xl font-bold mb-4">Attendance & Employment</h2>
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4">
					<EmployeesPerMonthChart />
					<LeaveStatisticsChart />
				</div>
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4">
					<AttendanceStatisticsChart />
					<AttendanceToday />
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					<EndOfEmployment />
					<StatusAttendanceToday />
				</div>
			</section>
		</div>
	);
}
