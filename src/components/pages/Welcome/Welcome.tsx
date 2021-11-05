import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";

import "./Welcome.css";

const Welcome = () => {
  return (
    <Grid
      className="container"
      container
      justifyContent="center"
      alignContent="center"
      spacing={0}
      direction="column"
      style={{ minHeight: "calc(100vh - 5rem)" }}
    >
      <Grid item>
        <h1>Do you want to experience an adventure?</h1>
      </Grid>
      <Grid item className="buttonGrid">
        <ButtonUnstyled className="welcomeBtn" size="large" variant="contained">
          <Link to="/visit-spots">Find Trip</Link>
        </ButtonUnstyled>
      </Grid>
    </Grid>
  );
};

export default Welcome;
