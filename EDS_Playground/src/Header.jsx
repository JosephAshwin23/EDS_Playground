import {
  DropdownMenu,
  DropdownMenuPopover,
  DropdownMenuList,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@adaptavant/eds-core/experimental";
import { useContext } from "react";
import { MainContext } from "./ContextProvider";

function Header() {
  const { visible, view } = useContext(MainContext);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>Toggle dropdown menu</DropdownMenuTrigger>
        <DropdownMenuPopover>
          <DropdownMenuList>
            <DropdownMenuItem onClick={() => alert("Clicked profile")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Clicked messages")}>
              Messages
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Clicked settings")}>
              Account settings
            </DropdownMenuItem>
          </DropdownMenuList>
        </DropdownMenuPopover>
      </DropdownMenu>
    </>
  );
}

export default Header;
