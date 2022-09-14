import './Navbar.css'
import Graidentbutton from '../GraidentButton/Graidentbutton';


const Navbar = (props) =>{
    
    return(
        <div className={'Navbar-container'}>
            <span className={'logo'}> NFT-Engine</span>
            <Graidentbutton buttonText={'Connect-to-wallet'}/>
        </div>
    )
}

export default Navbar