/*import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../context/UserContext'
import Bottom from '../components/Bottom/Bottom';

import loginBackground from '../images/login_background.jpg';
import { Loader } from '../components/Loader/Loader';

function Profile() {
    const { user, setUser } = useContext(UserContext)
    const [interests, SetInterests] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        SetInterests(user.interests)
        console.log("new")
        if(user) setLoading(false)
    },[user])
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBackground})`}}>
      {loading ?<Loader /> :(
          <div class="flex items-center justify-center bg-gray-900 bg-opacity-70 rounded-xl shadow-lg w-80 h-80vw"> 
          <div class="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg flex flex-col items-center text-left w-full">
          <div class="mb-6">
              <div class="rounded-full overflow-hidden border-2 border-white">
                  <img src={user?.image} alt="Profile Picture" class="w-24 h-24"/>
              </div>
          </div>
          <div class="text-white text-center">
              <h1 class="text-2xl font-bold">{user.firstname} {user.lastname} ({user.gender})</h1>
              <h3 class="text-lg">VIT Bhopal {user.batch}</h3>
          </div>
          <div class="text-white mt-6 text-left max-w-sm">
              <div class="mb-4">
                  <h3 class="text-lg font-bold mb-2">Bio</h3>
                  <p class="text-sm text-justify font-comforter">{user.bio}</p>
              </div>
              <div>
                  <h3 class="text-lg font-bold mb-2">Interests</h3>
                  <ul class="flex flex-wrap">
                  {
         interests?.map((interest) => (
          <li class="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">{interest}</li>
          ))
      }       
                  </ul>
              </div>
          </div>
      
      </div>
      </div>
      )}
          
    </div>
    <Bottom />
    </>
  );
}

export default Profile;*/


/*import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Bottom from '../components/Bottom/Bottom';
import loginBackground from '../images/login_background.jpg';
import { Loader } from '../components/Loader/Loader';

function Profile() {
    const { user } = useContext(UserContext);
    const [interests, setInterests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setInterests(user.interests);
        if (user) setLoading(false);
    }, [user]);

    useEffect(() => {
        // Disable horizontal scrollbar
        document.body.style.overflowX = 'hidden';

        return () => {
            // Re-enable horizontal scrollbar on component unmount
            document.body.style.overflowX = 'auto';
        };
    }, []);

    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-end bg-cover bg-no-repeat fixed inset-0"
                style={{backgroundImage: `url(${loginBackground})`}}
                // Set the z-index to bring the glass window on top
            >
                <div className="flex-1"></div>
                <div className="flex items-center justify-center h-full">
        
                    <div className="bg-gray-900 bg-opacity-70 rounded-xl shadow-lg w-80 h-auto overflow-hidden" style={{ marginBottom: "4rem" }}>
            

                        {loading ? (
                            <Loader />
                        ) : (
                            <div className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg flex flex-col items-center text-left w-full">
                                <div className="mb-6">
                                    <div className="rounded-full overflow-hidden border-2 border-white">
                                        <img src={user?.image} alt="Profile Picture" className="w-20 h-20" />
                                    </div>
                                </div>
                                <div className="text-white text-center">
                                    <h1 className="text-1xl font-bold">
                                        {user.firstname} {user.lastname} ({user.gender})
                                    </h1>
                                    <h2 className="text-lg">VIT Bhopal {user.batch}</h2>
                                </div>
                                <div className="text-white mt-6 text-left max-w-sm overflow-y-auto">
                              
                                    <div className="mb-4">
                                        <h3 className="text-lg font-bold mb-2">Bio</h3>
                                        <p className="text-sm text-justify font-comforter">{user.bio}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Interests</h3>
                                        <ul className="flex flex-wrap">
                                            {interests?.map((interest, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2"
                                                >
                                                    {interest}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    );
}

export default Profile;*/
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
          <ul>
            <li className='flex items-center'> 
              <div>
                Abhishek Singh 
              </div>
              <a href="https://www.instagram.com/abhi___rawat/">
                <img src={buttonImage5} className='w-10 mx-2' alt="Icon" />
              </a>
            </li>
            <li className='flex items-center'> 
              <div>
                Prem Singh
              </div>
              <a href="https://www.instagram.com/.p.r.e.m./">
                <img src={buttonImage5} className='w-10 mx-2' alt="Icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Info;
