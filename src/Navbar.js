import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (

        <div className='container-fluid nav-bg header-nav'>
            <div className='row'>
                <div className='col-10 mx-auto'>

                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <Link to="/">
                                <img
                                    className="header__logo"
                                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                                />
                            </Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to={!user && '/login'}>
                                            <div onClick={handleAuthenticaton} className="header__option">
                                                <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                                                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                                            </div>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link to='/orders'>
                                            <div className="header__option">
                                                <span className="header__optionLineOne">Returns</span>
                                                <span className="header__optionLineTwo">& Orders</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/checkout">
                                            <div className="header__optionBasket">
                                                <ShoppingBasketIcon />
                                                <span className="header__optionLineTwo header__basketCount">
                                                    {basket?.length}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>





                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Navbar
