import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVICES_DATA } from "../constants/siteData";

export const useServiceTab = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");

    if (tabParam !== null) {
      const tabIndex = parseInt(tabParam);
      if (
        !isNaN(tabIndex) &&
        tabIndex >= 0 &&
        tabIndex < SERVICES_DATA.length
      ) {
        setSelectedTab(tabIndex);
        const tabsElement = document.getElementById("services-tabs");
        if (tabsElement) {
          tabsElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location.search]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return {
    selectedTab,
    handleTabChange,
  };
};
