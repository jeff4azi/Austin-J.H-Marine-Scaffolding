const AboutDetails = ({number, symbol, details}) => {
  return (
    <div>
      <div className="text-fluid-h2 text-dark">{number}{symbol}</div>
      <p className="text-fluid-p -translate-y-2">{details}</p>
    </div>
  );
};

export default AboutDetails;
