import { useState } from "react";
import { ModuleType } from "../types";

export const Module = ({ link, name, description, year }: ModuleType) => {
  const [isShowDesc, setIsShowDesc] = useState(false);
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ) : (
            name
          )}
        </h4>
        <p className={"mod-description" + (isShowDesc ? " show" : " hide")}>
          {description}
        </p>
        {description && (
          <button
            onClick={() => setIsShowDesc(!isShowDesc)}
            className="card-btn"
          >
            {isShowDesc ? "🔺" : "🔻"}
          </button>
        )}
      </div>
      <div className="card-footer">Year {year}</div>
    </div>
  );
};
