const HomeContent = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-white min-h-[100vh] w-full">
        <div className="container flex flex-col gap-10">
          <h2 className="home-subtitle relative text-center text-3xl font-semibold">
            India's Leading E-Rickshaw Manufacturer.
          </h2>
          <p className="">
            SAARTHI e-Rickshaws are India's leading brand for launching
            e-Rickshaw (Battery Driven Technology) in the Country. We believe in
            our ideas to change the world of our long decades man pulled
            rickshaws in our country.
          </p>
          <p>
            With aim to manufacture a Rickshaw which is not man pulled and
            secondly also not effects our environment with any kind of pollution
            (Air and Noise). Our continues research & development results
            Saarthi e-Rickshaw birth.
          </p>
          <p className="text-start">
            And today we have wide variety of e-Rickshaws / Electric Vehicles
            (Battery Driven) under the brand name "SAARTHI" e-Rickshaw.
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
      <div className="h-[60vh]"></div>
    </>
  );
};

export default HomeContent;
