import { CgWebsite } from "react-Icons/cg";
import { HiShoppingBag } from "react-Icons/hi";
import { PiScrollBold } from "react-Icons/pi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";

import teamImg1 from "../assets/images/teamimg-1.jpg";
import teamImg2 from "../assets/images/teamimg-6.jpg";

import iconCollaborate from "../assets/images/icon-collaborate.svg";
import iconCreative from "../assets/images/icon-creative.svg";
import iconSatisfy from "../assets/images/icon-satisfy.svg";
import iconSecurity from "../assets/images/icon-security.svg";

export const navLinks = [
	{ id: 1, link: "home", title: "Home" },
	{ id: 2, link: "about", title: "About" },
	{ id: 3, link: "features", title: "Features" },
	{ id: 4, link: "contact", title: "Contact" },
];

export const servicesList = [
	{
		id: "01",
		title: "Content Writing",
		text: "Engage your audience with compelling content that leaves a lasting impression.",
		Icon: CgWebsite,
	},

	{
		id: "02",
		title: "copywriting",
		text: "Harness the power of persuasive copy to captivate your target market and drive conversions.",
		Icon: PiScrollBold,
	},

	{
		id: "03",
		title: "Ghostwriting",
		text: "Transform your ideas into captivating written works with professional ghostwriting services.",
		Icon: SlEnvolopeLetter,
	},

	{
		id: "04",
		title: "Blog Articles",
		text: "Create your world of insightful blog articles that inform, inspire, and engage.",
		Icon: HiShoppingBag,
	},
];

export const teamList = [
	{
		id: 1,
		name: "Kalu Agada",
		img: teamImg1,
		position: "CEO/CO-FOUNDER",
		about: `Meet Kalu Agada, a master of the written word. With over five years of experience, he has expertly crafted 30+ books across genres and subjects, helping aspiring authors realize their publishing dreams. Kalu's versatility shines through in his ability to create compelling articles, theses, school assignments, CVs, cover letters, and impactful business documents. With his expertise, your writing projects are in capable hands.`,
	},
	{
		id: 2,
		name: "Promise-Idowu Temitope",
		img: teamImg2,
		position: "COO/CO-FOUNDER",
		about: `Meet Promise-Idowu Temitope, the COO of Pendrip. With a background in microbiology and environmental health, she brings a unique blend of scientific knowledge and writing expertise. As COO, Temitope oversees operations, ensuring top-notch quality and customer satisfaction. Her commitment to integrity is evident in her meticulous research and ethical writing style. Temitope's dual role as a writer and executive fuels Pendrip's growth and success.`,
	},
];

export const footerLinksOne = [
	{ id: 1, link: "home", title: "Home" },
	{ id: 2, link: "about", title: "About" },
	{ id: 3, link: "team", title: "Team" },
	{ id: 4, link: "contact", title: "Contact" },
	{ id: 6, link: "features", title: "Features" },
];

export const featuressList = [
	{
		id: 1,
		icon: iconCollaborate,
		title: "Collaboration",
		text: "We excel in collaborative copywriting. We work closely with clients, editors, and stakeholders, understanding project needs, providing regular updates, and incorporating feedback for a smooth process.",
	},
	{
		id: 2,
		icon: iconCreative,
		title: "Creativity",
		text: "we thrive on creative and innovative content creation. Our team thinks outside the box, generating fresh and captivating ideas that make us stand out from the competition. Expect exceptional, unique, and engaging content from Pendrip.",
	},
	{
		id: 3,
		icon: iconSecurity,
		title: "Confidentiality",
		text: "We prioritize confidentiality in the writing industry. With strict non-disclosure agreements, we safeguard sensitive information, earning client trust and ensuring privacy.",
	},
	{
		id: 4,
		icon: iconSatisfy,
		title: "Client Satisfaction",
		text: "Client satisfaction is our focus. We prioritize the client's goals, actively listen to their needs, provide excellent customer service, and go the extra mile to ensure that clients are happy with the final master piece.",
	},
];
export const socialMediaLinks = [
	{
		id: 2,
		title: "Instagram",
		Icon: BiLogoInstagramAlt,
		profile: "pendrip2023",
	},
	{ id: 3, title: "FaceBook", Icon: BsFacebook, profile: "pendrip2023" },
];

export const CoreValues = [
	{
		id: 1,
		title: "Attention to Detail",
		text: "we believe the client's desires are contained in their instructions and briefs, so we pay attention to details. This enables us to always craft relevant and client-centric write-ups that meet our client's goals. ",
	},
	{
		id: 2,
		title: "Excellence",
		text: "the essence of Pendrip is to increase academic and technical performance through excellent writing. Therefore, we put in the work while you rest so you can have excellent results. ",
	},
	{
		id: 3,
		title: "Integrity",
		text: "Every project we handle represents our fingerprint in the public domain. We value and protect our reputation and that of our clients through quality services",
	},
	{
		id: 4,
		title: "Time-bound Services",
		text: "Clients' deadlines are automatically ours, and we understand how time can mean the difference between 'who gets an opportunity and loses it'.  Hence, we deliver very fast at all cost but quality.",
	},
];
