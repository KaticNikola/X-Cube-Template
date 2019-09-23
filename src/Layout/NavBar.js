import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../components/icon/Icon'
import Description from '../components/description/Description';


import "./NavBar.scss"



export class NavBar extends Component {
    state = {
        navbar: {
            icon: {
                icon: ' fas fa-expand-arrows-alt',
                color: '',
                fontSize: '25px',
                // textAlign: 'right'
            },
            description: {
                content: "X CUUBE",
                fontSize: "",
                fontType: "",
                fontWeight: "",
                fontColor: "",
                textTransform: "",
                fontStyle: "",
                textAlign: "",
                textDecoration: "",
                lineHeight: "",
            },
        }
    }
    render() {
        const { icon, description } = this.state.navbar;
        return (

            <nav className='navigation'>
                <div className="navigation-brand">
                    <Link to='/' className="navigation-brand_logo" >
                        <Icon {...icon} />
                        {/* <Description { ...description }/> */}
                    </Link>
                </div>
                <ul className="navigation-menu" >
                    <li className="navigation--item">
                        <Link to='/live-edit' className='navigation--item_link' >
                            Live Edit
                        </Link>
                    </li>
                    <li className="navigation--item">
                        <Link to='/live-edit/edit-mode' className='navigation--item_link' >
                            Edit Mode
                        </Link>
                    </li>
                    <li className="navigation--item">
                        <Link to='/live-edit/test' className='navigation--item_link' >
                            TEST
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
