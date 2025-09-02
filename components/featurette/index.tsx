import { FeaturetteProps } from "./types"
import styles from "./featurette.module.css";
import Image from "next/image";
import Flower from "@/icons/flower";

const Featurette = ({
    title,
    description,
    reverse = false
}: FeaturetteProps
) => (
    <section className={styles.component}>
        <div
            className={styles.wrapper}
            data-reverse={reverse}
        >
            <div className={styles.image}>
                <Image src="/assets/images/house.jpeg" alt="The Pink Cactus" width={600} height={400} />
            </div>
            <div className={styles.content}>
                <div className={styles.contentHeader}>
                    <Flower />
                    <h2 className="featurette-title">{title}</h2>
                </div>
                <p className="featurette-description">{description}</p>
            </div>
        </div>
    </section>
);

export default Featurette