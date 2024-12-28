import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductCardProps {
  title?: string;
  price?: number;
  image?: string;
  onQuickView?: () => void;
}

const ProductCard = ({
  title = "Комфортный диван",
  price = 24999,
  image = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  onQuickView = () => console.log("Quick view clicked"),
}: ProductCardProps) => {
  return (
    <Card className="w-[280px] h-[420px] bg-white overflow-hidden group relative">
      <CardContent className="p-0">
        <div className="relative h-[320px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                    onClick={onQuickView}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Быстрый просмотр</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
        <p className="text-xl font-semibold">
          {price.toLocaleString("ru-RU")} ₽
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
