import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Container, Typography, Grid } from "@mui/material";
import { ImageSlider, ResponsiveCard } from "../../components"; // Importing components
import cardsData from "../../data/cardsData"; // Importing data
import undraw_developer_activity_img from "../../assets/images/undraw_developer_activity.svg"; // Importing image file
import "./home.css"; // Importing styles

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="hero" id="hero__section">
        {/* Left side of the hero section */}
        <article className="left-hero">
          {/* Typing animation */}
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
          {/* Description */}
          <h1 className="desc">
            At Borrest Solution Pvt Ltd, we believe in the transformative power
            of trees. With our &quot;Grow Trees Grow Money&quot; philosophy, we
            offer a range of services that not only beautify your surroundings
            but also contribute to your financial well-being.
          </h1>
          {/* Social links */}
          <div className="soclinks">
            <NavLink to="/contacts">
              <button className="btn" type="button">
                Contact Me!
              </button>
            </NavLink>
          </div>
        </article>
        {/* Right side of the hero section */}
        <div className="right-hero">
          {/* Developer activity image */}
          <img
            id="hero__img"
            src={undraw_developer_activity_img}
            alt="right-hero"
          />
        </div>
      </section>
      {/* <TextSlider /> */}
      <ImageSlider />
      {/* Projects section */}
      <section className="projects" id="project__section">
        <Container sx={{ mt: -7 }}>
          {/* Projects heading */}
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
          {/* Grid for displaying project cards */}
          <Grid container spacing={3}>
            {/* Mapping through cardsData to render project cards */}
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
