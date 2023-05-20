import DataCard from '../components/DataCard/DataCard';

import "./Home.css";

const Home = () => {
    return (
        <div className='home__centered'>
            <DataCard img={require('../img/recentnews@2x.png')} handlerType='' buttonText='Read More' title='Recent News' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.'/>
            <DataCard img={require('../img/applytoteam@2x.png')} handlerType='' buttonText='See Teams' title='Apply to a Team' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.'/>
            <DataCard img={require('../img/officerapplication@2x.png')} handlerType='applyOfficerHandler' buttonText='Apply' title='Officer Applications' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse.'/>
        </div>
    );
}
export default Home;