import React from "react";
import './Sidebar.css';
import SidebarLink from "../SidebarLink/SidebarLink";
import { Grid, Typography  } from '@material-ui/core';
import Categories from '../Categories/Categories';
import SonderAvatar from '../SonderAvatar';

function Sidebar() {

    return (
        <div className="sidebar">
            <Grid container spacing={3}>
                <Grid item xs align="center">
                    <SonderAvatar />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption">NOTES</Typography>
                    <ul>
                        <SidebarLink icon="fa-file-alt" name="View All"/>
                        <SidebarLink icon="fa-trash" name="Deleted"/>
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <Categories />
                </Grid>
                <Grid item xs align="center" >
                    <Typography variant="caption">SIGN UP</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="caption">REGISTER</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Sidebar;