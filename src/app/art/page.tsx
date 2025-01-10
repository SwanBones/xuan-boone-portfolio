import styles from "../../styles/page.module.css";
import Navbar from "../../components/navbar";
import Hobbies_Hero from "./hero";
import Footer from "@/components/footer";
import UnderConstruction from "@/components/under-construction";
import ArtSection from "./art-section";

export default function Hobbies() {
	return (
		<div className={styles.page}>
			<Navbar />
			<main className={styles.main}>
				<Hobbies_Hero />
			</main>
			<ArtSection
				title={"Drawing"}
				h3={""}
				description={
					"From a very young age, this artistic medium introduced me to the art of creation. It served as an entry to self improvement. You can find my work on my Artstation profile, as well as my Instagram page."
				}
				desc2={
					"Using: Adobe Photoshop, Adobe Illustrator, and simply pencil and paper"
				}
				backgroundImg={""}
			/>
			<ArtSection
				rtl
				title={"Videography"}
				h3={""}
				description={
					"From the creation of my YouTube channel in 2011, this allowed me to get a learn combine my own visuals and audio to teach or tell stories."
				}
				desc2={
					"Using: AdobeEffects, Davinci Resolve, Blender, Adobe Premiere Pro, "
				}
				backgroundImg={""}
			/>
			<ArtSection
				title={"Music & Sound Design"}
				h3={""}
				description={
					"Music is one of my biggest passions, and I picked up my first DAW at the age of 14. To this day, I still create music and use my knowledge to create entirely unique works in other domains."
				}
				desc2={"Using: FL Studio, Audacity"}
				backgroundImg={""}
			/>
			<ArtSection
				rtl
				title={"Photography"}
				h3={""}
				description={"You can find my work on my Instagram page."}
				desc2={"Using: Canon EOS 77D, Adobe Lightroom"}
				backgroundImg={""}
			/>

			<UnderConstruction />

			<Footer />
		</div>
	);
}
//tell that you can use all types of software
