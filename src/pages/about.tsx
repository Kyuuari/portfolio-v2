import React from "react";
import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";

const about = () => {
  return (
    <Layout>
      <div className="mt-16">
        <AboutSection />
        <ServicesSection />
      </div>
    </Layout>
  );
};

export default about;
