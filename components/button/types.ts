import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	className?: string;
	children?: React.ReactNode;
	raised?: boolean;
	variant?: "primary" | "secondary";
	onClick?: () => void;
}
