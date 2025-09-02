export type ButtonProps = {
    className?: string;
    children?: React.ReactNode;
    raised?: boolean;
    variant?: "primary" | "secondary";
    onClick?: () => void;
};