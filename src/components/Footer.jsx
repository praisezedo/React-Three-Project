import { footerLinks } from '../Constants/NavLink.js';
import logo from '../public/logo.svg'
export default function Footer() {
    return (<>
<footer>
  <div className="info">
    <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 00080 040 1966.</p>
    <img src={logo} alt='Apple logo'/>
    </div>  

    <hr/>

    <div className='links'>
<p>Copyright &copy; 2024 Apple Inc. All rights reserved.</p>
    </div>

    <ul>
        {footerLinks.map( ({label , link})=> (
            <li key={label}>
                <a href={link}>{label}</a>
            </li>
        ))}
    </ul>
</footer>    
    </>);
};