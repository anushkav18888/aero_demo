import React from "react";
import Head from "next/head";
import {
  FaFacebookF,
  // FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBold,
} from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const teamMembers = [

  {
    name: "Pratham Patel",
    role: "DGSec",
    image: "/images/profilesImages/pratham.jpg",
    facebook:
      "https://www.facebook.com/pratham.patel.923?mibextid=2JQ9oc",
    linkedin: "https://www.linkedin.com/in/pratham-patel-20101b222",
    instagram: "https://instagram.com/luckyfer9?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
  },
   {
    name: "Sourabh Chouhan ",
    role: "Deputy Department General Secretary",
    image: "/images/profilesImages/sourabh.jpg",
    facebook:
      "https://www.facebook.com/sourabh.chouhan.77398?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/sourabh-chouhan-252510241",
    instagram: "https://instagram.com/sourabhchouhan2003?igshid=ZDdkNTZiNTM=",
  },
  
    {
    name: "Rajat Soni",
    role: "Deputy Department General Secretary (PG)",
    image: "/images/profilesImages/rajat.jpg",
    facebook: "https://www.facebook.com/Rajat.Sarkar.305069",
    linkedin: "https://www.linkedin.com/in/rajat-soni-96797474732317290305",
    instagram: "https://www.instagram.com/rajat_soni03/?hl=en",
  },
    {
    name: "Ninu Limboo",
    role: "Department PG Representative",
    image: "/images/profilesImages/ninu.jpeg",
    facebook: "https://www.facebook.com/pratham.patel.923?mibextid=2JQ9oc",
    linkedin: "https://www.linkedin.com/in/ninu-limboo-5407a11b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiJjQf5xQSfOTZ4spvvxD2Q%3D%3D",
    instagram: "https://www.instagram.com/naomi_khewa/",
  },
    {
    name: "Chowdegowda C N ",
    role: "PG Department Cultural secretary ",
    image: "/images/profilesImages/naganna.jpg",
    facebook: "https://www.facebook.com/profile.php?id=61550476272019",
    linkedin: "https://www.linkedin.com/in/chowdegowda-c-n-6a584a152",
    instagram: "https://www.instagram.com/chowdegowd/",
  },
  {
    name: "Jugal Shah",
    role: "Events Nominee",
    image: "/images/profilesImages/jugal.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=61550258878577&mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/jugal-shah-026ab1253",
    instagram: "https://instagram.com/jugal_0108?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  },
  {
    name: "Ronak sonkiya",
    role: "Events Nominee",
    image: "/images/profilesImages/ronak.JPG",
    facebook: "https://www.facebook.com/profile.php?id=100086681690731",
    linkedin: "https://www.linkedin.com/in/ronak-sonkiya-8a6660269",
    instagram: "https://instagram.com/ronak_sonkiya?igshid=MjEwN2IyYWYwYw==",
  },
    {
    name: "Arhat Gedam",
    role: "Events Nominee",
    image: "/images/profilesImages/arhat.JPG",
    facebook: "https://www.facebook.com/profile.php?id=100086681690731",
    linkedin: "https://www.linkedin.com/in/arhat-gedam-ba3a75253/",
    instagram: "https://www.instagram.com/arhat_293/",
  },
{
    name: "Anushka Verma",
    role: "Web Nominee",
    image: "/images/profilesImages/anushka.jpeg",
    facebook: "https://www.facebook.com/profile.php?id=100070530461675",
    linkedin: "https://www.linkedin.com/in/anushka-verma-534084217/",
    instagram: "https://www.instagram.com/anushkaverma18_/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  },
 {
    name: "Hrutik sanjay pokharkar  ",
    role: "Design Nominee",
    image: "/images/profilesImages/Hrutik sanjay pokharkar .jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100005450266635&mibextid=9R9pXO",
    linkedin: "https://www.linkedin.com/in/hrutik-pokharkar-9b445713a",
    instagram: "https://instagram.com/hrutik_1303?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  },
  {
    name: "Raghav Agrawal ",
    role: "Design Nominee",
    image: "/images/profilesImages/raghav.JPG",
    facebook:
      "https://www.facebook.com/profile.php?id=100085359233047",
    linkedin: "https://www.linkedin.com/in/raghavagraw/",
    instagram: "https://www.instagram.com/singhania5731/",
  },
  {
    name: "Ghoshank Nanhe",
    role: "Content Nominee",
    image: "/images/profilesImages/ghoshank.jpg",
    facebook:
      "https://www.facebook.com/ghoshank.nanhe.94",
    linkedin: "https://www.linkedin.com/in/ghoshank-nanhe-7b2124245",
    instagram: "https://instagram.com/always_ghoshank?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  },
  {
    name: "Adarsh Prajapati",
    role: "Media Nominee",
    image: "/images/profilesImages/Adarsh.JPG",
    facebook: "https://www.facebook.com/profile.php?id=61550057250823",
    linkedin: "https://www.linkedin.com/in/adarsh-prajapati-47911b228/",
    instagram: "https://www.instagram.com/moraldo785/",
  },

  {
    name: "Apurva Chavda",
    role: "PG OCR",
    image: "/images/profilesImages/apurva.JPG",
    facebook: "https://www.facebook.com/apurva.chavda.741?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/adchavda741",
    instagram: "https://instagram.com/adchavda741?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  },
  {
    name: "Kartik Vaishnav",
    role: "SARC Coordinator",
    image: "/images/profilesImages/karthik.JPG",
    facebook:
      "https://www.facebook.com/kartik.vaishnav.140?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/kartik-vaishnav-12a758251",
    instagram: "https://instagram.com/kartik__vaishnav?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  },
];
const team = () => {
  const iconHoverColor = "#9b59b6";
  return (
    <>
      <Header />
      <h1 className=" text-secondaryColor font font-semibold mt-5 text-4xl mb-8 text-center">
        Our Team Members
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // backgroundColor: "#18181B",
        }}
      >
          <Head>
  <link rel="icon" href="/plane5.png" />
</Head>
        {teamMembers.map((member) => (
          <div
            key={member.name}
            style={{
              width: "300px",
              margin: "20px",
              padding: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
              backgroundColor:"#18181B"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
            }}
            className="textColor"
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "100%",
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out",
                filter: "brightness(1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.filter = "brightness(0.95)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            />
            <div style={{ textAlign: "center" }}>
              <h3 style={{ margin: "10px 0", fontWeight: "bold" }}>
                {member.name}
              </h3>
              <p
                style={{
                  color: "#9b59b6",
                  fontSize: "16px",
                  margin: "5px 0 10px",
                }}
              >
                {member.role}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px 0",
              }}
            >
              <a
                href={member.facebook}
                target="_blank"
                style={{
                  color: "#777",
                  margin: "5px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <FaFacebookF className="icon headerLi" />
              </a>

              <a
                href={member.linkedin}
                target="_blank"
                style={{
                  color: "#777",
                  margin: "5px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <FaLinkedinIn className="icon headerLi" />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                style={{
                  color: "#777",
                  margin: "5px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { color: iconHoverColor },
                }}
              >
                <FaInstagram className="icon headerLi" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default team;
