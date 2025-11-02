import React, { ReactNode } from "react";
import { Card, HStack, Badge, Text, List } from "@chakra-ui/react";
import { CiCalendar, CiLocationOn, CiCircleCheck } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";

interface ExperienceCardProps {
  title: string;
  company: string;
  place: string;
  type: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  achievements: string[];
  skills: string[];
  //   index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  place,
  type,
  date: { start, end },
  description,
  achievements,
  skills,
  //   index,
}) => {
  return (
    <Card.Root
      className={`flex items-center my-4 py-4 bg-inherit text-description rounded-lg h-full w-full 
        `}
    >
      <Card.Body className="bg-card-background h-fit w-full lg:w-fit-content border border-gray-200 rounded-lg group transition ease-in-out hover:shadow-lg hover:-translate-y-2 duration-300">
        <HStack className="text-[.875rem] flex items-center py-2">
          <Badge
            className={`rounded-full px-2 font-semibold ${
              type === "Part-time"
                ? "bg-primary text-white"
                : "bg-secondary-background text-secondary-foreground"
            }`}
          >
            {type}
          </Badge>
          <span className="pr-2 flex gap-1 items-center whitespace-nowrap">
            <CiCalendar />
            {start} - {end}
          </span>
        </HStack>

        <Card.Title className="group-hover:text-primary font-semibold text-2xl">
          {title}
        </Card.Title>
        <HStack className="font-medium text-[.875rem] pt-1">
          {company}
          <LuDot />
          <span className="pr-2 flex gap-1 items-center">
            <CiLocationOn />
            {place}
          </span>
        </HStack>

        {description && (
          <Card.Description as="div" className="text-description py-2">
            <List.Root className="space-y-1">
              {description.split(/(?<=\.)\s+(?=[A-Z])/g).map((line, i) => (
                <List.Item key={i} className="flex">
                  <List.Indicator asChild color="#3b5998">
                    <GoDotFill />
                  </List.Indicator>
                  {line}
                </List.Item>
              ))}
            </List.Root>
          </Card.Description>
        )}

        {achievements && achievements.length !== 0 && (
          <Card.Description>
            Key Achievements:
            <List.Root>
              {achievements.map((item, i) => {
                return (
                  <List.Item key={i}>
                    <List.Indicator asChild color="#3b5998">
                      <CiCircleCheck />
                    </List.Indicator>
                    {item}
                  </List.Item>
                );
              })}
            </List.Root>
          </Card.Description>
        )}

        {skills && (
          <HStack className="flex-wrap py-2">
            {skills.map((skill, i) => {
              return (
                <Badge
                  key={i}
                  className="bg-inherit text-nav-name border border-border rounded-full px-2 font-semibold hover:bg-primary hover:text-white"
                >
                  {skill}
                </Badge>
              );
            })}
          </HStack>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default ExperienceCard;
