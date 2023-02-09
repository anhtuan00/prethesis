import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/BigSidebar";
import {
  adminLinks,
  userLinks,
  teacherLinks,
  companyLinks,
} from "../utils/links";

const BigSidebar = () => {
  const { showSidebar, user } = useAppContext();
  let links;
  if (user.role === "admin") {
    links = adminLinks;
  } else if (user.role === "user") {
    links = userLinks;
  } else if (user.role === "teacher") {
    links = teacherLinks;
  } else if (user.role === "company") {
    links = companyLinks;
  }
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
