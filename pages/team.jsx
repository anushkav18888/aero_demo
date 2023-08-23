import React from "react";
import {
  FaFacebookF,
  // FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBold,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";

const teamMembers = [
  {
    name: "Gourav Kumar",
    role: "DGSec",
    image: "/images/profilesImages/Gourav.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100063702969133&mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/gourav-kumar-950240193",
    instagram: "https://www.instagram.com/_kr.gourav/",
  },
  {
    name: "Srinivas Rishi Datta S",
    role: "DDGSec UG",
    image: "/images/profilesImages/rishi.jpg",
    facebook: "https://www.facebook.com/rishi.datta.58",
    linkedin: "https://www.linkedin.com/in/rishi-datta-a8ab75213",
    instagram: "https://instagram.com/risshhiii_?igshid=YjNmNGQ3MDY",
  },
  {
    name: "Krishna Kishore",
    role: "DDGSec PG",
    image: "/images/profilesImages/kishore.jpg",
    facebook: "https://www.facebook.com/kishore.kishu.777/",
    linkedin: "https://www.linkedin.com/in/krishna-kishore2207/",
    instagram: "https://www.instagram.com/quirkyraven/",
  },
  {
    name: "Srihari Kuchika",
    role: "Department PG Representative",
    image: "/images/profilesImages/srihari.jpg",
    facebook: "#",
    linkedin: "https://www.linkedin.com/in/srihari-kuchika-95a628208",
    instagram: "https://www.instagram.com/srihari00/",
  },
  {
    name: "Manish Kumar Das",
    role: "Ph.D. Representative",
    image: "/images/profilesImages/manish.jpg",
    facebook: "https://www.facebook.com/DasKBMkumar?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/manish-kumar-das-b41423154",
    instagram: "https://www.instagram.com/kbdas_manish/",
  },
  {
    name: "Prahtam Patel",
    role: "Events Head",
    image: "/images/profilesImages/pratham.jpg",
    facebook: "https://www.facebook.com/pratham.patel.923?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/pratham-patel-20101b222",
    instagram: "https://www.instagram.com/luckyfer9/",
  },
  {
    name: "Amit Rohila",
    role: "Web Nominee",
    image: "/images/profilesImages/amit.jpeg",
    facebook: "https://www.facebook.com/profile.php?id=100081489781474",
    linkedin: "https://www.linkedin.com/in/amit-kumar-0b0540234/",
    instagram: "https://www.instagram.com/amit_rohila33/",
  },
  {
    name: "Yatarth Manchanda",
    role: "Web Nominee",
    image: "/images/profilesImages/yatarth.jpg",
    facebook: "https://www.facebook.com/profile.php?id=100090041949870",
    linkedin: "https://www.linkedin.com/in/yatharth-manchanda-6a4995223/",
    instagram: "https://instagram.com/yat_25.1?igshid=ZDdkNTZiNTM=",
  },
  {
    name: "Varun Gupta",
    role: "Events Nominee",
    image: "/images/profilesImages/varun.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100089697277826&mibextid=LQQJ4d",
    linkedin: "https://www.linkedin.com/in/varun-gupta-8963a8223",
    instagram: "https://www.instagram.com/varun__04/",
  },
  {
    name: "Arhat Gedam",
    role: "Events Nominee",
    image: "/images/profilesImages/Arhat Gedam.jpg",
    facebook: "https://www.facebook.com/profile.php?id=100086681690731",
    linkedin: "https://www.linkedin.com/in/arhat-gedam-ba3a75253/",
    instagram: "https://www.instagram.com/arhat_293/",
  },
  {
    name: "Patil Amey Sadanand",
    role: "Events Nominee",
    image: "/images/profilesImages/amey.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100073405399124&mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/amey-patil-ab77b622b",
    instagram: "https://www.instagram.com/ameyy_patil/",
  },
  {
    name: "Saurabh Prajapati",
    role: "Design Nominee",
    image: "/images/profilesImages/saurabh.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100090964253443&mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/saurabh-prajapati-526084252",
    instagram: "https://instagram.com/prajapatisaurabh2002?igshid=ZDdkNTZiNTM=",
  },
  {
    name: "Sourabh Chouhan",
    role: "Design Nominee",
    image: "/images/profilesImages/sourabh.jpg",
    facebook: "https://www.facebook.com/sourabh.chouhan.77398?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/sourabh-chouhan-252510241",
    instagram: "https://instagram.com/sourabhchouhan2003?igshid=ZDdkNTZiNTM",
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
    name: "Khushpreet Kaur",
    role: "Media Nominee",
    image: "/images/profilesImages/khushpreet.jpg",
    facebook: "https://www.facebook.com/khushpreet.kaur.376695?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/khuspreet-kaur-123710155/",
    instagram: "https://instagram.com/khuspreet_13_",
  },
  {
    name: "Raviteja Y S",
    role: "Dept. PG Cultural Secretary",
    image: "/images/profilesImages/raviteja.jpg",
    facebook: "https://www.facebook.com/raviteja.ys",
    linkedin: "https://www.linkedin.com/in/ravitejays/",
    instagram: "https://www.instagram.com/raviteja.iitb",
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
    name: "Vikash Kumar",
    role: "SARC Coordinator",
    image: "/images/profilesImages/vikash.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100074389008829&mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/vikash-swami-251520241",
    instagram: "https://instagram.com/v_s__121?igshid=ZDdkNTZiNTM=",
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
