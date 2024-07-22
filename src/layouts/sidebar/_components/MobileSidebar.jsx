import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../../nav-items";
import { SidebarNavLink } from "./SidebarNavLink";

export const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden" aria-label="Öppna sidofält">
        <Menu className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Växla navigeringsmeny</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium" aria-label="Mobilsidofält">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
          aria-label="Hem"
        >
          <Package2 className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Burboun</span>
        </NavLink>
        {navItems.map((item) => (
          <SidebarNavLink key={item.to} to={item.to}>
            {item.icon && <span aria-hidden="true">{item.icon}</span>}
            {item.title}
          </SidebarNavLink>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);