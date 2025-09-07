import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";
import { BsGithub, BsTwitterX } from "react-icons/bs";

export default function AppSidebar() {
  return (
    <Sidebar className="bg-slate-900 border-none">
      <SidebarHeader>
        <SidebarMenu className="flex flex-row border-b-1 pb-3 pt-3 border-slate-800 items-center">
          <SidebarMenuItem>
            <img
              className="rounded-2xl size-12"
              src={
                "https://avatars.githubusercontent.com/u/82081710?v=4"
                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s"
              }
              alt="Profile Picture"
            ></img>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-xl font-bold">
              Amirreza Zamani
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="pt-0">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-4">
              <SidebarMenuItem>
                <Link href="/">
                  <SidebarMenuButton className="text-xl hover:bg-slate-800 active:bg-slate-700">
                    Home
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <Link href="/projects">
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-xl hover:bg-slate-800 active:bg-slate-700">
                    Projects
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex flex-row gap-5 p-2 border-slate-500 justify-center">
          <SidebarMenuItem>
            <Link href="https://github.com/AmirTKL">
              <BsGithub className="w-7 h-7 text-blue-400"></BsGithub>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="https://x.com/AmirrezaZamani_">
              <BsTwitterX className="w-7 h-7 text-blue-400"></BsTwitterX>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
