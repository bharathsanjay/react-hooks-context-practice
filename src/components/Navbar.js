import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;

    render() { 
        const {isLight, light, dark} = this.context;
        const theme = isLight? light:dark; 
        return (
            <nav style = {{background: theme.bg, color : theme.syntax}}>
                <h1>Context app</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
          );
    }
}
 
export default Navbar;