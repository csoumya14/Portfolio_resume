"use client";
import { FC } from "react";
import { Wrapper } from "./SharedTop.style";
import { Menu } from "../Menu/Menu";

interface SharedTopProps {}

export const SharedTop: FC<SharedTopProps> = () => {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};
