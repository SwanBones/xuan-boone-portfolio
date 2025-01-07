import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a
				href="mailto:xuan.boone@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/file.svg"
					alt="File icon"
					width={16}
					height={16}
				/>
				Contact me
			</a>
			<a href="https://www.flaticon.com/uicons" target="_blank">
				Uicons by Flaticon
			</a>
		</footer>
	);
}
