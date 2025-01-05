const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="text-center py-2 bg-slate-600 text-white fixed bottom-0 left-0 w-full">
      <p>&copy;{CurrentYear} @ FastMart.Inc</p>
    </div>
  );
};

export default Footer;
