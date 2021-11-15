import { Link } from "react-router-dom";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";

import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="container">
      <div>
        <h1>Do you want to experience an adventure?</h1>
      </div>
      <div className="buttonGrid">
        <ButtonUnstyled className="welcomeBtn" size="large" variant="contained">
          <Link to="/visit-spots">Find Trip</Link>
        </ButtonUnstyled>
      </div>
    </div>
  );
};

export default Welcome;
