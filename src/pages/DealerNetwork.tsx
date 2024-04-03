import Footer from "../components/Footer";

const DealerNetwork = () => {
  return (
    <>
      <div className="container">
        <img src="/saarthi_e-rickshaws_banner.jpg" alt="" className="w-full" />
        <h2 className="text-3xl font-medium tracking-tighter my-5 text-center">
          DEALER NETWORK
        </h2>
        <div className="grid grid-cols-1 my-6 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-10">
            <p>
              Saarthi E-Rickshaw understands that Indian retail industry has
              become increasingly demanding and hence brands are looking for
              partners that delivers to all verticals of the trade. To be
              successful in India companies have no option but to build a
              distribution network bottom up.
            </p>
            <p>
              Our Company takes pride in having built a{" "}
              <strong>Pan India Distribution Network</strong>, in spite of India
              being such a diversified market place.
            </p>
            <p>
              <strong>Our Dealers Network</strong> : Andhra Pradesh, Assam,
              Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh,
              Jharkhand, Karnataka, Madhya Pradesh, Maharashtra, Punjab,
              Rajasthan, Tamil Nadu, Telangana, Uttar Pradesh, Uttarakhand and
              West Bengal.
            </p>
          </div>
          <div className="relative w-[450px]">
            <img
              src="/dealers_india_map.jpg"
              className="w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DealerNetwork;
