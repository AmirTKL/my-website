import Skeleton from "@/components/skeleton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:m-10 m-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl">Hello! I&apos;m Amir,</h1>
        <div>
          <h2 className="text-2xl">
            Mainly a junior full-stack web developer.
          </h2>
          <h2 className="text-2xl">
            The language I work with is primarily JS (React, Typescript), and
            rarely Python.
          </h2>
          <h2 className="text-2xl">
            I also know my way around Blender.
          </h2>
          <h2 className="text-2xl">
            I can do whatever this guy is doing as well. <br /> | <br /> V
          </h2>
        </div>
      </div>
      <Skeleton />
      <h4>Click & drag the skelly to rotate him</h4>
      <h5>Also, if the animation has any bugs (especially the teeth), refresh the page. If the bug persists, it&apos;s a feature probably</h5>
      <h1 className="text-3xl">Feel free to contact and ask me questions through <Link className="text-blue-200" href={"https://x.com/AmirrezaZamani_"}>X @AmirrezaZamani_</Link> <br /> or email me at amirkhafane87 [at] gmail [dot] com</h1>
    </div>
  );
}
