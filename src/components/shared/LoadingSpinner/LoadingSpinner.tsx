import { CircularProgress } from "@mui/material";

import "./LoadingSpinner";

const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner">
      <CircularProgress color="warning" size={60} />
    </div>
  );
};

export default LoadingSpinner;
