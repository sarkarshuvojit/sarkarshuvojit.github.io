import {Email, Github, Linkedin, Stackoverflow, Twitter, Download} from "../components/Icons";
import texts from "../constants/texts";

const Socials = () => {
  return <div className="social">
    <ul className="flex justify-center items-center">
      <li>
        <a href={texts.urls.github} target="_blank" title="GitHub">
          <Github />
        </a>
      </li>

      <li>
        <a href={texts.urls.stackoverflow} target="_blank" title="Stack Overflow">
          <Stackoverflow />
        </a>
      </li>

      <li>
        <a href={texts.urls.twitter} target="_blank" title="Twitter">
          <Twitter />
        </a>
      </li>

      <li>
        <a href={texts.urls.linkedin} target="_blank" title="LinkedIn">
          <Linkedin />
        </a>
      </li>

      <li>
        <a href={texts.urls.email} target="_blank" title="Email">
          <Email />
        </a>
      </li>

      <li>
        <a href={texts.urls.resume} target="_blank" download title="Download Resume">
          <Download />
        </a>
      </li>
    </ul>
  </div>
}
export default Socials;
