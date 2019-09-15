import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink,Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    const panes = [
        { menuItem: 
             { key: 'home', icon: 'home', content: 'Home', },
            render: () => <Route path='/' exact component = {WelcomePage} /> },
        { menuItem: 
             { key: 'character', icon: 'group', content: 'Character' },
            render: () => <Route path='/character' exact component = {CharacterList} /> },
        { menuItem:  
            { key: 'location', icon: 'location arrow', content: 'Location' },
            render: () =><Route path='/location' exact component = {LocationsList} />  },
      ]
    return (
        <Tab 
        panes={panes}
       />
    );
};
