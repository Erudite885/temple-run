// import Customer from "./Customer";
// import SectionSwitcher from "./SectionSwitcher";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/Sidebar";
import Footer from "../megabliss_media/Footer";
import SettingsOptions from "./SettingsOptions"

export default function Page() {
    return (
        <SideBar>
            <NavBar />
            <SettingsOptions />
            {/* <Customer /> */}
            <Footer />
        </SideBar>
    );
}