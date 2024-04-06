import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import * as bs from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { useState } from "react";
import { Platform } from "../hooks/useGames";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const [platformName, setPlatformName] = useState("Platform");
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<bs.BsChevronDown />}>
        {platformName}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            onClick={() => {
              setPlatformName(platform.name);
              onSelectPlatform(platform);
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
