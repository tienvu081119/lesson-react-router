import React from 'react';
import {Route,Link} from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },{
        name: 'Liên Hệ',
        to: '/about',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link className="nav-link" to={to}>
                        {label}</Link>
                </li>
            )
        }}
        />
    )
}

class Menu extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {
                                this.showMenu(menus)
                            }   
                        </ul>
                    </div>
                </nav>
            </>
        )
    }

    showMenu = (menus) =>{
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu,index)=>{
               return( <MenuLink key = {index} label={menu.name} to={menu.to} 
                activeOnlyWhenExact={menu.exact} />)
            })
        }
        return result;
    }
}
export default Menu;
