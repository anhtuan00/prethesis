import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/BigSidebar";
import { adminLinks, userLinks } from "../utils/links";

const BigSidebar = () => {
  const { showSidebar, user } = useAppContext();
  const links = user.role === "admin" ? adminLinks : userLinks;
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header></header>
          <NavLinks links={links} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
