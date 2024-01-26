import React from "react";
import "./Speakers.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from "@mui/icons-material/Instagram";
import RssFeedIcon from "@mui/icons-material/RssFeed";




const speakers = [
  {
    id: Date.now(),
    nom: "Smith",
    prenom: "John",
    photo:
      "https://www.pentalog.com/wp-content/uploads/2019/04/FredericLasnier_circle.png",
    MCT: "Gold",
    MVP: "Azure",
    Biography:
      "John Smith is a passionate technology enthusiast with expertise in cloud computing and machine learning.",
    facebook: "https://www.facebook.com/johnsmith",
    twitter: "https://twitter.com/john_smith",
    instagram: "https://www.instagram.com/john.smith",
    website: "https://www.johnsmith.com",
  },
  {
    id: Date.now() + 1,
    nom: "Doe",
    prenom: "Jane",
    photo: "https://www.pentalog.com/wp-content/uploads/2019/04/eric-gouin.jpg",
    MCT: "Silver",
    MVP: "Office 365",
    Biography:
      "Jane Doe is a seasoned professional in the field of productivity and collaboration tools, specializing in Office 365.",
    facebook: "https://www.facebook.com/janedoe",
    twitter: "https://twitter.com/jane_doe",
    instagram: "https://www.instagram.com/jane.doe",
    website: "https://www.janedoe.com",
  },
  {
    id: Date.now() + 2,
    nom: "Williams",
    prenom: "Chris",
    photo:
      "https://www.pentalog.com/wp-content/uploads/2019/04/sophie-lelarge.jpg",
    MCT: "Bronze",
    MVP: "Windows Development",
    Biography:
      "Chris Williams is a skilled developer with a focus on Windows development and user interface design.",
    facebook: "https://www.facebook.com/chriswilliams",
    twitter: "https://twitter.com/chris_will",
    instagram: "https://www.instagram.com/chris.will",
    website: "https://www.chriswilliams.dev",
  },
  {
    id: Date.now() + 3,
    nom: "Brown",
    prenom: "Emily",
    photo:
      "https://www.pentalog.com/wp-content/uploads/2019/04/Cornel_FATULESCU_circle1.png",
    MCT: "Gold",
    MVP: "Power BI",
    Biography:
      "Emily Brown is a data visualization expert, specializing in Power BI and business intelligence solutions.",
    facebook: "https://www.facebook.com/emilybrown",
    twitter: "https://twitter.com/emily_brown",
    instagram: "https://www.instagram.com/emily.brown",
    website: "https://www.emilybrownanalytics.com",
  },
  {
    id: Date.now() + 4,
    nom: "Johnson",
    prenom: "Michael",
    photo:
      "https://www.pentalog.com/wp-content/uploads/2019/04/Cosmina-Trifan1.png",
    MCT: "Silver",
    MVP: "SharePoint",
    Biography:
      "Michael Johnson is a SharePoint enthusiast with a passion for collaboration and document management.",
    facebook: "https://www.facebook.com/michaeljohnson",
    twitter: "https://twitter.com/michael_j",
    instagram: "https://www.instagram.com/michael.j",
    website: "https://www.michaeljohnson.tech",
  },
  {
    id: Date.now() + 5,
    nom: "Miller",
    prenom: "Sarah",
    photo:
      "https://www.pentalog.com/wp-content/uploads/2019/04/Aleth-Delcenserie.jpg",
    MCT: "Bronze",
    MVP: "Dynamics 365",
    Biography:
      "Sarah Miller is a Dynamics 365 expert, helping organizations streamline their business processes and enhance customer experiences.",
    facebook: "https://www.facebook.com/sarahmiller",
    twitter: "https://twitter.com/sarah_m",
    instagram: "https://www.instagram.com/sarah.m",
    website: "https://www.sarahmillerconsulting.com",
  },
  {
    id: Date.now() + 5,
    nom: "Miller",
    prenom: "Sarah",
    photo:
      "https://www.pentalog.com/wp-content/uploads/2019/04/Aleth-Delcenserie.jpg",
    MCT: "Bronze",
    MVP: "Dynamics 365",
    Biography:
      "Sarah Miller is a Dynamics 365 expert, helping organizations streamline their business processes and enhance customer experiences.",
    facebook: "https://www.facebook.com/sarahmiller",
    twitter: "https://twitter.com/sarah_m",
    instagram: "https://www.instagram.com/sarah.m",
    website: "https://www.sarahmillerconsulting.com",
  },
  {
    id: Date.now() + 5,
    nom: "Miller",
    prenom: "Sarah",
    photo:
      "https://www.pentalog.com/wp-content/uploads/2019/04/Aleth-Delcenserie.jpg",
    MCT: "Bronze",
    MVP: "Dynamics 365",
    Biography:
      "Sarah Miller is a Dynamics 365 expert, helping organizations streamline their business processes and enhance customer experiences.",
    facebook: "https://www.facebook.com/sarahmiller",
    twitter: "https://twitter.com/sarah_m",
    instagram: "https://www.instagram.com/sarah.m",
    website: "https://www.sarahmillerconsulting.com",
  },
  {
    id: Date.now() + 5,
    nom: "Miller",
    prenom: "Sarah",
    photo:
      "https://www.pentalog.com/wp-content/uploads/2019/04/Aleth-Delcenserie.jpg",
    MCT: "Bronze",
    MVP: "Dynamics 365",
    Biography:
      "Sarah Miller is a Dynamics 365 expert, helping organizations streamline their business processes and enhance customer experiences.",
    facebook: "https://www.facebook.com/sarahmiller",
    twitter: "https://twitter.com/sarah_m",
    instagram: "https://www.instagram.com/sarah.m",
    website: "https://www.sarahmillerconsulting.com",
  },
];

const Speakers = () => {
  return (
    <>
      <div className="speakers-title">
        <h1>Our Speakers </h1>
      </div>
      <div className="speakers-container">
        {speakers.map((speaker) => (
          <div className="speaker">
            <div className="image">
              <a href="#">
                <img
                  src={speaker.photo}
                  alt={speaker.nom + " " + speaker.prenom}
                />
                
              </a>
            </div>
            <div className="speakerInfo">
              <a href="#">
                <h2> {speaker.nom + " " + speaker.prenom} </h2>
              </a>
              <p>{speaker.MVP + " " + speaker.MCT}</p>
              <h5>About</h5>
              <p> {speaker.Biography}</p>
            </div>
            <div className="userSocialMedia">
              <ul>
                <li>
                  <a href="#">
                    <FacebookIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <XIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RssFeedIcon fontSize="large" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Speakers;
