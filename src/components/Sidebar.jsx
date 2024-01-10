import React, { useState } from "react";
import { FaHome, FaBars, FaAngleDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Patient",
    icon: <FaHome />,
 
  },
  {
    path: "/Appointment",
    name: "Appointment",
    icon: <FaHome />,   
    subRoutes: [
        {
          path: "/Appointment/IPD",
          name: "IPD",
          icon: <FaHome />,
        },
        {
          path: "/Appointment/OPD",
          name: "OPD",
          icon: <FaHome />,
        },
      ],
  },
  {
    path: "/Doctor",
    name: "Doctor",
    icon: <FaHome />,
  },
  {
    path: "/Inventory",
    name: "Inventory",
    icon: <FaHome />,
  },
  {
    path: "/Pharmacy",
    name: "Pharmacy",
    icon: <FaHome />,
  },
];
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="main_container">
      <motion.div
        animate={{
          width: isOpen ? "250px" : "100px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
          },
        }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && (
            <motion.h1
              animate="show"
              exit="hidden"
              variants={showAnimation}
              className="logo"
            >
              CareChainAI
            </motion.h1>
          )}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <section className="routes">
          {routes.map((route , index) => {
            if (route.subRoutes) {
              return <SidebarMenu   setIsOpen={setIsOpen}
              route={route}
              showAnimation={showAnimation}
              isOpen={isOpen}/> 
            }
            return (
              <NavLink
                activeClassName="active"
                to={route.path}
                key={index}
                className="link"
              >
                <div className="icons">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      variants={showAnimation}
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
