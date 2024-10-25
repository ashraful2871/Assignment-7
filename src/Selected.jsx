/* eslint-disable react/prop-types */
const Selected = ({ selectPlayer }) => {
  return (
    <div>
      {selectPlayer.map((sel, idx) => (
        <div
          key={idx}
          className="flex gap-5 
          border-2 p-5  
          rounded-3xl items-center mb-5"
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
            <p className="text-sm mt-1">{sel.battingType}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selected;
