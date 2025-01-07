import styles from "/src/styles/page.module.css";

export default function Home_WebDev() {
	return (
		<div className={styles.home_webDev}>
			<h2>Web Development</h2>
			<p>
				Full Stack Development, using any framework from React and Vuejs for the
				front end, to Nodejs backends all in Typescript / Javascript
			</p>

			<div className={styles.ctas}>
				<a
					className={styles.secondary}
					href="/experience"
					rel="noopener noreferrer"
				>
					See Experience
				</a>
			</div>
		</div>
	);
}
