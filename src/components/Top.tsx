import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiBell } from "react-icons/fi";

const Top: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Work", path: "/Work" },
    { name: "History", path: "/Historys" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left  w-full z-50 transition-all duration-300
        ${scrolled ? "bg-gray-100 shadow-md" : "bg-gray-100"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center">
          <img src="../src/assets/immg.png" alt="Logo" className="h-15 w-auto" />
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-medium text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Notification & Profile */}
        <div className="hidden md:flex items-center gap-4">
          {/* Notification */}
          <button
            aria-label="Notifications"
            className="relative p-3 rounded-full hover:bg-gray-200 transition"
          >
            <FiBell className="text-gray-700 text-xl w-7 h-7 rounded" />
            {/* for notification */}
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Image */}
          <button className="relative w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-gray-500 transition">
            <img
              src="../src/assets/profile.jpg" // replace with actual profile image path
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>

        {/* Mobile menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-100 shadow-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-500 transition-colors duration-200 text-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Mobile profile & notification */}
          <li className="flex gap-4 mt-4 items-center">
            <button
              aria-label="Notifications"
              className="relative p-3 rounded-full hover:bg-gray-200 transition"
            >
              <FiBell className="text-gray-700 text-xl" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-500 transition">
              <img
                src="../assets/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Top;
