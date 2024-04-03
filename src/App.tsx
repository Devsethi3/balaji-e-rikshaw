import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import VehiclePage from "./pages/VehiclePage";
import EVSolitionsPage from "./pages/EVSolitionsPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import DealerNetwork from "./pages/DealerNetwork";
import NewBeginning from "./pages/NewBeginning";
import CareersPage from "./pages/CareersPage";
import ImageGallery from "./pages/ImageGallery";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicle/:id" element={<VehiclePage />} />
        <Route path="/ev-solutions/:id" element={<EVSolitionsPage />} />
        <Route path="/company-profile/:id" element={<CompanyProfilePage />} />
        <Route path="/dealer-network" element={<DealerNetwork />} />
        <Route path="/new-beginning" element={<NewBeginning />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
