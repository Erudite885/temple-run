import NavBar from "@/components/NavBar";
import SideBar from "@/components/Sidebar";
import LiveBookings from "../../../components/live-bookings/LiveBookings";
import HotelLiveBookingTable from "./HotelLiveBookingTable";

const hotelNames = [
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Travelodge",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Travelodge",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Hilton Hotel",
  "Ramada",
];

const tableInfo = [
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
];

export default function Page() {
  return (
    <SideBar>
      <NavBar />
      <LiveBookings title="Hotels" liveBookingNames={hotelNames} numPages={5}>
        <HotelLiveBookingTable tableData={tableInfo} />
      </LiveBookings>
    </SideBar>
  );
}
