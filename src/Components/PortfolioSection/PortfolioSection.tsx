import { Link, useNavigate } from 'react-router-dom';
import './PortfolioSection.scss';

const sectionNames = [
  {
    displayName: 'Canvas Painting',
    name: 'canvas-painting',
    image: 'images/Design/Home/Portfolio_Section/design_1.png'
  },
  {
    displayName: 'Wall Painting',
    name: 'wall-painting',
    image: 'images/Design/Home/Portfolio_Section/design_2.png'
  },
  {
    displayName: 'Bottle Art',
    name: 'bottle-art',
    image: 'images/Design/Home/Portfolio_Section/design_3.png'
  },
  {
    displayName: 'Digital Painting',
    name: 'digital-painting',
    image: 'images/Design/Home/Portfolio_Section/design_4.png'
  }
];

const PortfolioSection = () => {
  const navigateTo = useNavigate();
  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <div className="portfolio-section-title">
          <h1>Our Portfolio</h1>
        </div>
        {/* {sectionNames.map((section, index) => {
          return (<div className="block">
            <img src={section.image} />
            <div className="block-title-background" />
            <div className="block-title">{section.displayName}</div>
            <div className="block-overlay" />
          </div>);
        })} */}

        <div className="row">
          <div
            className="block"
            onClick={() => navigateTo('/portfolio/canvas-painting')}
          >
            <img src="images/Design/Home/Portfolio_Section/design_1.png" />
            <div className="block-title-background" />
            <div className="block-title">Canvas Painting</div>
            <div className="block-overlay" />
          </div>
          <div
            className="block"
            onClick={() => navigateTo('/portfolio/wall-painting')}
          >
            <img src="images/Design/Home/Portfolio_Section/design_2.png" />
            <div className="block-title-background" />
            <div className="block-title">Wall Painting / Installation</div>
            <div className="block-overlay" />
          </div>
        </div>
        <div className="row">
          <div
            className="block"
            onClick={() => navigateTo('/portfolio/bottle-art')}
          >
            <img src="images/Design/Home/Portfolio_Section/design_3.png" />
            <div className="block-title-background" />
            <div className="block-title">Bottle Art</div>
            <div className="block-overlay" />
          </div>
          <div
            className="block"
            onClick={() => navigateTo('/portfolio/digital-painting')}
          >
            <img src="images/Design/Home/Portfolio_Section/design_4.png" />
            <div className="block-title-background" />
            <div className="block-title">Digital Painting</div>
            <div className="block-overlay" />
          </div>
        </div>
      </div>
      <div className="view-more-wrapper">
        <Link to="/portfolio/all">
          <div className="more">More Portfolio</div>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSection;
