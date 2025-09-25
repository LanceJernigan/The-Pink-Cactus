import styles from "./button.module.css";
import { ButtonProps } from "./types";

const Button = ({
	className = "",
	children,
	raised = false,
	variant = "primary",
	...props
}: ButtonProps) => (
	<button
		className={`${styles.button} ${className}`}
		data-raised={raised}
		data-variant={variant}
		{...props}
	>
		{children}
	</button>
);

export default Button;
