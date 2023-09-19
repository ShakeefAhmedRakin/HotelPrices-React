import { useState } from "react";
import Navlink from "../Navlink/Navlink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", exact: true, title: "Home" },
    { id: 2, path: "/about", title: "About" },
    { id: 3, path: "/products", title: "Products" },
    { id: 4, path: "/contact", title: "Contact" },
    { id: 5, path: "/dashboard", title: "Dashboard" },
  ];

  return (
    <>
      <nav className="text-black bg-white p-6 md:p-3 shadow-lg fixed w-full top-0">
        <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <ul
          className={`flex flex-col md:flex-row gap-3 px-8 py-6 absolute md:static bg-white duration-500 top-[77px] w-full
        ${open ? "left-0" : "-left-[450px]"}`}
        >
          {routes.map((route) => (
            <Navlink key={route.id} route={route}></Navlink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
