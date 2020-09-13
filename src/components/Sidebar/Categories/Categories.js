import React from "react";
import SidebarLink from "../SidebarLink/SidebarLink";

function Categories(props) {
  const { notes, handleClick } = props;
  let uniqid = require("uniqid");
  let categoryList = [];

  notes.map((noteItem) => {
    if (categoryList.find((category) => category.name === noteItem.category)) {
      const noteItemCategory = categoryList.findIndex(
        (categoryItem) => categoryItem.name === noteItem.category
      );
      const categoryCount = notes.filter(
        (categoryItem) => categoryItem.category === noteItem.category
      );

      return (categoryList[noteItemCategory].count = categoryCount.length);
    } else {
      categoryList.push({ name: noteItem.category, count: 1 });
      return null;
    }
  });

  function buildCategoryList(item) {
    return (
      <SidebarLink
        click={handleClick}
        category={item.name}
        key={uniqid()}
        icon={item.icon}
        name={item.name}
        count={item.count}
      />
    );
  }

  console.log(notes);

  return (
    <>
      <p>CATEGORIES</p>
      <ul>{categoryList.map(buildCategoryList)}</ul>
    </>
  );
}

export default Categories;
