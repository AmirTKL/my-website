import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-10 m-10 mx-20">
      <ProjectCard
        title="Telegram Helper"
        images={[
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s",
            id: "project one image one",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s",
            id: "project one image two",
          },
        ]}
      >
        Telegram-Helper is a telegram bot specializing in communication via an
        AI powered by OpenAI, setting reminders, forecasting the weather,
        playing Tic-Tac-Toe with another person using Telegram's inline-mode,
        and most importantly, sending dog photos!
      </ProjectCard>
      <ProjectCard
        title="Second Title"
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
        This is the second project's description
      </ProjectCard>
      <ProjectCard
        title="Third Title"
        images={[
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s",
            id: "project three image one",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s",
            id: "project three image two",
          },
        ]}
      >
        This is the third project's description
      </ProjectCard>
      <ProjectCard
        title="Fourth Title"
        images={[
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s",
            id: "project four image one",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s",
            id: "project four image two",
          },
        ]}
      >
        This is the fourth project's description
      </ProjectCard>
    </div>
  );
}
