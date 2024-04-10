import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mujahidul Islam
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/md-mujahidul-islam/">
            <img
              src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn Badge"
            />
          </a>
          <a href="mailto:mujahid30390@gmail.com">
            <img
              src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Gmail Badge"
            />
          </a>
          <a href="https://wa.me/+8801849100112">
            <img
              src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
              alt="Whatsapp Badge"
            />
          </a>
          <a href="https://www.facebook.com/mujahidul.islam.90410/">
            <img
              src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
              alt="Facebook Badge"
            />
          </a>
          <a href="skype:live:.cid.1a3f6e3d8988f339?chat">
            <img
              src="https://img.shields.io/badge/Skype-00AFF0?style=for-the-badge&logo=skype&logoColor=white"
              alt="Skype Badge"
            />
          </a>
          <a href="https://slack.com/">
            <img
              src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"
              alt="Slack Badge"
            />
          </a>
          <a href="https://www.upwork.com/freelancers/~0119e1d121c251c417">
            <img
              src="https://img.shields.io/badge/upwork-6FDA44?style=for-the-badge&logo=upwork&logoColor=white"
              alt="Upwork Badge"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
