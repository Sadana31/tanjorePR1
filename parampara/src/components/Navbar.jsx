import React from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Paintings",
    dropdown: [
      "Tanjore Paintings",
      "Mysore Paintings",
      "Pichwai Paintings",
      "Kerala Murals",
    ],
  },
  {
    name: "Statues",
    dropdown: [
      "Bronze Idols",
      "Brass Statues",
      "Panchaloha",
      "Wood Carvings",
    ],
  },
  {
    name: "Collections",
    dropdown: [
      "Bridal Collection",
      "Pooja Room",
      "Corporate Gifts",
      "Home Decor",
    ],
  },
  {
    name: "Blogs",
    path: "/blogs",
    dropdown: null,
  },
];

function Navbar() {
  return (
    <>
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1.5px;
          background: #b8892a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .dropdown-parent:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-parent:hover .dropdown-icon {
          transform: rotate(180deg);
        }
      `}</style>

      <header className="sticky top-0 z-[100] bg-white border-b border-[#e8e0d4] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1400px] mx-auto px-8 h-[72px] flex items-center justify-between">

          {}
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-[14px]">
            {/* Left-most image */}
            <img 
              src="src/images/logo.png" 
              alt="Parampara Handicrafts Logo" 
              className="w-[46px] h-[46px] object-contain" 
            />
            
            {/* Text Column */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-[24px] font-bold tracking-[0.5px] text-[#1a1a1a] leading-none mb-[4px]">
                Parampara Handicrafts
              </span>
              <span className="text-[10px] tracking-[2px] uppercase text-[#b8892a] font-bold leading-none">
                The Parambariym
              </span>
            </div>
          </Link>

          {}
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-[28px] list-none h-full">

            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative dropdown-parent h-full flex items-center"
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-[12.5px] font-semibold tracking-[1px] uppercase text-[#1a1a1a] py-[6px] relative transition-colors duration-300 hover:text-[#b8892a] nav-link"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className="text-[12.5px] font-semibold tracking-[1px] uppercase text-[#1a1a1a] py-[6px] relative transition-colors duration-300 hover:text-[#b8892a] nav-link flex items-center gap-[4px]"
                    >
                      {item.name}

                      <ChevronDown
                        size={14}
                        className="dropdown-icon opacity-60 transition-transform duration-300"
                      />
                    </button>

                    <div className="dropdown-menu absolute top-[100%] left-0 pt-[16px] w-[220px] z-50">
                      <div className="bg-white border border-[#e8e0d4] border-t-2 border-t-[#b8892a] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <ul className="py-[12px] m-0 p-0 list-none">
                          {item.dropdown.map((sub) => (
                            <li key={sub}>
                              <button
                                className="w-full text-left px-[20px] py-[10px] text-[13px] text-[#444] transition-all duration-200 hover:bg-[#f9f7f4] hover:text-[#b8892a] hover:pl-[24px]"
                              >
                                {sub}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}

            <li className="h-full flex items-center">
              <Link
                to="/products"
                className="text-[12.5px] font-semibold tracking-[1px] uppercase text-[#1a1a1a] py-[6px] relative transition-colors duration-300 hover:text-[#b8892a] nav-link"
              >
                Products
              </Link>
            </li>

            <li className="h-full flex items-center">
              <Link
                to="/cart"
                className="text-[12.5px] font-semibold tracking-[1px] uppercase text-[#1a1a1a] py-[6px] relative transition-colors duration-300 hover:text-[#b8892a] nav-link"
              >
                My Cart
              </Link>
            </li>
          </ul>

          {}
          {/* Icons */}
          <div className="flex items-center gap-[18px]">
            <button
              className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#f9f7f4]"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button
              className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#f9f7f4]"
            >
              <User size={20} strokeWidth={1.5} />
            </button>

            <button
              className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#f9f7f4]"
            >
              <Heart size={20} strokeWidth={1.5} />
            </button>

            <button
              className="w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#f9f7f4] relative"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />

              <span className="absolute -top-[4px] -right-[4px] bg-[#b8892a] text-white text-[9px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;