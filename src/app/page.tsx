import MyCard from "@/components/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { projects } from "./content";

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-between">
        <section className="flex flex-col gap-5 items-center">
          <div className="w-full mt-20 flex items-center">
            <Avatar className="h-[100px] w-[100px] md:h-[200px] md:w-[200px]">
              <AvatarImage src="https://github.com/MVAodhan.png" />
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>
            <p className="ml-5 text-sm sm:text-base md:text-lg md:m-0 md:px-20">
              {" "}
              Kia Ora, I&apos;m Aodhan Hamilton, a Software Developer and a
              part-time Digital Assistant.{" "}
            </p>
          </div>
          <h2 className="text-3xl">Work and Projects</h2>
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
        </section>
      </main>
    </>
  );
}
