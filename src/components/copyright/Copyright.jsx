import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="ffff" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://data-engine.co/">
        DataEngine Pvt Ltd
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
