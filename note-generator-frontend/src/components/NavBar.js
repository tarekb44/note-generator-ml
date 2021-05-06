import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {GoThreeBars} from 'react-icons/go'
import {BiX} from 'react-icons/bi'



function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='nav-bar'>
                <div className='nav-bar-container'>
                    <Link to='/'>
                        FallNote
                    </Link>
                    <div className='mobile-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </nav>
        </>
    )
}
 
export default NavBar;
