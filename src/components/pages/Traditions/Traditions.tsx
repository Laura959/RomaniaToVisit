import { useEffect, useState } from "react";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import Modal from "../../shared/Modal/Modal";
import AddButton from "../../shared/AddCreateButton/AddButton";
import TraditionCard from "./TraditionCard/TraditionCard";
import Snackbar from "../../shared/Snackbar/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { setTraditionsArray } from "../../../actions/traditionActions/traditionActionCreators";
import { openModal } from "../../../actions/modalActions/modalActionCreators";
import { getTraditionsDataArray } from "../../../services/places-to-visit-service";
import { TraditionData } from "../../../models/dataModels";
import { RootState } from "../../../reducers/rootReducer";
import "./Traditions.css";

const Traditions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const traditionsArrayState = useSelector(
    (state: RootState) => state.traditions.traditionsArray
  );
  const isUserAdmin = useSelector(
    (state: RootState) => state.authentification.isAdmin
  );

  useEffect(() => {
    getTraditionsArray();
  }, []);

  const getTraditionsArray = async () => {
    setIsLoading(true);
    const response = await getTraditionsDataArray();
    const traditionsData = response.data.traditions;
    dispatch(setTraditionsArray(traditionsData));
    setIsLoading(false);
  };

  const renderTraditionsOrMessage = () => {
    if (traditionsArrayState.length !== 0) {
      return (
        <div className="traditionCardsContainer">
          {traditionsArrayState.map((tradition: TraditionData) => (
            <TraditionCard key={tradition.id} traditionData={tradition} />
          ))}
        </div>
      );
    }
    return <p>Could not retrieve Traditions data!</p>;
  };

  return (
    <>
      {isUserAdmin && (
        <AddButton
          title="Add Tradition"
          onAddCreate={() => {
            dispatch(openModal({ modalType: "TRADITIONFORM" }));
          }}
        />
      )}
      <Snackbar text="Tradition was successfully added!" />
      {!isLoading ? renderTraditionsOrMessage() : <LoadingSpinner />}
      <Modal />
    </>
  );
};

export default Traditions;
