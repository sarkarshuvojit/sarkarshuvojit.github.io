import {Email, Github, Linkedin, Stackoverflow, Twitter, Download} from "../components/Icons";
import texts from "../constants/texts";

const Socials = () => {
  return <div className="social">
    <ul className="flex justify-center items-center">
      <li>
        <a href={texts.urls.github} target="_blank">
          <Github />
        </a>
      </li>

      <li>
        <a href={texts.urls.stackoverflow} target="_blank">
          <Stackoverflow />
        </a>
      </li>

      <li>
        <a href={texts.urls.twitter} target="_blank">
          <Twitter />
        </a>
      </li>

      <li>
        <a href={texts.urls.linkedin} target="_blank">
          <Linkedin />
        </a>
      </li>

      <li>
        <a href={texts.urls.email} target="_blank">
          <Email />
        </a>
      </li>

      <li>
        <a href={texts.urls.resume} target="_blank" download>
          <Download />
        </a>
      </li>
    </ul>
  </div>
}
export default Socials;
