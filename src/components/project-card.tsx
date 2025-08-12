import {
  Card,
  CardContent,
  CardDescription,
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
  children,
  images,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  images: { src: string; id: string }[];
}>) {
  return (
    <Card className="border-none shadow-none bg-slate-900 px-10">
      <CardHeader>
        <CardTitle className="text-4xl">{title}</CardTitle>
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
                <CarouselItem key={image.id} className="xl:basis-1/2 md:basis-1/3 sm:basis-1/2 basis-1/1">
                  <img src={image.src}></img>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}
