const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {
if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active")
  }
}

function paginate(selectedPage, totalPages) {

  let pages = [];
  let oldPage = 0;

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;
    const firstAndLastPage = currentPage == 1 || currentPage == totalpages;

    if ( firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
      if (oldPage && currentPage - oldPage > 2) {
        pages.push("...");
      }

      if (oldPage && currentPage - oldPage == 2) {
        pages.push(oldPage + 1);
      }

      pages.push(currentPage);
      oldPage = currentPage;
    }

  }

  return pages;
}