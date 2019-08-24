import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = (props) => {
    return(
        <div style={{marginBottom: '16px'}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        The 'How bad a girlfriend is {props.name}?' Quiz!
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};
export default NavBar;