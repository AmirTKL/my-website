import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
        {/* {supposed to be a carousel} */}
        {images.map((image) => {
          return <img key={image.id} src={image.src}></img>;
        })}
      </CardContent>
    </Card>
  );
}
