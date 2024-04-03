import { GiBullseye } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegMeh } from "react-icons/fa";
import { Icon, IconProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: IconProps } = {
    3: { children: <FaRegMeh />, color: "red" },
    4: { children: <FaRegThumbsUp />, color: "yellow" },
    5: { children: <GiBullseye />, color: "green" },
  };
  return <Icon {...emojiMap[rating]} boxSize="35px" marginTop={1} />;
};

export default Emoji;
