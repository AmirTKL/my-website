import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function ProjectCard({
  title,
  link,
  example,
  children,
  images,
}: Readonly<{
  title: string;
  link?: string;
  example?: string;
  children: React.ReactNode;
  images: { src: string; id: string }[];
}>) {
  return (
    <Card className="border-none shadow-none bg-slate-900 px-10">
      <CardHeader>
        {link != undefined ? (
          <CardTitle className="text-4xl font-bold text-blue-200">
            <Link href={link}>{title}</Link>
          </CardTitle>
        ) : (
          <CardTitle className="text-4xl">{title}</CardTitle>
        )}
        <CardDescription className="text-2xl">{children}</CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            align: "center",
          }}
        >
          <CarouselContent className="">
            {images.map((image) => {
              return (
                <CarouselItem
                  key={image.id}
                  className="xl:basis-1/2 md:basis-1/3 sm:basis-1/2 basis-1/1"
                >
                  <img src={image.src}></img>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
      {example != undefined ? (
        <CardFooter className="justify-center">
          <p>
            Visit the project: <br /> <Link className="text-blue-200" href={example}>{example}</Link>
          </p>
        </CardFooter>
      ) : link != undefined ? (<p>
            Visit the project: <Link className="text-blue-200" href={link}>{link}</Link>
          </p>) : <p>This project does not have a link for you to visit as of yet.</p>}
    </Card>
  );
}
