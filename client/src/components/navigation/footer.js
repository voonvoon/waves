import React from "react";

import ContactsIcon from '@mui/icons-material/Contacts';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useSelector } from 'react-redux';



const Footer = () => {
    const site = useSelector(state=>state.site);

    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    WAVES
                </div>
                { site && site.vars ?
                <div className="wrapper">
                    <div className="left">
                    <h2>Contact information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <ContactsIcon/>
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>{site.vars.address}</div>
                                </div>                          
                            </div>

                            <div className="tag">
                                <TimelapseIcon/>
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>{site.vars.phone}</div>
                                </div>                                
                            </div>

                            <div className="tag">
                                <PhoneIcon/>
                                <div className="nfo">
                                    <div>Working Hour</div>
                                    <div>{site.vars.hours}</div>
                                </div>
                            </div>

                            <div className="tag">
                                <EmailIcon/>
                                <div className="nfo">
                                    <div>Email me:</div>
                                    <div>{site.vars.email}</div>
                                </div>
                            </div>

                        </div>
                        </div>
                    <div className="left">
                        <h2>Be the first to know</h2>
                        <div>
                            <div>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            </div>
                        </div>                       
                    </div>
                </div>
                :null}
            </div>
        </footer>
    )

}

export default Footer;