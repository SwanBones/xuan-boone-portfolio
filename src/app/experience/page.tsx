import styles from "../../styles/page.module.css";
import Navbar from "../../components/navbar";
import Experience_Hero from "./hero";
import Experience_CompanySection from "./education-schoolSection";
import Footer from "@/components/footer";

export default function Experience() {
	return (
		<div className={styles.page}>
			<Navbar />
			<main className={styles.main}>
				<Experience_Hero />
				<Experience_CompanySection
					title={"Polaris Edge"}
					jobPosition={"Full Stack Development Intern"}
					date={"2024 | 6 Months"}
					description={
						"Full Stack development of a React TypeScript application using Agile / Scrum methodology."
					}
				/>
				<Experience_CompanySection
					rtl
					title={"AGORAé Troyes "}
					jobPosition={"Volunteer Communication Manager"}
					date={"2023 | 12 Months"}
					description="Media management and participation in the management of a solidarity and social grocery store aiding students in need
"
				/>
				<Experience_CompanySection
					title={"Safran Aircraft Engines "}
					jobPosition={"Worker intern"}
					description="Maintenance of tools around the manufacture of aircraft engines"
					date={"2021 | 1 Month"}
				/>
				<Experience_CompanySection
					rtl
					title={"Red Accent Studios"}
					jobPosition={"Discovery internship"}
					description="Discovery of how video game development works in business, Introduction to game design"
					date={"2018 | 1 Week"}
				/>
			</main>
			<Footer />
		</div>
	);
}
