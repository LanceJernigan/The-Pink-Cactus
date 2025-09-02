import Featurette from "@/components/featurette";
import Hero from "@/components/hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <section className={styles.featurettes}>
        <Featurette
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Featurette
          title="Dolor Sit Amet"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          reverse
        />
      </section>
      <div className={styles.spacer} />
    </>
  );
}
