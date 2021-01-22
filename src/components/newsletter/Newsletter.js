import "./newsletter.css";
import emailLogo from "../../assets/email-logo.png";
import Button from "../Button/Button";


const Newsletter = ({ }) => {
    return (
        <div className="newsletter__container" >
            <div className="newsletter__title__container">
                <span>Suscribe to Our Newsletter </span>
            </div>
            <div className="newsletter__text__container">
                <span> Time is the most precious thing you have when Bootstrapping. You can't take time.</span>
            </div>
            <div className="newsletter__bottom__container">
                <img src={emailLogo} alt="email Logo" />
                <span className="newsletter__email" >  Enter your email </span> {/*es input con type="text" placeholder="enter your Email"*/}
                <Button
                    style="buttonOfNewsletterform"
                    value="Subscribe" />
            </div>
        </div>
    );
};

export default Newsletter;