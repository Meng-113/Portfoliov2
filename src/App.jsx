import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioPage from './PortfolioPage';
import portfolioData from './data/portfolioData';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
    });
  }, []);

  return <PortfolioPage data={portfolioData} />;
}

export default App;
