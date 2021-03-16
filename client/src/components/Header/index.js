import React from 'react';
import styles from './header.module.scss';
import getWeb3, { getGanacheWeb3, Web3 } from "../../utils/getWeb3";
// import gatherPNG from './gatherPNG.png';


const Header = () => (
    <div className={styles.header}>
        <nav id="menu" className="menu">
          <ul>
            <li> <img src="https://media-exp1.licdn.com/dms/image/C560BAQFjmDZX_uMv9Q/company-logo_200_200/0/1597307413834?e=1623888000&v=beta&t=06IwcgNek93NZphuAlxnm5XvENuMCr5FnA1Dq4tncA0" height = "50px" width = "50px"  alt="Gather"/></li>

            <li><a href="/publish" className={styles.link}> Publish</a></li>

            <li><a href="/my-photos" className={styles.link}> My Photos</a></li>

            {process.env.NODE_ENV !== 'photo_marketplace' && (
              <li><a href="/photo-marketplace" className={styles.link}> PhotoMarketPlace</a></li>
            )}
          </ul> 
        </nav>
    </div>
)

export default Header;
