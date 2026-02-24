const HeroSection = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="w-full h-full"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to DivineMed</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex flex-row gap-8 justify-center">
              <button type="button" className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
