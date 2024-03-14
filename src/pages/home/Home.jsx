import { Container, Typography, Grid } from "@mui/material"; // Import Grid from MUI
import "./home.css"; // Import the CSS file
import undraw_developer_activity_img from "../../assets/images/undraw_developer_activity.svg";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom"; // Import NavLink

// import hero_bg from "../../assets/images/hero_bg.png";

export default function Home() {
  return (
    <main>
      <section className="hero" id="hero__section">
        <article className="left-hero">
          <TypeAnimation
            className="txt"
            sequence={[
              // Same substring at the start will only be typed out once, initially
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
            {/* Use NavLink to navigate to the contact page */}
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
            {" "}
            {/* Use Grid container */}
            {/* Each card is a Grid item */}
            <Grid item xs={12} sm={6} md={3}>
              <div className="card" style={{ height: "auto" }}>
                <div className="card__cover">
                  <img
                    src="https://picsum.photos/290/150"
                    alt="Eauction"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="card__content">
                  <h4>
                    <b>Eauction</b>
                  </h4>
                  <p>
                    Join our online auctions to acquire premium nursery plants
                    and gardening essentials. Every plant you purchase is an
                    investment in a greener, more prosperous future.
                  </p>
                  <button className="cardBtn" type="button">
                    Link here --&gt;
                  </button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="card" style={{ height: "auto" }}>
                <div className="card__cover">
                  <img
                    src="https://picsum.photos/290/150"
                    alt="Eauction"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="card__content">
                  <h4>
                    <b>Nursery Plants</b>
                  </h4>
                  <p>
                    Explore our selection of top-quality nursery plants,
                    meticulously nurtured to perfection. Each tree planted
                    represents a step towards enhancing your environment and
                    increasing your property value.
                  </p>
                  <button className="cardBtn" type="button">
                    Link here --&gt;
                  </button>
                </div>
              </div>
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={3}>
              <div className="card" style={{ height: "auto" }}>
                <div className="card__cover">
                  <img
                    src="https://picsum.photos/290/150"
                    alt="Eauction"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="card__content">
                  <h4>
                    <b>Planting</b>
                  </h4>
                  <p>
                    Let us handle the planting process with expertise and care.
                    Every tree we plant is an investment in the future,
                    providing shade, beauty, and potential financial returns as
                    it grows.
                  </p>
                  <button className="cardBtn" type="button">
                    Link here --&gt;
                  </button>
                </div>
              </div>
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={3}>
              <div className="card" style={{ height: "auto" }}>
                <div className="card__cover">
                  <img
                    src="https://picsum.photos/290/150"
                    alt="Eauction"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="card__content">
                  <h4>
                    <b>Monitoring Reports</b>
                  </h4>
                  <p>
                    Stay updated on the growth and health of your trees with our
                    comprehensive monitoring reports. Track your investment's
                    progress and watch as your green assets flourish over time.
                  </p>
                  <button className="cardBtn" type="button">
                    Link here --&gt;
                  </button>
                </div>
              </div>
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={3}>
              <div className="card" style={{ height: "auto" }}>
                <div className="card__cover">
                  <img
                    src="https://picsum.photos/290/150"
                    alt="Eauction"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="card__content">
                  <h4>
                    <b>Felling</b>
                  </h4>
                  <p>
                    When it's time to remove a tree, trust our professionals to
                    do it safely and responsibly. We understand that each tree
                    represents an investment, and we ensure that the process is
                    handled with care and efficiency.
                  </p>
                  <button className="cardBtn" type="button">
                    Link here --&gt;
                  </button>
                </div>
              </div>
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={3}>
              <div className="card" style={{ height: "auto" }}>
                <div className="card__cover">
                  <img
                    src="https://picsum.photos/290/150"
                    alt="Eauction"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="card__content">
                  <h4>
                    <b>Fencing Solutions</b>
                  </h4>
                  <p>
                    Secure your investment with our custom fencing solutions.
                    Our durable fences not only protect your property but also
                    enhance its value and appeal.
                  </p>
                  <button className="cardBtn" type="button">
                    Link here --&gt;
                  </button>
                </div>
              </div>
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={3}>
              <div className="card">
                <div className="card__cover">
                  <img
                    src="https://picsum.photos/290/150"
                    alt="Eauction"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="card__content">
                  <h4>
                    <b>Miscellaneous Activities</b>
                  </h4>
                  <p>
                    From soil preparation to irrigation system installation, we
                    offer a range of services to support your tree-growing
                    endeavors. Let us help you maximize your investment and reap
                    the rewards for years to come.
                  </p>
                  <button className="cardBtn" type="button">
                    Link here --&gt;
                  </button>
                </div>
              </div>
            </Grid>
            {/* Repeat similar Grid items for other cards */}
          </Grid>
        </Container>
      </section>
    </main>
  );
}
