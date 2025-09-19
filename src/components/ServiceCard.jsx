const ServiceCard = (props) => {
  return (
    <div className={` bg-${props.color} text-${props.color == "dark" ? "light" : "dark"} p-5 rounded border-2 border-${props.color} flex flex-col gap-4`}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-16 lg:size-20"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d={props.path}></path>
        </svg>
      </div>
      <div style={{maxWidth: 200}}>
        <span className="text-fluid-h3">{props.title}</span>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default ServiceCard;
