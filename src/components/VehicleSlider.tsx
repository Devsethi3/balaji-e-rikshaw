import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close the menu whenever the route changes
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      label: "Vehicles",
      links: [
        { label: "Saarthi STAR", path: "vehicle/saarthi-star" },
        { label: "Saarthi PLUS", path: "vehicle/saarthi-plus" },
        { label: "Saarthi DLX", path: "vehicle/saarthi-dlx" },
        { label: "Saarthi SHEVAK E-AUTO", path: "vehicle/saarthi-e-auto" },
        { label: "Saarthi SHEVAK CARGO L-5", path: "vehicle/saarthi-cargo-l5" },
        { label: "Saarthi Shaktiman", path: "vehicle/saarthi-shaktiman" },
        { label: "Saarthi E-cab", path: "vehicle/saarthi-e-cab" },
      ],
    },
    {
      label: "Ev Solutions",
      links: [
        { label: "R&D", path: "/ev-solutions/r&d" },
        { label: "Infrastructure", path: "/ev-solutions/infrastructure" },
        { label: "Why Us", path: "/ev-solutions/why-us" },
      ],
    },
    {
      label: "Company Profile",
      links: [
        { label: "About Us", path: "/company-profile/about-us" },
        {
          label: "Vision & Missions",
          path: "/company-profile/vision-missions",
        },
        {
          label: "Awards and Certificates",
          path: "/company-profile/awards-certificates",
        },
      ],
    },
    { label: "Dealer Network", path: "/dealer-network" },
    { label: "New Beginning", path: "/new-beginning" },
    {
      label: "Media",
      links: [
        { label: "Image Gallery", path: "/image-gallery" },
        // { label: "Photo Gallery", path: "/media/photo-gallery" },
      ],
    },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="border-b sticky bg-white shadow-sm top-0 z-[100]">
        <HeaderTop />
        <div className="h-[12vh] flex items-center">
          <div className="flex items-center justify-between container">
            <Link to="/">
              <img src="/logo.png" width="150" height="150" alt="" />
            </Link>
            <div
              className={`nav-menu ${
                isOpen ? "show-menu" : "nav-menu"
              } flex items-center gap-52`}
            >
              <nav aria-label="Global">
                <ul className="flex nav-list text-xs uppercase items-center gap-8">
                  {menuItems.map((menuItem, index) => (
                    <MenuItem
                      key={index}
                      menuItem={menuItem}
                      toggleMenu={toggleMenu}
                    />
                  ))}
                </ul>
              </nav>
            </div>
            <div className="block md:hidden">
              <HiMenu
                onClick={toggleMenu}
                size={35}
                className="p-2 cursor-pointer rounded-md bg-gray-100"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const MenuItem = ({ menuItem, toggleMenu }: any) => {
  const handleClick = () => {
    toggleMenu();
  };

  if (typeof menuItem === "string") {
    return (
      <li key={menuItem}>
        <div>{menuItem}</div>
      </li>
    );
  } else if (menuItem.label) {
    if (menuItem.links && menuItem.links.length > 0) {
      return (
        <li key={menuItem.label} className="relative nav-wrapper">
          <Link
            to={menuItem.link}
            className="cursor-pointer nav-link py-16 hover:text-rose-500"
            onClick={handleClick}
          >
            {menuItem.label}
          </Link>
          <div className="absolute nav-link-wrapper top-[3.2rem] flex flex-col bg-rose-500 text-white px-4 py-2 uppercase rounded-sm shadow-md">
            {menuItem.links.map((link: any, index: any) => (
              <Link
                key={index}
                to={link.path}
                className="links whitespace-nowrap hover:transform hover:translate-x-2 transition py-2 text-sm"
                onClick={handleClick}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </li>
      );
    } else {
      return (
        <li key={menuItem.path}>
          <Link
            to={menuItem.path}
            className="nav-link py-8 hover:text-rose-500"
            onClick={handleClick}
          >
            {menuItem.label}
          </Link>
        </li>
      );
    }
  } else {
    return (
      <li key={menuItem.path}>
        <Link
          to={menuItem.path}
          className="nav-link py-8 hover:text-rose-500"
          onClick={handleClick}
        >
          {menuItem.label}
        </Link>
      </li>
    );
  }
};

export default Header;
