'use client';

import Logo from "@/icons/logo";
import Button from "@/components/button";
import styles from "./hero.module.css"

const Hero = () => {
    return (
        <section className={styles.component}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.content}>
                    <header className={styles.contentHeader}>
                        <h1>Lorem Ipsum Dolor Sit</h1>
                        <h2>Gather with friends, have fun, & celebrate the good life.</h2>
                    </header>
                    <div className={styles.buttons}>
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://tables.toasttab.com/restaurants/2c7effac-599a-429d-8dc5-eeb2554d6531/findTime",
                                    "_blank"
                                )
                            }
                            raised
                        >
                            Book Room
                        </Button>
                        <Button
                            variant="secondary"
                            raised
                        >
                            View Menu
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;