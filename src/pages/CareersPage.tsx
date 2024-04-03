import Footer from "../components/Footer";

const CareersPage = () => {
  return (
    <>
      <div className="container">
        <img src="/careers_banner.jpg" alt="" className="w-full my-5" />
        <h2 className="text-3xl text-center mb-10 -mt-10 font-medium tracking-tighter">
          Careers
        </h2>
        <div className="flex my-8 flex-col gap-10">
          <p>
            Saarthi E-Rickshaw is an organisation that sees you as an individual
            with knowledge, aspirations and a unique identity. Whether you are a
            graduate looking for opportunities to learn and grow, or an
            experienced professional looking for challenges, Saarthi E-Rickshaw
            is your final destination.
          </p>
          <p>
            We believe in delegating responsibility and work on smooth
            coordination and unity. Expand your horizon We actively seek out new
            ideas and hard work to develop solutions which continuously improves
            quality of our products.
          </p>
          <p>
            Feel Free To Drop Your Resume / CV at{" "}
            <strong>akumar8oct.ak@gmail.com</strong>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareersPage;
