import { useState, useEffect, useRef } from "react";
import { ModuleType } from "../types";
import { Module } from "./module";

export const Modules = () => {
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [isAscending, setIsAscending] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [allModuleData, setAllModuleData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    async function asyncFetchAndSort(sortFunc) {
      try {
        const data = await fetch(
          "https://raw.githubusercontent.com/ShaunSHamilton/portfolio/main/client/public/modules.json"
        );
        const moduleJson = await data.json();
        const sortedData = moduleJson.sort(sortFunc);
        setAllModuleData(sortedData);
        setModules(sortedData);
      } catch (err) {
        console.log(err);
        setError(error);
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

  const handleFilter = (year: number) => {
    setIsFilterExpanded(!isFilterExpanded);
    if (year === 1) {
      setModules(allModuleData);
    } else {
      setModules(allModuleData.filter((mod) => mod.year === year));
    }
  };
  return (
    <div id="modules">
      <h2>Modules</h2>
      <fieldset
        id="btn-filter"
        className="btn-group"
        role="group"
        aria-label="Module Filter"
      >
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleAscending}
        >
          {isAscending ? "Ascending" : "Descending"} Year
        </button>
        <fieldset className="btn-group" role="group">
          <button
            id="yearFilter"
            type="button"
            className={
              "btn btn-secondary dropdown-toggle" +
              (isFilterExpanded ? " hide" : " show")
            }
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={isFilterExpanded}
            onClick={() => {
              setIsFilterExpanded(!isFilterExpanded);
              const sel = selectRef.current;
              sel.size = 5;
            }}
          >
            Filter
          </button>
          <select
            className={"dropdown-menu" + (isFilterExpanded ? " show" : " hide")}
            aria-labelledby="yearFilter"
            aria-expanded={isFilterExpanded}
            onChange={(e) => {
              handleFilter(Number(e.target.value));
            }}
            ref={selectRef}
          >
            <option className="dropdown-item" value={1}>
              All
            </option>
            <option className="dropdown-item" value={2}>
              Year 2
            </option>
            <option className="dropdown-item" value={3}>
              Year 3
            </option>
            <option className="dropdown-item" value={4}>
              Year 4
            </option>
            <option className="dropdown-item" value={5}>
              Year 5
            </option>
          </select>
        </fieldset>
      </fieldset>
      <div className="card-deck">
        {modules.map(({ link, name, description, year }, i) => (
          <Module {...{ link, name, description, year }} key={i} />
        ))}
      </div>
    </div>
  );
};
