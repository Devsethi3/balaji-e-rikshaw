import Footer from "../components/Footer";

const NewBeginning = () => {
  return (
    <>
      <div className="container">
        <img src="/new_beginning_banner.jpg" alt="" className="w-full my-5" />
        <h2 className="text-3xl text-center mb-10 -mt-10 font-medium tracking-tighter">
          New Beginning
        </h2>
        <div className="flex my-8 flex-col gap-10">
          <p>
            Saarthi E-Rickshaw, since the beginning of time, we have celebrated
            innovation and forefronted it because if we don't try new things,
            how would we know where we could be tomorrow ?
          </p>
          <p>
            Saarthi E-Rickshaw is deeply committed to delivering superior
            quality in all that we do. Our business model is typically based on
            customer's centric.{" "}
            <strong>
              This means providing the highest quality of attention and care at
              every level, from design conception to dealership and from
              purchase to service.
            </strong>
          </p>
          <p>
            What sets Saarthi E-Rickshaw apart from other e-rickshaws brands is
            our daring originality. We are courageous in accepting challenges,
            provocative in our ideas and solutions. With a new era of
            e-vehicles, we driving a new relationship between man and machines
            with our stronger body designs, exhilarating performances,
            transforming electric technologies and our imaginative
            craftsmanship.
          </p>
          <strong>
            Our new electric technology helps e-vehicles performance better,
            give you driving power at less battery consumption, comfortable ride
            with almost zero noise.
          </strong>
          <p>
            Our goal is to make an pollution-free, healthy lifestyle a reality
            for the times to come.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewBeginning;
