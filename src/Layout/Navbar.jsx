import { Link } from "react-router-dom";
import logo from "../assets/logo/G-trade.svg";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link to="feature">Features</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="fixed w-full z-50  bg-[#00150f]">
        <div className="navbar max-w-[1440px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <a>
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="gap-8 navbar-end">
            <div className="hidden navbar-center lg:flex">
              <ul className="px-1 text-white menu menu-horizontal">
                {navLinks}
              </ul>
            </div>
            <a className="btn border-none  bg-[#00d094]">Join Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
