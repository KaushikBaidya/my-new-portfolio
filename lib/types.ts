import { links } from "@/lib/data";
export type SectionName = (typeof links)[number]["name"];
// export type SectionName = keyof (typeof navItems)[number];

export type VerticalElementType = {
	title: string;
	company: string;
	description: string;
	date: string;
	icon: React.ReactNode;
};

export type skillsDataType = { name: string; imageUrl: string | any };
