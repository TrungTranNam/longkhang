import React from "react";
import { Phone, MessageCircle, Facebook } from "lucide-react";
export const ContactButtons = () => {
  return <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
      {/* Facebook Button */}
      <a href="https://www.facebook.com/quanghop83vnn" target="_blank" rel="noopener noreferrer" className="group relative bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
        <Facebook size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat Facebook
        </span>
      </a>
      {/* Zalo Button */}
      <a href="https://zalo.me/0395267777" target="_blank" rel="noopener noreferrer" className="group relative bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat Zalo
        </span>
      </a>
      {/* Phone Button */}
      <a href="tel:0395267777" className="group relative bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors animate-bounce">
        <Phone size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Gọi ngay: 0395267777
        </span>
      </a>
    </div>;
};