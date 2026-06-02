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

export function Dashboard() {
	return (
		<div className="flex flex-col gap-6">
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
