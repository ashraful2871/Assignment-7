/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const PlayerSection = ({ handleSelectPlayer }) => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch("./player.json")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  return (
    <div className="mb-48">
      <div className="grid grid-cols-3 gap-6">
        {/* card 1 */}
        {information.map((info, idx) => (
          <div key={idx} className="card bg-base-100  shadow-xl border-2 p-4">
            <figure>
              <img
                className="w-full h-72 rounded-2xl object-cover"
                src={info.image}
                alt="player name"
              />
            </figure>
            <div className="card-body space-y-5">
              <div className="flex gap-4 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="card-title">{info.name}</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>{info.country}</div>
                </div>
                <div>
                  <span>{info.role}</span>
                </div>
              </div>

              <h2 className="font-bold">Rating</h2>
              <h3 className="font-bold">{info.battingType}</h3>
              <p className="font-bold">price: ${info.biddingPrice}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleSelectPlayer(info)}
                  className="btn hover:bg-[#E7FE29] font bold"
                >
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSection;
