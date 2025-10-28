import { useLocation, useNavigate } from "react-router";

export const useHandleNavClicks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: { path: string; scrollTo?: string }) => {
    if (link.scrollTo) {
      // If already on home page
      if (location.pathname === "/") {
        const section = document.getElementById(link.scrollTo);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home and include the hash
        navigate(`/#${link.scrollTo}`);
      }
    } else {
      navigate(link.path);
    }
  };

  return { handleNavClick };
};
