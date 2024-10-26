/* eslint-disable react/prop-types */
const Navbar = ({ freeCoin }) => {
  return (
    <div className="mb-9 mt-5">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src="https://i.ibb.co.com/Y0Cq7Ps/logo.png" alt="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
            <li>
              <a>$ {freeCoin} USD</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
