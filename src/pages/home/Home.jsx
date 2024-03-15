import { Container, Typography, Grid } from "@mui/material";
import "./home.css";
import undraw_developer_activity_img from "../../assets/images/undraw_developer_activity.svg";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { ResponsiveCard } from "../../components";
import SimpleImageSlider from "react-simple-image-slider";


import cardsData from "../../data/cardsData";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";

const images = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
];

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
            width="77%"
          />
        </div>
      </section>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          {/* Adjust the number of columns displayed at different breakpoints */}
          <SimpleImageSlider
            width={"100%"}
            height={777}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </Grid>
      </Grid>

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
