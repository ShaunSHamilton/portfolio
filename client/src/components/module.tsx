import { useState } from "react";

export const Module = (props) => {
  const [isShowDesc, setIsShowDesc] = useState(false);
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          {props.module.link ? (
            <a
              href={props.module.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.module.name}
            </a>
          ) : (
            props.module.name
          )}
        </h4>
        <p className={"mod-description" + (isShowDesc ? " show" : " hide")}>
          {props.module.description}
        </p>
        {props.module.description && (
          <button
            onClick={() => setIsShowDesc(!isShowDesc)}
            className="card-btn"
          >
            {isShowDesc ? "🔺" : "🔻"}
          </button>
        )}
      </div>
      <div className="card-footer">Year {props.module.year}</div>
    </div>
  );
};
