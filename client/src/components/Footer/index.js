import React from 'react';
import styles from './footer.module.scss';


const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.brand}>
      <div className={styles.created}>
      <img src="https://media-exp1.licdn.com/dms/image/C560BAQFjmDZX_uMv9Q/company-logo_200_200/0/1597307413834?e=1623888000&v=beta&t=06IwcgNek93NZphuAlxnm5XvENuMCr5FnA1Dq4tncA0" height = "80px" width = "130px"  alt="Gather"/>
        Created by Gather Network
      </div>
      <div className={styles.copyright}>
      
      </div>
    </div>
  </footer>
)

export default Footer;
