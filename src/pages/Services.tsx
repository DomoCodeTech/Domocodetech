import React from "react";
import { AnimatePresence } from "framer-motion";
import ServicesHero from "../components/services/ServicesHero";
import ProcessFlow from "../components/services/ProcessFlow";
import Partners from "../components/services/Partners";
import ServicePricing from "../components/services/ServicePricing";
import ServiceTabs from "../components/services/ServiceTabs";
import ServiceContent from "../components/services/ServiceContent";
import { SERVICES_DATA } from "../constants/siteData";
import { useServiceTab } from "../hooks/useServiceTab";

const Services: React.FC = () => {
  const { selectedTab, handleTabChange } = useServiceTab();
  return (
    //<Container maxWidth="lg" sx={{ px: { xs: 1, sm: 1, md: 1 } }}>
    <>
      <ServicesHero />
      <ProcessFlow />
      <ServiceTabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      <AnimatePresence mode="wait">
        <ServiceContent selectedService={SERVICES_DATA[selectedTab]} />
      </AnimatePresence>
      <ServicePricing serviceKey={SERVICES_DATA[selectedTab].key} />
      <Partners />
    </>
  //  </Container>
  );
};

export default Services;
