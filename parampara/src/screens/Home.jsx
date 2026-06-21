import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

const localReels = [
  { id: 1, videoSrc: "/images/reel1.mp4", thumbnail: "/images/cat1.webp" },
  { id: 2, videoSrc: "/images/reel2.mp4", thumbnail: "/images/cat2.webp" },
  { id: 3, videoSrc: "/images/reel3.mp4", thumbnail: "/images/hero2.webp" }
];

const blogPosts = [
  { id: 1, title: "The Legacy of Tanjore: A Tale of Gold and Devotion", image: "/images/cat1.webp", date: "June 12, 2026", excerpt: "Discover the intricate and sacred process behind authentic 24K gold Tanjore paintings that pass down through generations." },
  { id: 2, title: "How to Choose the Perfect Bronze Idol for your Home", image: "/images/cat2.webp", date: "May 28, 2026", excerpt: "A comprehensive guide to identifying authentic panchaloha and bronze statues for your pooja room or living space." },
  { id: 3, title: "Vastu Shastra and the Placement of Divine Idols", image: "/images/hero2.webp", date: "April 15, 2026", excerpt: "Learn the traditional rules of Vastu to maximize positive energy when placing deities and handcrafted art in your home." }
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const slides = [
    { id: 0, videoSrc: "/images/reel4.mp4", tag: "New Arrivals 2025", title: "Paintings of\nTradition &\nGrandeur", btnText: "Explore Collection" },
    { id: 1, videoSrc: "/images/reel5.mp4", tag: "Curated Collections", title: "Authentic\nTanjore Paintings", btnText: "Shop Now" },
    { id: 2, videoSrc: "/images/reel6.mp4", tag: "Wedding Season", title: "Your Favorite\nIdols in Gold", btnText: "Bridal Collection" }
  ];

  const products = [
    { id: 1, name: "Peacock Painting", img: "/images/prod1.png", price: "₹22,450", oldPrice: null, color: "Deep Maroon & Gold", badge: "New" },
    { id: 2, name: "Lord Muruga", img: "/images/prod2.png", price: "₹27,554", oldPrice: null, color: "Royal Blue & Silver", badge: null },
    { id: 3, name: "Vishnu 24K", img: "/images/prod3.png", price: "₹17,024", oldPrice: "₹21,000", color: "Forest Green", badge: "Trending" },
    { id: 4, name: "Floral Painting", img: "/images/prod4.png", price: "₹19,800", oldPrice: null, color: "Peacock Blue", badge: null },
    { id: 5, name: "Radha and Krishna", img: "/images/prod5.png", price: "₹23,990", oldPrice: null, color: "Ivory & Rose Gold", badge: "Best Seller" },
  ];

  // Handle Page Loader
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Handle Header Scroll Shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Slider Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="font-['Lato',_sans-serif] text-[#1a1a1a] bg-[#fff] min-h-screen overflow-x-hidden selection:bg-[#b8892a] selection:text-white">
      
      {/* 
        Custom styles for the specific elements that require advanced CSS 
        (like the complex SVG masks for spiral buttons and specific animations)
        which perfectly match your provided CSS variables and aesthetics.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Lato:wght@300;400;700&display=swap');

        .font-serif { font-family: 'Playfair Display', serif; }
        
        @keyframes loader-pulse { 
          0%,100%{opacity:1} 50%{opacity:0.3} 
        }
        .animate-loader-pulse { animation: loader-pulse 1.4s ease infinite; }

        @keyframes bar-shimmer { 
          0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} 
        }
        .shimmer-overlay::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(212,168,75,0.12), transparent);
          animation: bar-shimmer 3.5s infinite;
        }

        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .animate-marquee { display: flex; gap: 80px; white-space: nowrap; animation: marquee 30s linear infinite; }

        /* Exact Button Spiral Mask from your CSS */
        .btn-spiral {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 10px 24px; background: #f0efef; color: #771800; border: 2px solid #771800;
          font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          cursor: pointer; transition: all 0.4s ease; position: relative; text-decoration: none; overflow: visible;
        }
        .btn-spiral:hover { border-color: #b8892a; color: #b8892a; background: #f4d39a; }

        .btn-spiral::before {
          content: ''; position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
          width: 24px; height: 34px; background-color: #b8892a; opacity: 0; 
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 40'%3E%3Cg fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M30 20 C18 20 12 16 12 9 C12 4 22 3 25 7 C28 11 23 15 20 12' /%3E%3Cpath d='M30 20 C18 20 12 24 12 31 C12 36 22 37 25 33 C28 29 23 25 20 28' /%3E%3C/g%3E%3Cpath d='M4 20 Q14 15 22 20 Q14 25 4 20 Z' fill='black'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 40'%3E%3Cg fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M30 20 C18 20 12 16 12 9 C12 4 22 3 25 7 C28 11 23 15 20 12' /%3E%3Cpath d='M30 20 C18 20 12 24 12 31 C12 36 22 37 25 33 C28 29 23 25 20 28' /%3E%3C/g%3E%3Cpath d='M4 20 Q14 15 22 20 Q14 25 4 20 Z' fill='black'/%3E%3C/svg%3E");
          -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
          -webkit-mask-position: center; mask-position: center; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
          pointer-events: none; z-index: 1;
        }
        .btn-spiral::after {
          content: ''; position: absolute; right: 0px; top: 50%; transform: translateY(-50%);
          width: 24px; height: 34px; background-color: #b8892a; opacity: 0; 
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 40'%3E%3Cg fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M0 20 C12 20 18 16 18 9 C18 4 8 3 5 7 C2 11 7 15 10 12' /%3E%3Cpath d='M0 20 C12 20 18 24 18 31 C18 36 8 37 5 33 C2 29 7 25 10 28' /%3E%3C/g%3E%3Cpath d='M26 20 Q16 15 8 20 Q16 25 26 20 Z' fill='black'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 40'%3E%3Cg fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M0 20 C12 20 18 16 18 9 C18 4 8 3 5 7 C2 11 7 15 10 12' /%3E%3Cpath d='M0 20 C12 20 18 24 18 31 C18 36 8 37 5 33 C2 29 7 25 10 28' /%3E%3C/g%3E%3Cpath d='M26 20 Q16 15 8 20 Q16 25 26 20 Z' fill='black'/%3E%3C/svg%3E");
          -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
          -webkit-mask-position: center; mask-position: center; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
          pointer-events: none; z-index: 1;
        }
        .btn-spiral:hover::before { opacity: 1; left: -20px; }
        .btn-spiral:hover::after { opacity: 1; right: -20px; }

        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 1.5px; background: #b8892a;
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover::after { transform: scaleX(1); }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {}
      <div className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-all duration-600 ease-in-out ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="font-serif text-[26px] tracking-[4px] text-[#b8892a] animate-loader-pulse">Parampara Handicrafts</div>
      </div>

      {/* Announcement Bar */}
      <div className="bg-[#771800] text-[#f5e6c8] text-[11.5px] tracking-[1.8px] uppercase py-[10px] overflow-hidden relative shimmer-overlay">
        <div className="animate-marquee">
          <span>✦ Free shipping on orders above ₹5,000</span>
          <span>✦ 27 Years of Trust</span>
          <span>✦ Easy Returns &amp; Exchanges</span>
          <span>✦ Handcrafted by Master Artisans</span>
          <span>✦ Free shipping on orders above ₹5,000</span>
          <span>✦ 27 Years of Trust</span>
          <span>✦ Easy Returns &amp; Exchanges</span>
          <span>✦ Handcrafted by Master Artisans</span>
        </div>
      </div>

      <Navbar/>

      {}
      <section className="relative overflow-hidden h-[80vh] min-h-[500px]">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-[1.2s] ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <video 
              src={slide.videoSrc} 
              className={`w-full h-full object-cover transition-transform duration-[8s] ease-in-out ${currentSlide === index ? 'scale-100' : 'scale-[1.05]'}`} 
              autoPlay 
              loop 
              muted 
              playsInline 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent"></div>
            
            <div className={`absolute bottom-[15%] left-[8%] text-white transition-all duration-[0.8s] ease-out delay-[0.4s] ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <p className="text-[11px] tracking-[3px] uppercase text-[#d4a84b] mb-[12px]">{slide.tag}</p>
              <h1 className="font-serif text-[clamp(34px,5vw,62px)] font-normal leading-[1.1] mb-[22px] whitespace-pre-line">{slide.title}</h1>
              <a href="#" className="inline-block py-[12px] px-[32px] bg-[#b8892a] text-white font-sans text-[11px] tracking-[2px] uppercase font-bold transition-all duration-300 hover:bg-[#9a6e1e] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(184,137,42,0.35)]">
                {slide.btnText}
              </a>
            </div>
          </div>
        ))}
        
        {/* Decorative Vector Frame */}
        <div className="absolute inset-0 pointer-events-none z-[6] bg-[url('/images/vector3.png')] bg-no-repeat bg-center bg-[length:99%_99%] opacity-50"></div>
        
        <button className="absolute top-1/2 -translate-y-1/2 left-[24px] z-10 w-[48px] h-[48px] rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#b8892a] hover:border-[#b8892a]" onClick={prevSlide}><ChevronLeft size={24} /></button>
        <button className="absolute top-1/2 -translate-y-1/2 right-[24px] z-10 w-[48px] h-[48px] rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#b8892a] hover:border-[#b8892a]" onClick={nextSlide}><ChevronRight size={24} /></button>
        
        <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex gap-[8px] z-10">
          {slides.map((_, idx) => (
            <button key={idx} className={`h-[8px] rounded-full transition-all duration-300 cursor-pointer border-none ${currentSlide === idx ? 'bg-[#b8892a] w-[24px]' : 'bg-white/45 w-[8px]'}`} onClick={() => setCurrentSlide(idx)}></button>
          ))}
        </div>
      </section>

      <div className="block leading-[0] overflow-hidden"><img src="/images/ribbon-top.svg" alt="" className="w-full h-auto block" /></div>

      {}
      <section className="bg-[#f9f7f4] py-[80px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
              <p className="text-[11px] tracking-[3px] uppercase text-[#b8892a] mb-[12px]">Authentic Craftsmanship</p>
              <h2 className="font-serif text-[clamp(32px,4vw,46px)] font-normal leading-[1.15] text-[#1a1a1a] mb-[20px]">Shop by<br className="hidden lg:block"/> Category</h2>
              <div className="w-[64px] h-[2px] bg-[#b8892a] mb-[28px]"></div>
              <p className="text-[14px] leading-[1.7] text-[#555] mb-[36px]">
                Explore our curated collections of authentic handcrafted art. From the intricate 24K gold foil work of Tanjore paintings to the divine elegance of masterfully sculpted bronze statues, find the perfect addition to your sacred space.
              </p>
              <a href="#" className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#b8892a] border-[1.5px] border-[#b8892a] px-[24px] py-[12px] rounded-[4px] whitespace-nowrap transition-all duration-300 hover:bg-[#b8892a] hover:text-white hover:shadow-[0_8px_20px_rgba(184,137,42,0.25)] flex items-center gap-[8px]">
                Explore Categories <ChevronRight size={14} strokeWidth={2.5} />
              </a>
            </div>

            {/* Right Images Area */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="relative overflow-hidden aspect-[4/5] cursor-pointer group">
                <img src="/images/cat1.webp" alt="Tanjore Paintings" className="w-full h-full object-cover transition-transform duration-[0.8s] ease-in-out group-hover:scale-[1.08]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-[36px]">
                  <div className="transform translate-y-[52px] group-hover:translate-y-0 transition-transform duration-[0.6s] ease-out">
                    <span className="font-serif text-[28px] md:text-[32px] font-normal text-white block mb-[12px]">Tanjore Paintings</span>
                    <p className="text-white/70 text-[13px] leading-[1.6] opacity-0 group-hover:opacity-100 transition-opacity duration-[0.6s] ease-out delay-100 mb-[20px]">
                      Discover the divine beauty of authentic 24K gold foil artistry. Crafted by master artisans to bring prosperity and timeless elegance to your home.
                    </p>
                    <div className="flex items-center gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-[0.6s] ease-out delay-200">
                      <span className="text-[11.5px] tracking-[2px] uppercase font-bold text-[#d4a84b]">Explore Collection</span>
                      <ChevronRight size={14} className="text-[#d4a84b]" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-[#b8892a] scale-[0.95] opacity-0 transition-all duration-[0.5s] pointer-events-none group-hover:scale-100 group-hover:opacity-40"></div>
              </div>

              <div className="relative overflow-hidden aspect-[4/5] cursor-pointer group">
                <img src="/images/cat2.webp" alt="Bronze statues" className="w-full h-full object-cover transition-transform duration-[0.8s] ease-in-out group-hover:scale-[1.08]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-[36px]">
                  <div className="transform translate-y-[52px] group-hover:translate-y-0 transition-transform duration-[0.6s] ease-out">
                    <span className="font-serif text-[28px] md:text-[32px] font-normal text-white block mb-[12px]">Bronze Statues</span>
                    <p className="text-white/70 text-[13px] leading-[1.6] opacity-0 group-hover:opacity-100 transition-opacity duration-[0.6s] ease-out delay-100 mb-[20px]">
                      Masterfully sculpted Panchaloha and brass deities. Imbue your sacred spaces with traditional craftsmanship and positive divine energy.
                    </p>
                    <div className="flex items-center gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-[0.6s] ease-out delay-200">
                      <span className="text-[11.5px] tracking-[2px] uppercase font-bold text-[#d4a84b]">Explore Collection</span>
                      <ChevronRight size={14} className="text-[#d4a84b]" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-[#b8892a] scale-[0.95] opacity-0 transition-all duration-[0.5s] pointer-events-none group-hover:scale-100 group-hover:opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="block leading-[0] overflow-hidden"><img src="/images/ribbon-bottom.svg" alt="" className="w-full h-auto block" /></div>

      {}
      <section className="py-[72px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="flex items-end justify-between mb-[12px]">
            <div>
              <p className="text-[11px] tracking-[3px] uppercase text-[#b8892a] mb-[10px]">Most Loved</p>
              <h2 className="font-serif text-[clamp(26px,3vw,42px)] font-normal leading-[1.2]">Trending Products</h2>
              <div className="w-[56px] h-[2px] bg-[#b8892a] mt-[14px]"></div>
            </div>
            <a href="#" className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#b8892a] border-[1.5px] border-[#b8892a] px-[18px] py-[10px] rounded-[4px] whitespace-nowrap transition-all duration-300 hover:bg-[#b8892a] hover:text-white hover:shadow-[0_8px_20px_rgba(184,137,42,0.2)] flex items-center gap-[6px]">
              View All <ChevronRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          <div className="flex justify-center py-[6px] pb-[28px]">
            <img src="/images/kolam-divider.svg" alt="" className="w-full max-w-[600px] h-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[20px]">
            {products.map((prod) => (
              <div key={prod.id} className="relative cursor-pointer group">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#f9f7f4] mb-[14px]">
                  {prod.badge && (
                    <span className="absolute top-[12px] left-[12px] bg-[#b8892a] text-white text-[9px] tracking-[1px] uppercase py-[4px] px-[10px] font-bold z-10">
                      {prod.badge}
                    </span>
                  )}
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-[0.6s] ease-in-out group-hover:scale-[1.06]" />
                  
                  <div className="absolute bottom-[16px] left-0 right-0 flex justify-center gap-[8px] z-10">
                    {/* Using the custom specific spiral button styled via Tailwind-injected CSS class */}
                    <a href={`product.html?name=${encodeURIComponent(prod.name)}`} className="btn-spiral shadow-sm">
                      View Details
                    </a>
                  </div>
                </div>
                <p className="text-[13px] font-semibold tracking-[0.2px] mb-[4px] leading-[1.3] text-[#1a1a1a]">{prod.name}</p>
                <p className="text-[12px] text-[#888] mb-[8px]">{prod.color}</p>
                <p className="text-[14px] font-bold text-[#1a1a1a]">
                  {prod.price}
                  {prod.oldPrice && <span className="text-[12px] font-normal text-[#aaa] line-through ml-[6px]">{prod.oldPrice}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="block leading-[0] overflow-hidden"><img src="/images/ribbon-bottom.svg" alt="" className="w-full h-auto block" /></div>

      {}
      <section className="py-[72px] bg-white">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="flex items-end justify-between mb-[36px]">
            <div>
              <p className="text-[11px] tracking-[3px] uppercase text-[#b8892a] mb-[10px]">Follow Our Journey</p>
              <h2 className="font-serif text-[clamp(26px,3vw,42px)] font-normal leading-[1.2]">Latest on Instagram</h2>
              <div className="w-[56px] h-[2px] bg-[#b8892a] mt-[14px]"></div>
            </div>
            <a href="https://www.instagram.com/tanjorepaintings_/" target="_blank" rel="noreferrer" className="btn-spiral shadow-sm">
              View Instagram <ChevronRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-items-center">
            {localReels.map((reel) => (
              <div 
                key={reel.id} 
                className="w-full max-w-[340px] relative aspect-[9/16] overflow-hidden bg-[#f9f7f4] group cursor-pointer shadow-sm"
              >
                <video 
                  src={reel.videoSrc}
                  poster={reel.thumbnail}
                  className="w-full h-full object-cover transition-transform duration-[0.8s] ease-in-out group-hover:scale-[1.03]"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
                {/* Optional dark gradient overlay on hover for a premium feel */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute top-[16px] right-[16px] bg-black/40 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="block leading-[0] overflow-hidden"><img src="/images/ribbon-bottom.svg" alt="" className="w-full h-auto block" /></div>

      {}
      <section className="py-[72px] bg-[#f9f7f4]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="flex items-end justify-between mb-[36px]">
            <div>
              <p className="text-[11px] tracking-[3px] uppercase text-[#b8892a] mb-[10px]">Journal</p>
              <h2 className="font-serif text-[clamp(26px,3vw,42px)] font-normal leading-[1.2]">Latest on our Blog</h2>
              <div className="w-[56px] h-[2px] bg-[#b8892a] mt-[14px]"></div>
            </div>
            <Link to="/blogs" className="btn-spiral shadow-sm">
                View All Articles <ChevronRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-[24px] pb-[16px]">
            {blogPosts.map(post => (
              <div key={post.id} className="min-w-[320px] md:min-w-[0] flex-1 snap-start bg-white border border-[#e8e0d4] group cursor-pointer transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="overflow-hidden aspect-[16/10]">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[0.8s] group-hover:scale-[1.05]" />
                </div>
                <div className="p-[28px]">
                  <p className="text-[10px] uppercase tracking-[2px] text-[#888] mb-[12px]">{post.date}</p>
                  <h3 className="font-serif text-[18px] leading-[1.35] mb-[14px] text-[#1a1a1a] group-hover:text-[#b8892a] transition-colors">{post.title}</h3>
                  <p className="text-[13px] text-[#666] leading-[1.6] line-clamp-2 mb-[20px]">{post.excerpt}</p>
                  <span className="text-[11px] tracking-[1.5px] uppercase font-bold text-[#b8892a] group-hover:text-[#771800] transition-colors">Read More &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="block leading-[0] overflow-hidden"><img src="/images/ribbon-top.svg" alt="" className="w-full h-auto block" /></div>

      {}
      <div className="bg-[#1a1a1a] text-white py-[32px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: '✦', title: '100% Authentic', desc: 'Certified pure 24K Gold' },
              { icon: '◈', title: 'Free Shipping', desc: 'On all orders above ₹5,000' },
              { icon: '❋', title: 'Easy Returns', desc: 'Hassle-free 7-day return policy' },
              { icon: '⊕', title: '27 Years Trust', desc: 'Serving since 1998 with pride' },
            ].map((usp, idx) => (
              <div key={idx} className={`text-center px-[24px] ${idx !== 3 ? 'md:border-r border-white/10' : ''} ${idx < 2 ? 'border-r border-white/10 mb-6 md:mb-0' : ''}`}>
                <div className="text-[26px] text-[#d4a84b] mb-[10px]">{usp.icon}</div>
                <p className="text-[12.5px] tracking-[1px] uppercase font-bold mb-[6px]">{usp.title}</p>
                <p className="text-[12px] text-white/50">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="block leading-[0] overflow-hidden"><img src="/images/ribbon-top.svg" alt="" className="w-full h-auto block" /></div>

      {/* Newsletter */}
      <div className="bg-[#f5e6c8] text-center py-[80px] px-[32px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[url('/images/vector3.png')] bg-no-repeat bg-center bg-[length:99%_99%] opacity-30"></div>
        <p className="text-[11px] tracking-[3px] uppercase text-[#b8892a] mb-[10px]">Stay in the Loop</p>
        <h2 className="font-serif text-[clamp(26px,3vw,42px)] font-normal leading-[1.2] mb-[12px]">Get Exclusive Offers &amp; New Arrivals</h2>
        <p className="text-[14px] text-[#777] mb-[28px] relative z-10">Subscribe for the latest collections, offers, and styling inspiration.</p>
        
        <form className="flex max-w-[460px] mx-auto border-[1.5px] border-[#b8892a] relative z-10 bg-white" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" className="flex-1 py-[14px] px-[20px] border-none font-sans text-[13px] outline-none bg-transparent" />
          <button type="submit" className="py-[14px] px-[28px] bg-[#b8892a] text-white font-sans text-[11px] tracking-[1.5px] uppercase font-bold transition-colors duration-300 hover:bg-[#9a6e1e]">Subscribe</button>
        </form>
      </div>

      {}
      <footer className="bg-[#111] text-white/70 pt-[34px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_auto_1fr_1fr] gap-[18px] max-w-[1400px] mx-auto px-[32px] pb-[18px] border-b border-white/10">
          
          <div className="mb-8 lg:mb-0">
            <div className="font-serif text-[22px] tracking-[1px] text-white mb-[16px]">Parampara Handicrafts</div>
            <p className="text-[13px] leading-[1.75] text-white/45 mb-[22px] max-w-sm">Parampara Handicrafts has been a trusted name in authentic Tanjore Paintings for over 27 years. Rooted in tradition, crafted with love.</p>
            <div className="flex gap-[12px]">
              <a href="#" className="w-[36px] h-[36px] border border-white/20 rounded-full flex items-center justify-center text-white/55 transition-colors duration-300 hover:border-[#b8892a] hover:text-[#b8892a]">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-[36px] h-[36px] border border-white/20 rounded-full flex items-center justify-center text-white/55 transition-colors duration-300 hover:border-[#b8892a] hover:text-[#b8892a]">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-[36px] h-[36px] border border-white/20 rounded-full flex items-center justify-center text-white/55 transition-colors duration-300 hover:border-[#b8892a] hover:text-[#b8892a]">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-[36px] h-[36px] border border-white/20 rounded-full flex items-center justify-center text-white/55 transition-colors duration-300 hover:border-[#b8892a] hover:text-[#b8892a]">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-stretch w-[9px] mx-[8px] opacity-20">
            <img src="/images/footer-divider-v.svg" alt="" className="w-full h-full object-fill" />
          </div>

          <div className="mb-8 lg:mb-0">
            <h4 className="text-[11px] tracking-[2px] uppercase text-[#d4a84b] mb-[20px] font-bold">Help</h4>
            <ul className="list-none space-y-[10px]">
              <li><a href="#" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">About Us</a></li>
              <li><a href="#" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">Return Policy</a></li>
              <li><a href="#" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">Size Guide</a></li>
              <li><a href="#" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-[#d4a84b] mb-[20px] font-bold">Contact</h4>
            <ul className="list-none space-y-[10px]">
              <li><a href="tel:+919962712299" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">+91 99627 12299</a></li>
              <li><a href="#" className="text-[13px] text-white/45 transition-colors duration-[0.25s] hover:text-white">Email Us</a></li>
              <li><span className="text-[12px] text-white/30 block mt-[10px]">Mon–Sat: 9am – 8pm IST</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-[32px] py-[10px] flex flex-col md:flex-row justify-between text-[12px] text-white/25">
          <span>&copy; 2025 Parampara Handicrafts. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Made with ♡ in Kanchipuram</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;