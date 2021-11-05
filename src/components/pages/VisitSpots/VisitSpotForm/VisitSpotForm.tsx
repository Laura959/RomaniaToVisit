import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CardHeader, IconButton } from "@mui/material";
import { addNewVisitSpotToArray } from "../../../../actions/visitSpots/actionCreators";
import { displayOrHideSnackbar } from "../../../../actions/snackbarActions/snackbarActionCreators";
import CloseIcon from "@mui/icons-material/Close";
import { RootState } from "../../../../reducers/rootReducer";
import "./VisitSpotForm.css";

type FormValues = {
  name: string;
  image: string;
  location: string;
  county: string;
  description: string;
  town: string;
  mountain: string;
};

interface FormProps {
  onClose: () => void;
}

const VisitSpotForm: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch();
  const visitSpotsArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsArray
  );
  const countiesArrayState = useSelector(
    (state: RootState) => state.counties.countiesArray
  );

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
        console.log(data);
        const county = countiesArrayState.filter(
          (county) => county.county === data.county
        );
        const newVisitSpot = {
          id: visitSpotsArrayState.length + 1,
          name: data.name,
          image: data.image,
          location: data.location,
          description: data.description,
          county: data.county,
          countyId: county[0].id,
          nearTown: data.town === "yes",
          mountainArea: data.mountain === "yes",
          positiveReviews: [],
          negativeReviews: [],
        };
        dispatch(displayOrHideSnackbar(true));
        dispatch(addNewVisitSpotToArray(newVisitSpot));
        onClose();
      })}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        }
        title="Create new visit spot"
      />
      <label htmlFor="name">Name:</label>
      <input
        {...register("name", { required: "Name field is required" })}
        id="name"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <label htmlFor="image">Place IMG:</label>
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
      <label htmlFor="name">County:</label>
      <input
        {...register("county", { required: "County field is required" })}
        id="county"
      />
      {errors.county && <p>{errors.county.message}</p>}
      <label htmlFor="description">Description:</label>
      <textarea
        {...register("description", {
          required: "Description field is required",
        })}
        id="description"
        rows={4}
      ></textarea>
      {errors.description && <p>{errors.description.message}</p>}
      <div className="checkboxContainer">
        <div>
          <label htmlFor="town">Near town:</label>
          <input type="checkbox" {...register("town")} id="town" value="yes" />
        </div>
        <div>
          <label htmlFor="mountain">Near mountain:</label>
          <input
            type="checkbox"
            {...register("mountain")}
            id="mountain"
            value="yes"
          />
        </div>
      </div>
      <button className="formBtn">Submit</button>
    </form>
  );
};

export default VisitSpotForm;
