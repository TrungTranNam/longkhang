import React, { useEffect, useState } from 'react';
export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: '/images/upload/photo-1607623814075-e51df1bdc82f.jpeg',
    title: 'Lưỡi Bò Wagyu A5',
    origin: 'Nhập khẩu trực tiếp từ Nhật Bản',
    description: 'Được chăn nuôi tại vùng Kagoshima, Nhật Bản với phương pháp truyền thống'
  }, {
    image: '/images/upload/photo-1615937722923-67f6deaf2cc9.jpeg',
    title: 'Chất Lượng Premium',
    origin: 'Đạt chuẩn A5 BMS 8-12',
    description: 'Vân mỡ đẹp, độ mềm hoàn hảo, hương vị đặc trưng'
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
            <h2 className="text-2xl mb-4">{slide.origin}</h2>
            <p className="text-xl max-w-2xl">{slide.description}</p>
          </div>
        </div>)}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`} onClick={() => setCurrentSlide(index)} />)}
      </div>
    </section>;
};