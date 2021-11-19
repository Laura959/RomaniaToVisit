import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardHeader, IconButton } from "@mui/material";
import { setCountiesArray } from "../../../../actions/countiesActions/countiesActionsCreators";
import { addNewVisitSpotToArray } from "../../../../actions/visitSpots/actionCreators";
import CloseIcon from "@mui/icons-material/Close";
import useSnackbar from "../../../../hooks/useSnackbar";
import { RootState } from "../../../../reducers/rootReducer";
import FormSelectInput from "./FormSelectInput/FormSelectInput";
import { CountyData } from "../../../../models/dataModels";
import { getCountiesDataArray } from "../../../../services/places-to-visit-service";

import "./FormModal.css";

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
  onFormModalClose: () => void;
}

const FormModal: React.FC<FormProps> = (props) => {
  const { onFormModalClose } = props;
  const [countyDetails, setCountyDetails] = useState<CountyData | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { openSnackbarHandler } = useSnackbar();
  const dispatch = useDispatch();
  const visitSpotsArrayState = useSelector(
    (state: RootState) => state.visitSpots.visitSpotsArray
  );

  const setCountyValue = (countyDetails: CountyData) => {
    setCountyDetails(countyDetails);
  };

  useEffect(() => {
    getCounties();
  }, []);

  const getCounties = async () => {
    const response = await getCountiesDataArray();
    const countiesArray = response.data.counties;
    dispatch(setCountiesArray(countiesArray));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form
      className="formContainer"
      onSubmit={handleSubmit((data) => {
        setSubmitted(true);

        const newVisitSpot = {
          id: visitSpotsArrayState.length + 1,
          name: data.name,
          image: data.image,
          location: data.location,
          description: data.description,
          county: countyDetails!.county,
          countyId: countyDetails!.id,
          nearTown: data.town === "yes",
          mountainArea: data.mountain === "yes",
          positiveReviews: [],
          negativeReviews: [],
        };
        dispatch(addNewVisitSpotToArray(newVisitSpot));
        onFormModalClose();
        setSubmitted(false);
        openSnackbarHandler("New Visit Spot was successfully created!");
      })}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={onFormModalClose}>
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
      <FormSelectInput onCountySelect={setCountyValue} />
      {!countyDetails && submitted && <p>County field is required!</p>}
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
      <button className="formBtn" onClick={() => setSubmitted(true)}>
        Submit
      </button>
    </form>
  );
};

export default FormModal;
