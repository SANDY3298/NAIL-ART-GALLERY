
import React, { useState } from 'react';
import { NailArt } from '../types';

interface NailArtDetailModalProps {
  nailArt: NailArt | null;
  onClose: () => void;
}

const NailArtDetailModal: React.FC<NailArtDetailModalProps> = ({ nailArt, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'form' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });

  if (!nailArt) return null;

  const displayName = nailArt.name.includes('(') ? nailArt.name.split('(')[0] : nailArt.name;
  const subName = nailArt.name.includes('(') ? nailArt.name.split('(')[1].replace(')', '') : '';

  const handleBookClick = () => {
    setBookingStatus('form');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('submitting');
    // Simulate API delay
    setTimeout(() => {
      setBookingStatus('success');
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity animate-fade-in" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
         {/* Decorative Header */}
        <div className="h-32 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden shrink-0 border-b border-rose-100/50">
            <div className="absolute top-[-50%] left-[-10%] w-64 h-64 bg-rose-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-40 h-40 bg-pink-200/30 rounded-full blur-2xl"></div>
             <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-500 hover:text-gray-800 rounded-full p-2 transition-all shadow-sm backdrop-blur-sm z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
        </div>

        {/* Content Body */}
        <div className="px-8 py-8 sm:px-12 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col items-center text-center mb-8">
               <span className="bg-white text-rose-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-rose-100 shadow-sm">
                {nailArt.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 leading-tight">
                {displayName}
              </h2>
              {subName && (
                <p className="text-gray-400 font-medium tracking-[0.2em] uppercase text-xs mb-4">
                  {subName}
                </p>
              )}
              <div className="text-3xl font-serif font-bold text-rose-500">
                NT$ {nailArt.price}
              </div>
            </div>

            <div className="prose prose-rose mx-auto mb-8">
               <p className="text-gray-600 text-lg leading-loose font-light text-justify sm:text-center">
                 {nailArt.description}
               </p>
            </div>

             {/* Booking & Action Section */}
             <div className="pt-8 border-t border-gray-100">
                {bookingStatus === 'idle' && (
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={handleBookClick}
                            className="flex-1 bg-gray-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-all hover:shadow-lg active:transform active:scale-95"
                        >
                            Book This Style
                        </button>
                        <button 
                            onClick={() => setIsSaved(!isSaved)}
                            className={`px-6 py-3.5 border rounded-xl transition-all flex items-center justify-center gap-2 ${
                                isSaved 
                                ? 'border-rose-500 text-rose-500 bg-rose-50 shadow-inner' 
                                : 'border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600'
                            }`}
                        >
                            {isSaved ? (
                            <svg className="w-5 h-5 fill-current text-rose-500" viewBox="0 0 24 24">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            )}
                            {isSaved ? 'Saved' : 'Save'}
                        </button>
                    </div>
                )}

                {(bookingStatus === 'form' || bookingStatus === 'submitting') && (
                    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 animate-fade-in shadow-inner">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-serif font-bold text-xl text-gray-900">預約諮詢</h3>
                            <button 
                                type="button" 
                                onClick={() => setBookingStatus('idle')}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                取消
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">您的姓名</label>
                                <input 
                                    name="name"
                                    required 
                                    value={formData.name} 
                                    onChange={handleInputChange} 
                                    type="text" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 outline-none transition-all bg-white" 
                                    placeholder="e.g. Miss Lin" 
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">日期</label>
                                    <input 
                                        name="date"
                                        required 
                                        value={formData.date} 
                                        onChange={handleInputChange} 
                                        type="date" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 outline-none transition-all bg-white text-gray-600" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">時間</label>
                                    <input 
                                        name="time"
                                        required 
                                        value={formData.time} 
                                        onChange={handleInputChange} 
                                        type="time" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 outline-none transition-all bg-white text-gray-600" 
                                    />
                                </div>
                            </div>
                        </div>

                        <button 
                            disabled={bookingStatus === 'submitting'} 
                            type="submit" 
                            className="w-full mt-6 bg-rose-500 text-white py-3.5 rounded-xl font-bold hover:bg-rose-600 transition-all shadow-lg shadow-rose-200 hover:shadow-rose-300 active:scale-[0.99] flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {bookingStatus === 'submitting' ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : '確認預約 (Confirm Booking)'}
                        </button>
                    </form>
                )}

                {bookingStatus === 'success' && (
                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100 flex flex-col items-center text-center animate-fade-in">
                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="font-serif font-bold text-2xl text-green-800 mb-2">預約成功！</h3>
                        <p className="text-green-600 mb-6">我們已收到您的預約請求，將盡快傳送確認信給您。</p>
                        <button 
                            onClick={() => setBookingStatus('idle')} 
                            className="px-6 py-2 bg-white border border-green-200 text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors"
                        >
                            返回瀏覽
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default NailArtDetailModal;
