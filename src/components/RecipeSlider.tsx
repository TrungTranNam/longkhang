import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export const RecipeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const recipes = [{
    title: "Wagyu Steak",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    steps: ["Để thịt ở nhiệt độ phòng 30 phút", "Ướp muối và tiêu đen", "Nướng 4-5 phút mỗi mặt", "Để thịt nghỉ 5-10 phút trước khi cắt"]
  }, {
    title: "Wagyu Yakiniku",
    image: "https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?auto=format&fit=crop&q=80&w=1200",
    steps: ["Cắt thịt mỏng 2-3mm", "Ướp với sốt yakiniku", "Nướng nhanh trên bếp than", "Dùng kèm với rau sống"]
  }];
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % recipes.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + recipes.length) % recipes.length);
  };
  return <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Công Thức Chế Biến
      </h2>
      <div className="max-w-6xl mx-auto relative">
        <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
          {recipes.map((recipe, index) => <div key={index} className={`absolute inset-0 transition-transform duration-500 ${index === currentIndex ? "translate-x-0" : "translate-x-full"}`}>
              <img src={recipe.image} alt={recipe.title} className="w-full h-[300px] object-cover" />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-4">{recipe.title}</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {recipe.steps.map((step, stepIndex) => <li key={stepIndex}>{step}</li>)}
                </ol>
              </div>
            </div>)}
        </div>
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>;
};