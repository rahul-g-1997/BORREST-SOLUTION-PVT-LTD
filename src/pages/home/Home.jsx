import { Container, Typography, Grid } from "@mui/material";
import "./home.css";
import undraw_developer_activity_img from "../../assets/images/undraw_developer_activity.svg";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { ResponsiveCard } from "../../components";


import cardsData from "../../data/cardsData";

import sample from "../../assets/video/bgvideo.mp4";



export default function Home() {
  return (
    <main>
      <section className="hero" id="hero__section">
        <article className="left-hero">
          <TypeAnimation
            className="txt"
            sequence={[
              " Welcome to Borrest Solution Pvt. Ltd. ",
              1000,
              " Where Trees Mean Prosperity. ",
              1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <h1 className="desc">
            At Borrest Solution Pvt Ltd, we believe in the transformative power
            of trees. With our &quot;Grow Trees Grow Money&quot; philosophy, we
            offer a range of services that not only beautify your surroundings
            but also contribute to your financial well-being.
          </h1>
          <div className="soclinks">
            <NavLink to="/BORREST-SOLUTION-PVT-LTD/contacts">
              <button className="btn" type="button">
                Contact Me!
              </button>
            </NavLink>
          </div>
        </article>
        <div className="right-hero">
          <img
            id="hero__img"
            src={undraw_developer_activity_img}
            alt="right-hero"
          />
        </div>
      </section>

      <section className="projects" id="project__section">
        <Container sx={{ mt: -7 }}>
          <Typography
            variant="h4"
            className="project-heading"
            sx={{
              fontFamily: "Carter One, sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: "1px",
              color: "#038043",
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={3}>
            {cardsData.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                {/* Render a Card component for each item in the cardsData array */}
                <ResponsiveCard
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  image={card.image}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <Container maxWidth="lg" sx={{ marginTop: 5, marginBottom: 5 }}>
        <div className="videoWrapper">
          <video className="videoTag" autoPlay loop muted>
            <source src={sample} type="video/mp4" />
          </video>
        </div>
      </Container>

     
    </main>
  );
}
