import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { vehicleData } from "../config/vehiclesData";
import Footer from "../components/Footer";

interface Vehicle {
  title: string;
  route: string;
  image: string;
  tableHeader: string[]; // Ensure tableHeader is an array of strings
  tableData: string[];
  showCaseImg: string[];
  comingSoon?: string;
}

const VehiclePage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Vehicle | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      let selectedVehicle = vehicleData.find((vehicle) => vehicle.route === id);
      if (!selectedVehicle) {
        selectedVehicle = vehicleData.find((vehicle) =>
          vehicle.route.includes(id)
        );
      }
      setData((selectedVehicle as any) || null);
    }
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div>
      {data && (
        <div>
          <div className="flex items-center flex-col justify-center min-h-[80vh]">
            <h2 className="text-3xl text-center uppercase mb-12 tracking-tighter">
              {data.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              <img src={`/${data.image}`} width="500" height="500" alt="" />
              <div>
                <div className="overflow-x-auto">
                  {data.tableData ? (
                    <>
                      <h3 className="text-xl font-medium text-center mb-4">
                        Technical Specifications :
                      </h3>
                      <table className="table-auto w-full">
                        <tbody>
                          {data.tableHeader.map((header, index) => (
                            <tr key={index}>
                              <td className="border border-rose-500 px-4 py-2">
                                {header}
                              </td>
                              <td className="border border-rose-500 px-4 py-2">
                                {data.tableData[index]}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  ) : (
                    <img
                      src={`/${data.comingSoon}`} // Corrected the source
                      width="400"
                      className="object-cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-10 container xl:grid-cols-3 items-center">
            {data.showCaseImg.map((img, index) => (
              <img
                className="cursor-pointer"
                key={index}
                src={`/${img}`}
                width="350"
                height="350"
                alt=""
                onClick={() => handleImageClick(img)} // Handle image click
              />
            ))}
          </div>
          <Footer />
        </div>
      )}
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 top-32 z-50 flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div
            className="bg-white w-[560px] grid place-items-center p-4"
            ref={modalRef}
          >
            <img
              src={`/${selectedImage}`}
              alt=""
              className="max-w-full cursor-pointer max-h-full"
            />
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiclePage;
