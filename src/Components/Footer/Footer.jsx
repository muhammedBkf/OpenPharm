import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer bg-[#d2d9ff] py-8 px-16">
      <div className="container mx-auto flex">
        <div className="left flex-1 flex flex-col justify-between">
          <h3 className="text-3xl font-bold text-[#00157c] tracking-wider">
          Laissez-nous un <br />
          mot ! 
            
          </h3>
          <div className="box">
            
            <div className="copyright text-[#00157c] ">
              <p>© 2024 </p>
            </div>
          </div>
        </div>
        <div className="right flex-1">
          <form action="">
            <label htmlFor="" className="text-[#00157c] ">Email</label>
            <input
              type="text"
              className="border-[#BCC1CA] bg-[#F8F9FA] border rounded-md w-full px-3 py-2 mb-2 focus:border-[#565E6D] outline-none"
              placeholder="Votre adresse email "
            />
            <label htmlFor="" className="text-[#00157c] ">Message</label>
            <textarea
              type="text"
              className="resize-none border-[#BCC1CA] bg-[#F8F9FA] border rounded-md w-full px-3 py-5 mb-6 focus:border-[#565E6D] outline-none"
              placeholder="Veuillez saisir votre message ici "
            ></textarea>
            <Button text="envoyer"  className="bg-transparent text-[#00157c]  border border-1 text-[#00157c]  rounded-2xl hover:bg-[#f0f0f0] hover:text-[#00157C]"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
