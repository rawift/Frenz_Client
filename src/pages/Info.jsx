/*import React from 'react';
import { Link } from 'react-router-dom';
import buttonImage5 from '../images/instagram.png';
import Bottom from '../components/Bottom/Bottom';

const Info = () => {
  return (
    <>
    <div className="bg-black h-screen text-white">
      <div className="w-100 p-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">About app</h2>
          
            <p>New matches automatically made eveyday at 9 AM </p>
            <p>You must submit the form to get the matches ( Gender cant't be updated ) Refresh after submission</p>
            <p>Use voice to instantly talk to a random match.</p>
            <p>Chats automatically gets deleted at 9 AM </p>
            <p>App is running in Beta version bug and glitches are there</p>
            <p>App is not responsive (Install react-app from browser by click on three dots)</p>
           <Link to={`/login`}> <p>If any bug occur , relogin by clicking on me!</p> </Link>
           <p>New features coming soon</p>
           <p>Let me know any recommendation from you guys</p>
           <p>Please be respectful towards each other on both chats and audio call</p>
           <p>Allow the audio permission to use Voice</p>
           <p>Sometime chates may not be in real time, relogin/reload to resolve</p>
           <a href='https://forms.gle/EQgbdEizsfCiohPU8'>Delete Account Click on me!</a>
         
        </div>
      </div>
      <div className="w-100 p-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Developed by</h2>
          <ul>
  <li className='flex items-center'> 
    <div>
      Abhishek Singh 
    </div>
    <a  href="https://www.instagram.com/abhi_____rawat/">
    <img src={buttonImage5} className='w-10 mx-2' alt="Icon" />
    </a>
      </li>
      <li className='flex items-center'> 
    <div>
      Prem Singh
    </div>
    <a  href="https://www.instagram.com/_._p.r.e.m_._/">
    <img src={buttonImage5} className='w-10 mx-2' alt="Icon" />
    </a>
      </li>

   
      </ul>

        </div>
      </div>
      
    </div>
    <Bottom />
    </>
  );
};

export default Info;
*/
/*import React from 'react';
import { Link } from 'react-router-dom';
import buttonImage5 from '../images/instagram.png';
import Bottom from '../components/Bottom/Bottom';

const Info = () => {
  return (
    <>
      <div className="bg-black h-screen text-white">
        <div className="w-100 p-8 overflow-auto" style={{ maxHeight: "calc(100% - 3.5rem)" }}>
          <h2 className="text-2xl font-bold mb-4">About app</h2>
          <p>New matches automatically made every day at 9 AM</p>
          <p>You must submit the form to get the matches (Gender can't be updated). Refresh after submission</p>
          <p>Use voice to instantly talk to a random match.</p>
          <p>Chats automatically get deleted at 9 AM</p>
          <p>App is running in Beta version, bugs and glitches are there</p>
          <p>App is not responsive (Install react-app from the browser by clicking on three dots)</p>
          <Link to="/login"><p>If any bug occurs, relogin by clicking on me!</p></Link>
          <p>New features coming soon</p>
          <p>Let me know any recommendations from you guys</p>
          <p>Please be respectful towards each other on both chats and audio calls</p>
          <p>Allow the audio permission to use Voice</p>
          <p>Sometimes chats may not be in real-time, relogin/reload to resolve</p>
          <a href='https://forms.gle/EQgbdEizsfCiohPU8'>Delete Account Click on me!</a>


          <h2 className="text-2xl font-bold mb-4">Developed by</h2>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div>Abhishek Singh</div>
              <a href="https://www.instagram.com/abhi_____rawat/">
                <img src={buttonImage5} className="w-10 mx-2" alt="Instagram" />
              </a>
            </div>
            <div className="flex items-center">
              <div>Prem Singh</div>
              <a href="https://www.instagram.com/.p.r.e.m./">
                <img src={buttonImage5} className="w-10 mx-2" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Info;*/
import React from 'react';
import { Link } from 'react-router-dom';
import buttonImage5 from '../images/instagram.png';
import Bottom from '../components/Bottom/Bottom';

const Info = () => {
 return (
   <>
     <div className="bg-black h-screen text-white">
       <div className="w-100 p-8 overflow-auto" style={{ maxHeight: "calc(100% - 3.5rem)" }}>
         <h2 className="text-2xl font-bold mb-4">About app</h2>
         <ul style={{ listStyleType: 'disc' }}>
           <li>New matches automatically made every day at 9 AM</li>
           <li>You must submit the form to get the matches (Gender can't be updated). Refresh after submission</li>
           <li>Use voice to instantly talk to a random match.</li>
           <li>Chats automatically get deleted at 9 AM</li>
           <li>App is running in Beta version, bugs and glitches may be there</li>
           <li>App is not responsive (Install react-app from the browser by clicking on three dots)</li>
           <li><Link to="/login">If any bug occurs, relogin by clicking on me!</Link></li>
           <li>New features coming soon</li>
           <li>Let me know any recommendations from you guys</li>
           <li>Please be respectful towards each other on both chats and audio calls</li>
           <li>Allow the audio permission to use Voice</li>
           <li>Sometimes chats may not be in real-time, relogin/reload to resolve</li>
           <li><a href='https://forms.gle/EQgbdEizsfCiohPU8'>To delete your Account Click on me!</a></li>
         </ul>

         <h2 className="text-2xl font-bold mb-4">Developed by</h2>
         
         <div className="flex items-center">
           <div>
             Abhishek Singh
             <a href="https://www.instagram.com/abhi_____rawat/">
               <img src={buttonImage5} className="w-10 mx-1" alt="Instagram" />
             </a>
           </div>
           <div className="ml-12">
             Prem Singh
             <a href="https://www.instagram.com/_._p.r.e.m_._/">
               <img src={buttonImage5} className="w-10 mx-1" alt="Instagram" />
             </a>
           </div>
         </div>

         <div>
          <p> For any queries or support contact us at " support@frrenz.tech "</p>
         </div>

       </div>
     </div>
     <Bottom />
   </>
 );
};

export default Info;
