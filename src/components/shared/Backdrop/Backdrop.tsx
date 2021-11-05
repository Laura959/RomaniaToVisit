import "./Backdrop.css";

interface BackdropProps {
  onBackdropClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  const { onBackdropClick } = props;
  return <div className="backdrop" onClick={onBackdropClick} />;
};

export default Backdrop;
