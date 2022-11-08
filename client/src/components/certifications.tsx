import React from "react";
import { useState } from "react";
import { CertCard } from "./cert-card";

export const Certifications = () => {
  const CERTIFICATIONS = [
    {
      title: "Introduction to Symbolic Math with MATLAB",
      description: "",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=d4d5c4af-9f94-420b-b5f8-be2ce01c2bd7",
      dateAquired: "08/2020",
    },
    {
      title: "Statistical Methods with MATLAB",
      description: "",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=0959300c-223d-47b3-8e85-5ba145f9e289",
      dateAquired: "08/2020",
    },
    {
      title: "Solving Ordinary Differential Equations with MATLAB",
      description: "",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=5b6e5907-d335-4866-b668-3f0c2b610b15",
      dateAquired: "07/2020",
    },
    {
      title: "Machine Learning Onramp",
      description: "",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=277f921a-b717-40f1-9bce-5b80b3cbd67e",
      dateAquired: "02/2020",
    },
    {
      title: "MATLAB Fundamentals",
      description: "",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=0a6892ed-9ceb-46fc-98e3-d62d073e92ed",
      dateAquired: "11/2019",
    },
    {
      title: "Simulink Onramp",
      description: "",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=063c785c-e8bf-40d3-afe3-5add336e81d9",
      dateAquired: "11/2019",
    },
    {
      title: "Deep Learning Onramp",
      description: "",
      link: "https://www.google.com",
      dateAquired: "03/2019",
    },
    {
      title: "ICDL",
      description: "International Drivers License",
      link: "",
      dateAquired: "04/2014",
    },
    {
      title: "Google Analytics",
      description: "",
      link: "https://analytics.google.com/analytics/academy/certificate/kcl0ND6-QYSvm8ytIBkVog",
      dateAquired: "05/2020",
    },
    {
      title: "Responsive Web Design",
      description: "",
      link: "https://www.freecodecamp.org/certification/sky020/responsive-web-design",
      dateAquired: "08/2019",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      description: "",
      link: "https://www.freecodecamp.org/certification/sky020/javascript-algorithms-and-data-structures",
      dateAquired: "10/2019",
    },
    {
      title: "Front End Libraries",
      description: "",
      link: "https://www.freecodecamp.org/certification/sky020/front-end-libraries",
      dateAquired: "07/2020",
    },
    {
      title: "APIs and Microservices",
      description: "",
      link: "https://www.freecodecamp.org/certification/sky020/apis-and-microservices",
      dateAquired: "07/2020",
    },
    {
      title: "Blockchain with Rust",
      description: "",
      link: "https://www.secondstate.io/certs/intro-202008/?contract=0xea0b5cf6d6fcd75a66f7c0d56162325ce776345f",
      dateAquired: "08/2020",
    },
    {
      title: "Quality Assurance",
      description: "",
      link: "https://www.freecodecamp.org/certification/sky020/quality-assurance-v7",
      dateAquired: "01/2021",
    },
  ].sort((a, b) => {
    if (Number(a.dateAquired.slice(3)) > Number(b.dateAquired.slice(3))) {
      return -1;
    } else if (
      Number(a.dateAquired.slice(3)) < Number(b.dateAquired.slice(3))
    ) {
      return 1;
    }
    if (Number(a.dateAquired.slice(0, 2)) > Number(b.dateAquired.slice(0, 2))) {
      return -1;
    } else if (
      Number(a.dateAquired.slice(0, 2)) < Number(b.dateAquired.slice(0, 2))
    ) {
      return 1;
    }
    return 0;
  });

  const [certToShow, setCertToShow] = useState(0);

  const handleSlideControl = (direction) => {
    setCertToShow(
      (CERTIFICATIONS.length + direction + certToShow) % CERTIFICATIONS.length
    );
  };
  return (
    <div
      id="certifications"
      className="row mw-100 m-1 justify-content-center overflow-hidden"
    >
      <h2 className="heading-2">Certifications</h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {/* <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> */}
          {CERTIFICATIONS.map((cert, i) => (
            <li
              key={i}
              data-target="#carouselExampleIndicators"
              data-slide-to={i}
              className={i === certToShow ? "active" : ""}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner" role="listbox">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard
              title={cert.title}
              description={cert.description}
              link={cert.link}
              dateAquired={cert.dateAquired}
              key={i}
              active={i === certToShow}
            />
          ))}
        </div>
        <a
          className="carousel-control-prev justify-content-start pr-6"
          href="#certifications"
          role="button"
          data-slide="prev"
          onClick={() => handleSlideControl(-1)}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next justify-content-end pl-6"
          href="#certifications"
          role="button"
          data-slide="next"
          onClick={() => handleSlideControl(1)}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
