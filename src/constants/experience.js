
const experience = (companyName, timeFrame, role, description, technologies) => {
  return {
    companyName,
    timeFrame,
    role,
    description,
    technologies
  };
}

const healthi = experience(
    "healthi.in", 
    "2022 - Today", 
    "Software Development Engineer II", 
    ["Designed & Developed a configuration-driven BFF layer to serve event based microservices; using Nodejs(Typescript), Kafka & GraphQL",
  "Deployed & setup infrastructure to support our stack; which consists of APISIX, Postgres, Kafka & Redis ",
  "Created environments & pipelines for 4 stages using Docker, Kubernetes, Jenkins & Python for scripts.",
  "Researched & Implemented Event Driven Scaling using Keda which scaled up our apps by reacting to load on appropriate kafka channels",
  "Designed & Developed Unified Login for internal admin webapp & internal command line tool",
  "Implemented New Relic auto-instrumentation and infrastructure instrumentation to unify logs, metrics, and traces throughout our highly distributed stack. "
    ],
    ["Java", "Typescript", "Javscript", "Python", "Nodejs", "Spring Boot", "Nestjs", "Postgres", "Kafka", "Redis", "Docker", "Kubernetes", "Keda"]
  );

const appworx = experience(
    "Appnosticworx", 
    "2020 - 2021", 
    "Full Stack Developer", 
    [ "Responsible for understanding and scoping out requirements from clients",
"Developed front end applications using Angular & Nextjs ",
"Developed serverless Rest APIs using AWS Lambda, GraphQL & Node.js",
"Implemented authentication using Firebase Auth",
    ],
    ["Typescript", "Javascript", "Php", "Angular", "Nextjs", "Nodejs", "AWS Lambda", "GraphQL", "AWS", "Firebase Auth", "Mysql"]
  );

const techpro = experience(
    "Techpro Studio", 
    "2018 - 2020", 
    "Python Developer", 
    [ "Rewrote existing PHP Monolith codebase to Python running on AWS Lambda",
"Identified & Refactored unoptimised queries & indexes while rewriting  in MySQL database to decrease latencies for queries upto 50% ",
"Replaced separate internal platform auth services with AWS Cognito, achieving unified login for all internal applications.",
"Designed and implemented a basic intrusion detection algorithm using historical user data to monitor unusual logins in our internal applications using Python ",
"Optimised a sequential job, creating a distributed solution that runs 83% faster",

    ],
    ["Python", "Typescript", "Javascript", "Php", "Angular", "AWS Lambda", "AWS S3", "AWS Cognito", "Ionic", "Codeigniter"]
  );

const madkraft = experience(
    "Madkraft Pvt. Ltd.", 
    "Jan 2018 - Oct 2018", 
    "Fullstack Developer", 
    [ "Backend: Designed and built the database design and API to support a school management system using Laravel and MySQL.",
"Mobile App: Created an android app to consume and interact with the APIs to provide interface for students.",
"FrontEnd: Created an admin panel using Javascript + Jquery to consume and interact with the services to provide interface for school administrators/teachers."
    ],
    ["Php", "Javascript", "Java", "jQuery", "Laravel", "Android", "MySQL", "AWS", "AWS S3"]
  );

export default {
  fulltime: [ healthi, appworx, techpro ],
  parttime: [ madkraft ],
};
