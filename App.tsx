
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import NailArtCard from './components/NailArtCard';
import NailArtDetailModal from './components/NailArtDetailModal';
import { NailArt } from './types';
import { NAIL_ART_STYLES } from './constants';

// Enhanced Icons Mapping
const Icons: Record<string, React.ReactNode> = {
  '經典': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, // Clipboard/Basic
  '藝術': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>, // Palette
  '甜美': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, // Heart
  '現代': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>, // Geometric Cube
  '奢華': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, // Diamond
  '可愛': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, // Smiley
  '節慶': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, // Party/Toast
  '復古': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, // Clock
  '簡約': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" /></svg>, // Minus
  '時尚': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>, // Eye
  '保養': <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, // Sun/Shine/Care
};

const DefaultIcon = <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

const App: React.FC = () => {
  const [nailArts, setNailArts] = useState<NailArt[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('所有');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [selectedNailArt, setSelectedNailArt] = useState<NailArt | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setNailArts(NAIL_ART_STYLES);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    NAIL_ART_STYLES.forEach(art => uniqueCategories.add(art.category));
    return ['所有', ...Array.from(uniqueCategories)];
  }, []);

  const filteredNailArts = useMemo(() => {
    let filtered = nailArts;

    if (selectedCategory !== '所有') {
      filtered = filtered.filter(art => art.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        art =>
          art.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          art.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          art.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [nailArts, selectedCategory, searchTerm]);

  const handleViewDetails = useCallback((nailArt: NailArt) => {
    setSelectedNailArt(nailArt);
    setShowDetailModal(true);
  }, []);

  const handleCloseDetailModal = useCallback(() => {
    setShowDetailModal(false);
    setSelectedNailArt(null);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff5f7] text-gray-800 font-sans selection:bg-rose-200">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-500 border-b border-transparent ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-white/20 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => {setSelectedCategory('所有'); window.scrollTo(0,0)}}>
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="font-serif italic font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="font-serif font-bold tracking-wide text-gray-900 text-2xl">
                Nail Art Gallery
              </h1>
              <p className="text-[10px] tracking-[0.2em] text-rose-500 uppercase hidden sm:block">Inspiration & Design</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white/60 backdrop-blur-md border border-white/50 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-pink-200 focus-within:bg-white transition-all shadow-sm w-full md:w-auto">
            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="搜尋風格..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full md:w-48 placeholder-gray-400 text-gray-700"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-40 pb-16 px-6 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-100/50 to-transparent -z-10"></div>
         <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
         
         <span className="text-rose-500 font-semibold tracking-widest text-xs uppercase mb-4 inline-block animate-fade-in-up">Curated Collection</span>
         <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 animate-fade-in-up leading-tight">
           指尖上的<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">藝術畫廊</span>
         </h2>
         <p className="text-gray-600 max-w-xl mx-auto text-lg font-light animate-fade-in-up leading-relaxed" style={{animationDelay: '0.1s'}}>
           探索當季最流行的美甲設計，為您的下一次預約尋找完美靈感。
         </p>
         
         {/* Category Pills */}
         <div className="flex flex-wrap justify-center gap-3 mt-10 animate-fade-in-up max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 border-gray-100 hover:border-pink-200 hover:text-pink-600 hover:shadow-md'
                }`}
              >
                <span className={`${selectedCategory === category ? 'text-pink-300' : 'text-gray-400 group-hover:text-pink-500'}`}>
                  {Icons[category] || DefaultIcon}
                </span>
                {category}
              </button>
            ))}
         </div>
      </div>

      {/* Main Grid */}
      <main className="container mx-auto px-6 pb-24">
        {filteredNailArts.length === 0 ? (
          <div className="text-center py-24 bg-white/50 rounded-3xl backdrop-blur-sm border border-white">
            <div className="text-7xl mb-6 animate-bounce">💅</div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">找不到相關靈感</h3>
            <p className="text-gray-500 font-light">試試看其他關鍵字，或是瀏覽所有款式</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('所有');}}
              className="mt-8 px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all shadow-lg shadow-pink-200/50"
            >
              查看所有款式
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredNailArts.map((nailArt, index) => (
              <div key={nailArt.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <NailArtCard
                  nailArt={nailArt}
                  onViewDetails={handleViewDetails}
                  icon={Icons[nailArt.category] || DefaultIcon}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md py-12 border-t border-pink-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
               <span className="font-serif font-bold text-xl text-gray-900">Nail Art Gallery</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Designed by SANDY3298 | 為您帶來指尖上的無限創意</p>
          </div>
          <div className="flex gap-8 text-gray-400">
             <a href="#" className="hover:text-pink-600 transition-colors text-sm font-medium tracking-wide">INSTAGRAM</a>
             <a href="#" className="hover:text-pink-600 transition-colors text-sm font-medium tracking-wide">PINTEREST</a>
             <a href="#" className="hover:text-pink-600 transition-colors text-sm font-medium tracking-wide">FACEBOOK</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showDetailModal && (
        <NailArtDetailModal
          nailArt={selectedNailArt}
          onClose={handleCloseDetailModal}
        />
      )}
    </div>
  );
};

export default App;
