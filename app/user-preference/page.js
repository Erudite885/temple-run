import SideBar from "@/components/Sidebar";
import Navbar from "../notification/Navbar";
import Footer from "../notification/Footer";
import FontSelectorCard from "./FontSelectorCard/index"
import Buttons from "../notification/Buttons";
import Header from "./Header"
import AppearanceCard from "./AppearanceCard";

export default function Page() {
    return (
        <SideBar>
            <Navbar />
            <Header />
            <AppearanceCard />
            <FontSelectorCard />
            <Buttons />
            <Footer />
        </SideBar>
    )
}