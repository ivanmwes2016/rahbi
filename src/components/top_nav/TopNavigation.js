import React from 'react'
import  './TopNavigation.css'
function TopNavigation() {
    return(
        <nav className='topNav'>
            <ul className='top-nav-ul'>
                <li> Sales: 0740 4142092</li>
                <li><i class="bi bi-envelope-fill"></i> Contact Us</li>
                <li>Follow us on: </li>
                <li><i class="bi bi-facebook"></i></li>
                <li><i class="bi bi-instagram"></i></li>
                <li><i class="bi bi-twitter"></i></li>
            
            </ul>
        </nav>
    )
}

export default TopNavigation