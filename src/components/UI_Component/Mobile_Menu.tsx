"use client";

import * as React from "react";
import Link from "next/link";
import { components } from "../data/Menu_Items";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

export function MobileMenu() {
  const [activeSubmenu, setActiveSubmenu] = React.useState<number | null>(null);

  const toggleSubmenu = (index: number): void => {
    setActiveSubmenu((prev) => (prev === index ? null : index)); // Open or close submenu
  };

  return (
    <div className="absolute top-12 left-0 w-full z-10">
      <ul className="flex flex-col">
        <li className="p-4">
          <button
            onClick={() => toggleSubmenu(1)}
            className="flex justify-between items-center w-full text-gray-900"
          >
            Class 4-12
            <span>{activeSubmenu === 1 ? "-" : "+"}</span>
          </button>
          {activeSubmenu === 1 && (
            <ul className="pl-4 mt-2 space-y-2">
              {components.map((component) => (
                <li key={component.title}>
                  <Link
                    
                    href={component.href}
                    className="block text-gray-800"
                  >
                    {component.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="p-4">
          <button
            onClick={() => toggleSubmenu(2)}
            className="flex justify-between items-center w-full text-gray-700"
          >
            Services
            <span>{activeSubmenu === 2 ? "-" : "+"}</span>
          </button>
          {activeSubmenu === 2 && (
            <ul className="pl-4 mt-2 space-y-2">
              {components.map((component) => (
                <li key={component.title}>
                  <Link
                    
                    href={component.href}
                    className="block text-gray-800"
                  >
                    {component.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="p-4">
          <Link href="#" className="block text-gray-900">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
