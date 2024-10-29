const IntroVideoBottom = () => {
  return (
    <section className="mt-16 lg:mt-24" id="intro-video">
      <div className="mb-8 flex flex-col items-center px-5">
        <h1 className="mb-1 text-center text-3xl font-medium text-gray-800 text-opacity-80">
          Yoliday Adventures Unveiled
        </h1>
        <p className="text-center font-normal text-opacity-80">
          Sail Through A Voyage of Shared Experiences
        </p>
      </div>
      <div className="mx-5 h-96 rounded-2xl md:mx-10 lg:mx-56 lg:h-[500px]">
        {/* Video Section */}
        <iframe
          width="560"
          height="315"
          className="h-full w-full rounded-3xl"
          src="https://www.youtube.com/embed/cbixo8xttdw?si=wO8F5Q5An6o3Jv4R&enablejsapi=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default IntroVideoBottom;
