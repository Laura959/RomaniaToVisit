import { Button } from "@mui/material";
import "./AddButton.css";

interface ButtonProps {
  onAddCreate?: () => void;
  title: string;
  disabled?: boolean;
}

const AddButton: React.FC<ButtonProps> = (props) => {
  const { onAddCreate, title, disabled } = props;
  return (
    <div className="addButtonContainer">
      <Button
        variant="contained"
        size="large"
        onClick={onAddCreate}
        disabled={disabled}
      >
        {title}
      </Button>
    </div>
  );
};

export default AddButton;
