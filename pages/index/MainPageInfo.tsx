import { Glitch } from "../../components/Glitch/Glitch"
import { Title } from "../../components/Title/Title"
import './styles.css'
import { ArrowScroll } from "./ArrowScroll";
import { Card } from "../../components/Card/Card";
import { useEffect, useRef } from "react";

function handleScrollClick() {
  document.getElementById('career')?.scrollIntoView({ behavior: 'smooth' });
}

export function MainPageInfo() {
  const ticking = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollPercentage = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const screenHeight = window.innerHeight;
          const scrollPercentage = (scrolled / screenHeight) * 100;
          if (buttonRef.current) {
            if (scrollPercentage > 5) {
              buttonRef.current.classList.add("arrowScrollHidden");
            } else {
              buttonRef.current.classList.remove('arrowScrollHidden')
            }
          }
          if (backdropRef.current) {

            if (scrollPercentage > 50) {
              backdropRef.current.classList.add("backdropVisible");
            } else {
              backdropRef.current.classList.remove("backdropVisible");
            }
          }
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", updateScrollPercentage, { passive: true });
    updateScrollPercentage();

    return () => window.removeEventListener("scroll", updateScrollPercentage);
  }, []);

  return (
    <section className="mainPageInfo">
      <div className="mainPageInfoBackdrop" ref={backdropRef}></div>
      <section className="landingSection">
        <Title>Hello, I'm
          <Glitch>{`Maksym \nDolynchuk`}</Glitch>
        </Title>
        <h2 className="secondTitle">
          <span className="jobTitle">Front End Engineer</span>
        </h2>
        <div className="mainMessageStack">
          <div className="mainMessage">
            <div className="mainMessageContent">
              <p>Building high-quality web interfaces with a creative touch</p>
              <p>8 years of experience in Prop-Tech, Machine Learning, Analytics, Food Delivery and SAAS</p>
              <p>Based in Berlin, born in Ukraine</p>
            </div>
          </div>
          <div className="mainLinks">
            <a href="https://calendly.com/dolinchuk2000/15min" target="_blank" rel="noopener noreferrer">
              Schedule call
            </a>
            <a href="https://www.linkedin.com/in/maksym-d-13283b110/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <button className="arrowScroll" arial-label="Scroll down" ref={buttonRef} onClick={handleScrollClick}><ArrowScroll /></button>
      </section>
      <section className="careerSection">
        <h3 id="career" className="sectionHeader">My career path</h3>
        <Card
          title="Wolt"
          subtitle="Senior Front-End Engineer"
        >
          <h5 className="teamName">Inventory Routing & Replenishment team</h5>
          <span className="years">2022-2025</span>
          <div className="description">
            <p>• Working on purchasing app for stores</p>
            <p>• Leading major FE infrastructure updates across organization</p>
            <p>• Developing component system with design system tokens integration</p>
            <p>• Hiring and mentoring new team members</p>
          </div>
        </Card>
        <Card title="DeliveryHero" subtitle="Senior Full-Stack Engineer / DevOps">
          <h5 className="teamName">Middleware team</h5>
          <span className="years">2021-2022</span>
          <div className="description">
            <p>• Developing high performance data processing services using AWS, GO, Terraform and Docker</p>
            <p>• Creating internal tool for managing API specs</p>
            <p>• Implementing data pipeline components with live data streaming capabilities using GO</p>
          </div>
        </Card>
        <Card
          title="lun.ua"
          subtitle="Full-Stack Engineer"
        >
          <h5 className="teamName">Cortex Data Science / ML research team</h5>
          <span className="years">2019 - 2021</span>
          <div className="description">
            <p>• Planning and developing Machine Learning data management platform</p>
            <p>• Managing deployment CI/CD pipelines using Docker and Jenkins</p>
            <p>• Managing database and processing queues to automate model learning</p>
            <p>• Developing React app for collecting training sets and answers comparison</p>
          </div>
        </Card>
        <Card
          title="lun.ua"
          subtitle="Front-End Engineer"
        >
          <h5 className="teamName">Search team</h5>
          <span className="years">2017 - 2019</span>
          <div className="description">
            <p>• Working on B2B app for ad campaigns management</p>
            <p>• Third-party payment system integration</p>
            <p>• Working on seamless gradual Refactoring from jQuery and PHP to React SSR App with Python API</p>
            <p>• Improvements and optimization for interactive maps with 3D models with big datasets</p>
            <p>• Participated in migration from Google Maps to MapBox</p>
          </div>
        </Card>
      </section>
      <section className="teachingSection">
        <h3 id="teaching" className="sectionHeader">Teaching</h3>
        <Card
          title="National Taras Shevchenko University of Kyiv"
          subtitle="Lecturer for React.js practical course"
        >
          <p className="faculty">Faculty of Cybernetics</p>
          <p className="years">2019</p>
          <div className="description">
            <p>Taught React.js fundamentals for third year students of Program Engineering major</p>
            <p>Course consisted of 10 lectures and 10 practical lessons where we covered all the basic things needed to make modern React app</p>
            <p>Students were able to develop useful React apps for their Software Engineering projects</p>
            <p>Project done in collaboration with:</p>
            <p>Taras Panchenko, Head of Dept Kyiv National University</p>
            <p>Serhiy Zelinskyi, Technical Lead lun.ua</p>
            <p>Volodymyr Kubytskyi, Head of AI MacPaw</p>
            <p>
              <a target="_blank" href="https://www.facebook.com/tpanchenko/posts/pfbid024DHoz2W1NFJCKFRcw2XGEgQTMkFCTJ4inQZjJrfBGKFqvt7g344b4NFrxkBXuWXXl">University head of department facebook post</a>
            </p>
          </div>
        </Card>
        <Card
          title="Lunoteka student coworking at Kyiv National University"
          subtitle='Lecture "everything that Front-End developer needs in 2019"'
        >
          <p className="faculty">Faculty of Radiophysics and Computer Science</p>
          <p className="years">2019</p>
          <div className="description">
            <p>2 Hour lecture with demos, memes and serious charts for students who want to start their journey becoming Front End Engineers</p>
            <p>
              <a target="_blank" href="https://www.facebook.com/events/657740647993766">Facebook event for lecture</a>
            </p>
          </div>
        </Card>
        <Card
          title="CHYTALKA student coworking at Kyiv National University"
          subtitle='Online Lecture "Design and Front-End. Moving button for 2 hours"'
        >
          <p className="faculty">Faculty of Cybernetics</p>
          <p className="years">2020</p>
          <div className="description">
            <p>2 Hour online lecture with discussion and presentation about collaboration between Designer and Front-End Engineer</p>
            <p>Done in collaboration with Alina Skalkina, UI/UX Designer</p>
            <p><a target="_blank" href="https://www.facebook.com/events/343137843806457">Facebook event for lecture</a></p>
          </div>
        </Card>
      </section>
      <section className="educationSection">
        <h3 id="education" className="sectionHeader">My Education</h3>
        <Card
          title="National Taras Shevchenko University of Kyiv"
          subtitle="Computer Engineering / System Engineering bachelors degree"
        >
          <p className="faculty">Faculty of Radiophysics, Electronics and Computer Systems</p>
          <p className="years">2016-2020</p>
          <div className="description">
            <p>Study program with a strong foundation in computer engineering, system design, networks and electronics, with a deep integration of physics and advanced mathematical principles. Machine Learning basics, IOT and computer networks administration, quantum mechanics, electrodynamics, and semiconductor physics</p>
          </div>
        </Card>

        <Card
          title="Physical / Techical Lyceum of Ivano-Frankivsk Technical University of Oil and Gas"
          subtitle="High school diploma"
        >
          <p className="faculty">Physics / IT class</p>
          <p className="years">2014-2016</p>
          <div className="description">
            <p>A specialized high school program with a strong emphasis on physics,  mathematics, and information technology. The curriculum provided advanced training in theoretical and applied physics, including mechanics, electromagnetism, and quantum fundamentals, alongside programming, algorithms, and computational problem-solving of physics and advanced mathematical principles</p>
          </div>
        </Card>
      </section>
      <footer>
        <p>If you reached down here, youre probably interested in my experience or looking for something else</p>
        <p>Anyways, lets get in contact, would be happy to talk!</p>
        <div>
          <a href="https://calendly.com/dolinchuk2000/15min" target="_blank" rel="noopener noreferrer">
            Schedule call
        </a>
          <a href="https://www.linkedin.com/in/maksym-d-13283b110/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div>
          <p>You can also reach me by email:</p>
          <a href="mailto:dolinchuk2000@gmail.com">dolinchuk2000@gmail.com</a>
        </div>
        <p className="credits">Made with ♥ by Maksym Dolynchuk</p>
        <p>Have a nice day!</p>
      </footer>
    </section>
  )
}