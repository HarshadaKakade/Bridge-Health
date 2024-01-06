
import { useNavigate } from 'react-router-dom';
import ApplicationHeader from '../../components/ApplicationHeader';
import ApplicationBanner from '../../components/ApplicationBanner';

import '../../App.css';

const Home =() =>{
  
  const navigate = useNavigate()


  const onClickPlanVisit = () => {
    navigate('/let-plan-visit')
  }
  return (
    <div className="padding-all-side">
      <header className="App-header">
        <ApplicationHeader />
        <ApplicationBanner onClickPlanVisit={onClickPlanVisit} />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ApplicationImage imgSrc={logo} title={"Logo"} onClickDownload={onClickImageDownload}/> */}


      </header>
      
    </div>
  );
}

export default Home;
