const items = document.querySelectorAll("ul li");
const imgs = document.querySelectorAll(".products img");

items.forEach((item) => {
  // Active
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    // Filter
    const valueAttr = item.getAttribute("data-filter");
    imgs.forEach((img) => {
      img.style.display = "none";
      if (
        img.getAttribute("data-filter").toLowerCase() ==
          valueAttr.toLowerCase() ||
        valueAttr == "all"
      ) {
        img.style.display = "block";
      }
    });
  });
});
