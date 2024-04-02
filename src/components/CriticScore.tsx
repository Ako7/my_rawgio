import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const colorScore = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize={16}
      paddingX={2}
      borderRadius="5px"
      colorScheme={colorScore}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
