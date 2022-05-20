import { useState } from "react";

export const Module = (props) => {
  const [isShowDesc, setIsShowDesc] = useState(false);
  return (
    <div className="card col-10 m-2 m-sm-4 col-md-5 m-md-3 col-lg-4 m-lg-2">
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
        <p
          className={
            "card-text mod-description" + (isShowDesc ? "" : " d-none")
          }
        >
          {props.module.description}
        </p>
        {props.module.description && (
          <button
            onClick={() => setIsShowDesc(!isShowDesc)}
            className={"arrow" + (isShowDesc ? " up" : " down")}
          ></button>
        )}
      </div>
      <div className="card-footer">Year {props.module.year}</div>
    </div>
  );
};
