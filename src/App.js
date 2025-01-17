import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faBookOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { contents } from "./contents";
import "./App.css";



const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="phone">
        {contents.map((content, index) => (
          <img
            key={index}
            src={content.src}
            alt={content.alt}
            className={`content ${index === activeIndex ? "show" : ""}`}
          />
        ))}
        <nav>
          <ul>
            <li
              className={`${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleItemClick(0)}
            >
              <FontAwesomeIcon icon={faHome} />
              <p>Home</p>
            </li>
            <li
              className={`${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleItemClick(1)}
            >
              <FontAwesomeIcon icon={faBox} />
              <p>Work</p>
            </li>
            <li
              className={`${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleItemClick(2)}
            >
              <FontAwesomeIcon icon={faBookOpen} />
              <p>Blog</p>
            </li>
            <li
              className={`${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleItemClick(3)}
            >
              <FontAwesomeIcon icon={faUsers} />
              <p>About Us</p>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default App;
