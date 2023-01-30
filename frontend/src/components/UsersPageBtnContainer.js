import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/UsersPageBtnContainer";

const UsersPageBtnContainer = () => {
  const { numOfPagesUsers, pageUsers, changePageUsers } = useAppContext();

  const pages = Array.from({ length: numOfPagesUsers }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = pageUsers + 1;
    if (newPage > numOfPagesUsers) {
      newPage = 1;
    }
    changePageUsers(newPage);
  };
  const prevPage = () => {
    let newPage = pageUsers - 1;
    if (newPage < 1) {
      newPage = numOfPagesUsers;
    }
    changePageUsers(newPage);
  };
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={
                pageNumber === pageUsers ? "pageBtn active" : "pageBtn"
              }
              key={pageNumber}
              onClick={() => changePageUsers(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default UsersPageBtnContainer;
