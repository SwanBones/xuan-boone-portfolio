import styles from "/src/styles/page.module.css";

export default function Home_Education() {
	return (
		<div className={styles.home_education} id="home_education">
			<h2>Computer Science Engineering</h2>
			<p>
				Currently student at Université de Technologie de Troyes, which is based
				in France.
			</p>

			<div className={styles.ctas}>
				<a
					className={styles.secondary}
					href="/education"
					rel="noopener noreferrer"
				>
					See Education
				</a>
			</div>
		</div>
	);
}
