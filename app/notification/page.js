
import Navbar from "../notification/Navbar"
import Footer from "../notification/Footer"
import SideBar from "@/components/Sidebar";
import SettingsOptions from "./SettingsOptions";


export default function Page() {

    return (
        
        <SideBar>
            <Navbar />
            <SettingsOptions />
            <Footer />
        </SideBar>
    );
}