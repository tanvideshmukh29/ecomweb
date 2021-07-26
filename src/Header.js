import React, { useState } from "react";
import './Header.css'

import ReorderIcon from '@material-ui/icons/Reorder'



import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [showlink, setshowlink] = useState(false)
  console.log(showlink)


  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket)

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }



  return (
    <nav className='navbarr'>
      <div className='leftside'>
        <Link to="/">
          <h3 className='mainheading'>
            <span>
              SHOPPING SHOPE
            </span>

          </h3>
        </Link>

      </div>


      <div className='rightside'>
        <div className='link' id={showlink ? "hidden" : " "} >


          <Link to={!user && '/login'}   >
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
              <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>



          <Link to="/checkout" >
            <div className="header__optionBasket">
              <div className='basket'>
                <span className="header__optionLineOne">
                  CheckItem
                </span>
                <ShoppingBasketIcon />
              </div>

              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}

              </span>
            </div>
          </Link>

        </div>
        <button className='button' onClick={() => setshowlink(!showlink)}>

          <ReorderIcon />
        </button>
      </div>









    </nav >



  )

}

export default Header;
