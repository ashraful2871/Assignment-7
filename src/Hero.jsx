/* eslint-disable react/prop-types */
const Hero = ({ handleFreeCoin }) => {
  return (
    <div
      className="hero p-32 mb-20"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/x8tFwZN/Frame-8.png)",
      }}
    >
      <div className=" mt-48 text-center">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-[#ffff]">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5 text-2xl font-medium text-[#ffffff83]">
            Beyond Boundaries Beyond Limits
          </p>

          <button
            onClick={() => handleFreeCoin(15000)}
            className="btn bg-[#E7FE29] text-black text-base font-bold hover:bg-[#E7FE29]"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
