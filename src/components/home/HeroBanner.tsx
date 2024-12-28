import React from "react";
import { Button } from "@/components/ui/button";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroBanner = ({
  title = "Создайте дом своей мечты",
  subtitle = "Откройте для себя нашу коллекцию элегантной мебели, которая сочетает в себе комфорт и стиль",
  imageUrl = "https://images.unsplash.com/photo-1618220179428-22790b461013",
  ctaText = "Смотреть каталог",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroBannerProps) => {
  return (
    <div className="relative w-[1512px] h-[600px] bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Hero furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-start px-16 max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl text-white/90 mb-8">{subtitle}</p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-white/90"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
