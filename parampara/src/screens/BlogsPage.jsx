import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Calendar, Clock, ArrowLeft, Share2} from 'lucide-react';
import Navbar from '../components/Navbar';

const blogPosts = [
  {
    id: 1,
    title: "The Legacy of Tanjore: A Tale of Gold and Devotion",
    category: "Heritage",
    image: "src/images/hero1.webp",
    date: "June 12, 2026",
    readTime: "6 min read",
    author: "Lakshmi Narayanan",
    excerpt: "Discover the intricate and sacred process behind authentic 24K gold Tanjore paintings that have been passed down through generations of master artisans.",
    content: `
      <p>Tanjore painting, known locally as Thanjavur Oviyam, is a classical South Indian painting style that was inaugurated from the town of Thanjavur (anglicized as Tanjore). The art form draws its immediate resources and inspiration from way back about 1600 AD, a period when the Nayakas of Thanjavur under the suzerainty of the Vijayanagara Rayas encouraged art—chiefly, classical dance and music—as well as literature, both in Telugu and Tamil and painting of chiefly Hindu religious subjects in temples.</p>
      
      <h3>The Golden Touch</h3>
      <p>What sets Tanjore paintings apart is their stunning surface richness, vivid colors, and compact composition. But the defining characteristic is the use of 24K pure gold foil. The gold foil is not merely decorative; it is a symbol of the divine light that radiates from the deities depicted. It ensures that the paintings catch the light in a room, illuminating the dark sanctums of traditional pooja rooms.</p>
      
      <blockquote>"A true Tanjore painting does not merely depict the divine; it is a vessel for it. The gold represents purity, the stones represent the stars, and the colors represent the vibrant pulse of life."</blockquote>
      
      <p>The process of creating a Tanjore painting involves several meticulous stages. It begins with the preparation of the board (usually jackfruit or teak wood), over which a cloth is pasted. The canvas is then coated with a paste of zinc oxide and adhesive, smoothed down to perfection. The drawing is made, and then the 'gesso' work begins—this is the embossing that gives the painting its 3D effect. Finally, the gold foil is pasted, semi-precious stones are inlaid, and the vibrant natural dyes are applied.</p>
      
      <p>Preserving this art form is not just about maintaining a technique; it is about keeping a spiritual tradition alive. At Parampara Handicrafts, we ensure that every stroke and every layer adheres to the strict rules of the Shilpa Shastras.</p>
    `
  },
  {
    id: 2,
    title: "How to Choose the Perfect Bronze Idol for your Home",
    category: "Buying Guide",
    image: "src/images/cat2.webp",
    date: "May 28, 2026",
    readTime: "4 min read",
    author: "Ravi Shankar",
    excerpt: "A comprehensive guide to identifying authentic panchaloha and bronze statues for your pooja room or living space, and the spiritual significance of each metal.",
    content: `
      <p>Selecting a bronze idol for your home is a deeply personal and spiritual journey. Whether it is a dancing Nataraja for your living room or a serene Lakshmi for your pooja mandir, the metal, the posture, and the craftsmanship all carry profound vibrations.</p>
      
      <h3>Understanding Panchaloha</h3>
      <p>Traditional Indian bronze sculpting often utilizes 'Panchaloha', a sacred five-metal alloy of gold, silver, copper, zinc, and iron. According to the Shilpa Shastras, this specific composition is believed to absorb and radiate positive cosmic energy. When choosing a statue, inquire about its composition. Authentic Panchaloha has a distinct, weighty feel and a unique patina that develops beautifully over time.</p>
      
      <p>Here are three key things to look for:</p>
      <ul>
        <li><strong>Proportions (Tala Mana):</strong> Traditional idols are sculpted using strict mathematical proportions. A well-sculpted face will radiate peace.</li>
        <li><strong>The Mudras:</strong> Observe the hand gestures. An 'Abhaya Mudra' (fear not) offers protection, while a 'Varada Mudra' offers blessings. Choose the energy you wish to invite into your home.</li>
        <li><strong>The Finish:</strong> Authentic traditional bronze casting (Lost Wax Process) leaves subtle tool marks. A completely machine-smooth finish often indicates mass production rather than handcrafted devotion.</li>
      </ul>
      
      <p>Take your time when selecting. The right idol will speak to your heart and bring an immediate sense of calm to your space.</p>
    `
  },
  {
    id: 3,
    title: "Vastu Shastra and the Placement of Divine Art",
    category: "Spiritual Living",
    image: "src/images/hero2.webp",
    date: "April 15, 2026",
    readTime: "5 min read",
    author: "Priya Menon",
    excerpt: "Learn the traditional rules of Vastu to maximize positive energy and prosperity when placing deities and handcrafted art in your home.",
    content: `
      <p>The placement of divine art and idols in a home is just as important as the art itself. Vastu Shastra, the ancient Indian science of architecture and spatial arrangement, offers precise guidelines for creating a harmonious living environment.</p>
      
      <h3>The Northeast Corner: The Ishanya</h3>
      <p>The most auspicious direction for placing a pooja room or divine artwork is the Northeast corner, known as the 'Ishanya' corner. This direction is ruled by water and is believed to be the source of all positive, magnetic energy from the North and solar energy from the East.</p>
      
      <blockquote>"When the deities face the West and the worshipper faces the East, the spiritual connection is magnified by the rising sun's energy."</blockquote>
      
      <h3>Rules for Specific Artworks</h3>
      <p>Not all art goes in the same place. Here is a quick guide:</p>
      <ul>
        <li><strong>Ganesha Paintings:</strong> Should ideally be placed at the entrance to block negative energy, or in the pooja room facing the entrance.</li>
        <li><strong>Radha Krishna:</strong> Beautiful for the bedroom or living room, as they symbolize pure love and harmony. Place them on a South-West wall.</li>
        <li><strong>Heavy Bronze Statues:</strong> If they are exceptionally heavy, Vastu suggests placing them towards the South or West walls of a room to ground the energy.</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "The Lost Wax Process: Crafting Eternity",
    category: "Craftsmanship",
    image: "src/images/cat1.webp",
    date: "March 02, 2026",
    readTime: "7 min read",
    author: "Lakshmi Narayanan",
    excerpt: "Step inside our workshops to see the ancient 'Cire Perdue' technique used to create seamless, solid bronze masterpieces.",
    content: `
      <p>The lost-wax casting process, known in French as cire perdue, is a technique that has been utilized for over 6,000 years. In South India, this method was perfected during the Chola dynasty (9th to 13th century), leading to some of the most exquisite bronze sculptures the world has ever seen.</p>
      <p>Every single authentic bronze idol at Parampara Handicrafts is created using this exact, unyielding ancient method. Because the wax model is destroyed in the process, every single statue is a unique, one-of-a-kind masterpiece. There are no molds, no duplicates.</p>
    `
  }
];

const categories = ["All", "Heritage", "Craftsmanship", "Buying Guide", "Spiritual Living"];

const BlogPage = () => {
  const [view, setView] = useState('list'); // 'list' or 'detail'
  const [activePost, setActivePost] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, activePost]);

  const handleReadMore = (post) => {
    setActivePost(post);
    setView('detail');
  };

  const handleBackToList = () => {
    setView('list');
    setActivePost(null);
  };

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="font-sans text-stone-800 bg-[#f9f7f4] min-h-screen selection:bg-amber-600 selection:text-white">
      {/* Required CSS for custom fonts and editorial styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        
        /* Editorial Content Styling */
        .article-content p { margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.05rem; color: #444; }
        .article-content p:first-of-type::first-letter {
          font-family: 'Playfair Display', serif;
          float: left;
          font-size: 4.5rem;
          line-height: 0.8;
          padding-top: 0.2rem;
          padding-right: 0.5rem;
          color: #b8892a;
        }
        .article-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #1a1a1a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .article-content blockquote {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.4rem;
          line-height: 1.6;
          color: #7c1a1a;
          border-left: 4px solid #b8892a;
          padding-left: 1.5rem;
          margin: 2.5rem 0;
          background: #fff;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .article-content ul { list-style: none; padding-left: 0; margin-bottom: 2rem; }
        .article-content ul li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #444;
        }
        .article-content ul li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: #b8892a;
          font-size: 0.9rem;
          top: 0.1rem;
        }
      `}</style>

      <Navbar/>

      <main className="pb-24">
        {}
        {view === 'list' && (
          <div className="bg-stone-900 text-white py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('src/images/vector3.png')] bg-center opacity-10 mix-blend-overlay"></div>
            <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-bold mb-4 relative z-10">Stories & Traditions</p>
            <h1 className="text-5xl md:text-6xl font-serif relative z-10">The Parampara Journal</h1>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
          
          {}
          {view === 'list' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Content Area (8 cols) */}
              <div className="lg:col-span-8">
                
                {/* Featured Post */}
                {featuredPost && (
                  <article className="mb-16 group cursor-pointer" onClick={() => handleReadMore(featuredPost)}>
                    <div className="relative overflow-hidden aspect-[16/9] mb-6 bg-stone-200">
                      <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#7c1a1a]">
                        {featuredPost.category}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider font-bold mb-4">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
                      <span>|</span>
                      <span className="flex items-center gap-1"><Clock size={14}/> {featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4 leading-tight group-hover:text-amber-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-stone-600 leading-relaxed mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <button className="text-[#7c1a1a] font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-3 transition-all border-b border-[#7c1a1a] pb-1">
                      Read Full Article <ChevronRight size={16} />
                    </button>
                  </article>
                )}

                {/* Grid Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {gridPosts.map(post => (
                    <article key={post.id} className="group cursor-pointer bg-white border border-stone-200 p-4 transition-shadow hover:shadow-xl" onClick={() => handleReadMore(post)}>
                      <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-stone-100">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <p className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{post.category}</p>
                      <h3 className="text-xl font-serif text-stone-900 mb-3 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100 text-xs text-stone-400 font-bold uppercase tracking-wider">
                        <span>{post.date}</span>
                        <span className="text-amber-600">Read &rarr;</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Right Sidebar Area (4 cols) */}
              <aside className="lg:col-span-4 space-y-12">
                
                {/* Search Widget */}
                <div className="bg-white p-6 border border-stone-200">
                  <h4 className="font-serif text-xl mb-4 text-stone-900">Search Journal</h4>
                  <div className="relative flex items-center">
                    <input type="text" placeholder="Type keyword..." className="w-full border border-stone-300 py-3 px-4 pr-10 outline-none focus:border-amber-500 font-sans text-sm" />
                    <Search className="absolute right-3 text-stone-400" size={18} />
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="bg-white p-6 border border-stone-200">
                  <h4 className="font-serif text-xl mb-4 text-stone-900">Categories</h4>
                  <ul className="space-y-2">
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => setActiveCategory(cat)}
                          className={`w-full text-left py-2 px-3 text-sm flex justify-between items-center transition-colors ${activeCategory === cat ? 'bg-[#7c1a1a] text-white' : 'text-stone-600 hover:bg-stone-50 hover:text-amber-600'}`}
                        >
                          <span className="uppercase tracking-wider font-bold text-xs">{cat}</span>
                          <ChevronRight size={14} className={activeCategory === cat ? 'text-white' : 'text-stone-400'} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Widget */}
                <div className="bg-[#f5e6c8] p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('src/images/vector3.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>
                  <h4 className="font-serif text-2xl mb-2 text-stone-900 relative z-10">Never Miss a Story</h4>
                  <p className="text-stone-600 text-sm mb-6 relative z-10">Subscribe to get our latest articles and cultural insights directly to your inbox.</p>
                  <form className="relative z-10 space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Your email address" className="w-full border-none py-3 px-4 outline-none text-sm text-center" />
                    <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-4 hover:bg-amber-600 transition-colors">
                      Subscribe Now
                    </button>
                  </form>
                </div>

              </aside>
            </div>
          )}

          {}
          {view === 'detail' && activePost && (
            <div className="max-w-4xl mx-auto animate-[fade-in-up_0.6s_ease-out]">
              
              {/* Back Button */}
              <button 
                onClick={handleBackToList}
                className="flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors uppercase tracking-widest text-xs font-bold mb-8"
              >
                <ArrowLeft size={16} /> Back to Journal
              </button>

              {/* Article Header */}
              <div className="text-center mb-10">
                <span className="inline-block bg-[#7c1a1a] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                  {activePost.category}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-tight">
                  {activePost.title}
                </h1>
                
                <div className="flex items-center justify-center gap-6 text-sm text-stone-500 uppercase tracking-wider font-bold">
                  <span className="text-stone-800">By {activePost.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14}/> {activePost.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {activePost.readTime}</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="w-full aspect-[21/9] md:aspect-[16/6] overflow-hidden bg-stone-200 mb-12">
                <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
              </div>

              {/* Layout for Content & Social Sidebar */}
              <div className="flex flex-col md:flex-row gap-12 relative">
                
                {/* Floating Social Share (Desktop Sticky) */}
                <div className="hidden md:flex flex-col gap-4 sticky top-32 h-fit">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest writing-mode-vertical mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>Share Article</span>
                  {/* <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-amber-600 hover:text-amber-600 transition-colors"><Facebook size={16}/></button>
                  <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-amber-600 hover:text-amber-600 transition-colors"><Twitter size={16}/></button>
                  <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-amber-600 hover:text-amber-600 transition-colors"><Linkedin size={16}/></button>
                  <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-amber-600 hover:text-amber-600 transition-colors"><Share2 size={16}/></button> */}
                </div>

                {/* Article Body Content */}
                <div 
                  className="article-content flex-1 max-w-3xl"
                  dangerouslySetInnerHTML={{ __html: activePost.content }}
                />

              </div>

              {/* Mobile Social Share Footer */}
              <div className="md:hidden flex items-center justify-center gap-4 mt-12 pt-8 border-t border-stone-200">
                <span className="text-xs text-stone-500 font-bold uppercase tracking-widest mr-2">Share:</span>
                <Facebook size={20} className="text-stone-400"/>
                <Twitter size={20} className="text-stone-400"/>
                <Linkedin size={20} className="text-stone-400"/>
              </div>

            </div>
          )}
        </div>
      </main>

      {/* Basic Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center text-sm border-t border-stone-800">
        <p className="font-serif text-2xl text-white mb-4">Parampara Handicrafts</p>
        <p>&copy; 2026 Parampara Handicrafts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;