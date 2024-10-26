import PlayerSection from "./PlayerSection";
import Selected from "./Selected";

/* eslint-disable react/prop-types */
const ButtonContainer = ({
  handleIsActive,
  isActive,
  handleSelectPlayer,
  selectPlayer,
  handleRemovePlayer,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          {isActive.active ? (
            <h1 className="font-bold text-2xl">Available Players</h1>
          ) : (
            <h1 className="font-bold text-2xl">
              Selected Player ({selectPlayer.length}/6)
            </h1>
          )}
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => handleIsActive("available")}
            className={`${
              isActive.active
                ? "btn bg-[#E7FE29] text-black text-base font-bold hover:bg-[#E7FE29]"
                : "btn"
            }`}
          >
            Available
          </button>
          <button
            className={`${
              isActive.active
                ? " btn"
                : "btn bg-[#E7FE29] text-black text-base font-bold hover:bg-[#E7FE29]"
            }`}
            onClick={() => handleIsActive("selected")}
          >
            selected ({selectPlayer.length})
          </button>
        </div>
      </div>
      {isActive.active ? (
        <PlayerSection handleSelectPlayer={handleSelectPlayer}></PlayerSection>
      ) : (
        <Selected
          selectPlayer={selectPlayer}
          handleRemovePlayer={handleRemovePlayer}
          isActive={isActive}
          handleIsActive={handleIsActive}
        ></Selected>
      )}
    </div>
  );
};

export default ButtonContainer;
