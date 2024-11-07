const NavBar = () => {
  return (
      <nav>
          <ul className="flex gap-10 text-white">
              <li className="hover:text-[#d0d0d0] cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }} >Les laboratoires</li>
              <li className="hover:text-[#d0d0d0] cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }} >FAQs</li>
          </ul>
      </nav>
  );
};

export default NavBar;
