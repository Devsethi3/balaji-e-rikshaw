import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { profileData } from "../config/profileData";
import Footer from "../components/Footer";

interface Profile {
  title: string;
  route: string;
  banner: string;
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  fourthLine: string;
  subtitle: string;
}

const CompanyProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Profile | null>(null);

  useEffect(() => {
    if (id) {
      let selectedSolutions = profileData.find(
        (profile) => profile.route === id
      );
      if (!selectedSolutions) {
        selectedSolutions = profileData.find((solution) =>
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
          <div className="flex flex-col gap-10 mb-10">
            <h2 className="text-3xl text-center font-semibold border-b-4 border-rose-600">
              {data?.title}
            </h2>
            <p>{data?.firstLine}</p>
            <p>{data?.secondLine}</p>
            <p>{data?.thirdLine}</p>
            <p>{data?.fourthLine}</p>
            <p>{data?.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <img
              src="/1_icat_approved_e_rickshaw.png"
              alt="e-rickshaw"
              className="object-cover"
              width="400"
              height="300"
            />
            <img
              src="/2_fame_2_certified_e_rickshaw.png"
              alt="e-rickshaw"
              className="object-cover"
              width="400"
              height="300"
            />
            <img
              src="/3_india_first_e_rickshaw.png"
              alt="e-rickshaw"
              className="object-cover"
              width="400"
              height="300"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyProfilePage;
