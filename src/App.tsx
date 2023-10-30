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
                company: "Universidad Politecnica de Madrid",
                location: "Madrid, Spain",
                about: "I am a final year student of Web Application Development (DAW) at IES El Lago, and I am currently looking for an opportunity to undertake my professional internship. My education includes two years of studying Software Engineering at the Polytechnic University of Madrid, which has provided me with a solid foundation in the field of computer science.",
                skills: ["NodeJs","React","Java","JavaScript","SQL","Nginx","AWS","Docker","Python","PHP","Express.js","HTML","CSS","TailwindCss","Bootstrap"],
                projects: [{"name":"JavaScript Random","description":"Some random small JS projects like a calculator, a card matching game, a web app to quit smoking...","languages":["JavaScript","HTML","CSS"],"updatedAt":"2022-2023","image":"https://images.codefoli.com/234-projects-image-368","id":"368","slug":"javascript-random"},{"name":"Android Apps","description":"My very first steps on Android development to some more complex apps. ","languages":["Kotlin","Java","Android Studio"],"updatedAt":"2023","image":"https://images.codefoli.com/234-projects-image-369","id":"369","slug":"android-apps"},{"name":"Docker Course","description":"Made Docker course to teach my classmates about containers and deployment.","languages":["Docker","Docker Compose","Kubernetes"],"updatedAt":"2023","image":"https://images.codefoli.com/234-projects-image-370","id":"370","slug":"docker-course"},{"name":"Java Card Game","description":"Classic Spanish card game 7 & Media in Java using  servlets. Appling SOLID and design patterns.","languages":["Java","JSP","Servlets","Bootstrap 5"],"updatedAt":"2023","image":"https://images.codefoli.com/234-projects-image-371","id":"371","slug":"java-card-game"},{"name":"NodeJs Course","description":"NodeJs course i made to teach my classmates this awesome backend technology","languages":["JavaScript","NodeJS","Express","Socket.IO"],"updatedAt":"09/2023","image":"https://images.codefoli.com/234-projects-image-367","id":"367","slug":"nodejs-course"}], 
                work: [{"id":172,"company":"Freelance","position":"Photographer & Designer","startDate":"2019","endDate":"2022","description":"Photography, video production, editing, retouching, color correction, and graphic design.","orderId":3,"image":"https://images.codefoli.com/234-job-image-upload-172"},{"id":170,"company":"Fnac","position":"Techn Sales Specialist","startDate":"09/22","endDate":"04/23","description":"Conducted sales, customer service, customer retention, and subscription promotion.","orderId":1,"image":"https://images.codefoli.com/234-job-image-upload-170"},{"id":171,"company":"Freelance","position":"Private Tutor","startDate":"2020","endDate":"2022","description":"Mathematics, English, Physics, Chemistry, and Biology to ESO and Bachillerato students.","orderId":2,"image":"https://images.codefoli.com/234-job-image-upload-171"}],
                role: "USER",
                profession: "Backend Developer",
                services: ["WEB_DEVELOPMENT","NETWORK_ADMINISTRATION","DEVOPS","SOFTWARE_ARCHITECTURE"],
                slugs: [{"slug":"javascript-random","header":"JavaScript Random","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"android-apps","header":"Android Apps","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"docker-course","header":"Docker Course","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"java-card-game","header":"Java Card Game","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"nodejs-course","header":"NodeJs Course","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"}]
              }),
              []
            );
            
            const homeData = useMemo(
                    () => ({
                      headerOne: "I'm Melaku García Bonacho, a Backend Developer from Madrid, Spain",
                      descriptionOne: "I am a final year student of Web Application Development (DAW) at IES El Lago, and I am currently looking for an opportunity to undertake my professional internship. My education includes two years of studying Software Engineering at the Polytechnic ",
                      profileImage: "./src/assets/images/melaku.png",
                      sections: [                        {
                          type: "SKILL",
                          details: {
                            headerOne: "My broad set of services and skills",
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
                      headerTwo: "My story as a designer",
                      descriptionOne: "I am a final year student of Web Application Development (DAW) at IES El Lago, and I am currently looking for an opportunity to undertake my professional internship. My education includes two years of studying Software Engineering at the Polytechnic ",
                      descriptionTwo: "Embarking on a journey fueled by curiosity and passion, I found solace in the world of code. From solving complex problems to creating user-friendly interfaces, every project has been a stepping stone in my development career. Continually learning and adapting, I've embraced new technologies and methodologies to build robust and efficient solutions. My path as a developer is more than a career; it's a lifelong pursuit of innovation, creativity, and technological advancement.",
                      sections: [
                        {
                          type: "STORY",
                          details: {
                            headerOne: "Designing since I was ? years old",
                            descriptionOne: "I started designing when I was ? years old. My first designs were for my school projects. I was fascinated by the idea of creating something that people can interact with. I studied design for 5 years in college and have been working as a designer for 3 years.",
                            bulletOne: "Passionate about design from a young age.",
                            bulletTwo: "Five years of design education, three professionally.",
                            bulletThree: "Strong advocate of user-centered design.",
                            imageOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b55bcb4baec57b75b66fd_desigining-experience-paperfolio-webflow-template.png",
                            order: 1
                          }
                        },
                        {
                          type: "RESUME",
                          details: {
                            headerOne: "Take a look at my resume",
                            order: 2
                          }
                        },
                        {
                          type: "VALUE",
                          details: {
                            headerOne: "the core values that drive my work.",
                            descriptionOne: "Steering the helm of my career is a deeply ingrained set of core values. These principles not only guide my work ethic but also shape the way I view and approach design. Let's delve into the convictions that drive my professional journey.",
                            values: [{"value":"HARD_WORK"},{"value":"TRANSPARENCY"},{"value":"INNOVATION"},{"value":"GROWTH"}],
                            order: 3
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const projectsPageData = useMemo(
                    () => ({
                      headerOne: "Projects",
                      descriptionOne: "Here are some of my recent projects. I've worked on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities."
                    }),
                    []
                  );
            
            const contactData = useMemo(
                    () => ({
                      headerOne: "Contact Me",
                      descriptionOne: "Don't hesitate to get in touch! Whether you're looking for a design consult, interested in a collaboration, or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
                      sections: [
                        {
                          type: "FAQ",
                          details: {
                            headerOne: "Frequently Asked Questions",
                            descriptionOne: "From understanding my design process to discussing project timelines, I've gathered responses to questions often asked by clients and collaborators. If you can't find your answer here, feel free to reach out!",
                            faq: [{"question":"What is your design process?","answer":"My design process starts with understanding the client's needs, then moving onto research, ideation, prototyping, and finally, implementation.","id":"853"},{"question":"How long does a project usually take?","answer":"The duration of a project varies depending on its complexity and scope, but typically it ranges from a few weeks to a few months.","id":"854"},{"question":"Do you collaborate with other designers?","answer":"Yes, I often collaborate with other designers and believe that teamwork can lead to more innovative and comprehensive solutions.","id":"855"},{"question":"What types of projects do you work on?","answer":"I work on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities.","id":"856"},{"question":"How can I contact you for a project?","answer":"You can reach out to me via the contact form on this website, or directly through email. I look forward to discussing how we can work together.","id":"857"}],
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