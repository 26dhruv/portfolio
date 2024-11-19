import { FaLinkedin, FaInstagram, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { RoundButton } from "./RoundButton";

const SocialButtons = (links) => {
  const socialLinks = [
    { icon: FaLinkedin, link:links.LinkedIn, alt: "LinkedIn" },
    { icon: FaInstagram, link:links.Instagram, alt: "Instagram" },
    { icon: FaGithubSquare, link: links.GitHub, alt: "GitHub" },
    { icon: FaTwitter, link: links.Twitter, alt: "Twitter" },
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
