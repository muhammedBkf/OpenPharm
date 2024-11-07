import Button from "../Button/Button";
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss'

export default function Header(props) {
    const [isPhone, setIsPhone] = useState(false);
    const [scroll, setScroll] = useState(0);
    const navbar = useRef(null);
    const [hasAccount, setHasAccount] = useState(localStorage.getItem("email"));
    const [open, setOpen] = useState(false);


    useEffect(() => {
        window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
        localStorage.getItem("email") ? setHasAccount(true) : setHasAccount(false);
    });


    useEffect(() => {
        
        function Resize() {
            window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
        }
        window.addEventListener('resize', Resize);

        function scrolling() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", scrolling);
        return () => {
            window.removeEventListener("scroll", scrolling);
            window.removeEventListener('resize', Resize);
        };
    }, []);

    function shNavbar() {
        navbar.current.classList.toggle("hidden");
        navbar.current.classList.contains('hidden') ? document.body.classList.remove("remove-scrolling") : document.body.classList.add("remove-scrolling");
    }

    return (
        <>
            <div className="header bg-[#00157c] py-5 px-16" style={{ borderRadius: scroll > 50 || isPhone ? '0' : '0px 0px 20px 20px' }}>
                <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                     <Link to="/">
                     <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }} >OpenPharm</h1>
                     </Link>
                </div>
                <div>
                    <Link to='/login'>
                    <Button text="Se connecter" className="bg-transparent mr-2 border border-[#00157C] text-white rounded-2xl hover:bg-[#f0f0f0] hover:text-[#00157C]" />
                    </Link>
                    <Link to='/signup'>
                        <Button text="S'inscrire" className="bg-transparent text-[#f0f0f0] border border-1 border-[#f0f0f0] rounded-2xl hover:bg-[#f0f0f0] hover:text-[#00157C]" />
                    </Link>
                    {isPhone &&  <span onClick={shNavbar} style={{ width: window.innerWidth < 300 && '67px' }}><FontAwesomeIcon icon={faBars} style={{color: "#fff", fontSize: "22px", cursor: "pointer"}} /></span>}  
                </div>
                </div>
                {isPhone &&
                    <div className="navbar hidden" ref={navbar}>
                        <ul className=''>
                            <Link to='/' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >Home</li></Link>
                            <Link to='/' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >Les laboratoires</li></Link>
                        <Link to='/' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >FAQs</li></Link>
                            <Link to='/login' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >Se Connecter</li></Link>
                            <Link to='/signup' onClick={shNavbar}><li className='py-5 text-center cursor-pointer' >S'incrire</li></Link>
                        </ul>
                    </div>
                }
            </div>
        </>
    );
}