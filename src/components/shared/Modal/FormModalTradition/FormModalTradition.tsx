import { useForm } from "react-hook-form";
import { CardHeader, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewTradition } from "../../../../actions/traditionActions/traditionActionCreators";
import { displayOrHideSnackbar } from "../../../../actions/snackbarActions/snackbarActionCreators";
import CloseIcon from "@mui/icons-material/Close";
import "../FormModal/FormModal.css";

type FormValues = {
  title: string;
  image: string;
  location: string;
  origin: string;
  description: string;
  town: string;
  mountain: string;
};

interface FormProps {
  onClose: () => void;
}

const FormModalTradition: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch();
  const { onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form
      className="formContainer"
      onSubmit={handleSubmit((data) => {
        const randomId = Math.floor(Math.random() * 100);
        const newTradition = {
          id: randomId,
          title: data.title,
          image: data.image,
          location: data.location,
          origin: data.origin,
          description: data.description,
        };
        dispatch(addNewTradition(newTradition));
        dispatch(displayOrHideSnackbar(true));
        onClose();
      })}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        }
        title="Add new tradition"
      />
      <label htmlFor="title">Title:</label>
      <input
        {...register("title", { required: "Title field is required" })}
        id="title"
      />
      {errors.title && <p>{errors.title.message}</p>}
      <label htmlFor="image">Image:</label>
      <input
        {...register("image", { required: "Image field is required" })}
        id="image"
        type="url"
      />
      {errors.image && <p>{errors.image.message}</p>}
      <label htmlFor="location">Location:</label>
      <input
        {...register("location", {
          required: "Location field is required",
          maxLength: {
            value: 20,
            message: "You exceeded the max length of 20 characters",
          },
        })}
        id="location"
      />
      {errors.location && <p>{errors.location.message}</p>}
      <label htmlFor="origin">Origin:</label>
      <input
        {...register("origin", {
          required: "Origin field is required",
        })}
        id="origin"
      />
      {errors.origin && <p>{errors.origin.message}</p>}
      <label htmlFor="description">Description:</label>
      <textarea
        {...register("description", {
          required: "Description field is required",
        })}
        id="description"
        rows={4}
      ></textarea>
      {errors.description && <p>{errors.description.message}</p>}
      <button className="formBtn">Submit</button>
    </form>
  );
};

export default FormModalTradition;
