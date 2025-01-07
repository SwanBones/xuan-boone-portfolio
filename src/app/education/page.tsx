import styles from "../../styles/page.module.css";
import Navbar from "../../components/navbar";
import Education_Hero from "./hero";
import Education_SchoolSection from "./education-schoolSection";
import Footer from "@/components/footer";

export default function Education() {
	return (
		<div className={styles.page}>
			<Navbar />
			<main className={styles.main}>
				<Education_Hero />
				<Education_SchoolSection
					title={"Université du Québec à Chicoutimi"}
					description={
						"Computer Science Program for Exchange Students | Video game and Web Development"
					}
					date={"2024"}
				/>
				<Education_SchoolSection
					rtl
					title={"Université de Technologie de Troyes"}
					description={
						"Computer Science and Information Systems Engineering | Software Engineering"
					}
					date={"2020 - 2025 "}
				/>
				<Education_SchoolSection
					title={"Lycée Français de Shanghai"}
					description={
						"General Baccalaureate | European section | Scientific Stream - Mathematics specialty, Very Good Honors"
					}
					date={"2016 - 2020 "}
				/>
			</main>
			<Footer />
		</div>
	);
}
