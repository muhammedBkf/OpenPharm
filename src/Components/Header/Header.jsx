import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <div className="header bg-[#00157c] py-5 px-16">
            <div className="container mx-auto flex justify-between items-center gap-20">
                <div className="logo">
                    <Link to="/">
                    <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }} >Logo</h1>
                    </Link>
                </div>
                <NavBar />
                <div className="flex gap-3">
                    <Link to='/login'>
                        <Button text="Se connecter" className="bg-transparent border border-[#00157C] text-white rounded-2xl hover:bg-[#f0f0f0] hover:text-[#00157C]" />
                    </Link>
                    <Link to='/signup'>
                        <Button text="S'inscrire" className="bg-transparent text-[#f0f0f0] border border-1 border-[#f0f0f0] rounded-2xl hover:bg-[#f0f0f0] hover:text-[#00157C]" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
