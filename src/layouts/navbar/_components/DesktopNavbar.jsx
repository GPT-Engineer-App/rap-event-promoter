import { Package2 } from "lucide-react";
import { NavItem } from "./NavItem";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm" aria-label="Huvudnavigering">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
      aria-label="Hem"
    >
      <Package2 className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">Burboun</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);