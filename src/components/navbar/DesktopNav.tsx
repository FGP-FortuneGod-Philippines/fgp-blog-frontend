import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import logo from "@/assets/fgp-img.webp";
import { useHandleNavClicks } from "./NavClicks";

const DesktopNav = () => {
  const { handleNavClick } = useHandleNavClicks();

  return (
    <header className="wrapper h-[5rem] flex justify-between items-center max-md:hidden">
      {/* Logo */}
      <div className="w-20 h-20">
        <img
          src={logo}
          alt="fpg-logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-1 justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-10">
            {navLinks &&
              navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    asChild
                    className="font-medium tracking-wide text-sm"
                  >
                    <span
                      className="cursor-pointer"
                      onClick={() => handleNavClick(link)}
                    >
                      {link.label}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTC */}
      <div>
        <Button>Contact Us</Button>
      </div>
    </header>
  );
};

export default DesktopNav;
