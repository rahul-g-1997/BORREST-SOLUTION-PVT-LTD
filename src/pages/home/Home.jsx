import { Container, Typography, Grid } from "@mui/material";
import "./home.css";
import undraw_developer_activity_img from "../../assets/images/undraw_developer_activity.svg";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { ResponsiveCard } from "../../components";

import cardsData from "../../data/cardsData";

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
            of trees. With our "Grow Trees Grow Money" philosophy, we offer a
            range of services that not only beautify your surroundings but also
            contribute to your financial well-being.
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
            width="77%"
          />
        </div>
      </section>
      <section className="projects" id="project__section">
        <Container>
          <Typography variant="h3" className="project-heading">
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
    </main>
  );
}
