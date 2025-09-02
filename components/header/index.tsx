import FlowerIcon from "@/icons/flower";
import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={styles.component}>
            <div className={styles.wrapper}>
                <FlowerIcon />
            </div>
        </header>
    );
}

export default Header;