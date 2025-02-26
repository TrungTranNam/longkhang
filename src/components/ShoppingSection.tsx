import React from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScroll } from "./ScrollContext";

export const ShoppingSection = () => {
  const navigate = useNavigate();
  const products = [{
    id: 1,
    name: "Wagyu A5 Ribeye",
    price: "2,890,000đ",
    weight: "300g",
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?auto=format&fit=crop&q=80&w=800"
  }, {
    id: 2,
    name: "Wagyu A5 Striploin",
    price: "2,590,000đ",
    weight: "300g",
    image: "https://hoatuoc.com/wp-content/uploads/2021/09/nha-hang-la-melodie-ngo-duc-ke-1.jpg"
  }, {
    id: 3,
    name: "Wagyu A5 Tenderloin",
    price: "3,290,000đ",
    weight: "300g",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=800"
  }, {
    id: 4,
    name: "Wagyu A5 Short Plate",
    price: "1,890,000đ",
    weight: "300g",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
  }];

  const { sectionRefs } = useScroll();

  return <section className="py-16 px-4 bg-white" ref={sectionRefs.shoppingSection}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Sản Phẩm Nổi Bật
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Thịt bò Wagyu cao cấp, nhập khẩu trực tiếp từ Nhật Bản
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative group">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors" onClick={() => navigate(`/product/${product.id}`)}>
                    Xem chi tiết
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.weight}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold">
                    {product.price}
                  </span>
                  <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};