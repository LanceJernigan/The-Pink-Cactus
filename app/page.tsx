import Featurette from "@/components/featurette";
import Hero from "@/components/hero";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<Hero />
			<section className={styles.featurettes}>
				<Featurette
					title="Karaoke Rooms"
					description="Bring your friends, pick your songs, and make the night yours. Our private karaoke rooms are the perfect spot to celebrate, cut loose, and create stories you’ll be talking about long after the last encore."
				/>
				<Featurette
					title="The Bar"
					description="Not ready to sing? Stay downstairs, where the drinks flow and the atmosphere hits just right. Whether it’s a night out with friends, a date, or a casual hang, our bar delivers handcrafted cocktails and easy bites to keep you fueled."
					reverse
				/>
				<Featurette
					title="Outdoor Patio"
					description="Take it outside. Our spacious patio has covered seating and an easygoing vibe — perfect for cooling down after a karaoke session, sipping cocktails under the lights, or catching up with friends late into the night."
				/>
			</section>
		</>
	);
}
