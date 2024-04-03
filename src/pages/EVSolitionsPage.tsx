import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EVSolitionsData } from "../config/evSolutionsData";
import Footer from "../components/Footer";

interface EVSolution {
  banner: string;
  route: string;
  title: string;
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  fourthLine: string;
  logo?: string;
}

const EVSolitionsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<EVSolution | null>(null);

  useEffect(() => {
    if (id) {
      let selectedSolutions = EVSolitionsData.find(
        (solution) => solution.route === id
      );
      if (!selectedSolutions) {
        selectedSolutions = EVSolitionsData.find((solution) =>
          solution.route.includes(id)
        );
      }
      setData(selectedSolutions || null);
    }
  }, [id]);

  return (
    <>
      <div className="min-h-[120vh] container">
        <div className="flex items-center flex-col mt-11">
          <img
            src={`/${data?.banner}`}
            className="w-full object-cover"
            alt=""
          />
          <div>
            <h2 className="text-center text-2xl mt-5 mb-10">{data?.title}</h2>
            <p className="font-semibold my-5">{data?.firstLine}</p>
            <p className="font-semibold my-5">{data?.secondLine}</p>
            <p className="my-5">{data?.thirdLine}</p>
            <p className="my-5">{data?.fourthLine}</p>
          </div>
          {data?.logo && <img src={`/${data?.logo}`} width="400" alt="" />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EVSolitionsPage;
