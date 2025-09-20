const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-6 md:px-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center text-center">
          <div>shit</div>
          <div>shit</div>
          <div>shit</div>
          <div>shit</div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-16 ">
        <div className="border-y-2 border-gray-500/30 py-1 lg:py-3 w-full flex justify-between items-center">
          <span className="text-fluid-small"><date>2025 </date>Austin J.H Technical Support Services Ltd.</span>
          <span className="hidden md:block text-fluid-small">Privacy Policy</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
