import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function ProductDetails() {
    
  const [product, setProduct] = useState({
    name: "Authentic Tanjore Painting",
    img: "src/images/prod1.png",
    price: "22,450"
  });

  // Replicating the "Magic Script" to grab URL parameters
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get('name');
      const img = urlParams.get('img');
      const price = urlParams.get('price');

      if (name || img || price) {
        setProduct(prev => ({
          name: name || prev.name,
          img: img || prev.img,
          price: price || prev.price
        }));
        
        if (name) {
          document.title = `${name} - Parampara Handicrafts`;
        }
      }
    }
  }, []);

  return (
    <>
    <Navbar/>
    <div className="font-sans text-[#1a1a1a] bg-white min-h-screen selection:bg-[#b8892a] selection:text-white">
      {}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Lato:wght@300;400;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
      `}</style>

      {}
    
      {}
      <section className="py-[60px]">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px] items-start">
          
          {/* Product Gallery */}
          <div className="w-full">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-auto object-cover border border-[#e8e0d4] bg-[#f9f7f4]" 
            />
          </div>

          {/* Product Details Info */}
          <div className="flex flex-col">
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#888] mb-[16px]">
              Home / Collections / <strong className="text-[#7c1a1a]">{product.name.split(' ')[0] || 'Painting'}</strong>
            </p>
            
            <h1 className="font-serif text-[32px] md:text-[42px] font-normal text-[#1a1a1a] mb-[10px] leading-[1.2]">
              {product.name}
            </h1>
            
            <p className="text-[24px] font-bold text-[#b8892a]">
              ₹{product.price} <span className="text-[12px] font-normal text-[#888] ml-2">(Inclusive of all taxes)</span>
            </p>
            
            <div className="w-[56px] h-[2px] bg-[#b8892a] my-[20px]"></div>

            <p className="text-[15px] leading-[1.8] text-[#555] mb-[30px]">
              Bring divine elegance into your space with this authentic Tanjore Painting. Handcrafted by master artisans using traditional techniques, this masterpiece features 24K pure gold foil, vibrant semi-precious stones, and rich natural colors. Arrives beautifully encased in a premium, shatter-resistant teak wood frame.
            </p>

            {}
            <div className="mb-[30px]">
              <label htmlFor="size-select" className="block text-[11px] uppercase tracking-[1.5px] font-bold text-[#7c1a1a] mb-[10px]">
                Select Frame Size
              </label>
              <select id="size-select" className="w-full max-w-[400px] p-[14px_16px] border border-[#e8e0d4] bg-white font-sans text-[14px] text-[#1a1a1a] cursor-pointer outline-none transition-colors duration-300 focus:border-[#b8892a]">
                <option value="" disabled defaultValue>Choose a size...</option>
                <option value="12x15">12" x 15" (Standard)</option>
                <option value="16x20">16" x 20" (Medium)</option>
                <option value="18x22">18" x 22" (Large)</option>
                <option value="24x30">24" x 30" (Statement Piece)</option>
              </select>
            </div>

            <div className="mb-[10px]">
              <button className="w-full max-w-[400px] bg-[#7c1a1a] border-2 border-[#7c1a1a] text-white p-[16px] text-[13px] font-bold tracking-[1.5px] uppercase cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#7c1a1a]">
                Add to Cart
              </button>
            </div>
            
            <ul className="list-none mt-[40px] pt-[30px] border-t border-[#e8e0d4]">
              <li className="text-[13px] text-[#666] tracking-[0.5px] mb-[12px]">✦ 100% Authentic Handcrafted Art</li>
              <li className="text-[13px] text-[#666] tracking-[0.5px] mb-[12px]">✦ Ships securely framed within 48 hours</li>
              <li className="text-[13px] text-[#666] tracking-[0.5px] mb-[12px]">✦ 7-Day Hassle-Free Returns</li>
            </ul>
          </div>

        </div>
      </section>

      {}
      <footer className="bg-[#111] text-white/70 py-[34px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] max-w-[1400px] mx-auto px-[32px]">
          <div>
            <div className="font-serif text-[22px] tracking-[1px] text-white mb-[16px]">Parampara Handicrafts</div>
            <p className="text-[13px] leading-[1.75] text-white/45 mb-[22px] max-w-md">
              Parampara Handicrafts has been a trusted name in authentic Tanjore Paintings for over 27 years. Rooted in tradition, crafted with love.
            </p>
          </div>
          <div className="md:justify-self-end">
            <h4 className="text-[11px] tracking-[2px] uppercase text-[#d4a84b] mb-[20px] font-bold">Contact</h4>
            <ul className="list-none space-y-[10px]">
              <li><a href="tel:+919962712299" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">+91 99627 12299</a></li>
              <li><span className="text-[12px] text-white/30 block mt-[10px]">Mon–Sat: 9am – 8pm IST</span></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
}