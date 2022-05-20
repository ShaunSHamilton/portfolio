import { useState, useEffect } from "react";
import { Module } from "./module";

export const Modules = () => {
  const [modules, setModules] = useState([]);
  const [isAscending, setIsAscending] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [allModuleData, setAllModuleData] = useState([]);

  useEffect(() => {
    async function asyncFetchAndSort(sortFunc) {
      try {
        const data = await fetch(
          "https://raw.githubusercontent.com/ShaunSHamilton/portfolio/main/public/modules.json"
        );
        const moduleJson = await data.json();
        const sortedData = moduleJson.sort(sortFunc);
        setAllModuleData(sortedData);
        setModules(sortedData);
      } catch (err) {
        console.log(err);
        setAllModuleData([{ name: "Error", description: err }]);
        setModules([{ name: "Error", description: err }]);
      }
    }
    asyncFetchAndSort((a, b) => b.year - a.year);
  }, []);

  const handleAscending = () => {
    setModules(
      allModuleData.sort((a, b) => {
        if (!isAscending) {
          return a.year - b.year;
        } else {
          return b.year - a.year;
        }
      })
    );
    setIsAscending(!isAscending);
  };

  const handleFilter = (year) => {
    setIsFilterExpanded(!isFilterExpanded);
    if (year === 1) {
      setModules(allModuleData);
    } else {
      setModules(allModuleData.filter((mod) => mod.year === year));
    }
  };
  return (
    <div id="modules" className="row">
      <h2 className="heading-2">Modules</h2>
      <div
        id="btn-filter"
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Module Filter"
      >
        <button
          type="button"
          className="btn btn-secondary p-2 m-1"
          onClick={handleAscending}
        >
          {isAscending ? "Ascending" : "Descending"} Year
        </button>
        <div
          className={"btn-group" + (isFilterExpanded ? " show" : "")}
          role="group"
        >
          <button
            id="yearFilter"
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={isFilterExpanded}
            onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          >
            Filter
          </button>
          <div
            className={"dropdown-menu" + (isFilterExpanded ? " show" : "")}
            aria-labelledby="yearFilter"
          >
            <a
              className="dropdown-item"
              href="#!"
              onClick={() => handleFilter(1)}
            >
              All
            </a>
            <a
              className="dropdown-item"
              href="#!"
              onClick={() => handleFilter(2)}
            >
              Year 2
            </a>
            <a
              className="dropdown-item"
              href="#!"
              onClick={() => handleFilter(3)}
            >
              Year 3
            </a>
            <a
              className="dropdown-item"
              href="#!"
              onClick={() => handleFilter(4)}
            >
              Year 4
            </a>
            <a
              className="dropdown-item"
              href="#!"
              onClick={() => handleFilter(5)}
            >
              Year 5
            </a>
          </div>
        </div>
      </div>
      <div className="row card-deck justify-content-center w-100">
        {modules.map((module, i) => (
          <Module module={module} key={i} />
        ))}
      </div>
    </div>
  );
};
