import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import UserForm from "./UserForm";
import HitungGajiBersih from "./HitungGajiForm"
import "./tailwind.css";

createRoot(document.getElementById("root"))
.render(
    <div>
        <TailwindCSS/>
        <UserForm/>'
        <HitungGajiBersih/>
    </div>
)