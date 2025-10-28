import AppleLogo from './public/logo.svg'
import Cartlogo from './public/cart.svg'
import SearchLogo from './public/search.svg'
import { NavLinks } from './Constants/NavLink.js'
function NavBar() {
return (
<>
<header>
<nav>
<img src={AppleLogo} alt="Apple Logo"></img>
<ul>
    {NavLinks.map((lab) => (
        <li key={lab.label}>
            <a href={lab.label}>{lab.label}</a>
        </li>
    ))}
</ul>

<div className='flex-center gap-3'>
<button>
    <img src={SearchLogo} alt='Search'/>
</button>

<button>
    <img src={Cartlogo} alt='Cart'/>
</button>
</div>
</nav>
</header>
</>
)
}
export default NavBar

