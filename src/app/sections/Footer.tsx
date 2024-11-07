const Footer = () => {
  const this_year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span className="copyright">© {this_year} Ryo Inada</span>
    </footer>
  );
};

export default Footer;
