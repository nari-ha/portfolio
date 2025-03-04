let data = [
  {
    id: 0,
    type: "research",
    title: "Enhancing object re-identification performance (In Progress)",
    img: "/images/research2.jpeg",
    github: "",
    summary: "this is the brief desffion of project",
    detail: "this is description of the project2 this is description of the project2",
    skills: "Vision Language Model, Prompt Engineering, CLIP, CLIP Fine-tuning, Object Re-Identification"
  },
  {
    id: 1,
    type: "research",
    title: "Vision Language Model Object Detection (In Progress)",
    img: "/images/capybara.jpg",
    github: "",
    summary: "this is the brief description of project1",
    detail: "this is the long description of the project1this is description of the project1 description of the project1this is description of the project1",
    skills: ""
  },
  {
    id: 2,
    type: "research",
    title: "Cross-Modal Learning for Object Re-Identification",
    img: "/images/pipeline1.png",
    summary: "The MSc dissertation paper, a CLIP-Based approach to Animal re-identification task.",
    github: "https://github.com/narizzang/Animal-ReID.git",
    detail: "This paper investigates the extension of CLIP-based  Re-Identification (ReID) models, traditionally used for human  and vehicle identification, to the more challenging domain of  animal re-identification, which requires more detailed and nuanced  image features. Given the complexity of animal features,  such as pose variations, fur textures, and tails, we leverage  the robust cross-modal capabilities of CLIP by incorporating  a Feature Enhancer Layer (FEL) into the model’s fine-tuning  process. Our approach involves a three-stage training strategy:  initially, we optimise text tokens for each ID through prompt  engineering, effectively capturing relevant textual descriptions; in  the second stage, we fine-tune both the image encoder and FEL  to enhance the expressiveness and accuracy of image features;  and in the final stage, we focus on refining the FEL while  maintaining the optimised parameters of the image encoder,  thereby further improving ReID performance. To support this  methodology, we created a novel animal dataset by extracting  frames from various videos, which presented a diverse range  of poses and angles. Our experiments demonstrated that the  integration of FEL significantly improves re-identification accuracy,  particularly when dealing with the complex and varied  visual characteristics of animals. Moreover, we validated our  approach on the Market-1501 benchmark dataset, where the  proposed model showed enhanced performance compared to  baseline models. The findings suggest that our approach not only  addresses the unique challenges of animal re-identification but  also has broader implications for improving ReID accuracy in  other domains. By refining the cross-modal fusion of image and  text features, our work paves the way for more sophisticated and  generalizable ReID systems, capable of handling a wide range of  applications beyond the current state-of-the-art.",
    skills: "Vision Language Model, CLIP, CoOp, Object Re-Identification"
  },
  {
    id: 3,
    type: "project",
    title: "Digital Work Place",
    img: "/images/image-lotte.png",
    github: "",
    summary: "Participated as a full-stack developer in a web portal rebuild project.",
    detail: "*사내 프로젝트여서 코드 공개 불가능* this is description of the project3 this is description of the project2  used by all Lotte Group employees.",
    skills: "Java, React.js, Spring Framework, jQuery"
  },
  {
    id: 4,
    type: "project",
    title: "Diffusion Models",
    img: "/images/webpages.jpeg",
    github: "https://github.com/narizzang/stable-diffusion/blob/main/Diffusion_model.ipynb",
    summary: "Mini project with generative models",
    detail: "Use diffusion models to design the structure of generative models and create models that train on real data to generate images.",
    skills: "HTML, CSS, JavaScript, React.js, etc."
  },
  {
    id: 5,
    type: "project",
    title: "Personal Web Pages",
    img: "/images/webpages.jpeg",
    github: "https://yehyun-kwon.github.io/",
    summary: "Including this personal web page, mini projects of personal web pages.",
    detail: "Including this personal web page, a small collection of personal website projects. These are mainly personal portfolio web pages for designers, and I worked mainly on the frontend. To keep practicing the latest front-end technologies, I build personal web portfolio sites as a side project in my spare time. I usually get designs from my designer friends and use free hosting on GitHub.",
    skills: "HTML, CSS, JavaScript, React.js, etc."
  },
  {
    id: 6,
    type: "research",
    title: "Design of Mobile Applications for a Smart Health Care System",
    img: "/images/capybara.jpg",
    github: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE09301826",
    summary: "This study proposes the design of a mobile application to support a smart healthcare system for the elderly living alone.",
    detail: "Korean Institute of Information Scientists and Engineers",
    skills: "User Research, UX Design, Human Computer Interaction"
  },
  {
    id: 7,
    type: "project",
    title: "projects from university",
    img: "/images/capybara.jpg",
    github: "",
    summary: "This study proposes the design of a mobile application to support a smart healthcare system for the elderly living alone.",
    detail: "Korean Institute of Information Scientists and Engineers",
    skills: "User Research, UX Design, Human Computer Interaction"
  },
]
  export default data;