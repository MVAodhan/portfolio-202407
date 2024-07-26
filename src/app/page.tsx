import MyCard from "@/components/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { projects, skills } from "./content";
import Pill from "@/components/Pill";

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-between">
        <section className="flex flex-col gap-5 items-center">
          <div className="w-full mt-20 flex items-center flex-row-reverse">
            <Avatar className="h-[50px] w-[50px] sm:h-[150px] sm:w-[150px]">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>
            <p className="text-base sm:text-lg md:text-2xl md:m-0 px-5 md:px-20">
              {" "}
              Kia Ora, I&apos;m Aodhan Hamilton, a Sull Stack Software Developer
              and a part-time Digital Assistant.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-2 m-5">
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="w-full flex flex-wrap gap-2 m-5  justify-center">
              {skills.map((skill, i) => (
                <Pill key={i} name={skill.name} />
              ))}
            </div>
          </div>
        </section>
        <h2 className="text-3xl font-bold">Work and Projects</h2>
        <div className="w-full rounded flex flex-col gap-5">
          {projects.map((project, i) => (
            <MyCard
              key={i}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </main>
    </>
  );
}
