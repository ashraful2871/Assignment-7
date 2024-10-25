const Navbar = () => {
  return (
    <div className="mb-9">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src="../src/assets/assets/logo.png" alt="" />
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
              <a>$ 0 USD</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
