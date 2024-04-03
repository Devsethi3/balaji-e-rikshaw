import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";

const ImageGallery = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="grid gap-10 my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-1.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-2.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-3.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-4.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-5.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-6.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-7.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-8.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-9.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-10.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-11.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
          <div className="w-[300px] relative overflow-hidden">
            <img
              src="/gallery-12.jpg"
              className="w-full hover:scale-105 cursor-pointer rounded-sm transition-all overflow-hidden"
              alt=""
              onClick={() => handleImageClick("/gallery-1.jpg")}
            />
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 top-32 z-30 flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div ref={modalRef} className="w-[600px]">
            <img
              src={selectedImage}
              alt=""
              className="max-w-full cursor-pointer max-h-full"
            />
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ImageGallery;
