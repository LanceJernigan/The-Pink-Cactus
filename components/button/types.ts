import React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: React.ReactNode;
	raised?: boolean;
	variant?: "primary" | "secondary";
	href?: string;
	newTab?: boolean;
}

export interface NextLinkAsButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	children?: React.ReactNode;
	href: string;
}

export interface AnchorAsButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	children?: React.ReactNode;
	href: string;
	target?: string;
	rel?: string;
}
