const EvBackground = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[url(/auto-bg.jpg)] flex items-center flex-wrap bg-no-repeat bg-cover bg-center h-[60vh] w-full relative">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="w-[55%]"></div>

          <h2 className="text-2xl lg:text-3xl text-center lg:text-end font-semibold text-white z-10">
            Moving Forward With Electric Energy...
          </h2>
        </div>
      </div>
    </>
  );
};

export default EvBackground;
