import { useEffect } from "react";
import Socials from "./Socials";
import { Download, Eye } from "./Icons";
import texts from "../constants/texts";

const PanelContent = () => {
  /*
  useEffect(() => {
    const Typed = require("typed.js");
    new Typed(".animated_title", {
      strings: [
        "Java", "Python", "Go", "Typescript", "Javascript", "SQL", "GraphQL", "Dart", "HTML+CSS",
        "Spring Boot", "Nestjs", "Next.js", "React", "Angular", "Django", "Flask", "Laravel",
        "Postgres", "Redis", "MySQL", "MongoDB", "FireStore", "DynamoDB", 
        "Kafka", "Amazon SQS", "Pusher.io", "Git", "Docker", "Kubernetes", "Jenkins",
        "APISIX", "Apache2", "Nginx", "AWS API Gateway", "AWS", "Azure", "Firebase",
        "BlenderPy (bpy)", "AWS Lambda", "AWS SSM"
      ],
      loop: true,
      smartBackspace: false,
      typeSpeed: 40,
      startDelay: 700,
      backDelay: 3e3,
      shuffle: true
    });
  }, []);*/
  return (
    <div className="right_in">
      <div className="right_top">
        <div className="border1" />
        <div className="border2" />
        <div className="img_holder">
          <img src="img/thumb/square.jpg" alt="image" />
          <div className="abs_img" data-bg-img="img/dp_hd.png" />
        </div>
        <div id="socials__sidebar" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: "20px"}}>
            <Socials />
        </div>
        <div className="resume_download_btn" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: "15px"}}>
          <div className="resume-btn" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 20px', fontSize: '20px'}}>
            <span>Resume</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '12px' }}>
              <a href={texts.urls.resume} target="_blank" rel="noopener noreferrer" title="View Resume" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', filter: 'hue-rotate(0deg) brightness(1) saturate(1)' }} onMouseEnter={(e) => e.target.style.filter = 'hue-rotate(180deg) brightness(1.2) saturate(1.5)'} onMouseLeave={(e) => e.target.style.filter = 'hue-rotate(0deg) brightness(1) saturate(1)'}>
                <Eye width='20'/>
              </a>
              <a href={texts.urls.resume} target="_blank" download title="Download Resume" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', filter: 'hue-rotate(0deg) brightness(1) saturate(1)' }} onMouseEnter={(e) => e.target.style.filter = 'hue-rotate(240deg) brightness(1.2) saturate(1.5)'} onMouseLeave={(e) => e.target.style.filter = 'hue-rotate(0deg) brightness(1) saturate(1)'}>
                <Download width='20'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelContent;
