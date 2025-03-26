import { LogoIcon } from "../icons/LogoIcon";
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-76 fixed  left-0 top-0 pl-6">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-2 text-purple-600">
            <LogoIcon />
            </div>
           
         Brainly
        </div>
    <div className="pt-8 pl-4">
     <SidebarItem text="Twitter" icon={<XIcon/>}/>
     <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
    </div>
    </div>
}