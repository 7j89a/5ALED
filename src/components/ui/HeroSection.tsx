import React from 'react';
import { Watch } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg')] bg-cover bg-center opacity-30"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-end text-right relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/90 px-4 py-2 rounded-full mb-6">
            <Watch size={20} className="text-white" />
            <span className="text-white font-semibold">ساعة وأناقة</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">ساعات أنيقة تناسب كل الأذواق</h1>
          <p className="text-xl text-gray-200 mb-8">
            معرض مميز لساعات اليد العصرية، بتصاميم متنوعة وعصرية. اختر ساعتك المفضلة الآن!
          </p>
          <div className="flex gap-4 justify-end">
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
              استكشف المجموعة
            </button>
            <button className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors duration-300">
              تسوق الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;