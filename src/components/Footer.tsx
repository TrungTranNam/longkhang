import React, { lazy, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScroll } from "./ScrollContext";

export const Footer = () => {
  const certifications = [{
    name: "Chứng nhận HACCP",
    image: "/images/haccp.png",
    description: "Hệ thống quản lý an toàn thực phẩm"
  }, {
    name: "Chứng nhận ISO 22000",
    image: "/images/ISO-22000-2.png",
    description: "Tiêu chuẩn quốc tế về ATTP"
  }, {
    name: "Chứng nhận VSATTP",
    image: "/images/an-toan-thuc-pham.jpg",
    description: "Cục An toàn thực phẩm Việt Nam"
  }];

  const { sectionRefs } = useScroll();

  return <footer className="w-full bg-gray-900 text-white" ref={sectionRefs.footerSection}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" />
                <p>No.07 TT03 Khu Đô Thị HD City, Mỹ Đình 2, Nam Từ Liêm, Hà Nội</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-red-500" />
                <p>039 5267777</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-500" />
                <p>contact@wagyushop.com</p>
              </div>
            </div>
          </div>
          <div className="h-[300px] rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.74609013990124!2d105.76775624569031!3d21.035188951283633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455cadbb20ca7%3A0x4c5878768326b95d!2sK%20-%20Apple!5e0!3m2!1sen!2s!4v1740382509877!5m2!1sen!2s" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Chứng Nhận An Toàn Thực Phẩm
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-lg w-32 h-32 flex items-center justify-center mb-4">
                  <img src={cert.image} alt={cert.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h4 className="font-bold mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>)}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Wagyu Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};