"use client";
import React from "react";
import {
  Card,
  Button,
  Link as ChakraLink,
  HStack,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tech,
  link,
  github,
}) => {
  return (
    <Card.Root className="flex items-center my-4 bg-inherit rounded-lg h-full group transition ease-in-out hover:shadow-lg hover:-translate-y-2 duration-300">
      <div className="relative w-full h-[160px] lg:h-[320px] overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <Card.Body className="flex w-full bg-card-background rounded-b-lg text-nav-name ">
        <Card.Title className="py-2 group-hover:text-primary font-semibold text-2xl">
          {title}
        </Card.Title>
        <Card.Description className="text-description">
          {description}
        </Card.Description>
        <HStack mt="4" flexWrap="wrap">
          {tech.map((item, i) => {
            return (
              <Badge
                key={i}
                className="bg-inherit text-nav-name border border-border rounded-full px-2 font-semibold  hover:bg-primary hover:text-white"
              >
                {item}
              </Badge>
            );
          })}
        </HStack>

        <Card.Footer className="flex flex-wrap gap-4 p-0 pt-4 lg:flex-nowrap mt-auto">
          {github && (
            <ChakraLink href={github} className=" basis-full w-full">
              <Button
                variant="outline"
                className="basis-full py-2 px-4 transition ease-in-out delay-50 hover:-translate-y-1 duration-200 border-2 border-gray-200"
              >
                Code
              </Button>
            </ChakraLink>
          )}
          <ChakraLink href={link} className="basis-full w-full ">
            <Button
              variant="solid"
              backgroundColor=""
              className="basis-full bg-darker-blue text-white py-2 px-4 transition ease-in-out delay-50 hover:-translate-y-1 duration-200"
            >
              Visit Website
            </Button>
          </ChakraLink>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCard;
