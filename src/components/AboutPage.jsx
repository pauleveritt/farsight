import React from 'react'

import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';

class AboutPage extends React.Component {
    render () {
        return (
            <div>
                <h1>AboutPage</h1>
                <List>
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder/>}/>}
                        rightIcon={<ActionInfo/>}
                        primaryText="Photos"
                        secondaryText="Jan 9, 2014"
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder/>}/>}
                        rightIcon={<ActionInfo/>}
                        primaryText="Recipes"
                        secondaryText="Jan 17, 2014"
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder/>}/>}
                        rightIcon={<ActionInfo/>}
                        primaryText="Work"
                        secondaryText="Jan 28, 2014"
                    />
                </List>
            </div>
        )
    }
}


export default AboutPage
