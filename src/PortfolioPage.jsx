import Navbar from './Layouts/Navbar';
import Home from './Layouts/Home/Home';
import Skills from './Layouts/Home/Skills';
import About from './Layouts/Home/About';
import Projects from './Layouts/Home/Projects';
import Designs from './Layouts/Home/Designs';
import Contact from './Layouts/Home/Contact';
import Footer from './Layouts/Home/Footer';

const PortfolioPage = ({ data }) => {
  return (
    <div className="page-shell relative min-h-screen overflow-hidden bg-[#f7fbff]">
      <div className="relative z-10">
        <Navbar navLinks={data.navLinks} />
        <Home data={data} />
        <About data={data} />
        <Skills skillImages={data.skillImages} skillGroups={data.skillGroups} />
        <Projects projects={data.projects} />
        <Designs
          designProjects={data.designProjects}
          designSection={data.designSection}
          skincareProjects={data.skincareProjects}
          skincareSection={data.skincareSection}
          moneyProjects={data.moneyProjects}
          moneySection={data.moneySection}
          musicProjects={data.musicProjects}
          musicSection={data.musicSection}
        />
        <Contact data={data} />
        <Footer name={data.name} socials={data.socials} />
      </div>
    </div>
  );
};

export default PortfolioPage;
