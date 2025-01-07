import styles from "../../styles/page.module.css";
import Navbar from "../../components/navbar";
import Hobbies_Hero from "./hero";
import Footer from "@/components/footer";

export default function Hobbies() {
	return (
		<div className={styles.page}>
			<Navbar />
			<main className={styles.main}>
				<Hobbies_Hero />
			</main>
			<Footer />
		</div>
	);
}
//tell that you can use all types of software
