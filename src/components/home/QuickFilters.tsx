import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Sofa,
  Bed,
  Table2,
  Armchair,
  Lamp,
  DoorClosed,
  ChevronRight,
} from "lucide-react";

interface QuickFilterProps {
  filters?: Array<{
    icon: React.ReactNode;
    label: string;
    count?: number;
  }>;
  onFilterClick?: (label: string) => void;
}

const QuickFilters = ({
  filters = [
    { icon: <Sofa className="w-4 h-4" />, label: "Диваны", count: 120 },
    { icon: <Bed className="w-4 h-4" />, label: "Кровати", count: 85 },
    { icon: <Table2 className="w-4 h-4" />, label: "Столы", count: 64 },
    { icon: <Armchair className="w-4 h-4" />, label: "Стулья", count: 92 },
    { icon: <Lamp className="w-4 h-4" />, label: "Освещение", count: 73 },
    { icon: <DoorClosed className="w-4 h-4" />, label: "Шкафы", count: 45 },
  ],
  onFilterClick = (label: string) => console.log(`Filter clicked: ${label}`),
}: QuickFilterProps) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-[1200px] mx-auto py-3">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-2 px-4">
            {filters.map((filter, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                onClick={() => onFilterClick(filter.label)}
              >
                {filter.icon}
                <span>{filter.label}</span>
                {filter.count && (
                  <span className="text-sm text-gray-500">
                    ({filter.count})
                  </span>
                )}
              </Button>
            ))}
            <Button
              variant="ghost"
              className="flex items-center gap-1 px-3 py-2 hover:bg-gray-100"
              onClick={() => onFilterClick("more")}
            >
              Ещё
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default QuickFilters;
