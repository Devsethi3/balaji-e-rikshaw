import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import VehicleSlider from "../components/VehicleSlider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const scrollRef = useRef(null);

  useGSAP(() => {
    gsap.from(".home-content", {
      opacity: 0,
      duration: 0.8,
      y: 150,
      stagger: 0.08,
    });
  }, []);

  useGSAP(() => {
    gsap.from(".home-subtitle", {
      x: 150,
      duration: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-secondary",
        start: "bottom bottom",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, [ScrollTrigger]);

  return (
    <>
      <main className="relative z-[10]">
        <div className="bg-gradient-to-t from-blue-50 to-rose-50">
          <div className="min-h-[80vh] container flex text-center flex-col items-center justify-center gap-10">
            <h1 className="text-3xl home-content lg:text-5xl font-semibold ">
              Welcome to Balaji E-Rickshaw - Your Trusted Companion for
              Eco-Friendly Travel Solutions!
            </h1>
            <p className="text-lg home-content max-w-[65rem]">
              Our range of E-Rickshaws is designed to meet the diverse needs of
              modern-day commuters, whether you're navigating through busy city
              streets or exploring suburban landscapes. With cutting-edge
              technology and superior craftsmanship, each of our vehicles
              promises a smooth, comfortable, and emission-free ride.
            </p>
            <div className="flex home-content items-center gap-6">
              <Link
                to="/vehicle/saarthi-star"
                className="py-3 px-6 bg-rose-500 hover:bg-rose-700 transition rounded-md text-white"
              >
                Explore More
              </Link>
              <Link
                to="/company-profile/about-us"
                className="py-3 px-6 hover:bg-gray-200 transition rounded-md "
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[80vh]">
          <HeroSlider />
        </div>
        <div
          className="flex home-secondary items-center justify-center bg-white min-h-[100vh] w-full relative"
          ref={scrollRef}
        >
          <div className="container flex flex-col gap-10">
            <h2 className="home-subtitle relative text-center text-2xl lg:text-3xl my-10 font-semibold">
              India's Leading E-Rickshaw Manufacturer.
            </h2>
            <p className="">
              BALAJI e-Rickshaws are India's leading brand for launching
              e-Rickshaw (Battery Driven Technology) in the Country. We believe
              in our ideas to change the world of our long decades man pulled
              rickshaws in our country.
            </p>
            <p>
              With aim to manufacture a Rickshaw which is not man pulled and
              secondly also not effects our environment with any kind of
              pollution (Air and Noise). Our continues research & development
              results Saarthi e-Rickshaw birth.
            </p>
            <p className="text-start">
              And today we have wide variety of e-Rickshaws / Electric Vehicles
              (Battery Driven) under the brand name "BALAJI" e-Rickshaw.
            </p>
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
        <div className="relative">
          {/* Background image */}
          <div className="bg-[url(/saarthi_banner_home.jpg)] bg-no-repeat bg-center bg-cover ">
            <div className="grid grid-cols-1 lg:grid-cols-2 container items-center text-white h-[60vh]">
              <div></div>
              <div className="flex flex-col gap-12">
                <h3 className="text-2xl text-center font-semibold">
                  Balaji E-Rickshaw "Ride With Trust"
                </h3>
                <p className="text-sm lg:text-base">
                  We are actively participates in all the electric vehicle
                  promotions exibitions & events all over the country to drive
                  faster adoption of electric vehicles to ensure a progressive
                  and greener future in the mobility system of the India. We are
                  committed towards creating better, enriching & empowering
                  experience for our customers, with continues R&D by our highly
                  experienced professionals and technicians. Building A Better
                  World... For Tomorrow !
                </p>
              </div>
            </div>
          </div>
          {/* Content after background image */}
        </div>
        <div className="flex items-center justify-center bg-white min-h-[70vh] w-full relative">
          <div className="container flex items-center flex-col gap-10">
            <h2 className="home-subtitle relative my-6 text-center max-w-xl text-2xl lg:text-3xl font-semibold">
              Best In Class Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
              <div className="w-[260px] flex flex-col gap-2 py-4">
                <img
                  src="/home_1_shockers.jpg"
                  alt="e-rickshaw"
                  className="object-cover"
                  width="330"
                />
                <h2 className="text-xl font-medium">Heavy Duty Shockers</h2>
                <p className="leading-tight">
                  Enjoy a smooth ride even on rough terrain with thses
                  telescopic hydraulic shockers.
                </p>
              </div>
              <div className="w-[260px] flex flex-col gap-2 py-4">
                <img
                  src="/home_2_carrier.jpg"
                  alt="e-rickshaw"
                  className="object-cover"
                  width="330"
                />
                <h2 className="text-xl font-medium">Metal Roof with Carrier</h2>
                <p className="leading-tight">
                  Carrying heavy baggage is no longer a hassle with a luggage
                  carrier fixed on the metal roof.
                </p>
              </div>
              <div className="w-[260px] flex flex-col gap-2 py-4">
                <img
                  src="/home_3_chassis.jpg"
                  alt="e-rickshaw"
                  className="object-cover"
                  width="330"
                />
                <h2 className="text-xl font-medium">Double Chassis</h2>
                <p className="leading-tight">
                  To support vehicle's mechanical components, we're first one to
                  introduce double chassis.
                </p>
              </div>
              <div className="w-[260px] flex flex-col gap-2 py-4">
                <img
                  src="/home_4_alloy_wheels.jpg"
                  alt="e-rickshaw"
                  className="object-cover"
                  width="330"
                />
                <h2 className="text-xl font-medium">Alloy Wheels</h2>
                <p className="leading-tight">
                  Looks sharp at every turn with our stylish and precisely cut
                  alloy wheels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="h-[60vh] container">
        <VehicleSlider />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
