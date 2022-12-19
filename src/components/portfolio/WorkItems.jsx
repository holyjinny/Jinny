import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <div className="work__wrapper">
        <a target="_blank" rel="noopener noreferrer" href={item.href}>
          <div className="work__wrapper-icon github">
            <div className="tooltip">{item.tooltip1}</div>
            <span>
              <i className="uil uil-github" />
            </span>
          </div>
        </a>

        <div className="work__wrapper-icon code">
          <div className="tooltip">{item.tooltip2}</div>
          <span>
            <i className="uil uil-arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
