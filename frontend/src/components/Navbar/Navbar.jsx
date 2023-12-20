import React, { useState } from "react";
import { Link } from "react-router-dom";


const Dropdown = ({ name, list }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      onFocus={() => setDropdown(true)}
      onBlur={() => setDropdown(true)}
    >
      <Link to={"/"} className="relative">
        {name}
      </Link>
      {dropdown && (
        <div className="absolute p-4 bg-slate-400 rounded-md mt-4 ">
          {list.map((element) => (
            <li>
              <Link className=" text-white transition ease-in-out" to={element.link}>{element.name}</Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="relative">
      <nav className=" flex justify-between w-full fixed top-0 left-0 bg-[#c7c7f8] p-4 font-light">
      
            <Link to={""}><h1>
        <svg width="64" height="30" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.9999 28L31.9999 5L4.99993 28V32.77C4.99041 32.9686 5.04029 33.1654 5.1432 33.3355C5.24611 33.5056 5.39737 33.6412 5.57767 33.7249C5.75797 33.8086 5.95913 33.8366 6.15546 33.8055C6.35179 33.7744 6.53438 33.6854 6.67992 33.55L12.9999 28.16V55C12.9999 56.0609 13.4214 57.0783 14.1715 57.8284C14.9216 58.5786 15.9391 59 16.9999 59H46.9999C48.0608 59 49.0782 58.5786 49.8284 57.8284C50.5785 57.0783 50.9999 56.0609 50.9999 55V28.16L57.0599 33.31C57.2317 33.4546 57.4412 33.5472 57.6638 33.577C57.8864 33.6067 58.1128 33.5723 58.3165 33.4778C58.5202 33.3833 58.6927 33.2326 58.8138 33.0435C58.9348 32.8543 58.9994 32.6346 58.9999 32.41V28Z" stroke="#AB94FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.8099 30.6896C42.1004 29.9794 41.2578 29.4159 40.3304 29.0315C39.4029 28.6471 38.4088 28.4492 37.4049 28.4492C36.401 28.4492 35.4069 28.6471 34.4794 29.0315C33.552 29.4159 32.7094 29.9794 31.9999 30.6896C31.2904 29.9794 30.4478 29.4159 29.5204 29.0315C28.5929 28.6471 27.5988 28.4492 26.5949 28.4492C25.591 28.4492 24.5969 28.6471 23.6694 29.0315C22.742 29.4159 21.8994 29.9794 21.1899 30.6896C18.1899 33.6896 19.0399 39.0396 21.3799 42.5496C23.7199 46.0596 29.5399 50.5496 31.3799 51.8796C31.5502 52.0025 31.7549 52.0686 31.9649 52.0686C32.1749 52.0686 32.3796 52.0025 32.5499 51.8796C34.4099 50.5096 40.2199 46.0896 42.5499 42.5496C44.8799 39.0096 45.7899 33.6796 42.8099 30.6896Z" stroke="#AB94FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        
        </h1></Link>
        <ul className="flex space-x-11" >
        
        
          {/* <li> <Dropdown/></li> */}
          <li>
            {" "}
            <Dropdown name={"blog"} list={blog} />
          </li>
          <li>
            <Link to={"/Contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/AboutUs"}>About us</Link>
          </li>
          <li style={{color:"purple", fontStyle:"italic"}}>
            <Link to={"/Login"}>Log In</Link>
          </li>
          <h4>or</h4>
          <li style={{color:"purple", fontStyle:"italic"}}>
            <Link to={"/Register"}>Join Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const blog = [
  {
    name: "news",
    link: "/News",
    
  },
  {
    name: "videos",
    link: "/video",
  },
  {
    name: "events",
    link: "/event",
  },
];

export default Navbar;
