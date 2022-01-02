import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getCountiesDataArray } from "../../../../services/places-to-visit-service";
import { setCountiesArray } from "../../../../actions/countiesActions/countiesActionsCreators";
import { RootState } from "../../../../reducers/rootReducer";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";

import "./CountyDetails.css";

interface Params {
  name: string;
}

const CountyDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { name } = useParams<Params>();

  useEffect(() => {
    getCounties();
  }, []);

  const getCounties = async () => {
    setIsLoading(true);

    try {
      const response = await getCountiesDataArray();
      const countiesArray = response.data.counties;
      dispatch(setCountiesArray(countiesArray));
    } catch (e) {}

    setIsLoading(false);
  };

  const countiesArrayState = useSelector(
    (state: RootState) => state.counties.countiesArray
  );

  const selectedCounty = countiesArrayState.filter(
    (county) => county.id === +name
  );

  const renderCountyDataOrMessage = () => {
    if (countiesArrayState.length !== 0) {
      return (
        <>
          <h1 className="countyDetailsTitle">{selectedCounty[0].title}</h1>
          <div className="countyDetailsMiddleContainer">
            <div className="imageContainer">
              <img
                width="100%"
                src="https://lp-cms-production.imgix.net/2019-06/67a671f261d363136a282f23b98d7253-piata-sfatului.jpg"
                alt="Brasov"
              />
            </div>
            <div className="textContainer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quae amet et omnis, unde reiciendis blanditiis similique sunt
                enim dolore! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Aspernatur quasi, repellat tempora dignissimos, laborum
                aliquid eligendi autem et dolore ex quam hic voluptate vitae
                enim ducimus? Velit, delectus odio! Facere in voluptas, beatae
                neque natus necessitatibus esse, nihil inventore sapiente quae,
                culpa vero! Animi consectetur beatae aspernatur eveniet quas
                debitis. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Aliquam eius dicta sequi non. Sunt dolore doloribus
                ratione dolor corporis eveniet, quasi, nisi quidem nemo officiis
                vero saepe natus? Aperiam necessitatibus sint illo reiciendis
                quis numquam ducimus exercitationem voluptates, cupiditate
                officiis ipsam itaque ut repudiandae, atque soluta doloremque
                possimus rem perferendis voluptatibus expedita ea? Nostrum
                repellat magni maxime minus provident, eaque optio excepturi
                molestias unde, consequuntur ut commodi harum saepe vero,
                aliquid fuga iste! Accusamus sit odio nisi non? Temporibus,
                aliquid odit ab optio adipisci consequatur hic quisquam sit,
                eaque qui tenetur fugiat consectetur dolor laboriosam culpa
                repellendus id cum. Provident.
              </p>
            </div>
          </div>
          <div className="countyDetailsMiddleContainer">
            <div className="textContainer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ipsam ea porro perspiciatis harum libero a quas rerum explicabo
              dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Et deleniti enim repellendus cumque unde quisquam autem
              laboriosam, hic voluptas eum non, veniam voluptate necessitatibus,
              nulla illum voluptatibus est ipsa totam sint facere odit. Itaque
              nam ratione porro. Quae sed perferendis, reprehenderit porro
              necessitatibus ipsa? Omnis laudantium, libero quod esse magnam
              delectus totam quis recusandae. Adipisci quo, mollitia tempore,
              obcaecati iure ad expedita assumenda vitae praesentium illo
              necessitatibus fugiat beatae. Nam, consectetur, autem fugiat
              maxime aliquid praesentium non voluptate molestiae veritatis
              incidunt perspiciatis doloremque dicta animi, aliquam nobis rerum
              commodi impedit. Voluptatem accusantium dolores ipsa provident
              assumenda est sunt veniam amet.
            </div>
            <div className="imageContainer">
              <img
                width="100%"
                src="https://content.r9cdn.net/rimg/dimg/8e/20/6b3f5053-city-17704-16d62653abf.jpg?width=1750&height=1000&xhint=1561&yhint=1296&crop=true"
                alt="brasov"
              />
            </div>
          </div>
        </>
      );
    }
    return <p>Could not retrieve Counties data!</p>;
  };

  return (
    <div className="countyDetailsContainer">
      {/* <h1 className="countyDetailsTitle">{selectedCounty[0].title}</h1>
      <div className="countyDetailsMiddleContainer">
        <div className="imageContainer">
          <img
            width="100%"
            src="https://lp-cms-production.imgix.net/2019-06/67a671f261d363136a282f23b98d7253-piata-sfatului.jpg"
            alt="Brasov"
          />
        </div>
        <div className="textContainer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae
            amet et omnis, unde reiciendis blanditiis similique sunt enim
            dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur quasi, repellat tempora dignissimos, laborum aliquid
            eligendi autem et dolore ex quam hic voluptate vitae enim ducimus?
            Velit, delectus odio! Facere in voluptas, beatae neque natus
            necessitatibus esse, nihil inventore sapiente quae, culpa vero!
            Animi consectetur beatae aspernatur eveniet quas debitis. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eius
            dicta sequi non. Sunt dolore doloribus ratione dolor corporis
            eveniet, quasi, nisi quidem nemo officiis vero saepe natus? Aperiam
            necessitatibus sint illo reiciendis quis numquam ducimus
            exercitationem voluptates, cupiditate officiis ipsam itaque ut
            repudiandae, atque soluta doloremque possimus rem perferendis
            voluptatibus expedita ea? Nostrum repellat magni maxime minus
            provident, eaque optio excepturi molestias unde, consequuntur ut
            commodi harum saepe vero, aliquid fuga iste! Accusamus sit odio nisi
            non? Temporibus, aliquid odit ab optio adipisci consequatur hic
            quisquam sit, eaque qui tenetur fugiat consectetur dolor laboriosam
            culpa repellendus id cum. Provident.
          </p>
        </div>
      </div>
      <div className="countyDetailsMiddleContainer">
        <div className="textContainer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam
          ea porro perspiciatis harum libero a quas rerum explicabo dolor? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Et deleniti enim
          repellendus cumque unde quisquam autem laboriosam, hic voluptas eum
          non, veniam voluptate necessitatibus, nulla illum voluptatibus est
          ipsa totam sint facere odit. Itaque nam ratione porro. Quae sed
          perferendis, reprehenderit porro necessitatibus ipsa? Omnis
          laudantium, libero quod esse magnam delectus totam quis recusandae.
          Adipisci quo, mollitia tempore, obcaecati iure ad expedita assumenda
          vitae praesentium illo necessitatibus fugiat beatae. Nam, consectetur,
          autem fugiat maxime aliquid praesentium non voluptate molestiae
          veritatis incidunt perspiciatis doloremque dicta animi, aliquam nobis
          rerum commodi impedit. Voluptatem accusantium dolores ipsa provident
          assumenda est sunt veniam amet.
        </div>
        <div className="imageContainer">
          <img
            width="100%"
            src="https://content.r9cdn.net/rimg/dimg/8e/20/6b3f5053-city-17704-16d62653abf.jpg?width=1750&height=1000&xhint=1561&yhint=1296&crop=true"
            alt="brasov"
          />
        </div>
      </div> */}
      {isLoading ? <LoadingSpinner /> : renderCountyDataOrMessage()}
    </div>
  );
};

export default CountyDetails;
