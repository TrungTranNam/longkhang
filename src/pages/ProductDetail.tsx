import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Minus, Plus, ShoppingCart, ChevronRight } from "lucide-react";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
export const ProductDetail = () => {
  const {
    id
  } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = {
    id: parseInt(id || "1"),
    name: "Wagyu A5 Ribeye",
    price: "2,890,000đ",
    weight: "300g",
    origin: "Kagoshima, Nhật Bản",
    grade: "A5 (BMS 8-12)",
    mainImage: "/images/upload/photo-1615937722923-67f6deaf2cc9.jpeg",
    gallery: ["/images/upload/photo-1615937722923-67f6deaf2cc9.jpeg", "/images/upload/photo-1615937722923-67f6deaf2cc9.jpeg", "/images/upload/photo-1607623814075-e51df1bdc82f.jpeg"],
    description: "Thịt bò Wagyu A5 Ribeye được nhập khẩu trực tiếp từ Nhật Bản, với vân mỡ đẹp tuyệt hảo và hương vị độc đáo. Đây là phần thịt được yêu thích nhất từ những con bò Wagyu được chăn nuôi tại Kagoshima.",
    specifications: [{
      label: "Xuất xứ",
      value: "Kagoshima, Nhật Bản"
    }, {
      label: "Cấp độ",
      value: "A5 (BMS 8-12)"
    }, {
      label: "Trọng lượng",
      value: "300g"
    }, {
      label: "Bảo quản",
      value: "-18°C"
    }],
    recipes: [{
      name: "Wagyu Steak Kiểu Nhật",
      image: "/images/upload/photo-1544025162-d76694265947.jpeg",
      duration: "30 phút",
      difficulty: "Trung bình",
      ingredients: ["300g Wagyu Ribeye", "Muối biển", "Tiêu đen xay", "Tỏi", "Bơ lạt"],
      steps: ["Để thịt ở nhiệt độ phòng 30 phút trước khi chế biến", "Thấm khô thịt bằng giấy thấm", "Ướp muối và tiêu đen", "Làm nóng chảo gang ở nhiệt độ cao", "Nướng mỗi mặt 4-5 phút với bơ và tỏi", "Để thịt nghỉ 5-10 phút trước khi cắt"]
    }, {
      name: "Wagyu Yakiniku",
      image: "/images/upload/photo-1602030638412-bb8dcc0bc8b0.jpeg",
      duration: "20 phút",
      difficulty: "Dễ",
      ingredients: ["300g Wagyu Ribeye cắt mỏng", "Sốt yakiniku", "Hành lá", "Vừng rang"],
      steps: ["Cắt thịt thành từng lát mỏng 2-3mm", "Ướp thịt với sốt yakiniku 15 phút", "Làm nóng vỉ nướng", "Nướng từng miếng thịt 30-45 giây mỗi mặt", "Rắc hành lá và vừng rang lên trước khi dùng"]
    }, {
      name: "Wagyu Tataki",
      image: "/images/upload/photo-1579366948929-444eb79881eb.jpeg",
      duration: "25 phút",
      difficulty: "Trung bình",
      ingredients: ["300g Wagyu Ribeye", "Sốt ponzu", "Hành lá", "Gừng băm", "Tỏi băm"],
      steps: ["Áp chảo nhanh các mặt của miếng thịt", "Ngâm thịt trong nước đá để dừng quá trình chín", "Thái thịt thành từng lát mỏng", "Trộn với sốt ponzu", "Trang trí với hành lá, gừng và tỏi băm"]
    }]
  };
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.gallery,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Wagyu Nhật Bản"
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^0-9]/g, ""),
      priceCurrency: "VND",
      availability: "https://schema.org/InStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "100"
    },
    origin: {
      "@type": "Place",
      name: product.origin
    }
  };
  return <>
      <SEO title={product.name} description={product.description} image={product.mainImage} type="product" schema={schema} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((image, index) => <button key={index} onClick={() => setSelectedImage(image)} className={`aspect-square rounded-lg overflow-hidden border-2 ${selectedImage === image ? "border-red-600" : "border-transparent"}`}>
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>)}
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-red-600 text-2xl font-bold">{product.price}</p>
            <div className="space-y-4">
              <h2 className="font-bold text-lg">Mô tả sản phẩm</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-bold text-lg">Thông số</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => <div key={index} className="space-y-1">
                    <p className="text-gray-500">{spec.label}</p>
                    <p className="font-medium">{spec.value}</p>
                  </div>)}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-bold text-lg">Số lượng</h2>
              <div className="flex items-center space-x-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 rounded-lg border hover:bg-gray-50">
                  <Minus size={20} />
                </button>
                <span className="text-xl font-medium w-12 text-center">
                  {quantity}
                </span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 rounded-lg border hover:bg-gray-50">
                  <Plus size={20} />
                </button>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Công Thức Chế Biến Gợi Ý</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.recipes.map((recipe, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{recipe.name}</h3>
                  <div className="flex gap-4 mb-4 text-sm text-gray-600">
                    <span>{recipe.duration}</span>
                    <span>•</span>
                    <span>{recipe.difficulty}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Nguyên liệu:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {recipe.ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Các bước thực hiện:</h4>
                    <ol className="list-decimal list-inside text-gray-600">
                      {recipe.steps.map((step, idx) => <li key={idx} className="mb-1">
                          {step}
                        </li>)}
                    </ol>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <Footer />
    </>;
};