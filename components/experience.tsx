"use client";
import React, { useEffect } from "react";
import SectionHeading from "@/components/ui/sectionHeading";
import { Chrono } from "react-chrono";

const Experience = () => {
  return (
    <section id="experience" className="mb-10 sm:mb-15">
      <SectionHeading>Education & Experience</SectionHeading>
      <Chrono
        items={[
          {
            title: "June 2024 - Present",
            cardTitle: "TASTI ANUGERAH MANDIRI – AUTHORIZED TOYOTA DEALER",
            cardSubtitle:
              "Information Technology Intern – Information System & Technology Departement (ISTD)",
            cardDetailedText: `A. Development Azure Server for RPA deployment using Windows Server and configure requirement system with 
            estimated less than 2 weeks. B. Analyze requirement of new demand of information system solution in back office, data integration. C. Develop system to support Tasti Anugerah Mandiri business growth especially in Workflow system.`,
          },
          {
            title: "2020 - 2024",
            cardTitle: "Telkom University",
            cardSubtitle:
              "Telecommunication Engineering, Faculty of Electrical Engineering",
            cardDetailedText: `GPA: 3.61/4.00\n Final Project: Research sentiment analysis for autism children with machine learning NLP, GCP, Mobile App.\n Interest field: Software Development, Mobile Application, Telecommunication Engineering (Server), Internet of Things.`,
          },
          {
            title: "Jun 2023 - Jun 2024",
            cardTitle: "Cyber Physical System Laboratory",
            cardSubtitle: "Coordinator Assistant",
            cardDetailedText: `Supervised 2 departments (Practicum and Research Departments) with approximately 45 members and implemented
            project management Agile for laboratory roadmap.\n 
            Configure Proxmox Server can deploy a website and connect to Cloudflare for domain public access.
            \nLed 3 projects Internet of Things and serve data to website < 3 months.`,
          },
          {
            title: "Feb 2023 – Jul 2023",
            cardTitle: "Bangkit 2023",
            cardSubtitle: `Mobile Development`,
            cardDetailedText: `Created mobile application leveraging Android Studio and Github API to search users and detail users <1 month.\nCrafted Android application using MVVM and SOLID concepts for sharing story to API with the locations and maps for
            approximately 1 month, also analyzed logic programming on camera code.\nSoft skills assignment: Growth Mindset, Time Management, Critical Thinking, Adaptability, Project Management, 
            Professional Communication and Professional Branding.\n Collaborate in teams to design Capstone Project, also implement machine learning model, and fetch API from Cloud 
            teams to Application for approximately 1 month.`,
          },
          {
            title: "Jun 2022 - Present",
            cardTitle: "Cyber Physical System Laboratory",
            cardSubtitle: `Practicum Assistant`,
            cardDetailedText: `Configure server Asterisk and OpenIMS for practicum Telecommunication Network simulation.\n Cyber Physical System is a Laboratory for researching and teaching college students about Cisco Packet Tracer, 
            GNS3, VOIP, WebRTC, NS3, and Goip/Trunking Asterisk. Also, led project of recruitment about the Internet of things, embedded systems, and networking. \n Responsible for doing an Internet of Things project and successfully serve the data from Firebase and implementing it 
            into Web Development and Mobile app with Kotlin`,
          },
        ]}
        mode="VERTICAL_ALTERNATING"
        theme={{
          titleColor: "white",
          primary: "#29303D",
          secondary: "#29303D",
          cardBgColor: "#29303D",
          subtitleColor: "white",
          titleColorActive: "white",
          cardSubtitleColor: "white",
          cardDetailsColor: "white",
          cardTitleColor: "red",
        }}
      />
    </section>
  );
};

export default Experience;
