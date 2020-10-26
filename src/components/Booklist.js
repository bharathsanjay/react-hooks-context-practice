import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class Booklist extends Component {
 static contextType = ThemeContext;   
    render() { 
        const {isLight, light, dark} = this.context;
        const theme = isLight? light : dark;

        return (
            <div className="book-list" style={{background : theme.bg, color : theme.syntax}}>
                <ul>
                    <li style = {{background : theme.ui}}>lord of the rings</li>
                    <li style = {{background : theme.ui}}>harry potter</li>
                    <li style = {{background : theme.ui}}>hercules</li>
                </ul>
            </div>
          );
    }
}
 
export default Booklist;