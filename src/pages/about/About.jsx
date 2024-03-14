import { Typography, Container, Grid } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: 11 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            About Borrest Solution Pvt Ltd
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            At Borrest Solution Pvt Ltd, we are passionate about the
            transformative power of trees. Our mission is to not only beautify
            landscapes but also to help our clients grow their wealth through
            strategic tree planting and maintenance.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            With our &quot;Grow Trees Grow Money&quot; philosophy, we offer a
            range of services that cater to both the environmental and financial
            aspects of tree management. Whether you&apos;re looking to enhance
            your property&apos;s value, contribute to a greener environment, or
            simply enjoy the beauty of nature, we&apos;re here to help you
            achieve your goals.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Our team of experienced professionals is committed to delivering
            excellence in every project we undertake. From selecting the right
            trees for your landscape to providing ongoing maintenance and care,
            we ensure that your investment yields long-term benefits.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            We understand the importance of sustainability and environmental
            responsibility. That&apos;s why we prioritize eco-friendly practices
            in all our operations, from sourcing materials to implementing green
            solutions in our projects.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Beyond our commitment to trees and the environment, we value
            community engagement and social responsibility. We actively support
            local initiatives aimed at tree conservation, urban greening, and
            environmental education.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Join us in our mission to make the world a greener, more prosperous
            place. Together, we can grow trees and grow money for a sustainable
            future.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
