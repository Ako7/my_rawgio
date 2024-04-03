import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>elo</MenuItem>
        <MenuItem>elo</MenuItem>
        <MenuItem>elo</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
