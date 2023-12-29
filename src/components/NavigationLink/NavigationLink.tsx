import React, { FC } from "react";
import { Container } from "./NavigationLink.style";

export type NavigationLinkProps = {
  onClick?: (event: React.MouseEvent<HTMLLinkElement>) => void;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  href: string;
  color?: "primary" | "secondary";
  disabled?: boolean;
};

export const NavigationLink: FC<NavigationLinkProps> = ({
  onClick,
  children,
  color = "primary",
  className,
  disabled,
  href,
}) => {
  return (
    <Container
      className={className}
      onClick={onClick}
      color={color}
      href={href}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};
