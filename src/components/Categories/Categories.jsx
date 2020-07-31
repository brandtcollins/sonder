import React from "react";
import SidebarLink from "../SidebarLink/SidebarLink";
import categoryList from "../../categoryList";
import { Typography  } from '@material-ui/core';


function Categories(){
    function buildCategoryList(item){
        return (
            <SidebarLink key={item.key} icon={item.icon} name={item.name} />
        );
    }

    return (
        <div>
            <Typography variant="caption">CATEGORIES</Typography>
            <ul>
                {categoryList.map(buildCategoryList)}
            </ul>
        </div> 
    )
}

export default Categories;