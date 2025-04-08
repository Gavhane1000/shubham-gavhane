import React, { useEffect, useState, useLayoutEffect } from "react";
import "./NavBar.css";
import { Link, Events, scrollSpy } from "react-scroll";

function NavBar() {
  const [offset, setOffset] = useState(-120); // fallback

  useLayoutEffect(() => {
    const nav = document.querySelector(".navbar");
    if (nav) {
      const height = nav.offsetHeight;
      setOffset(-height); // Set to negative value
    }
  }, []);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {
      scrollSpy.update();
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // 👇 Define custom offsets per section
  const navItems = [
    { id: "home", label: "Home", extraOffset: 0 },
    { id: "about", label: "About", extraOffset: 15 }, // 👈 Scrolls a bit more up
    { id: "portfolio", label: "Portfolio", extraOffset: 15 },
    { id: "contact", label: "Contact", extraOffset: 15 },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map(({ id, label, extraOffset }) => (
          <li key={id}>
            <Link
              to={id}
              spy={true}
              smooth={true}
              offset={offset + extraOffset}
              duration={800}
              className="nav-item"
              activeClass="active"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
