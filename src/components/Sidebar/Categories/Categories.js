import React, { useContext } from "react";
import SidebarLink from "../SidebarLink/SidebarLink";
import { NoteContext } from "../../../context/NoteContext";

function Categories(props) {
  const noteContext = useContext(NoteContext);
  const { state } = noteContext;
  const { notes, category } = state;
  const { handleClick } = props;
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
        active={category === item.name ? true : false}
        key={item.name}
        icon={item.icon}
        name={item.name}
        count={item.count}
      />
    );
  }
  return (
    <>
      <p>CATEGORIES</p>
      <ul>{categoryList.map(buildCategoryList)}</ul>
    </>
  );
}

export default Categories;
