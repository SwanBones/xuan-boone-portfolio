import Image from "next/image";
import styles from "../styles/page.module.css";
import specificStyles from "../styles/specific-styles.module.css";

export default function Hero() {
	return (
		<div className={styles.hero}>
			<h1>XUÂN BOONE</h1>
			<p>
				Étudiant en dernière année d’Ingénieur en Informatique et Systèmes
				d'Information À l’UTT
			</p>
			<p>Actuellement en recherche de stage | Stage de fin d’études</p>
			<div className={styles.ctas}>
				<a
					className={styles.primary}
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					En savoir plus
				</a>
			</div>
		</div>
	);
}
