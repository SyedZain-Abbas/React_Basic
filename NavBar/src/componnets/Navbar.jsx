import './Navbar.css'
import logo_dark from '../assets/logo-black.png';
import logo_light from '../assets/logo-white.png';
import search_light from '../assets/search-w.png';
import search_dark from '../assets/search-b.png';
import toogle_light from '../assets/day.png';
import toogle_dark from '../assets/night.png';

function Navbar({theme, setTheme}) {

    const toggle_mode = () =>{
        theme =='light' ? setTheme('dark') : setTheme('light')
    }

  return (
    <div className='navbar'>
      <img src={theme == 'light' ? logo_dark : logo_light} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className='search-box'>
        <input type="text" name="" id="" placeholder='Search'/>
        <img src={theme == 'light' ? search_dark : search_light} alt="" />
      </div>

      <img onClick={()=>toggle_mode()} src={theme == 'light' ? toogle_dark : toogle_light} alt="" className='toggle'/>

    </div>
  )
}

export default Navbar