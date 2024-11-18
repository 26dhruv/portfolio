import { FaLinkedin, FaInstagram, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { RoundButton } from "./RoundButton";

const SocialButtons = () => {
  const socialLinks = [
    { icon: FaLinkedin, link: "https://linkedin.com", alt: "LinkedIn" },
    { icon: FaInstagram, link: "https://instagram.com", alt: "Instagram" },
    { icon: FaGithubSquare, link: "https://github.com", alt: "GitHub" },
    { icon: FaTwitter, link: "https://twitter.com", alt: "Twitter" },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((social, index) => (
        <RoundButton
          key={index}
          icon={social.icon}
          link={social.link}
          alt={social.alt}
        />
      ))}
    </div>
  );
};

export default SocialButtons;
