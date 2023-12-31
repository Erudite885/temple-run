import SideBar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";
import LiveBookings from "@/components/live-bookings/LiveBookings";
import PackageLiveBookingTable from "./PackageLiveBookingTable";

const packageNames = [
  "Gaming",
  "ScubaDiving",
  "HorseRiding",
  "Gaming",
  "ScubaDiving",
  "HorseRiding",
  "Gaming",
  "ScubaDiving",
  "HorseRiding",
  "Gaming",
  "ScubaDiving",
  "HorseRiding",
  "Gaming",
  "ScubaDiving",
  "HorseRiding",
  "Gaming",
  "ScubaDiving",
  "HorseRiding",
];

const tableInfo = [
  {
    id: "#5644",
    name: "Vishal UmaShank",
    time: "8:30 - 9:30 AM",
    packageBooked: "Entertainment",
    noGuest: "3",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    time: "8:30 - 9:30 AM",
    packageBooked: "Entertainment",
    noGuest: "1",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    time: "8:30 - 9:30 AM",
    packageBooked: "Entertainment",
    noGuest: "2",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    time: "8:30 - 9:30 AM",
    packageBooked: "Entertainment",
    noGuest: "4",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    time: "8:30 - 9:30 AM",
    packageBooked: "Entertainment",
    noGuest: "1",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    time: "8:30 - 9:30 AM",
    packageBooked: "Entertainment",
    noGuest: "1",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    time: "8:30 - 9:30 AM",
    packageBooked: "Entertainment",
    noGuest: "9",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    time: "8:30 - 9:30 AM",
    packageBooked: "Entertainment",
    noGuest: "4",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    status: "available",
    notes: "early booking",
  },
];

export default function Page() {
  return (
    <SideBar>
        <NavBar />
        <LiveBookings title="Packages" liveBookingNames={packageNames} numPages={5}>
        <PackageLiveBookingTable tableData={tableInfo}/>
        </LiveBookings>
    </SideBar>
  );
}