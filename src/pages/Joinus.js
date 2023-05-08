import TeamCard from '../components/Teams/TeamCard';

import './Joinus.css';

const Joinus = () => {
    return (
        <div>
            <div className='centered'>
                <TeamCard title="Not Sober" raidTimes="Friday: 8 - 12 ST"/>
                <TeamCard title="Thirsty Thursday's" raidTimes="Thursday: 7 - 11 ST"/>
                <TeamCard title="PUG 25M" raidTimes="Saturday: 8 - 12 ST"/>
            </div>
        </div>
    );
}
export default Joinus;