// Components
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <DesktopNav />

      <div className="fixed top-5 left-5 md:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Navbar;
