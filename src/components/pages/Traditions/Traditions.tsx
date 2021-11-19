import { useEffect, useState } from "react";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import useModal from "../../../hooks/useModal";
import AddButton from "../../shared/AddCreateButton/AddButton";
import TraditionCard from "./TraditionCard/TraditionCard";
import { useDispatch, useSelector } from "react-redux";
import { setTraditionsArray } from "../../../actions/traditionActions/traditionActionCreators";
import { getTraditionsDataArray } from "../../../services/places-to-visit-service";
import { TraditionData } from "../../../models/dataModels";
import { RootState } from "../../../reducers/rootReducer";
import "./Traditions.css";

const Traditions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { openModalHandler } = useModal();
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
            openModalHandler("TRADITIONFORM");
          }}
        />
      )}
      {!isLoading ? renderTraditionsOrMessage() : <LoadingSpinner />}
    </>
  );
};

export default Traditions;
