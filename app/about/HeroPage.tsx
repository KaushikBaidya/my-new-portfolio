import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BsBackpack2 } from "react-icons/bs";

interface Feature {
	name: string;
	href: string;
	description: string;
	icon: React.ComponentType<{ className?: string }>;
}

interface CallToAction {
	name: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
}

interface Resource {
	name: string;
	description: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
}

interface RecentPost {
	id: number;
	name: string;
	href: string;
}

const features: Feature[] = [
	{
		name: "Analytics",
		href: "#",
		description:
			"Get a better understanding of where your traffic is coming from.",
		icon: BsBackpack2,
	},
	{
		name: "Engagement",
		href: "#",
		description: "Speak directly to your customers in a more meaningful way.",
		icon: BsBackpack2,
	},
	{
		name: "Security",
		href: "#",
		description: "Your customers' data will be safe and secure.",
		icon: BsBackpack2,
	},
	{
		name: "Integrations",
		href: "#",
		description: "Connect with third-party tools that you're already using.",
		icon: BsBackpack2,
	},
	{
		name: "Automations",
		href: "#",
		description:
			"Build strategic funnels that will drive your customers to convert",
		icon: BsBackpack2,
	},
];

const callsToAction: CallToAction[] = [
	{ name: "Watch Demo", href: "#", icon: BsBackpack2 },
	{ name: "Contact Sales", href: "#", icon: BsBackpack2 },
];

const resources: Resource[] = [
	{
		name: "Help Center",
		description:
			"Get all of your questions answered in our forums or contact support.",
		href: "#",
		icon: BsBackpack2,
	},
	{
		name: "Guides",
		description:
			"Learn how to maximize our platform to get the most out of it.",
		href: "#",
		icon: BsBackpack2,
	},
	{
		name: "Events",
		description:
			"See what meet-ups and other events we might be planning near you.",
		href: "#",
		icon: BsBackpack2,
	},
	{
		name: "Security",
		description: "Understand how we take your privacy seriously.",
		href: "#",
		icon: BsBackpack2,
	},
];

const recentPosts: RecentPost[] = [
	{ id: 1, name: "Boost your conversion rate", href: "#" },
	{
		id: 2,
		name: "How to use search engine optimization to drive traffic to your site",
		href: "#",
	},
	{ id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes: (string | undefined | false)[]): string {
	return classes.filter(Boolean).join(" ");
}

const HeroPage: React.FC = () => {
	return (
		<div className="relative bg-gray-50">
			<Popover className="relative bg-white shadow">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-6">
							<div className="flex justify-between items-center py-6">
								<div className="flex justify-start">
									<a href="#">
										<span className="sr-only">Workflow</span>
										<img
											className="h-8 w-auto lg:h-10"
											src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
											alt=""
										/>
									</a>
								</div>
								<div className="-mr-2 -my-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Open menu</span>
										<BsBackpack2 className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
								<Popover.Group as="nav" className="hidden space-x-10">
									<Popover className="relative">
										{({ open }) => (
											<>
												<Popover.Button
													className={classNames(
														open ? "text-gray-900" : "text-gray-500",
														"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													)}
												>
													<span>Solutions</span>
													<BsBackpack2
														className={classNames(
															open ? "text-gray-600" : "text-gray-400",
															"ml-2 h-5 w-5 group-hover:text-gray-500"
														)}
														aria-hidden="true"
													/>
												</Popover.Button>

												<Transition
													show={open}
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="opacity-0 translate-y-1"
													enterTo="opacity-100 translate-y-0"
													leave="transition ease-in duration-150"
													leaveFrom="opacity-100 translate-y-0"
													leaveTo="opacity-0 translate-y-1"
												>
													<Popover.Panel
														static
														className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md lg:px-0"
													>
														<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
															<div className="relative grid gap-6 bg-white px-5 py-6 lg:gap-8 p-8">
																{features.map((item) => (
																	<a
																		key={item.name}
																		href={item.href}
																		className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
																	>
																		<item.icon
																			className="flex-shrink-0 h-6 w-6 text-indigo-600"
																			aria-hidden="true"
																		/>
																		<div className="ml-4">
																			<p className="text-base font-medium text-gray-900">
																				{item.name}
																			</p>
																			<p className="mt-1 text-sm text-gray-500">
																				{item.description}
																			</p>
																		</div>
																	</a>
																))}
															</div>
														</div>
													</Popover.Panel>
												</Transition>
											</>
										)}
									</Popover>
								</Popover.Group>
							</div>
						</div>
					</>
				)}
			</Popover>
		</div>
	);
};

export default HeroPage;
