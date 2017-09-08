import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
    AppBar, Drawer, IconButton, IconMenu,
    MenuItem
} from "material-ui";
import {indigo900} from 'material-ui/styles/colors';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const drawerMenus = [
    {id: 1, title: 'First', routeName: '/about'}
]

class NavHeader extends Component {

    state = {
        appName: 'Farsight',
        drawerOpened: false,
        drawerMenus: [
            {id: 1, title: 'Home', routeName: '/'},
            {id: 2, title: 'About', routeName: 'about'}
        ]
    }

    routeTo = routeName => event => {
        event.preventDefault();
        const {history} = this.props;
        history.push({pathname: routeName});
    }

    openDrawer = () => {
        this.setState({drawerOpened: true});
    }

    closeDrawer = () => {
        this.setState({drawerOpened: false});
    }

    toggleDrawer = () => {
        const {drawerOpened} = this.state;
        this.setState({drawerOpened: !drawerOpened});
    }

    render () {
        const {
            drawerOpened,
            drawerMenus,
            appName
        } = this.state;
        return (
            <div>
                <Drawer
                    open={drawerOpened}
                    docked={true}
                    onRequestChange={this.handlesOnDrawerRequestChange}
                    style={{zIndex: 1000}}>
                    <div
                        style={{backgroundColor: indigo900, height: '160px'}}/>
                    {
                        drawerMenus.map(
                            ({id, title, routeName}, menuIdx) => (
                                <MenuItem
                                    key={menuIdx}
                                    onTouchTap={this.routeTo(routeName)}>
                                    {title}
                                </MenuItem>
                            )
                        )
                    }
                </Drawer>
                <AppBar
                    title={appName}
                    onLeftIconButtonTouchTap={this.handlesOnLeftIconButtonTouchTap}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton>
                                    <MoreVertIcon color={'#FFFFFF'}/>
                                </IconButton>
                            }
                            targetOrigin={{
                                horizontal: 'right',
                                vertical: 'top'
                            }}
                            anchorOrigin={{
                                horizontal: 'right',
                                vertical: 'top'
                            }}>
                            {
                                drawerMenus.map(
                                    ({id, title, routeName}, menuIdx) => (
                                        <MenuItem
                                            key={menuIdx}
                                            primaryText={title}
                                            onTouchTap={this.routeTo(routeName)}
                                        />
                                    )
                                )
                            }
                        </IconMenu>
                    }/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/bookmarks">Bookmarks</Link></li>
                    <li><Link to="/old-match">Old Match, to be
                        redirected</Link></li>
                    <li><Link to="/will-not-match">Will Not
                        Match</Link>
                    </li>
                </ul>
                <hr/>
            </div>
        )
    }

    handlesOnDrawerRequestChange = (open) => {
        this.setState({drawerOpened: open});
    }

    handlesOnLeftIconButtonTouchTap = (event) => {
        event.preventDefault();
        this.toggleDrawer();
    }

}

export default NavHeader