import { Link } from 'react-router-dom';
import './PortfolioSection.scss';

const PortfolioSection = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <div className="row">
          <div className="block">
            <img src="images/Design/Home/Portfolio_Section/design_1.png" />
          </div>
          <div className="block">
            <img src="images/Design/Home/Portfolio_Section/design_2.png" />
          </div>
        </div>
        <div className="row">
          <div className="block">
            <img src="images/Design/Home/Portfolio_Section/design_3.png" />
          </div>
          <div className="block">
            <img src="images/Design/Home/Portfolio_Section/design_4.png" />
          </div>
        </div>
      </div>
      <div className="view-more-wrapper">
        <Link to="/portfolio">
          <div className="more">More Portfolio</div>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSection;
