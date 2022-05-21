export const CertCard = (props) => {
  return (
    <div
      className={
        "list-group m-2 p-5 carousel-item float-none w-auto" +
        (props.active ? " active" : "")
      }
    >
      <a
        href={props.link}
        className="list-group-item flex-column align-items-start"
      >
        <div className="d-flex w-70 justify-content-between">
          <h5 className="mb-1 title">{props.title}</h5>
          <small>{props.dateAquired}</small>
        </div>
        <p className="mb-1">{props.description}</p>
        <small>...</small>
      </a>
    </div>
  );
};
