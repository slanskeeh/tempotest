import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  logo?: string;
  categories?: {
    id: string;
    name: string;
    subcategories: { id: string; name: string }[];
  }[];
}

const Header = ({
  logo = "https://api.dicebear.com/7.x/initials/svg?seed=MF",
  categories = [
    {
      id: "1",
      name: "Мягкая мебель",
      subcategories: [
        { id: "1-1", name: "Диваны" },
        { id: "1-2", name: "Кресла" },
      ],
    },
    {
      id: "2",
      name: "Спальня",
      subcategories: [
        { id: "2-1", name: "Кровати" },
        { id: "2-2", name: "Шкафы" },
      ],
    },
  ],
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-white border-b">
      <div className="container mx-auto h-full px-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Search Bar with Category Dropdown */}
        <div className="flex-1 max-w-2xl flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Все категории" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="relative flex-1">
            <Input
              type="search"
              placeholder="Поиск мебели..."
              className="w-full pl-4 pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.id}>
                <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.id}>
                        <NavigationMenuLink asChild>
                          <a
                            href={`/category/${category.id}/${subcategory.id}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {subcategory.name}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="/about"
              >
                О нас
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
