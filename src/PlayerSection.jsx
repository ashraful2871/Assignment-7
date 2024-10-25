const PlayerSection = () => {
  return (
    <div className="mb-48">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Available Players</h1>
        </div>
        <div className="flex gap-5">
          <button className="btn bg-[#E7FE29] text-black text-base font-bold hover:bg-[#E7FE29]">
            Available
          </button>
          <button>selected (0)</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {/* card 1 */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">name</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
