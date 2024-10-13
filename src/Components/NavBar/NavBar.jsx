const NavBar = () => {
  return (
      <nav className="navbar flex-1 mt-1 navbar-expand-lg bg-transparent">
          <ul className="flex gap-10 text-white">
              <li className="hover:text-[#d0d0d0]" style={{ fontFamily: 'Poppins, sans-serif' }} >Les laboratoires</li>
              <li className="hover:text-[#d0d0d0]" style={{ fontFamily: 'Poppins, sans-serif' }} >FAQs</li>
          </ul>
      </nav>
  );
};

export default NavBar;
