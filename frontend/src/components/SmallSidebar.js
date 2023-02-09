import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import {
  adminLinks,
  userLinks,
  companyLinks,
  teacherLinks,
} from "../utils/links";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar, user } = useAppContext();
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
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <NavLinks links={links} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
