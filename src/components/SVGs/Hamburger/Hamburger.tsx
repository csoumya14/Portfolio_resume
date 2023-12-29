import { FC } from "react";

type Props = {
  color?: ColorGamut;
};

export const Hamburger: FC<Props> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <g fill="#33323D" fillRule="evenodd">
      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
    </g>
  </svg>
);
