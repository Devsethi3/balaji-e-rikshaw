import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import EvBackground from "./EvBackground";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <EvBackground />
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Vehicles</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 flex items-center gap-1 transition transform hover:translate-x-2 duration-200 hover:text-gray-700/75"
                      to="/vehicle/saarthi-star"
                    >
                      <IoIosArrowForward />
                      Saathi Star
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 flex items-center gap-1 transition transform hover:translate-x-2 duration-200 hover:text-gray-700/75"
                      to="/vehicle/saarthi-plus"
                    >
                      <IoIosArrowForward />
                      Saathi Plus
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/saarthi-dlx"
                    >
                      <IoIosArrowForward />
                      Saathi DLX
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/saarthi-e-auto"
                    >
                      <IoIosArrowForward />
                      Saarthi SHEVAK E-AUTO
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/saarthi-cargo-l5"
                    >
                      <IoIosArrowForward />
                      Saarthi SHEVAK CARGO L-5
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/saarthi-shaktiman"
                    >
                      <IoIosArrowForward />
                      Saathi Shaktiman
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/saarthi-e-cab"
                    >
                      <IoIosArrowForward />
                      Saarthi Spark
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Our Company</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/"
                    >
                      <IoIosArrowForward />
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/company-profile/about-us"
                    >
                      <IoIosArrowForward /> About Us{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/company-profile/vision-missions"
                    >
                      <IoIosArrowForward /> Vision & Missions{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/company-profile/awards-certificates"
                    >
                      <IoIosArrowForward /> Awards & Certificates{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/dealer-network"
                    >
                      <IoIosArrowForward /> Dealer Network{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/careers"
                    >
                      <IoIosArrowForward /> Career{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/contact"
                    >
                      <IoIosArrowForward /> Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Explore More
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/new-beginning"
                    >
                      <IoIosArrowForward />
                      New Beginning
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/image-gallery"
                    >
                      <IoIosArrowForward />
                      Image Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/ev-solutions/r&d"
                    >
                      <IoIosArrowForward />
                      R&D
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/ev-solutions/infrastructure"
                    >
                      <IoIosArrowForward />
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition transform hover:translate-x-2 duration-200 flex items-center gap-1 hover:text-rose-700/75"
                      to="/ev-solutions/why-us"
                    >
                      <IoIosArrowForward />
                      Why Us?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-lg font-medium text-gray-900">Our Company</p>

              <div className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
                <div className="flex justify-start gap-6 opacity-85">
                  <MdEmail size={20} />
                  <p className="leading-tight">akumar8oct.ak@gmail.com</p>
                </div>
              </div>
              <div className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
                <div className="flex justify-start gap-6 opacity-85">
                  <FaPhone size={20} />
                  <p className="leading-tight">9560307153</p>
                </div>
              </div>
              <div className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
                <div className="flex justify-start gap-6 opacity-85">
                  <BsWhatsapp size={20} />
                  <p className="leading-tight">8851500167</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-3 mt-8 mx-8">
                <FaFacebook
                  size={40}
                  className="p-2.5 cursor-pointer hover:bg-gray-200 rounded-full"
                />
                <FaTwitter
                  size={40}
                  className="p-2.5 cursor-pointer hover:bg-gray-200 rounded-full"
                />
                <FaInstagram
                  size={40}
                  className="p-2.5 cursor-pointer hover:bg-gray-200 rounded-full"
                />
                <FaYoutube
                  size={40}
                  className="p-2.5 cursor-pointer hover:bg-gray-200 rounded-full"
                />
              </div> */}
            </div>
          </div>
          <div className="my-4">
            <img
              src="/make_in_india_logo.png"
              width={120}
              height={120}
              alt=""
            />
          </div>
          <div className="flex my-2 flex-wrap items-center text-xs opacity-85 justify-between">
            <p>
              Copyrights © 2016-2023 SAARTHI E-RICKSHAW. All Rights Reserved.
            </p>
            <p>Design & Developed By Dev Sethi</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
