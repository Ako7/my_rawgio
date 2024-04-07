import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import * as bs from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
interface Props {
  onSelectPlatformId: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const [platformName, setPlatformName] = useState("Platform");
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<bs.BsChevronDown />}>
        {platformName}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              setPlatformName(platform.name);
              onSelectPlatformId(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
