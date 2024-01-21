"use client";
import React from "react";
import SectionHeading from "@/components/ui/sectionHeading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

const about = () => {
  // const { ref } = useSectionInView("About");
  return (
    <motion.section
      //   ref={ref}
      className="mb-15 max-w-[55rem] text-center leading-8 sm:mb-15 scroll-mt-28 text-xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Final year student of Telecommunication Engineering at Telkom
        University, with 6 months experience in Software Development, Mobile
        Application at Bangkit 2023. My core stack is{" "}
        <span className="font-medium">
          Kotlin, Jetpack Compose, React, Next.js, Website, UX Design,
          JavaScript, and Python, and Internet of Things.
        </span>{" "}
        Highly motivated to serve effective, enhancing user experience for
        evolving business needs from Software Development aspect. A personality
        can be leadership, project management, adaptability, effective time
        management, skills in telecommunication engineering, and continuously
        updated software development.
      </p>
    </motion.section>
  );
};

export default about;
