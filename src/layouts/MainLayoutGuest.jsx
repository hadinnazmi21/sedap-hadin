import { Outlet } from "react-router-dom";
import "../assets/guest.css";

export default function MainLayoutGuest(){
    return(
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
      
        
          
          <Outlet/>
        </div>
      </div>
    )
}