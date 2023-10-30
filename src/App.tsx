import { FC, useMemo, useEffect } from "react";
            import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
            import Header from "./common/Header/Header.tsx";
            import Home from "./pages/Home/Home.tsx";
            import "./App.css";
            import About from "./pages/About/About.tsx";
            import { HomeData } from "./common/types/HomeData.tsx";
            import { AboutData } from "./common/types/AboutData.tsx";
            import Contact from "./pages/Contact/Contact.tsx";
            import ContactData from "./common/types/ContactData.tsx";
            import Projects from "./pages/Projects/Projects.tsx";
            import NotFound from "./NotFound.tsx";
            import Project from "./pages/Project/Project.tsx";
                        
            const App: FC = () => {
            
            useEffect(() => {
                const userTheme = window.localStorage.getItem('theme')
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                document.body.classList.add(userTheme || systemTheme)
                localStorage.setItem('theme', userTheme || systemTheme)
            }, []);
            
              const ProjectOr404 = () => {
                const { slug } = useParams();
                  if (slug && userData.slugs.length > 0 && userData.slugs.some((s: { slug: string }) => s.slug === slug)) {
                      return <Project userData={userData} />;
                  } else {
                      return <NotFound />;
                  }
              };
                        
              const userData = useMemo(() => ({
                name: "Melaku García Bonacho",
                email: "melakugarciabon@gmail.com",
                phone: "(+34) 628 690 272",
                company: "company",
                location: "Madrid, Spain",
                about: "I am a final year student of Web Application Development (DAW) at IES El Lago, and I am currently looking for an opportunity to undertake my professional internship. My education includes two years of studying Software Engineering at the Polytechnic ",
                skills: ["NodeJs","React","Java","JavaScript","SQL","Nginx","AWS","Docker","Python","PHP","Express.js","CSS"],
                projects: [{"name":"JavaScript Random","description":"Some random small JS projects like a calculator, a card matching game, a web app to quit smoking...","languages":["JavaScript","HTML","CSS"],"updatedAt":"2022-2023","image":"https://images.codefoli.com/234-projects-image-368","id":"368","slug":"javascript-random"},{"name":"Android Apps","description":"My very first steps on Android development to some more complex apps. ","languages":["Kotlin","Java","Android Studio"],"updatedAt":"2023","image":"https://images.codefoli.com/234-projects-image-369","id":"369","slug":"android-apps"},{"name":"Docker Course","description":"Made Docker course to teach my classmates about containers and deployment.","languages":["Docker","Docker Compose","Kubernetes"],"updatedAt":"2023","image":"https://images.codefoli.com/234-projects-image-370","id":"370","slug":"docker-course"},{"name":"Java Card Game","description":"Classic Spanish card game 7 & Media in Java using  servlets. Appling SOLID and design patterns.","languages":["Java","JSP","Servlets","Bootstrap 5"],"updatedAt":"2023","image":"https://images.codefoli.com/234-projects-image-371","id":"371","slug":"java-card-game"},{"name":"NodeJs Course","description":"NodeJs course i made to teach my classmates this awesome backend technology","languages":["JavaScript","NodeJS","Express","Socket.IO"],"updatedAt":"09/2023","image":"https://images.codefoli.com/234-projects-image-367","id":"367","slug":"nodejs-course"},{"name":"YouTube Channel","description":"My personal YouTube Channel where i solve coding challenges to help my classmates.","languages":["Video Editing","Peer Programming","Tutorials","Youtube"],"updatedAt":"2023-10-30T20:54:24.947Z","image":"https://images.codefoli.com/234-projects-image-373","id":"373","slug":"youtube-channel"}], 
                work: [{"id":172,"company":"Freelance","position":"Photographer & Designer","startDate":"2019","endDate":"2022","description":"Photography, video production, editing, retouching, color correction, and graphic design.","orderId":3,"image":"https://images.codefoli.com/234-job-image-upload-172"},{"id":170,"company":"Fnac","position":"Techn Sales Specialist","startDate":"09/22","endDate":"04/23","description":"Conducted sales, customer service, customer retention, and subscription promotion.","orderId":1,"image":"https://images.codefoli.com/234-job-image-upload-170"},{"id":171,"company":"Freelance","position":"Private Tutor","startDate":"09/20","endDate":"07/22","description":"Mathematics, English, Physics, Chemistry, and Biology to ESO and Bachillerato students.","orderId":2,"image":"https://images.codefoli.com/234-job-image-upload-171"}],
                role: "USER",
                profession: "Backend Developer",
                services: ["NETWORK_ADMINISTRATION","SOFTWARE_ARCHITECTURE","DEVOPS","WEB_DEVELOPMENT"],
                slugs: [{"slug":"javascript-random","header":"JavaScript Random","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"android-apps","header":"Android Apps","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"docker-course","header":"Docker Course","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"java-card-game","header":"Java Card Game","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"nodejs-course","header":"NodeJs Course","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"youtube-channel","header":"Title","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"}]
              }),
              []
            );
            
            const homeData = useMemo(
                    () => ({
                      headerOne: "I'm Melaku García Bonacho, a Backend Developer from Madrid, Spain",
                      descriptionOne: "I am a final year student of Web Application Development (DAW) at IES El Lago, and I am currently looking for an opportunity to undertake my professional internship. ",
                      profileImage: "https://images.codefoli.com/234-profile-image",
                      sections: [                        {
                          type: "SKILL",
                          details: {
                            headerOne: "My broad set skills",
                            order: 2
                          }
                        },
                        {
                          type: "STORY",
                          details: {
                            headerOne: "Education",
                            descriptionOne: "My education includes two years of studying Software Engineering at the Polytechnic University of Madrid, which has provided me with a solid foundation in the field of computer science. In addition to my academic background, I have a high level of proficiency in English and am certified by Google as a Data Analyst. ",
                            bulletOne: "Passionate about Computer Science from a young age.",
                            bulletTwo: "Dedicated to learning user-focused development principles.",
                            bulletThree: "Focused on teamwork and communication.",
                            imageOne: "https://images.codefoli.com/234-story-image",
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const aboutData = useMemo(
                    () => ({
                      headerOne: "Hello, I'm Melaku García Bonacho",
                      iconOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b443e2bb8e12b5faf51a7_about-hero-rigth-image-paperfolio-webflow-template.png",
                      iconTwo: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b440128f648585c383865_about-hero-left-image-paperfolio-webflow-template.png",
                      iconThree: "https://images.codefoli.com/234-about-icon-three-upload",
                      headerTwo: "My story as a developer",
                      descriptionOne: "I am a final year student of Web Application Development (DAW) at IES El Lago, and I am currently looking for an opportunity to undertake my professional internship.",
                      descriptionTwo: "My education includes two years of studying Software Engineering at the Polytechnic University of Madrid, which has provided me with a solid foundation in the field of computer science.  In addition to my academic background, I have a high level of proficiency in English and am certified by Google as a Data Analyst. My focus is on web development, where I possess strong skills in Java, JavaScript, React, NodeJS, HTML and CSS. I also have knowledge in C, Python, PHP, and Kotlin.",
                      sections: [
                        {
                          type: "RESUME",
                          details: {
                            headerOne: "Take a look at my resume",
                            order: 1
                          }
                        },
                        {
                          type: "VALUE",
                          details: {
                            headerOne: "the core values that drive my work.",
                            descriptionOne: "Steering the helm of my career is a deeply ingrained set of core values. These principles not only guide my work ethic but also shape the way I view and approach life.",
                            values: [{"value":"HARD_WORK"},{"value":"GROWTH"},{"value":"EXCELLENCE"},{"value":"TEAMWORK"}],
                            order: 2
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const projectsPageData = useMemo(
                    () => ({
                      headerOne: "Projects",
                      descriptionOne: "Check out my recent projects, ranging from website and app design to coding lessons. My recent focus has been on creating educational content for peers on Node.js, Docker, and developing small web applications using JavaScript."
                    }),
                    []
                  );
            
            const contactData = useMemo(
                    () => ({
                      headerOne: "Contact Me",
                      descriptionOne: "Don't hesitate to get in touch! Whether you're looking for a professional consult or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
                      sections: [
                        {
                          type: "FAQ",
                          details: {
                            headerOne: "Frequently Asked Questions",
                            descriptionOne: "I've compiled answers to frequently asked questions from professionals and peers in the industry. If you don't find the information you're looking for, please don't hesitate to get in touch with me!",
                            faq: [{"question":"What programming languages  are you proficient in?","answer":" I am proficient in JavaScript, with a strong grasp of React and Node.js alongside Express. Additionally, I possess the ability to develop applications in Java, C, Python, and PHP, although my expertise in these languages is relatively intermediate.","id":"856"},{"question":"Do you have any prior experience in web dev?","answer":" While I have collaborated with a college classmate to create WordPress pages, I currently lack professional experience. However, I have actively pursued self-learning and personal projects to further develop my skills in web development.","id":"854"},{"question":"What is your desired job?","answer":" I aim to specialize in backend development, utilizing a modern tech stack, while also focusing on the integration of cloud computing and DevOps practices.","id":"853"},{"question":"What are your main interests?","answer":" I am deeply intrigued by science, economics, and physics. In my free time, I enjoy reading and pursuing photography, particularly capturing the essence of wildlife and nature.","id":"855"}],
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            return (
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={<Home userData={userData} pageData={homeData as HomeData} />}
                  />
                  <Route
                    path="/contact"
                    element={
                      <Contact
                        pageData={contactData as ContactData}
                        userData={userData}
                      />
                    }
                  />
                  <Route
                    path="/projects"
                    element={<Projects pageData={projectsPageData} userData={userData} />}
                  />
                  <Route
                    path="/about"
                    element={
                      <About pageData={aboutData as AboutData} userData={userData} />
                    }
                  />
                  <Route path="/:slug" element={<ProjectOr404 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            );
          };
                    
          export default App;