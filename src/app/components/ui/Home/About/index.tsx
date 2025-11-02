import React from "react";
import { List, HStack, Badge } from "@chakra-ui/react";
import { CiCircleCheck } from "react-icons/ci";
import { about } from "@/app/data/data";

const About = () => {
  return (
    <div
      id="about"
      className=" py-4 bg-gradient2 flex flex-wrap justify-center "
    >
      <h2 className="pt-16 w-full">
        <span>About me</span>
      </h2>
      <div className="grid lg:grid-cols-2 py-4 gap-4 justify-center max-w-[1374px]">
        <div>
          <div className="text-description flex flex-wrap gap-4 p-4 lg:py-4">
            {about.intro.map((item, i) => {
              return <div key={i}>{item}</div>
            })}
          </div>
          <HStack className="flex p-4 flex-wrap">
            {about.skills.map((skill, i) => {
              return (
                <Badge
                  key={i}
                  className="whitespace-nowrap bg-secondary-background text-secondary-foreground rounded-full px-2 font-semibold transition hover:shadow-md hover:bg-primary hover:text-white"
                >
                  {skill}
                </Badge>
              );
            })}
          </HStack>
        </div>
        <div className="px-4">
          <h3 className="basis-full text-center py-4 lg:py-2">Quick Facts</h3>
          <List.Root className="border-2 border-gray-200 w-full px-4 py-8 rounded-lg">
            {about.facts.map((fact, i) => {
              return (
                <List.Item key={i} className="flex ">
                  <List.Indicator asChild color="#3b5998">
                    <CiCircleCheck />
                  </List.Indicator>
                  {fact}
                </List.Item>
              );
            })}
          </List.Root>
        </div>
      </div>
    </div>
  );
};

export default About;
