"use client";

import Featurette from "@/components/featurette";
import Hero from "@/components/hero";
import styles from "./page.module.css";
import Button from "@/components/button";

export default function Home() {
	return (
		<>
			<Hero />
			<section className={styles.featurettes}>
				<Featurette
					title="Karaoke Rooms"
					image={{
						src: "/assets/images/karaoke.jpg",
						alt: "Karaoke room with pink lighting and a microphone on a stand",
					}}
				>
					<p>
						Grab your friends, cue up your playlist, and own the spotlight. Our
						private karaoke rooms are built for birthdays, nights out, and
						unforgettable sing-along moments.
					</p>
					<p>
						Reservations are strongly recommended because we fill up fast,
						especially on the weekends!
					</p>
					<Button
						onClick={() =>
							window.open(
								"https://tables.toasttab.com/restaurants/2c7effac-599a-429d-8dc5-eeb2554d6531/findTime",
								"_blank",
							)
						}
						raised
					>
						Reserve Now
					</Button>
				</Featurette>
				<Featurette
					title="The Bar"
					image={{
						src: "/assets/images/bar.jpg",
						alt: "Karaoke room with pink lighting and a microphone on a stand",
					}}
					reverse
				>
					<p>
						Skip the mic and sink into the vibe downstairs. With craft
						cocktails, latin-inspired food, and a laid-back lounge feel, it’s
						the perfect spot for date night, pre-game, or just hanging out.
					</p>
				</Featurette>
				<Featurette
					title="Front Yard Patio"
					image={{
						src: "/assets/images/house.jpg",
						alt: "Karaoke room with pink lighting and a microphone on a stand",
					}}
				>
					<p>
						Step outside and breathe it in. Our spacious patio — with covered
						seating and yard games — keeps the good life rolling under
						the Knoxville sky.
					</p>
				</Featurette>
			</section>
		</>
	);
}
