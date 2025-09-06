import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <div className="grid grid-flow-row xl:grid-cols-2 grid-cols-1 gap-10 m-10 mx-20">
      <ProjectCard
        title="Telegram Helper"
        link="https://github.com/AmirTKL/telegram-helper"
        example="https://github.com/AmirTKL/telegram-helper"
        images={[
          {
            src: "Telegram-example-1.jpg",
            id: "telegram helper image 1",
          },
          {
            src: "Telegram-example-2.jpg",
            id: "telegram helper image 2",
          },
          {
            src: "Telegram-example-3.jpg",
            id: "telegram helper image 3",
          },
          {
            src: "Telegram-example-4.jpg",
            id: "telegram helper image 4",
          },
        ]}
      >
        Telegram-Helper is a telegram bot specializing in communication via an
        AI powered by OpenAI, setting reminders, forecasting the weather,
        sending locations, playing Tic-Tac-Toe with another person using
        Telegram's inline-mode, and most importantly, sending dog photos!
      </ProjectCard>
      <ProjectCard
        title="Steam Tool (WIP)"
        link="https://github.com/AmirTKL/steam-tool"
        example="https://github.com/AmirTKL/steam-tool"
        images={[
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s",
            id: "project two image one",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s",
            id: "project two image two",
          },
        ]}
      >
        Steam tool is an app for fetching and showing the trending games on
        steam, then representing them in their own pages and linking them to
        steam.
      </ProjectCard>
    </div>
  );
}
