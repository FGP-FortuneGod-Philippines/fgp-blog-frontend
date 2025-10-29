import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import logo from "@/assets/fgp-img.webp";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { navLinks } from "@/constants";
import { LuMenu } from "react-icons/lu";
import { useHandleNavClicks } from "./NavClicks";

const MobileNav = () => {
  const { handleNavClick } = useHandleNavClicks();

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <LuMenu />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-col">
          <DrawerHeader>
            <div className="w-20 h-20">
              <img
                src={logo}
                alt="fpg-logo"
                className="w-full h-full object-contain"
              />
            </div>
          </DrawerHeader>

          <div className="w-full p-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-5 flex justify-start items-start flex-col">
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

          <DrawerFooter>
            <Button>Contact Us</Button>
            <DrawerClose asChild>
              <Button variant="outline">Back to Page</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
