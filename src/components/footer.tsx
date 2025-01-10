import styles from "../styles/page.module.css";

export default function Footer() {
	const date = new Date();
	return (
		<footer className={styles.footer}>
			<a
				href="mailto:xuan.boone@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Contact me
			</a>

			<p>© {date.getFullYear()} Xuân Boone - All rights reserved.</p>
			<a href="https://www.flaticon.com/uicons" target="_blank">
				Uicons by Flaticon
			</a>
		</footer>
	);
}
