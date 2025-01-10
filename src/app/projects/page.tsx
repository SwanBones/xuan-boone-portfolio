import styles from "../../styles/page.module.css";
import Navbar from "../../components/navbar";
import GameDev_Hero from "./hero";
import Footer from "@/components/footer";
import UnderConstruction from "@/components/under-construction";

export default function GameDev() {
	return (
		<div className={styles.page}>
			<Navbar />
			<main className={styles.main}>
				<GameDev_Hero />
			</main>
			<UnderConstruction />
			<Footer />
		</div>
	);
}
