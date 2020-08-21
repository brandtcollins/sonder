import React, { Fragment } from "react";
import SidebarLink from '../SidebarLink/SidebarLink';
import categoryList from "./CategoryList";


function Categories(props){

    let uniqid = require('uniqid');

    const handleClick = (event) => {
        props.setCategory(event.target.name)
    }

    function buildCategoryList(item){
        return (
            <SidebarLink click={handleClick} key={uniqid()} icon={item.icon} name={item.name} />
        );
    }

    return (
        <Fragment>
            <p>CATEGORIES</p>
            <ul>
                {categoryList.map(buildCategoryList)}
            </ul>
        </Fragment>
    )
}

export default Categories;