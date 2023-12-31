import { Dispatch, FC, SetStateAction, useRef } from "react";
import { StyledMenu } from "./NavBar.style";
import { LinkItems } from "../LinkItems/LinkItems";
import { PageList } from "../PageList/PageList";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

interface NavBarProps {
  toggleNav: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const NavBar: FC<NavBarProps> = ({ setOpen, open, toggleNav }) => {
  const linkPageList = [
    { id: 1, href: "/", pageTitle: "Home" },
    { id: 2, href: "/portfolio", pageTitle: "Portfolio" },
    { id: 3, href: "/contactme", pageTitle: "Contact Me" },
  ];
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));
  return (
    <StyledMenu open={open} ref={node}>
      <LinkItems
        items={linkPageList}
        renderItem={(listItem) => (
          <PageList
            key={listItem.id}
            listItem={listItem}
            toggleNav={toggleNav}
          />
        )}
      />
    </StyledMenu>
  );
};
