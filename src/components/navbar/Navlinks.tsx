import { Link } from "react-router";
import { navLinks } from "@/constants";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const Navlinks = () => {
  return (
    <NavigationMenuList className="gap-10">
      {navLinks &&
        navLinks.map((link) => (
          <NavigationMenuItem key={link.path}>
            <NavigationMenuLink
              asChild
              className="font-medium tracking-wide text-sm"
            >
              <Link to={link.path}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
    </NavigationMenuList>
  );
};

export default Navlinks;
