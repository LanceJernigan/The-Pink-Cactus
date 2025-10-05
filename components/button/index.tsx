import Link from "next/link";
import styles from "./button.module.css";
import {
	AnchorAsButtonProps,
	ButtonProps,
	NextLinkAsButtonProps,
} from "./types";

const NextLinkAsButton = ({
	className,
	href,
	children,
	...props
}: NextLinkAsButtonProps) => (
	<Link
		className={className}
		href={href}
		{...props}
	>
		{children}
	</Link>
);

const AnchorAsButton = ({
	className,
	href,
	children,
	target,
	rel,
	...props
}: AnchorAsButtonProps) => (
	<a
		href={href}
		className={className}
		target={target}
		rel={rel}
		{...props}
	>
		{children}
	</a>
);

const Button = ({
	className = "",
	children,
	raised = false,
	variant = "primary",
	href,
	newTab = false,
	...props
}: ButtonProps) => {
	if (href) {
		if (newTab || !href.startsWith("/")) {
			return (
				<AnchorAsButton
					className={`${styles.button} ${className}`}
					href={href}
					target={newTab ? "_blank" : undefined}
					rel={newTab ? "noopener noreferrer" : undefined}
					data-raised={raised}
					data-variant={variant}
				>
					{children}
				</AnchorAsButton>
			);
		} else {
			return (
				<NextLinkAsButton
					className={`${styles.button} ${className}`}
					href={href}
					data-raised={raised}
					data-variant={variant}
				>
					{children}
				</NextLinkAsButton>
			);
		}
	}

	return (
		<button
			className={`${styles.button} ${className}`}
			data-raised={raised}
			data-variant={variant}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
