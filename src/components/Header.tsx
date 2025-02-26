import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScroll } from './ScrollContext';

export const Header = () => {
  const { sectionRefs } = useScroll();
  const handleScroll = (sectionKey: string) => {
    sectionRefs[sectionKey].current?.scrollIntoView({ behavior : "smooth" });
  }

  return <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-red-600">
          <img className='shopLogo' src="/images/logo.png" alt="Long Khang" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-red-600 transition-colors">
            Trang chủ
          </Link>
          <a href="javacsript:void(0)" onClick={() => handleScroll('shoppingSection')} className="hover:text-red-600 transition-colors">
            Sản phẩm
          </a>
          <a href="javacsript:void(0)" onClick={() => handleScroll('footerSection')} className="hover:text-red-600 transition-colors">
            Liên hệ
          </a>
        </nav>
        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          <ShoppingCart size={20} />
          <span className="hidden md:inline">Giỏ hàng</span>
        </button>
      </div>
    </header>;
};