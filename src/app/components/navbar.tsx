import styles from "../styles/page.module.css";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Image aria-hidden src={"/logo.png"} alt={""} width={119} height={50} />
			<div>
				<ul className={styles.ctas}>
					<li>
						<a className={styles.secondary}>Home</a>
					</li>
					<li>
						<a className={styles.secondary}>Education</a>
					</li>
					<li>
						<a className={styles.secondary}>Experience</a>
					</li>
				</ul>

				<ul className={styles.ctas}>
					<li>
						<a className={styles.secondary}>Spotify</a>
					</li>
					<li>
						<a className={styles.secondary}>Github</a>
					</li>
					<li>
						<a className={styles.secondary}>Itch.io</a>
					</li>
					<li>
						<a className={styles.secondary}>LinkedIn</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
