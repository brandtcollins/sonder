import React, { Fragment } from "react";
import SidebarLink from "../SidebarLink/SidebarLink";

function Categories(props) {
  let uniqid = require("uniqid");
  let categoryList = [];

  const handleClick = (event) => {
    props.setCategory(event.target.name);
  };
  props.notes.map((noteItem) => {
    if (categoryList.find((category) => category.name === noteItem.category)) {
      const noteItemCategory = categoryList.findIndex(
        (categoryItem) => categoryItem.name === noteItem.category
      );
      const categoryCount = props.notes.filter(
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

  return (
    <Fragment>
      <p>CATEGORIES</p>
      <ul>{categoryList.map(buildCategoryList)}</ul>
    </Fragment>
  );
}

export default Categories;
