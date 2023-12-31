"use client";
import React, {useState} from "react";
import {Box} from "@chakra-ui/react";
import Announcement from "./Announcement";
import Newsletter from "./Newsletter";
import SectionSwitcher from "./SectionSwitcher";
import Faq from "./Faq";

const MediaMain = () => {
    const [selectedSection, setSelectedSection] = useState("ANNOUNCEMENT");

    const renderSection = () => {

        switch (selectedSection) {
            case "ANNOUNCEMENT":
                return <Announcement/>;
            case "NEWSLETTER":
                return <Newsletter />;
            case "FAQS":
                return <Faq />
            default:
                return <Announcement/>;
        }
    };

    return (
        <>
            <Box>
                <SectionSwitcher
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                />
            </Box>
            <Box w="100%">{renderSection()}</Box>
        </>
    );
}

export default MediaMain;