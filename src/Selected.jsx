/* eslint-disable react/prop-types */
const Selected = ({ selectPlayer, handleRemovePlayer, handleIsActive }) => {
  return (
    <div className="mb-32">
      {selectPlayer.map((sel, idx) => (
        <div
          key={idx}
          className=" border-2 rounded-3xl flex justify-between items-center mb-5"
        >
          <div
            className="flex gap-5 
          p-5  
           items-center"
          >
            <div>
              <img
                className="object-cover w-28 h-28 rounded-full"
                src={sel.image}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{sel.name}</h3>
              <p className="text-sm mt-1 font-black">{sel.battingType}</p>
              <p className="font-semibold">
                <small>price: ${sel.biddingPrice}</small>
              </p>
            </div>
          </div>
          <div className="p-5">
            <button
              onClick={() => handleRemovePlayer(sel.playerId)}
              className="text-red-500 btn bg-white hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={() => handleIsActive("available")}
          className="btn bg-[#E7FE29] text-black text-base font-bold hover:bg-[#E7FE29] border-2 border-black"
        >
          add more player
        </button>
      </div>
    </div>
  );
};

export default Selected;
