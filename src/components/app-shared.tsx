import type { ReactNode } from "react";
import {
	HomeIcon,
	UsersIcon,
	CalendarClockIcon,
	FingerprintIcon,
	CalendarOffIcon,
	MapPinIcon,
	WalletIcon,
	HandCoinsIcon,
	SettingsIcon,
	HelpCircleIcon,
	BriefcaseIcon,
	CircleDollarSign,
	HandCoins,
	MessageCircle,
	BriefcaseBusinessIcon,
	UserCog,
	CalendarCheck,
	Receipt,
	Landmark,
	TrendingDown,
	UserMinus,
	MonitorSmartphone,
} from "lucide-react";

export type SidebarNavItem = {
	title: string;
	path?: string;
	icon?: ReactNode;
	isActive?: boolean;
	subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
	label?: string;
	items: SidebarNavItem[];
};

export const navGroups: SidebarNavGroup[] = [
	{
		items: [
			{
				title: "Beranda",
				path: "/dashboard",
				icon: <HomeIcon />,
				isActive: true,
			},
			{
				title: "Karyawan",
				path: "/dashboard/karyawan",
				icon: <UsersIcon />,
			},
			{
				title: "Offboarding",
				path: "/dashboard/karyawan/offboarding",
				icon: <UserMinus />,
			},
		],
	},
	{
		label: "Kehadiran",
		items: [
			{
				title: "Jadwal Kerja",
				path: "/dashboard/kehadiran/jadwal-kerja",
				icon: <CalendarClockIcon />,
			},
			{
				title: "Presensi",
				path: "/dashboard/kehadiran/presensi",
				icon: <FingerprintIcon />,
			},
			{
				title: "Izin & Cuti",
				path: "/dashboard/kehadiran/izin-cuti",
				icon: <CalendarOffIcon />,
			},
			{
				title: "Kunjungan Klien",
				path: "/dashboard/kehadiran/kunjungan-klien",
				icon: <MapPinIcon />,
			},
			{
				title: "Saldo Cuti",
				path: "/dashboard/kehadiran/saldo-cuti",
				icon: <CalendarCheck />,
			},
		],
	},
	{
		label: "Payroll",
		items: [
			{
				title: "Payroll",
				path: "/dashboard/payroll",
				icon: <WalletIcon />,
			},
			{
				title: "Slip Gaji",
				path: "/dashboard/payroll/slip-gaji",
				icon: <CircleDollarSign />,
			},
			{
				title: "Gaji Tambahan",
				path: "/dashboard/payroll/gaji-tambahan",
				icon: <HandCoins />,
			},
			{
				title: "Pajak & BPJS",
				path: "/dashboard/payroll/pajak-bpjs",
				icon: <Landmark />,
			},
			{
				title: "Potongan Gaji",
				path: "/dashboard/payroll/potongan",
				icon: <TrendingDown />,
			},
		],
	},
	{
		label: "Keuangan",
		items: [
			{
				title: "Kasbon",
				path: "/dashboard/keuangan/kasbon",
				icon: <HandCoinsIcon />,
			},
			{
				title: "Reimbursement",
				path: "/dashboard/keuangan/reimbursement",
				icon: <Receipt />,
			},
		],
	},
	{
		label: "Rekrutmen",
		items: [
			{
				title: "Kandidat",
				path: "/dashboard/rekrutmen/kandidat",
				icon: <UsersIcon />,
			},
			{
				title: "Lowongan Pekerjaan",
				path: "/dashboard/rekrutmen/lowongan",
				icon: <BriefcaseIcon />,
			},
			{
				title: "Wawancara",
				path: "/dashboard/rekrutmen/wawancara",
				icon: <MessageCircle />,
			},
			{
				title: "Penawaran Kerja",
				path: "/dashboard/rekrutmen/penawaran-kerja",
				icon: <BriefcaseBusinessIcon />,
			},
		],
	},
	{
		label: "Fasilitas",
		items: [
			{
				title: "Manajemen Aset",
				path: "/dashboard/fasilitas/aset",
				icon: <MonitorSmartphone />,
			},
		],
	},
	{
		label: "Pengaturan",
		items: [
			{
				title: "Pengaturan",
				path: "/dashboard/pengaturan",
				icon: <SettingsIcon />,
			},
			{
				title: "User Management",
				path: "/dashboard/user-management",
				icon: <UserCog />,
			},
		],
	},
];

export const footerNavLinks: SidebarNavItem[] = [
	{
		title: "FAQ",
		path: "/dashboard/faq",
		icon: <HelpCircleIcon />,
	},
];

export const navLinks: SidebarNavItem[] = [
	...navGroups.flatMap((group) =>
		group.items.flatMap((item) =>
			item.subItems?.length ? [item, ...item.subItems] : [item],
		),
	),
	...footerNavLinks,
];
