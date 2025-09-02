import styles from "./button.module.css";
import { ButtonProps } from "./types";

const Button = ({
    className,
    children,
    raised = false,
    variant = "primary",
    onClick
}: ButtonProps) => (
    <button
        className={`${styles.button} ${className}`}
        data-raised={raised}
        data-variant={variant}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;