const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}



function paginate(pageSelected, totalPages) {
  let pages = [];
  let oldPage = 0;
  
  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const pageAfterSelectedPage = currentPage <= pageSelected + 2;
    const pageBeforeSelectedPage = currentPage >= pageSelected - 2;
    const firstPageAndLastPage = currentPage == 1 || currentPage == totalPages;
    
    if (firstPageAndLastPage || pageBeforeSelectedPage && pageAfterSelectedPage) {
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

function createPagination(pagination) {
  const page = +pagination.dataset.page;
  const total = +pagination.dataset.total;
  const filter = pagination.dataset.filter;
  
  const pages = paginate(page, total);
  
  let elements = "";
  
  for (let page of pages) {
    if (String(page).includes("...")) {
      elements += `<span>${page}<span>`
    } else {
      if (filter) {
        elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`;
      } else {
        elements += `<a href="?page=${page}">${page}</a>`
      }
    }
  }
  
  pagination.innerHTML = elements;
}

const pagination = document.querySelector(".pagination");

if (pagination) {
  createPagination(pagination);
}

const currentActivePage = location.href;
const pageItems = document.querySelectorAll(".pagination a");

for (pagen of pageItems) {
  if (currentActivePage.includes(pagen.getAttribute("href"))) {
    pagen.classList.add("active");
  }
}