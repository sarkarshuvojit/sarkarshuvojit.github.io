import { useEffect } from "react";
import Socials from "./Socials";

const PanelContent = () => {
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
  }, []);
  return (
    <div className="right_in">
      <div className="right_top">
        <div className="border1" />
        <div className="border2" />
        <div className="img_holder">
          <img src="img/thumb/square.jpg" alt="image" />
          <div className="abs_img" data-bg-img="img/dp_hd.png" />
        </div>
        <div className="title_holder">
          <h5>Tech I have worked with</h5>
          <p className="h3">
            <span className="animated_title" />
          </p>
        </div>
      </div>
      <div id="socials__sidebar" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <Socials />
      </div>
    </div>
  );
};

export default PanelContent;
