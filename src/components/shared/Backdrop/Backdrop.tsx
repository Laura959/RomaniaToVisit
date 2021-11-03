import "./Backdrop.css";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  const { onClick } = props;
  return <div className="backdrop" onClick={onClick} />;
};

export default Backdrop;
