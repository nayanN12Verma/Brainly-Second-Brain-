import { Button } from "../component/Button"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import{Card} from"../component/Card"
import { CreateContentModal } from "../component/CreateContentModal"
import { useState } from "react"
import { Sidebar } from "../component/Sidebar"

export function Dashboard() {
const [modalOpen,setModalOpen] = useState(false);

  return (
    <div>
      <Sidebar/>
 <div className="p-2 ml-76 min-h-screen bg-gray-100  ">
  <CreateContentModal open={modalOpen} onClose={()=>{
    setModalOpen(false); 
  }}/>
  <div className="flex justify-end gap-4">
  <Button onClick={()=>{
    setModalOpen(true);
  }} variant="primary" text="Add Content" startIcon={<PlusIcon/>}></Button>
  <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
  </div>
  <div className="flex gap-4">
  <Card type="twitter"
   link="https://x.com/Cristiano/status/1903956203459277284" title=" First tweet"/>
   <Card type="youtube"
   link="https://www.youtube.com/embed/dk8FnH-MtrI?si=KAEaSrjWWK0v2-WH"  title=" First vedio"/>
   </div>
 </div>
 </div>
  )
}

