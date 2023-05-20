import React, { useState } from 'react';
import DataCard from '../components/DataCard/DataCard';

import './About.css';

const About = () => {
    const [authUrl, setAuthUrl] = useState('');

    function DiscordLoginHandler() {
        const clientId = '1109578889178652672'; //replace CLIENT_ID w/ discord clientID
        const redirectUri = 'localhost:3000/useraccount'; //replace REDIRECT_URI w/ callback URL
        const scope = 'https://discord.com/api/oauth2/authorize?client_id=1109578889178652672&redirect_uri=localhost%3A3000%2Fuseraccount&response_type=code&scope=identify%20email'; //replace scope with necessary scope for app
        const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
        setAuthUrl(authUrl);
    
    };

    return (
        <div className='centered__gap'>
            <div className='centered'>
                <div className='join__big'>
                    <div className='join__title'>
                        Show Me Your Kitties Origin
                    </div>
                    <div className='about__text'>
                        <ol>On August 30th 2022 a group of nostalgic players formed on Maladath-US (A) with a common goal, to form a community of players who love cats. Thus, Show Me Your Kitties was born. Within the first month on this fresh server the guild would be reported multiple times for "name violations" stemming from the word "Kitties" in our name.</ol>
                        <ol>Overtime the WoW Wrath guild would make the adjustment in their name to Show Me Your Kittens to fit with Blizzard's naming policy. But that wouldn't stop our players from posting daily cat pictures in our discord channels.</ol>
                        <ol>As Wrath of the Lich King Classic released, SMYK would grow and be known on the server as a "casual community of animal lovers of all types".</ol>
                        <ol>Maladath would see SMYK as a community of meme loving animal lovers who's community would reach much farther than the in-game guild it had started from. SMYK would grow to include communities in: WoW Classic-Wrath, WoW Retail, FFXIV, OSRS, Minecraft, Overwatch, LoL, Call of Duty, SWTOR, and Star Citizen.</ol>
                        <ol>As with all great things, SMYK was faced with a tough decision in January 2023. As Blizzard opened up free character transfers OFF Maladath without allowing for Character Transfers on to Maladath and without allowing for the use of Paid Boosts.</ol>
                        <ol>SMYK Stayed on Maladath until February 1st, when the WoW Server population was reported as ~400 Alliance ~100 Horde active players. At that moment the leadership felt the need to move the community to a more active server finally taking the free transfers off of Maladath-US to Windseeker-US where SMYK is to this day.</ol>
                        <ol>At the time of writing, SMYK is currently above 450 active accounts with 20+ active players at any given time and growing daily.</ol>
                    </div>
                </div>  
            </div>
            <div className='centered'>
                <div className='join__big'>
                    <div className='join__title'>
                        Community Rules
                    </div>
                    <div className='about__text'>
                        While we are an 18+ age based community we do conform to multiple rules to ensure the comfort and safety of our community members.
                        The following rules must be observed.
                        <ol>1. Be Respectful, civil and welcoming.</ol>
                        <ol>2. Do not misuse or spam any of our channels of communication. (This includes in-game as well as in Discord)</ol>
                        <ol>3. Do not join our community specifically to promote your own content. (We have an avenue for content creators please speak with a Community Manager for more information)</ol>
                        <ol>4. Do not buy/sell/trade/giveaway anything of monitary value without the express concent of a Community Manager.</ol>
                        <ol>5. Do not use our community as a "Dating Service".</ol>
                        <ol>6. The primary language of this community is English.</ol>
                        <ol>7. Spamming our community members in any form is not allowed.</ol>
                        <ol>8. Controversial topics such as religion, politics, and world events are not allowed in public text or voice channels in any of our communities.</ol>
                        <ol>9. Do not use the Discord "Ping" system for the purpose of spamming a large group of members without a legitimate reasoning.</ol>
                        <ol>10. Catfishing and any sort of "fake identities" are forbidden.</ol>
                        <ol>11. Do not advertise without permission.</ol>
                        <ol>12. Anything to target a specific group/individual is prohibited.</ol>
                        <ol>13. Please refrain from discussing major spoilers from any anime, movie, tv-show, or game on any of our public channels.</ol>
                        <ol>14. Please do not mic spam in voice channels.</ol>
                        <ol>15. Please refrain from spamming the Discord "Soundboard" feature during community events unless otherwise stated.</ol>
                        <ol>16. Do not link scam websites within any of our community channels.</ol>
                    </div>
                </div>
            </div>

            <div className='centered'>
                <div className='join__big'>
                    <div className='join__title'>
                        If we haven't scared you off...
                    </div>
                    <div className='about__rules'>
                        We'd love for you to be apart of our community! To get started, Click the "Login with Discord" button and set follow the prompts on-screen to gain access to our Discord Community and channels based on your interests, and Don't forget to pay the animal tax :P (Just drop a picture of either your animal or a reddit animal in our #animal-pics-pls channel).
                        <ol>We're excited to have you be apart of our great community!</ol>
                        <ol>Don't forget, by joining our community you are hereby agreeing to the rules stated above. Breaking any of the rules above may result in a ban from our community.</ol>
                        <ol>We value our community and therefore would like to issue this statement regarding violations of our rules:</ol>
                        <br />
                        <ol>If a member is found to be breaking any of our rules above our officers will take swift action to handle the issue. Depending on the severity the SMYK team may take any of the following actions:</ol>
                        <br />
                        <li>Conversation with an officer resulting in documentation in our reporting system and a warning issued to a community member. (If a warning is issued the next infraction of said rule will result in a kick/ban)</li>
                        <li>TIMEOUT from our community for a period of no less than 90 days. (If a Timeout is issued on a player they will be "kicked" from our community and Discord server. If a Timedout player attempts or successfully re-joins without gaining approval from a Community Manager within 90 days the Timedout member will be banned.)</li>
                        <li>BAN from our community. (If a community member is banned they may appeal the ban via our website in your profile under the "ban appeal" section)</li>
                        <br />
                        <ol>Again we'd like to take the time to thank you for reading all of this information, it is important in order to keep our community a safe and fun place for all of our members!</ol>
                        <br />
                        {authUrl ? (
                            <a href={authUrl}>Login with Discord</a>
                        ) : (
                            <button className='join__button' onClick={DiscordLoginHandler}>Login with Discord</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;