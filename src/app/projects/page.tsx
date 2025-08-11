import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-10 m-10 mx-20">
      <Card className="border-none shadow-none bg-slate-900 px-10">
        <CardHeader>
          <CardTitle className="text-4xl">Telegram Helper</CardTitle>
          <CardDescription className="text-2xl">
            Telegram-Helper is a telegram bot specializing in communication via
            an AI powered by OpenAI, setting reminders, forecasting the weather,
            playing Tic-Tac-Toe with another person using Telegram's
            inline-mode, and most importantly, sending dog photos!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>The Photos</p>
        </CardContent>
      </Card>
      <Card className="border-none shadow-none bg-slate-900 px-10">
        <CardHeader>
          <CardTitle className="text-4xl">Telegram Helper</CardTitle>
          <CardDescription className="text-2xl">
            Telegram-Helper is a telegram bot specializing in communication via
            an AI powered by OpenAI, setting reminders, forecasting the weather,
            playing Tic-Tac-Toe with another person using Telegram's
            inline-mode, and most importantly, sending dog photos!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>The Photos</p>
        </CardContent>
      </Card>
      <Card className="border-none shadow-none bg-slate-900 px-10">
        <CardHeader>
          <CardTitle className="text-4xl">Telegram Helper</CardTitle>
          <CardDescription className="text-2xl">
            Telegram-Helper is a telegram bot specializing in communication via
            an AI powered by OpenAI, setting reminders, forecasting the weather,
            playing Tic-Tac-Toe with another person using Telegram's
            inline-mode, and most importantly, sending dog photos!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>The Photos</p>
        </CardContent>
      </Card>
      <Card className="border-none shadow-none bg-slate-900 px-10">
        <CardHeader>
          <CardTitle className="text-4xl">Telegram Helper</CardTitle>
          <CardDescription className="text-2xl">
            Telegram-Helper is a telegram bot specializing in communication via
            an AI powered by OpenAI, setting reminders, forecasting the weather,
            playing Tic-Tac-Toe with another person using Telegram's
            inline-mode, and most importantly, sending dog photos!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>The Photos</p>
        </CardContent>
      </Card>
    </div>
  );
}
