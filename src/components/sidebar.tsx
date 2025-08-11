import Image from "next/image";
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

export default function AppSidebar() {
  return (
    <Sidebar className="bg-slate-900 text-white border-none">
      <SidebarHeader>
        <SidebarMenu className="flex flex-row border-b-1 pb-3 pt-3 border-slate-800 items-center">
          <SidebarMenuItem>
            <img
              className="rounded-2xl size-12"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkBg6PoHeYk2FzdAertw2vl6xJJ2T8FgP0A&s"
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
              <SidebarMenuItem>
                <Link href="/about">
                  <SidebarMenuButton className="text-xl hover:bg-slate-800 active:bg-slate-700">
                    About Me
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex flex-row gap-2 p-2 border-slate-500 justify-center">
          <SidebarMenuItem>
            <SidebarMenuButton className="text-2xl">Git</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-2xl">X</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
