import React, { ReactNode } from "react";
import { Card, HStack, Badge } from "@chakra-ui/react";

interface SkillCardProps {
  skillTitle: String;
  skillIcon: ReactNode;
  skillArray: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  skillTitle,
  skillIcon,
  skillArray,
}) => {
  return (
    <Card.Root className="flex items-center gap-4 my-4 bg-inherit lg:px-0 h-full max-lg:min-h-[20vh] w-full">
      <Card.Body
        backgroundColor="hsl(210 50% 96%)"
        className=" w-full items-center justify-center rounded-lg grid grid-rows-2 py-8 min-h-[100px] h-full subgrid border border-gray-200 transition ease-in-out hover:shadow-lg hover:-translate-y-2 duration-300"
      >
        <Card.Title className="flex items-center flex-wrap flex-col gap-4 pb-2 mb-2 text-center leading-[1.05]">
          {skillIcon}
          {skillTitle}
        </Card.Title>
        <Card.Description
          as="div"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="4"
          flexDirection="row"
          flexWrap="wrap"
          className=" w-full rounded-lg "
        >
          <HStack mt="4" flexWrap="wrap">
            {skillArray.map((item, i) => {
              return (
                <Badge
                  key={i}
                  className="whitespace-nowrap bg-secondary-background text-secondary-foreground rounded-full px-2 font-semibold transition hover:shadow-md hover:bg-primary hover:text-white"
                >
                  {item}
                </Badge>
              );
            })}
          </HStack>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default SkillCard;
