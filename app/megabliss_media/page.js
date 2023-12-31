import Navbar from "./Navbar";
import Footer from "../notification/Footer/index";
import SideBar from "@/components/Sidebar";
import MediaMain from "./mediaMain";
export default function Page() {

    return (
        <SideBar>
            <Navbar />
            <MediaMain />
            <Footer />
        </SideBar>
    )
}