import styles from "../../styles/page.module.css";
import Navbar from "../../components/navbar";
import GameDev_Hero from "./hero";
import Footer from "@/components/footer";

export default function GameDev() {
	return (
		<div className={styles.page}>
			<Navbar />
			<main className={styles.main}>
				<GameDev_Hero />
			</main>

			<Footer />
		</div>
	);
}
