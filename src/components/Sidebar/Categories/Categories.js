import React from "react";
import SidebarLink from '../SidebarLink/SidebarLink';
import categoryList from "./CategoryList";


function Categories(){

    let uniqid = require('uniqid');

    function buildCategoryList(item){
        return (
            <SidebarLink key={uniqid()} icon={item.icon} name={item.name} />
        );
    }

    return (
        <div>
            <p>CATEGORIES</p>
            <ul>
                {categoryList.map(buildCategoryList)}
            </ul>
        </div> 
    )
}

export default Categories;