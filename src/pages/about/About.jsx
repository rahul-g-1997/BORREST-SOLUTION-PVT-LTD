import { Typography, Container, Grid } from "@mui/material";

export default function About() {
  return (
    // Container for About section with maximum width set to "md"
    <Container maxWidth="md" sx={{ marginTop: 3 }}>
      {/* Grid container with spacing between items */}
      <Grid container spacing={3} paddingTop={10}>
        {/* Grid item for the heading */}
        <Grid item xs={12}>
          {/* Typography for the heading */}
          <Typography
            sx={{
              color: "#046f3b",
              fontFamily: "Carter One, sans-serif",
            }}
            variant="h4"
            align="center"
            gutterBottom
          >
            About Borrest Solution Pvt Ltd
          </Typography>
        </Grid>
        {/* Grid item for the first paragraph */}
        <Grid item xs={12}>
          {/* Typography for the first paragraph */}
          <Typography variant="body1" paragraph>
            At Borrest Solution Pvt Ltd, we are passionate about the
            transformative power of trees. Our mission is to not only beautify
            landscapes but also to help our clients grow their wealth through
            strategic tree planting and maintenance.
          </Typography>
        </Grid>
        {/* Repeat similar structure for other paragraphs */}
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            With our &quot;Grow Trees Grow Money&quot; philosophy, we offer a
            range of services that cater to both the environmental and financial
            aspects of tree management. Whether you&apos;re looking to enhance
            your property&apos;s value, contribute to a greener environment, or
            simply enjoy the beauty of nature, we&apos;re here to help you
            achieve your goals.
          </Typography>
        </Grid>
        {/* Additional paragraphs */}
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            Our team of experienced professionals is committed to delivering
            excellence in every project we undertake. From selecting the right
            trees for your landscape to providing ongoing maintenance and care,
            we ensure that your investment yields long-term benefits.
          </Typography>
        </Grid>
        {/* Additional paragraphs */}
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            We understand the importance of sustainability and environmental
            responsibility. That&apos;s why we prioritize eco-friendly practices
            in all our operations, from sourcing materials to implementing green
            solutions in our projects.
          </Typography>
        </Grid>
        {/* Additional paragraphs */}
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            Beyond our commitment to trees and the environment, we value
            community engagement and social responsibility. We actively support
            local initiatives aimed at tree conservation, urban greening, and
            environmental education.
          </Typography>
        </Grid>
        {/* Final paragraph */}
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            Join us in our mission to make the world a greener, more prosperous
            place. Together, we can grow trees and grow money for a sustainable
            future.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
