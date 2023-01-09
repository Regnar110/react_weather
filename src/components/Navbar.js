import '../styles/navbar.scss';
import CustomSearchInput from './CustomSearchInput';
import CustomButton from './CustomButton.js'
import SocialIcons from './SocialIcons.js';
import SiteHeader from './SiteHeader.js'

const Navbar = ({inputValue, inputChange, pac, onPacClick, submitLocationSearch}) => {
    return(
        <nav className='top-fixed-nav'>
            <SiteHeader head={"Weather App"} />
            <SocialIcons />
            <div className='inputAndSubmit'>
                <CustomSearchInput inputValue={inputValue} onChange={inputChange} pac={pac} onPacClick={onPacClick}/>
                <CustomButton type='submit' text='Search' eventHandler={submitLocationSearch} />
            </div>
        </nav>
    )
}

export default Navbar;