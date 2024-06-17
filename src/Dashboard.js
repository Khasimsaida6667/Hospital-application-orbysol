import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Header from './Header';
import Ecg from './Ecg';


const Dashboard = ({ onLogout }) => {
    const [isEcgRunning, setIsEcgRunning] = useState(true);

    useEffect(() => {
        // This effect will run when the component mounts and unmounts
        return () => {
            setIsEcgRunning(false); // Stop the ECG animation when the component unmounts
        };
    }, []);
    return (
        <div>
            <Header onLogout={onLogout} />

            <div className="list-itemss">
                <div className="d">
                    <img src="https://i.ibb.co/BGS5SG5/Registration-icon.png" alt="Registration-icon" border="0" /> <p>ECG only......</p>
                </div>
                <div className="d"> <img src="https://i.ibb.co/grYsy2w/New-Registration-icon.png" alt="New-Registration-icon" border="0" /> <p>Alert only......</p>
                </div>
                <div className="d"><img src="https://i.ibb.co/Sym6G7C/Alerts-icon.png" alt="Alerts-icon" border="0" /> <p>List view......</p>
                </div>
            </div>

            <div className="s">
                <div className="sec">
                </div>
            </div>


            <div className="patient-data">
                <div className='hr'></div>
                <table className="patient-table">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Status</th>
                            <th>Enrollment Type</th>
                            <th>Device ID</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Remaining Time</th>
                            <th>Provider</th>
                        </tr>
                    </thead>
                </table>
            </div>


            <div className='dashbord-container'>
                <div className='information'>
                    <div className='time'>
                        <p>02/05/24(10:30am)</p>
                        <p>04/05/24(10:30am)</p>
                        <p className='last-element'><div className='span'></div>(24 Days)</p>
                    </div>
                    <div className='vertical-line'>

                    </div>

                    <div className='data'>
                        <div className='img'>
                            <img src="https://i.ibb.co/2qJr9KS/pexels-doquyen-1520760.jpg" alt="img" className='img-container' />
                        </div>

                        <div className='content'>
                            <span className='name'>Matt Dowd</span><br />
                            <span className='date'>04-03-1975 </span><br />
                            <span>CC: Heart Palpitations</span><br /><span>
                                Doctor: Grace Kerr<br /></span>
                        </div>
                    </div>
                </div>

                <div className="g">
                    <Ecg />

                </div>

            </div>



            <div className='hr-in-body'></div>
            <div className='dashbord-container'>
                <div className='information'>
                    <div className='time'>
                        <p>02/05/24(10:30am)</p>
                        <p>04/05/24(10:30am)</p>
                        <p className='last-element'><div className='span'></div>(24 Days)</p>
                    </div>
                    <div className='vertical-line1'>

                    </div>

                    <div className='data'>
                        <div className='img'>
                            <img src="https://i.ibb.co/qCdzN2g/fashionable-young-woman-standing-front-blue-backdrop.jpg" alt="img" className='img-container' />
                        </div>

                        <div className='content'>
                            <span className='name1'>Matt Dowd</span><br />
                            <span className='date'>04-03-1975 </span><br />
                            <span>CC: Heart Palpitations</span><br /><span>
                                Doctor: Grace Kerr<br /></span>
                        </div>
                    </div>
                </div>

                <div className="g">
                    <Ecg />

                </div>

            </div>
            <div className='hr-in-body'></div>


            <div className='dashbord-container'>
                <div className='information'>
                    <div className='time'>
                        <p>02/05/24(10:30am)</p>
                        <p>04/05/24(10:30am)</p>
                        <p className='last-element'><div className='span'></div>(24 Days)</p>
                    </div>
                    <div className='vertical-line2'>

                    </div>

                    <div className='data'>
                        <div className='img'>
                            <img src="https://i.ibb.co/2yrxyMB/pexels-pixabay-415829.jpg" alt="img" className='img-container' />
                        </div>

                        <div className='content'>
                            <span className='name2'>Matt Dowd</span><br />
                            <span className='date'>04-03-1975 </span><br />
                            <span>CC: Heart Palpitations</span><br /><span>
                                Doctor: Grace Kerr<br /></span>
                        </div>
                    </div>
                </div>

                <div className="g">
                    <Ecg />

                </div>

            </div>


            <div className='hr-in-body'></div>

       <div className='dashbord-container container1'>
                <div className='information'>
                    <div className='time'>
                        <p>02/05/24(10:30am)</p>
                        <p>04/05/24(10:30am)</p>
                        <p className='last-element'><div className='span'></div>(24 Days)</p>
                    </div>
                    <div className='vertical-line3'>

                    </div>

                    <div className='data'>
                        <div className='img'>
                            <img src="https://i.ibb.co/Zg58DRx/pexels-hannah-nelson-390257-1065084.jpg" alt="img" className='img-container' />
                        </div>

                        <div className='content'>
                            <span className='name3'>Matt Dowd</span><br />
                            <span className='date'>04-03-1975 </span><br />
                            <span>CC: Heart Palpitations</span><br /><span>
                                Doctor: Grace Kerr<br /></span>
                        </div>
                    </div>
                </div>

                <div className="g">
                    <Ecg />

                </div>

            </div>




            <div className="footer">
                <p className="pa">If this is a medical emergency, then please dial 911 or go to the nearest medical facility immediately</p>
                <div className="so">
                    <p className="par">Copyright @ 2024 <span className="blu">avhita, Inc.</span> All rights reserved.</p>
                    <p>
                        <span className="fle">Terms of use</span>
                        <span className="fle">Privacy Policy</span>
                        <span className="fle">HIPAA Compliance</span>
                        <span className="lo">1-877-XXX-XXX</span>
                        <span className="sm">info@avhita.health</span>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;