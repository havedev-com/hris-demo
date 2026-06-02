import type { ReactNode } from "react";
import {
	HomeIcon,
	UsersIcon,
	CheckSquareIcon,
	CalendarClockIcon,
	FingerprintIcon,
	CalendarOffIcon,
	MapPinIcon,
	WalletIcon,
	HandCoinsIcon,
	ListChecksIcon,
	SettingsIcon,
	HelpCircleIcon,
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
		],
	},
	{
		label: "Kehadiran",
		items: [
			{
				title: "Approval Presensi",
				path: "/dashboard/kehadiran/approval-presensi",
				icon: <CheckSquareIcon />,
			},
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
		],
	},
	{
		label: "Tugas",
		items: [
			{
				title: "Tugas",
				path: "/dashboard/tugas",
				icon: <ListChecksIcon />,
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
			item.subItems?.length ? [item, ...item.subItems] : [item]
		)
	),
	...footerNavLinks,
];
