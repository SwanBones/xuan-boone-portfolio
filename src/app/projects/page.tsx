import styles from "../../styles/page.module.css";
import Navbar from "../../components/navbar";
import GameDev_Hero from "./hero";
import Footer from "@/components/footer";
import ProjectSection from "./project-section";

export default function GameDev() {
	const itchio = (
		<div
			className={styles.ctas}
			style={{ justifyContent: "flex-end", marginTop: "2em" }}
		>
			<a
				className={styles.primary}
				href="https://swanbones.itch.io"
				target="_blank"
			>
				Visit now
			</a>
		</div>
	);
	return (
		<div className={styles.page}>
			<Navbar />
			<main className={styles.main}>
				<GameDev_Hero />
			</main>
			<ProjectSection
				title={"Visit my itch.io page"}
				rtl
				h3={""}
				description={
					"On there, you can find most of my video game production projects."
				}
				desc2={""}
				backgroundImg={"images/project_itchio.jpg"}
				reactComponent={itchio}
			/>
			<Footer />
		</div>
	);
}
