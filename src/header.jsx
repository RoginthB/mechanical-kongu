import React from 'react';
import logo from './images/logo.kongu.png';
import cLogo from './images/covenling code.kongu.png';
import './header.css';
import VisAndMiss from './component/VisAndMiss.jsx';
import Profile from './component/Profile.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

//exported fuction here ...
function Header() {
    return (
        <div >
            <div className="top-bar">
                <div className="row">
                    <div className="col-sm-3">
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <div className="contant col-sm-6">
                        <p> <span className="heading1">KONGUNADU COLLEGE OF ENGINEERING AND TECHNOLOGY </span> <br />
                            <span className="heading2">(Autonomus)</span><br />
                            Namakkal-Trichy State Highway,Tholurpatti post, Thottiam Taluk Trichy District,<br />Tamil Nadu 621215,India
                            <br /><span className="texthidedn">(Approved by AICTE,New Delhi&Affilited to Anna University,Chennai,Accreadited by NBA(CSE,ECE&EEE), Accredited by NACC with B++ Grade, Recognized by UGC with 2(f)&12(B) and ISO 9001:2015 certifed Institution)</span> </p>
                    </div>
                    <div className=" col-sm-3">
                        <img src={cLogo} className="cLogo" alt="logo" />
                    </div>
                </div>
            </div>
            {MechContainer()}
            {TopBarImage()}
            {Body()}

        </div>

    );
}
// orgnations of function here..
function Body() {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <BrowserRouter>
                        <SideBar />
                    </BrowserRouter>
                </div>
            </div>
            <div className="footer">
                {Footer()}
            </div>

            <div className="res-footer">
                {ResponsiveFooter()}
            </div>
        </div>
    );
}
//department of mechanical engineering text function here
function MechContainer() {
    return (
        <div className="mechContainer">
            <p>DEPARTMENT OF MECHANICAL ENGINEERING </p>
        </div>
    );
}
//image bar in top 
function TopBarImage() {
    return (
        <div className=" top-img py-3">
            <div className="top-bar-image-text">
                <h3 className="text-light py-2 middle-text" id="TopText">
                    Profile
                </h3>
            </div>
        </div> );

}

const Handleclick = ( name ) => {
    const Toptext = document.getElementById( "TopText" );
    return (
        Toptext.innerText = name
    );
}
// const TopBarText = ( props ) => {
//     return (

//     );
// }
//left bare 
function SideBar() {
    return (
        <Router>
            <div id="leftBare" className="col-sm-3 ">
                <div className="leftBare">
                    <div className="module ">
                        <h3 className="modtitle my-2 py-2">
                            <span className="title">
                                <span className="title-dark ">Links</span>
                            </span>
                        </h3>
                        <div className="modcontent clearfix">

                            <ul className="menu py-2">
                                <li className="item" onClick={() => Handleclick( " Profile " )} ><NavLink exact to="/" activeClassName="selected">Profile</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Vision and Mission " )} ><NavLink exact to="/Vision and Mission" activeClassName="selected">Vision and Mission</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Programme's PEO's, PSO's and PO's " )} ><NavLink exact to="/Programme's PEO's, PSO's and PO's" activeClassName="selected" >Programme's PEO's, PSO's and PO's</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Academic Environment " )} ><NavLink exact to="/Academic Environment" activeClassName="selected" >Academic Environment</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Programmes and Syllabus " )} ><NavLink exact to="/Programmes and Syllabus" activeClassName="selected" >Programmes and Syllabus</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Facilities " )} ><NavLink exact to="/Facilities" activeClassName="selected" >Facilities</NavLink></li>
                                <li className="item" onClick={() => Handleclick( "Placement Details" )} ><NavLink exact to="/Placement Details" activeClassName="selected" >Placement Details</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Funds Received from Outside Agencies " )} ><NavLink exact to="/Funds Received from Outside Agencies" activeClassName="selected" >Funds Received from Outside Agencies</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Faculty Members " )} ><NavLink exact to="/Faculty Members" activeClassName="selected" >Faculty Members</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Publications" )} ><NavLink exact to="/Publications" activeClassName="selected" >Publications</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Students List " )} ><NavLink exact to="/Students List" activeClassName="selected"  >Students List</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Student Achievements" )} ><NavLink exact to="/Student Achievements" activeClassName="selected" >Student Achievements</NavLink></li>
                                <li className="item" onClick={() => Handleclick( " Industrial Training  Visit" )} ><a href="http://www.kongunadu.ac.in/industrial-training-visit-mechanical.html" activeClassName="selected"  >Industrial Training  Visit</a></li>
                                <li className="item" onClick={() => Handleclick( " Conference / Workshop / Others " )} ><a href="http://www.kongunadu.ac.in/conference-workshop-others-mechanical.html" activeClassName="selected"  >Conference / Workshop / Others</a></li>
                                <li className="item" onClick={() => Handleclick( " Guest Lecture / Seminar " )} ><a href="http://www.kongunadu.ac.in/guest-lecture-seminar-mechanical.html" activeClassName="selected"  >Guest Lecture / Seminar</a></li>
                                <li className="item" onClick={() => Handleclick( " Value Added Courses" )} ><a href="http://www.kongunadu.ac.in/value-added-courses-mechanical.html" activeClassName="selected"  >Value Added Courses</a></li>
                                <li className="item" onClick={() => Handleclick( " MoU'S" )} ><a href="http://www.kongunadu.ac.in/mech-mou.html" activeClassName="selected"  >MoU'S</a></li>
                                <li className="item" onClick={() => Handleclick( " Course Material" )} ><a href="http://www.kongunadu.ac.in/course-material-6.html" activeClassName="selected"  >Course Material</a></li>
                                <li className="item8" onClick={() => Handleclick( " Analysis of Feedback on Facilities" )} ><a href="http://kongunadu.ac.in/images/PDF/feedback/Feed_Back_on_Facilities_-Mechanical--2020-21.pdf" rel="noopener noreferrer">Analysis of Feedback on Facilities</a></li>
                                <li className="item9" onClick={() => Handleclick( " Program Exit Survey" )} ><a href="http://kongunadu.ac.in/images/PDF/Mechanical/PROGRAM_EXIT_SURVEY_2021.pdf" >Program Exit Survey</a></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
            <MainContent />
        </Router>

    );
}

// Main Content here
function MainContent() {
    return (
        //routing ...
        <Switch >
            <div className="col-sm-9 px-2 my5">
                <div className="contant2 " >
                    <Route exact path="/" component={Profile} />
                    <Route exact path="/Vision and Mission" component={VisAndMiss} />
                    <Route exact path="/Programme's PEO's, PSO's and PO's" component={Peo} />
                    <Route exact path="/Academic Environment" component={AcademicEnvironment} />
                    <Route exact path="/Programmes and Syllabus" component={ProgrammesandSyllabus} />
                    <Route exact path="/Facilities" component={Facilities} />
                    <Route exact path="/Placement Details" component={PlacementDetails} />
                    <Route exact path="/Funds Received from Outside Agencies" component={FundsReceivedfromOutsideAgencies} />
                    <Route exact path="/Faculty Members" component={FacultyMembers} />
                    <Route exact path="/Publications" component={Publications} />
                    <Route exact path="/Students List" component={StudentList} />
                    <Route exact path="/Student Achievements" component={StudentAchievements} />
                </div>
            </div>

        </Switch>

    );

}


// footer function here ..
function Footer() {
    return (
        <div className="bg_footer ">
            <div className="responsive1">
                <div className="container py-2">
                    <div className="flex">
                        <div id="bottom2" className="">

                            <div className=" menu-footer ">
                                <h3 className="modtitle">
                                    <span className="title">
                                        <span className="title-color">Centre</span>
                                        <span className="title-normal"> of Excellence</span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-business">
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-centre-of-excellence/dell-emc-big-data-analytics-cse.html" rel="alternate">Dell EMC Big Data</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-centre-of-excellence/cisco-networking-academy-coe.html" rel="alternate">Cisco Networking</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-centre-of-excellence/coe-tvs-harita.html" rel="alternate">TVS Harita</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-centre-of-excellence/coe-iot-embedded-systems1.html" rel="alternate">IoT  Embedded Systems</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/index.php/kongunadu-centre-of-excellence/pcb-design-and-product-development-centre" rel="alternate noopener noreferrer">Click here to view more</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div id="bottom3" className="">

                            <div className=" menu-footer2 ">
                                <h3 className="modtitle">
                                    <span className="title">
                                        <span className="title-color"></span>
                                        <span className="title-normal">Links</span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-our-team">
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-library-resource/konguandu-library-profile.html" rel="alternate">Library</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-beyond-academic/kongunadu-cells/kongunadu-tamil-mandram.html" rel="alternate">Clubs  Cells</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-professional-bodies/iste-chapter.html" rel="alternate">Professional Bodies</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/alumni-association.html" rel="alternate">Alumni Association</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div id="bottom4" className="">

                            <div className=" menu-footer3 ">
                                <h3 className="modtitle">
                                    <span className="title">
                                        <span className="title-color"></span>
                                        <span className="title-normal">Information</span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-our-team">
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-research/mou-research.html" rel="alternate">MoUs</a></li>
                                        <li className="item"><a href="https://mail.google.com/a/kongunadu.ac.in" rel="alternate noopener noreferrer">Web Mail</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-admission-ql/kongunadu-engineering-courses-offered.html" s rel="alternate">Courses Offered</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-contact.html" rel="alternate">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div id="bottom5" className="">

                            <div className=" menu-footer1 ">
                                <h3 className="modtitle" >
                                    <span className="title">
                                        <span className="title-color"> Cells      </span>
                                        <span className="title-normal"></span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-our-team">
                                        <li className="item"><a href="http://www.kongunadu.ac.in/component/k2/item/139.html?Itemid=2075" rel="alternate">IQAC</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-beyond-academic/kongunad-edc.html" rel="alternate">EDC</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-beyond-academic/kongunadu-wdc.html" rel="alternate">WDC</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-beyond-academic/kongunadu-iip-cell2.html" rel="alternate">IIPC</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div id="bottom6" className="">

                            <div className=" menu-footer ">
                                <h3 className="modtitle">
                                    <span className="title">
                                        <span className="title-color"></span>
                                        <span className="title-normal">Placement</span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-our-team">
                                        <li><a href="http://www.kongunadu.ac.in/index.php/kongunadu-placements/kongunadu-placement-statistics/placement-statistics-2019-2020" rel="alternate noreferrer">2019-2020</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/index.php/kongunadu-placements/kongunadu-placement-statistics/placement-statistics-2018-2019" rel="alternate noopener noreferrer">2018-2019</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/files/PDF/placement/2017-18.pdf" rel="alternate noopener noreferrer">2017-2018</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/files/PDF/placement/2016-17.pdf" rel="alternate noopener noreferrer">2016-2017</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div id="yt_copyright" className="col-sm-12 mx-auto">
                            <span className="copyright">
                                Copyright © 2021 <a className="textDecoration" href="https://github.com/Rohinth248/">Roginth_B. </a>  All Rights Reserved.</span>
                            <span className="designby copyright_middle">
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );

}
function ResponsiveFooter() {
    return (
        <div className="bg_footer ">
            <div className="resposive">
                <div className="container py-2">
                    <div className="">
                        <div id="bottom2" className="">

                            <div className=" menu-footer ">
                                <h3 className="modtitle">
                                    <span className="title">
                                        <span className="title-color">Centre</span>
                                        <span className="title-normal"> of Excellence</span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-business">
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-centre-of-excellence/dell-emc-big-data-analytics-cse.html" rel="alternate">Dell EMC Big Data</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-centre-of-excellence/cisco-networking-academy-coe.html" rel="alternate">Cisco Networking</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-centre-of-excellence/coe-tvs-harita.html" rel="alternate">TVS Harita</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-centre-of-excellence/coe-iot-embedded-systems1.html" rel="alternate">IoT  Embedded Systems</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/index.php/kongunadu-centre-of-excellence/pcb-design-and-product-development-centre" rel="alternate noopener noreferrer">Click here to view more</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div id="bottom3" className="">

                            <div className=" menu-footer2 ">
                                <h3 className="modtitle">
                                    <span className="title">
                                        <span className="title-color"></span>
                                        <span className="title-normal">Links</span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-our-team">
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-library-resource/konguandu-library-profile.html" rel="alternate">Library</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-beyond-academic/kongunadu-cells/kongunadu-tamil-mandram.html" rel="alternate">Clubs  Cells</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-professional-bodies/iste-chapter.html" rel="alternate">Professional Bodies</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/alumni-association.html" rel="alternate">Alumni Association</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div id="bottom4" className="">

                            <div className=" menu-footer3 ">
                                <h3 className="modtitle">
                                    <span className="title">
                                        <span className="title-color"></span>
                                        <span className="title-normal">Information</span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-our-team">
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-research/mou-research.html" rel="alternate">MoUs</a></li>
                                        <li className="item"><a href="https://mail.google.com/a/kongunadu.ac.in" rel="alternate noopener noreferrer">Web Mail</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-admission-ql/kongunadu-engineering-courses-offered.html" s rel="alternate">Courses Offered</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-contact.html" rel="alternate">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div id="bottom5" className="">

                            <div className=" menu-footer1 ">
                                <h3 className="modtitle" >
                                    <span className="title">
                                        <span className="title-color"> Cells      </span>
                                        <span className="title-normal"></span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-our-team">
                                        <li className="item"><a href="http://www.kongunadu.ac.in/component/k2/item/139.html?Itemid=2075" rel="alternate">IQAC</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-beyond-academic/kongunad-edc.html" rel="alternate">EDC</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-beyond-academic/kongunadu-wdc.html" rel="alternate">WDC</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/kongunadu-beyond-academic/kongunadu-iip-cell2.html" rel="alternate">IIPC</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div id="bottom6" className="">

                            <div className=" menu-footer ">
                                <h3 className="modtitle">
                                    <span className="title">
                                        <span className="title-color"></span>
                                        <span className="title-normal">Placement</span>
                                    </span>
                                </h3>
                                <div className="modcontent1 clearfix">

                                    <ul className="list-our-team">
                                        <li><a href="http://www.kongunadu.ac.in/index.php/kongunadu-placements/kongunadu-placement-statistics/placement-statistics-2019-2020" rel="alternate noreferrer">2019-2020</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/index.php/kongunadu-placements/kongunadu-placement-statistics/placement-statistics-2018-2019" rel="alternate noopener noreferrer">2018-2019</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/files/PDF/placement/2017-18.pdf" rel="alternate noopener noreferrer">2017-2018</a></li>
                                        <li className="item"><a href="http://www.kongunadu.ac.in/files/PDF/placement/2016-17.pdf" rel="alternate noopener noreferrer">2016-2017</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div id="yt_copyright" className="col-sm-12 mx-auto">
                            <span className="copyright">
                                Copyright © 2021 <a className="textDecoration" href="https://github.com/Rohinth248/">Roginth_B. </a>  All Rights Reserved.</span>
                            <span className="designby copyright_middle">
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}
export default Header();//it go for App.js file 

//contant fuction 

//programe and...
function Peo() {
    return (

        <div>
            <div className="main-item">
                <div className="itemBody p-2">

                    <div className="itemFullText p-3">
                        <p><strong className="text-primary ">PROGRAM EDUCATIONAL OBJECTIVE (PEO's)</strong></p>
                        <ul>
                            <li >
                                <p><strong>PEO I: </strong>Graduates shall excel in the field of design, thermal, materials and manufacturing, as successful engineers or researchers or as entrepreneurs.</p>
                            </li>
                            <li >
                                <p><strong>PEO II: </strong>Graduates will analyze problems, design solutions and develop products as a team member in advanced industrial projects.</p>
                            </li>
                            <li >
                                <p><strong>PEO III: </strong>Graduates shall have professional ethics, team spirit, life-long learning, good oral and written communication skills and adopt corporate culture, core values and leadership skills.</p>
                            </li>
                        </ul>
                        <p><strong className="text-primary ">PROGRAM SPECIFICOUTCOMES (PSO's)</strong></p>
                        <ul>
                            <li ><strong>PSO1: Professional skills:</strong>Students shall understand, analyze, design and develop integrated equipment, thermal devices and composite components.</li>
                            <li ><strong>PSO2: Competency</strong><strong>:</strong>Students shall qualify at the State, National and International level competitive examination for employment, higher studies and research.</li>
                        </ul>
                        <p><strong><span className="text-primary ">PROGRAM OUTCOMES (POs)</span></strong></p>
                        <p>Engineering Graduates will be able to:</p>
                        <ul >
                            <li><strong>Engineering knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                            <li><strong>Problem analysis:</strong> Identify, formulate, review research literature, and analyze complex engineeriCng problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
                            <li><strong>Design/development of solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
                            <li><strong>Conduct investigations of complex problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
                            <li><strong>Modern tool usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>
                            <li><strong>The engineer and society:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
                            <li><strong>Environment and sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
                            <li><strong>Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
                            <li><strong>Individual and team work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
                            <li><strong>Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
                            <li><strong>Project management and finance:</strong> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
                            <li><strong>Life-long learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
                        </ul>
                        <p><strong><span className="text-primary " >COURSE OUTCOME</span></strong></p>
                        <ul>
                            <li><strong><a href="/images/PDF/CO/Mech/CO-R2013.pdf" target="_blank" rel="alternate noopener noreferrer">Course Outcome for Regulation 2013</a></strong></li>
                            <li><strong><a href="/images/PDF/CO/Mech/CO-R2017.pdf" target="_blank" rel="alternate noopener noreferrer">Course Outcome for Regulation 2017</a></strong></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

//Academic Environment
function AcademicEnvironment() {
    return (
        <div >
            <TopImage />
            <div className="p-3">
                <p>At Kongunadu, the way student learns is different from any school or college. The faculty members are regularly sent to conferences, seminars and training workshop to understand and implement the latest in the field.</p>
                <p><strong><span className="text-primary" >Pedagogical methods are:</span></strong></p>
                <ul className="list-style">
                    <li >Lectures</li>
                    <li >Laboratory Practicals</li>
                    <li >Projects</li>
                    <li >e-Learning</li>
                    <li >Problem Based Learning</li>
                    <li >Field Trips</li>
                    <li >Continuous Assessment</li>
                    <li >Examinations</li>
                    <li >Class Advisers</li>
                </ul>
                <p>Each class is allocated an adviser, who will be an academic member of staff from within the department. Students can discuss with their class advisers about the problems, either personal or academic, and advisers will offer advice and support. Class advisers also monitor students' performance, so that they can address any problems quickly.</p>
                <p><strong className="text-primary" >Counseling</strong></p>
                <p><span lang="EN-IN">The Department’s Counseling Service provides individual and confidential help to the students. Headed by a faculty, this Counseling Service helps students to overcome any personal problem that may affect their work or well-being. The counseling is entirely confidential and counselors are trained to find the best way to help out the students to come out their problem via collaborative and sensitive discussion</span>.</p>
                <p><strong className="text-primary" >E-learning</strong></p>
                <p><span lang="EN-IN">The College has a WiFi learning environment. This facility help the students to get online material developed by the lecturers, download papers and take online tests, or access relevant audio and video material. </span></p>
                <p className="text-primary" >Labs and Science Facilities</p>
                <p><span lang="EN-IN">The college has well equipped world class laboratories and science facilities to develop the students' practical knowledge. </span></p>
                <p className="text-primary" >Facts and Figures</p>
                <p><span lang="EN-IN">Mechanical Department continues to adapt the new technologies for the needs of students by investing in world-class facilities for teaching, learning and research to build on its historical prestige</span>.</p>
            </div>
        </div>
    );
}
//Programmes and Syllabus
function ProgrammesandSyllabus() {
    return (
        <div>
            <TopImage />
            <div className="p-sm-5">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>

                                <th scope="col">S.No </th>
                                <th scope="col">Program Name</th>
                                <th scope="col">Intake</th>
                                <th scope="col"> Syllabus</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>

                                <td className="my-2">B.E - Mechanical Engineering (Full Time) - R2017</td>
                                <td className="my-2">180</td>
                                <td>
                                    <a className="btn btn-small btn-success" title="Mechanical Engineering Syllabus" href="http://www.kongunadu.ac.in/images/PDF/R-2017-Syllabus-Mech.pdf" target="_blank" rel="alternate noopener noreferrer">Download</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
//Facilities
function Facilities() {
    return (
        <div>
            <TopImage />
            <div className="p-3">
                <div className="itemBody">
                    <p ><strong className="text-primary">Laboratories</strong></p>
                    <ul className="list-style">
                        <li >Manufacturing Technology Lab-I <strong><a href="http://www.kongunadu.ac.in/kongunadu-photo-gallery/konguandu-annual-day-photos/mechanical-engineering.html" rel="alternate"> View</a></strong></li>
                        <li >Manufacturing Technology Lab-II</li>
                        <li >Dynamics Lab</li>
                        <li >Metrology  Measurements Lab</li>
                        <li >Thermal Lab-I</li>
                        <li >Thermal Lab-II</li>
                        <li >CAD Lab-I</li>
                        <li >CAD Lab-II</li>
                        <li >Engineering Practice Lab</li>
                        <li >Mechatronics Lab</li>
                        <li >CAM Lab</li>
                        <li >Metallurgy Lab</li>
                    </ul>
                    <p ><strong className="text-primary">Internet Facility</strong></p>
                    <ul className="list-style">
                        <li >Uninterrupted internet with 100 Mbps Broad Band connectivity is available in the College.</li>
                        <li >24 Hours Wi-Fi Connectivity.</li>
                        <li >Students are given full access to the Internet at our college premises.</li>
                    </ul>
                </div>
            </div>

        </div>

    );
}
//Funds Received from Outside Agencies
function FundsReceivedfromOutsideAgencies() {
    return (
        <div>
            <TopImage />
            <div className="p-sm-3 table-responsive ">


                <table className="table table-striped table-hover  table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Funding Agency Name</th>
                            <th scope="col">Event/Project Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Council of Scientific & Industrial Research, New Delhi.</td>
                            <td>Emerging Trends in Welding Technology</td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Council of Scientific & Industrial Research, New Delhi.</td>
                            <td>Recent Trends and Advancement of  Nano medicine applications in Women’s Health & safety</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td >Science and Engineering Research Board</td>
                            <td>Bioenergy Routes And Conversion Technology And Its Impacts On Environment</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td > Council of Scientific & Industrial Research, New Delhi.</td>
                            <td>Recycling of Agro-Industrial Wastes through Cleaner Technology</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td >Science and Engineering Research Board</td>
                            <td>Workshop on Energy Generation From Municipal Solid Waste by Innovative Technologies</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td >Science and Engineering Research Board</td>
                            <td>Bio-Energy Routes And Conversion Technologies And Its Impacts On Environment</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td > SERB</td>
                            <td>E-Waste Management Approaches and its Impacts on Environment and Health.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
//Placement Details
function PlacementDetails() {
    return (
        <div>
            <TopImage />
            <div>
                <div className="mx-auto middle p-3">
                    <h5 className="text-primary ">
                        Academic Year 2020 - 2021
                    </h5>
                    <h6 className="text-primary ">
                        Our students are placed in the following companies
                    </h6>
                </div>

                <div className="px-sm-5 table-responsive">
                    <table className="table table-striped table-hover table-bordered  ">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col"> Industry Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td> CRI Pumps</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Aquasub Engineering Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Texmo - Taro Pumps</td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Gestamp Automotive Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td> 	Sutherland Global Services Pvt. Ltd</td>

                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td> 	Dabeu Auto components</td>

                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td> Mitsuba Sical India Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Sakthi Auto components</td>

                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Sri Balaji Alloys</td>

                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td> Perfect Engineers Pvt.ltd</td>

                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>Aravind enterprises</td>

                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td>P.S.T Engineering Construction</td>

                            </tr>

                            <tr>
                                <th scope="row">13</th>
                                <td colspan="2">Rambal India</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="mx-auto middle p-3">
                    <h5 className="text-primary ">Academic Year 2019 - 2020
                    </h5>
                    <h6 className="text-primary ">
                        Our students are placed in the following companies
                    </h6>
                </div>
                <div className="px-sm-5 table-responsive">
                    <table className="table table-striped table-hover  table-bordered  ">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col"> Industry Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td> Aqua Flow Precision Components</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Aquasub Engineering</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>

                                    Aravind Enterprises</td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>

                                    Arthur Grand Technologies Private Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td> Daebu Automotive Seat (I) Pvt. Ltd. Automotive Seat (I) Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td> 	Gestamp Automotive Chennai Private Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td> Jaro Education</td>

                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Just Dial Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Mitsuba Sical Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td> PRS Tyres</td>

                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>Rikun Manufacturing (I) Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td>SL LUMAX India (P) Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">13</th>
                                <td>
                                    Spark Engineers</td>

                            </tr>
                            <tr>
                                <th scope="row">14</th>
                                <td>Sri Balaji Alloys</td>

                            </tr>
                            <tr>
                                <th scope="row">15</th>
                                <td>Texmo Industries - Taro Pumps</td>

                            </tr>

                            <tr>
                                <th scope="row">16</th>
                                <td colspan="2">Harita Techserv Limited</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="mx-auto middle p-3">
                    <h5 className="text-primary ">Academic Year 2018 - 2019
                    </h5>
                    <h6 className="text-primary ">
                        Our students are placed in the following companies
                    </h6>
                </div>
                <div className="px-sm-5 table-responsive">
                    <table className="table table-striped table-hover  table-bordered  ">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col"> Industry Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Aqua Flow Precision Components</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Aquasub Engineering</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td> Byju’s</td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>

                                    Crisal Solutions</td>

                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td> Daebu Automotive Seat (I) Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Emerald Resilient Tyre Manufacturers</td>

                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>
                                    Fluidline Systems & Controls Pvt. Ltd</td>

                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Harita Techserv Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>J Management and Engineering Consultant</td>

                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Jaro Education</td>

                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>Justdial</td>

                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td>Karthik Enterprises</td>

                            </tr>
                            <tr>
                                <th scope="row">13</th>
                                <td>Kumar Industries</td>

                            </tr>
                            <tr>
                                <th scope="row">14</th>
                                <td>New Tech Auto Components (P) Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">15</th>
                                <td>Paragon Digital Services</td>

                            </tr>
                            <tr>
                                <th scope="row">16</th>
                                <td>Spark Engineers</td>

                            </tr>

                            <tr>
                                <th scope="row">17</th>
                                <td>Sri Balaji Alloys</td>

                            </tr>

                            <tr>
                                <th scope="row">18</th>
                                <td>Syrma Technology</td>

                            </tr>

                            <tr>
                                <th scope="row">19</th>
                                <td>Texmo Industries</td>

                            </tr>

                            <tr>
                                <th scope="row">20</th>
                                <td>TVS Sundarm Fasteners Limited</td>

                            </tr>

                            <tr>
                                <th scope="row">21</th>
                                <td>Uni Cast Alloys</td>

                            </tr>


                            <tr>
                                <th scope="row">22</th>
                                <td colspan="2">Visteon</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="mx-auto middle p-3">
                    <h5 className="text-primary ">Academic Year 2017 - 2018
                    </h5>
                    <h6 className="text-primary ">
                        Our students are placed in the following companies
                    </h6>
                </div>
                <div className="px-sm-5 table-responsive">
                    <table className="table table-striped table-hover  table-bordered  ">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col"> Industry Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Aquasub Engineering</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td> 	A R Toolings</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>  	Caparo Engineering India Pvt. Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Daebu Automotive Seat (I) Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td> Eastman Precic Tooling</td>

                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Harita Techserv Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Infosys</td>

                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Kumar Industries</td>

                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Myoung Shin India Automotive Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Shardlow India Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>Spark Engineers</td>

                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td>Sri Lavanya Springs Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">13</th>
                                <td>

                                    Super Auto Forge</td>

                            </tr>
                            <tr>
                                <th scope="row">14</th>
                                <td>Supreme Industries</td>

                            </tr>
                            <tr>
                                <th scope="row">15</th>
                                <td>Texmo Industries</td>

                            </tr>


                            <tr>
                                <th scope="row">16</th>
                                <td colspan="2">Tractors and Farm Equipment Limited</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="mx-auto middle p-3">
                    <h5 className="text-primary ">Academic Year 2016 - 2017
                    </h5>
                    <h6 className="text-primary ">
                        Our students are placed in the following companies
                    </h6>
                </div>
                <div className="px-sm-5 table-responsive">
                    <table className="table table-striped table-hover  table-bordered  ">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col"> Industry Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Aadhi Auto Components</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>A.B.S Engineering Systems</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td> Ananth Wiretech Tooling</td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Aqua Pure Plus Pvt. Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td> Aquasub Engineering Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>CBE Core Solutions</td>

                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td> Harita Techserv Limited

                                </td>

                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>

                                    Hosur CNC Applications
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Innova CNC Applications</td>

                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>K.J.L. Engineering Works</td>

                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>Mangla Smart Energy Solutions Private Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td>METECH</td>

                            </tr>
                            <tr>
                                <th scope="row">13</th>
                                <td>NTMT Metrology</td>

                            </tr>
                            <tr>
                                <th scope="row">14</th>
                                <td>NTC Logistics Pvt. Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">15</th>
                                <td>R S Engineering Industries</td>

                            </tr>
                            <tr>
                                <th scope="row">16</th>
                                <td>Ragul Industries</td>

                            </tr>

                            <tr>
                                <th scope="row">17</th>
                                <td>Roots</td>

                            </tr>

                            <tr>
                                <th scope="row">18</th>
                                <td>Royal Enfield</td>

                            </tr>

                            <tr>
                                <th scope="row">19</th>
                                <td>S S Precision Products</td>

                            </tr>

                            <tr>
                                <th scope="row">20</th>
                                <td>Shifa Enterprises</td>

                            </tr>

                            <tr>
                                <th scope="row">21</th>
                                <td>Spark Engineers</td>

                            </tr>
                            <tr>
                                <th scope="row">22</th>
                                <td>Sri Lavanya Springs Pvt. Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">23</th>
                                <td>STS Manufacturing Private Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">24</th>
                                <td>Texmo</td>

                            </tr>
                            <tr>
                                <th scope="row">25</th>
                                <td>TVS Sundram Fastners Limited</td>

                            </tr>
                            <tr>
                                <th scope="row">26</th>
                                <td>Velmurugan Heavy Engg. Inds. (P) Ltd.</td>

                            </tr>
                            <tr>
                                <th scope="row">27</th>
                                <td>Vetri Vigaas Auto Tech</td>

                            </tr>
                            <tr>
                                <th scope="row">28</th>
                                <td>Vishaal Industries Pvt. Ltd.</td>

                            </tr>


                            <tr>
                                <th scope="row">29</th>
                                <td colspan="2">Zealous</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <hr />
        </div>
    );
}

//Faculty Members..
function FacultyMembers() {
    return (
        <div>
            <TopImage />
            <div className="p-sm-3 table-responsive">
                <table class="table table table-striped table-hover  table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name of the Faculty</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Nature of Association (Regular/ Contractual/
                                Adjunct)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Dr.D.Jagadeesh</td>
                            <td>Associate Professor & Head</td>
                            <td>Ph.D</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Dr.R. Venkatesh</td>
                            <td>Professor</td>
                            <td>Ph.D</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Dr.K.Periasamy</td>
                            <td>Professor</td>
                            <td>Ph.D</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Dr.G.Saravanan </td>
                            <td> Associate Professor</td>
                            <td>Ph.D</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Mr.R.Arivazhagan </td>
                            <td>Associate  Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Dr.S.Gobinath</td>
                            <td>Professor</td>
                            <td>Ph.D</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Mr. S.K.Karthikeyan   </td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Dr.V.Gopinath</td>
                            <td>Associate Professor</td>
                            <td>Ph.D</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Mr. K. Balasubramani</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Dr. A. Nithya</td>
                            <td>Associate Professor</td>
                            <td>Ph.D</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td>Mrs. V. Selvam</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>Mr.N.Mohan</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">13</th>
                            <td>Mr. C. Dinesh Babu</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">14</th>
                            <td>Mr.R.Karthik</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">15</th>
                            <td>Mr.Ra.Aravind</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">16</th>
                            <td>Mr.N.Ravikumar</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">17</th>
                            <td>Mr.V.Muthukumar</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">18</th>
                            <td> 	Mr. E. Sivaprakash</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">19</th>
                            <td>Mr.P.Raja</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">20</th>
                            <td>Mr.S.Kumaravel</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">21</th>
                            <td>Mr.G.Selvakumar</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">22</th>
                            <td>Mr.N.Sivasankar</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">23</th>
                            <td>Mr.S.Chandrakumar</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">24</th>
                            <td>Mr.R.Periyasamy</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">25</th>
                            <td>Mr.S.Mohankumar</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">26</th>
                            <td>Mr.A.Natarajan</td>
                            <td>Associate Professor</td>
                            <td>M.E </td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">27</th>
                            <td>Mr.K.Gopalakrishnan</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">28</th>
                            <td>Mr.M.DineshKumar</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">29</th>
                            <td>Mr.J.Mahendran</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">30</th>
                            <td> Mr.R.Prakash</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">31</th>
                            <td> 	Mr.M.Praveen</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">32</th>
                            <td>Mr.M.Vivekanandan</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Adjunct Faculty</td>
                        </tr>
                        <tr>
                            <th scope="row">33</th>
                            <td>Mr.M.Ravikumar</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">34</th>
                            <td>Mr.N.Kawin</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">35</th>
                            <td>Mr.S.Ravi</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">36</th>
                            <td>Mr. P. Dhanasekaran</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">37</th>
                            <td>Mr. S. Prathap</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">38</th>
                            <td>Mr. M. Sathishkumar</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>

                        <tr>
                            <th scope="row">39</th>
                            <td>Mr.V.Vairamani</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">40</th>
                            <td>Mr.A.Mathankumar</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">41</th>
                            <td>Mr.R.Thirunavukkarasu</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">42</th>
                            <td>Mr.L.Devakumar</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">43</th>
                            <td>Mr.N.Vinoth kumar</td>
                            <td>Associate Professor</td>
                            <td>M.E (Ph.D)</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">44</th>
                            <td>Mr.J.Meganathan</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">45</th>
                            <td> 	Dr.C.Kalaiselvan</td>
                            <td>Associate Professor</td>
                            <td>Ph.D</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">46</th>
                            <td>Mrs.R.Shanmathy</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">47</th>
                            <td>Mr.V.Madhanraj</td>
                            <td>Associate Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">48</th>
                            <td >Mr.K.Ganeshbabu</td>
                            <td>Assistant Professor</td>
                            <td>M.E</td>
                            <td>Regular</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="middle">
                <h3 className="text-primary">
                    Non Teaching Faculty
                </h3>
            </div>
            <div className="p-sm-3 table-responsive">
                <table class="table table table-striped table-hover  table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name of the Non-Teaching Faculty</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Nature of Association (Regular/ Contractual/
                                Adjunct)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mr.P.Mathankumar</td>
                            <td></td>
                            <td>DME</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>

                                Mr.P.Ramajayam</td>
                            <td>Lab Technician</td>
                            <td>ITI</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mr.S.Rajkumar</td>
                            <td>Lab Technician</td>
                            <td>ITI</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Mr.K.Durairaj </td>
                            <td> Lab Technician</td>
                            <td>DME</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Mr. V. Arjun  </td>
                            <td>Lab Technician</td>
                            <td>ITI</td>
                            <td>Regular</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td> Mr.P.Ramesh</td>
                            <td>Lab Technician</td>
                            <td>DME</td>
                            <td>Regular</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
        </div>

    );

}
//student list
const StudentList = () => {
    return (
        <div className="p-3">
            <div className="middle">
                <h3 className="text-danger">
                    Students List
                </h3>
                <div className="p-3">
                    <List name={"First Year"} href={"http://www.kongunadu.ac.in/images/PDF/Student-name-list/MECH/FIRST_YEAR_Student_List.pdf"} />
                    <List name={" Second Year "} href={"http://www.kongunadu.ac.in/images/PDF/Student-name-list/MECH/SECOND_YEAR_Student_List.pdf"} />
                    <List name={"Third Year"} href={"http://www.kongunadu.ac.in/images/PDF/Student-name-list/MECH/THIRD_YEAR__Student_List.pdf"} />
                    <List name={"Final Year"} href={"http://www.kongunadu.ac.in/images/PDF/Student-name-list/MECH/FINAL_YEAR__Student_List.pdf"} />

                </div>
            </div>
        </div>
    );
}
//studuent list  list
const List = ( props ) => {
    return (
        <div className="flex1">
            <img src="https://img.icons8.com/fluency/48/000000/pdf-2.png" />
            <a href={props.href} target="_blank">{props.name} </a>
        </div>

    )
}
//Student Achievements..
const StudentAchievements = () => {
    return (
        <div>
            <TopImage />
            <div className="p-3">
                <AcademicYear201920 />
                <AcademicYear201819 />
                <AcademicYear201718 />
                <AcademicYear201617 />
                <AcademicYear201516 />
                <AcademicYear201415 />
                <AcademicYear201314 />
                <AcademicYear201213 />
            </div >
        </div >

    )
}
//Academic Year 2019 - 2020
const AcademicYear201920 = () => {
    return (
        <div className="table-responsive">
            <h3 className="middle-text text-primary" >Academic Year 2019 - 2020</h3>
            <table class="table table-bordered table-sm table-striped" >
                <thead>
                    <tr >
                        <th >
                            S.NO
                        </th>
                        <th >
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td ><span >1.</span></td>
                        <td ><span >S.Nithishkumar, M.Naveenkumar,M.Praveen Kumar and P.Raja was awarded Rs 50,000 for Securing Second Prize for the title “ ENGINE CARE EQUIPMENT” in IDEA SPARK 2019-20 organized by IIT Madras.</span></td>
                    </tr>
                    <tr >
                        <td ><span >2.</span></td>
                        <td ><span >S.Nithishkumar, M.NaveenKumar,V.Sathish Kumar was awarded Rs1,00,000 for Securing First Prize in EDII-Tamil Nadu Student Innovators (TNSI-2019).</span></td>
                    </tr>
                    <tr >
                        <td ><span >3.</span></td>
                        <td >
                            <p><span >S.Nithishkumar, M.NaveenKumar,V.Sathish Kumar was awarded Rs9,000 for securing Third and Fourth prize in JALLIKATTU 2.0-PH Meter organized by MABIF Agricultural College, Madurai.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >4.</span></td>
                        <td ><span >P.Prasanth of III Year won First Prize in the event Digital Marketing organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >5.</span></td>
                        <td ><span >S,Gokul of III Year won First Prize in the event Design of parts and Assemblyorganized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >6.</span></td>
                        <td ><span >S.Agilan of III Year won First Prize in the event Mechanical Computer Aided Design organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >7.</span></td>
                        <td ><span >R.Harikrishnan of III Year won First Prize in the event Manufacturing Process organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >8.</span></td>
                        <td ><span >D.Manikadan of II Year won First Prize in the event Mechatronics organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >9.</span></td>
                        <td ><span >M.Madhavan of II Year won First Prize in the event Mechatronics organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >10.</span></td>
                        <td ><span >E.Kaviarasan of II Year won First Prize in the event Mechatronics organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >11.</span></td>
                        <td ><span >C.Goudeeswaran of II year won First Prize in the event Circuit Design organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >12.</span></td>
                        <td ><span >A.S Bharath of III year won First Prize in the event Manufacturing Process Planning organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >13.</span></td>
                        <td ><span >N.Deepak of III Year won First Prize in the event Design of Parts and Assembly organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >14.</span></td>
                        <td ><span >R.Harikiruthik of III Year won First Prize in the event Mechanical Computer Aided Design organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >15.</span></td>
                        <td ><span >C. Priyadharasan of II Year won First Prize in the event Digital Marketing organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >16.</span></td>
                        <td ><span >M.Naveen Kumar of III year won First Prize in the event Digital Marketing organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >17.</span></td>
                        <td ><span >A.Sandhiya of III Year won First Prize in the event Refrigeration and Air Conditioning organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >18.</span></td>
                        <td ><span >A.Sandhiya of III Year won First Prize in the event Plastic Mold Engineering organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >19.</span></td>
                        <td ><span >S.V.Nisshanth of III Year won First Prize in the event Plastic Mold Engineering organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >20.</span></td>
                        <td ><span >S.V.Nisshanth of III Year won First Prize in the event Six Sigma organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >21.</span></td>
                        <td ><span >P.Prasanth of III Year won First Prizein the event Refrigeration and Air Conditioning organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >22.</span></td>
                        <td ><span >M.Parthiban of III Year won First Prize in the event Mobile Robotics organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >23.</span></td>
                        <td ><span >M.Parthiban of III Year won First Prize in the event Oil Seal organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >24.</span></td>
                        <td ><span >V.Palraj of III Year won First Prize in the event Light Weight Mobility Vehicle organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >25.</span></td>
                        <td ><span >V.Palraj of III Year won First Prize in the event Manufacturing/ Tech Challenge organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >26.</span></td>
                        <td ><span >V.Palraj of III Year won First Prize in the event Circuit Design organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >27.</span></td>
                        <td ><span >S.Naveen of III Year won First Prize in the event Circuit Design organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >28.</span></td>
                        <td ><span >S.Naveen of III Year won First Prize in the event Light Weight Mobility Vehicle organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >29.</span></td>
                        <td ><span >T.Pardeeban of III Year won First Prize in the event Manufacturing/ Tech Challenge organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >30.</span></td>
                        <td ><span >T.Pardeeban of III Year won First Prize in the event Electronics organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >31.</span></td>
                        <td ><span >K.Pravin Kumar of III Year won First Prize in the event Oil Seal Design organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >32.</span></td>
                        <td ><span >K.Pravin Kumar of III Year won First Prize in the event Mobile Robotics organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >33.</span></td>
                        <td ><span >S.Pravin of III Year won First Prize in the event Mobile Robotics organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >34.</span></td>
                        <td ><span >S.Pravin of III Year won First Prize in the event Oil Seal Design organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >35.</span></td>
                        <td ><span >D.Poongkarthik of III Year won First Prize in the event Six Sigma organized by TIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >36.</span></td>
                        <td ><span >R.ShakthiMaheswaran of II Year won First Prize in the event Prototype Modelling organized byTIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >37.</span></td>
                        <td ><span >K.Mahendran of IV Year won First Prize in the event Sheet metal organized byTIER-II, SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >38.</span></td>
                        <td ><span >K.Mahendran of IV Year won First Prize in the event Work Holding organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >39.</span></td>
                        <td ><span >J.Venkat of IV Year won First Prize in the event Computer Aided Manufacturing organized byTIER-II,SASTRA University on 07.03.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >40.</span></td>
                        <td ><span >K.Kirubhakaranof III year won Second Prize in the event what a slide organized bySt.Joseph’s College of Engineering  Technology, Chennai on 26.02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >41.</span></td>
                        <td ><span >K.Kirubhakaranof III year won First Prize in the event Find My Solution organized byKarpagam Academy of Higher Education, Coimbatore from 17  18 02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >42.</span></td>
                        <td ><span >K.Kirubhakaranof III year won Second Prize in the event Connection organized byKarpagam Academy of Higher Education, Coimbatore from 17  18 02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >43.</span></td>
                        <td ><span >G.Kishoreof III year won Second Prize in the event Connection organized byKarpagam Academy of Higher Education, Coimbatore from 17  18 02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >44.</span></td>
                        <td ><span >K.Kaviarasan II Year of won Second Prize in the even tConnectionorganized by Indira Ganesan College of Engineering, Trichy on 08.02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >45.</span></td>
                        <td ><span >J.VenkatK.Nagendran IV Year of won First Prize in the event Computer Aided Manufacturingorganized bySastra University, Thanjavur on 07.02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >46.</span></td>
                        <td ><span >S.Ramprakashof III year won Second Prize in the event Technical Paper presentation at Sastra University Thanjavur on 07.02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >47.</span></td>
                        <td ><span >S.Ramprakashof III year won First Prize in the event Solar Circuit Design at Sastra University, Thanjavur on 07.02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >48.</span></td>
                        <td ><span >M.Sathishkumar and M.Saranof III year won Second Prize in the event Quiz organized by Erode Sengunthar Engineering College, Erode on 06.02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >49.</span></td>
                        <td ><span >P.Mythiliof III year won First Prize in the event paper presentation in Technical Symposium MECHRONINS’20 organized by Knowledge Institute of Technology, Salem on 04.02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >50.</span></td>
                        <td ><span >K.Pandeeswaran and P.Manobharathi of II Year won Second Prize in the event paper presentation in Technical Symposium MECHRONINS’20 organized byMuthayammal Engineering College, Rasipuram on 03.02.2020</span></td>
                    </tr>
                    <tr >
                        <td ><span >51.</span></td>
                        <td ><span >P.V.Sathish Kumar, of IV year won Second Prize in the event paper Presentation in National Level Technical Symposium ‘MECHXTROM 19’ at AVS College of Technology on 14.08.2019</span></td>
                    </tr>
                    <tr >
                        <td ><span >52.</span></td>
                        <td ><span >R.Sivacharan, of IV year won Second Prize in the event paper Presentation in National Level Technical Symposium ‘MECHXTROM 19’ at AVS College of Technology on 14.08.2019</span></td>
                    </tr>
                    <tr >
                        <td ><span >53.</span></td>
                        <td ><span >S.Karthik, of IV year won Second Prize in the event paper Presentation in National Level Technical Symposium ‘MECHXTROM 19’ at AVS College of Technology on 14.08.2019</span></td>
                    </tr>
                    <tr >
                        <td ><span >54.</span></td>
                        <td ><span >S.Manivel of IV year won Second Prize in the event paper Presentation in National Level Technical Symposium ‘MECHXTROM 19’ at AVS College of Technology on 14.08.2019</span></td>
                    </tr>
                    <tr >
                        <td ><span >55.</span></td>
                        <td ><span >V.Sathish Kumar of IV year won Second Prize in the eventWater Rocketry in National Level Technical Symposium ‘MECHXTROM 19’ at AVS College of Technology on 14.08.2019</span></td>
                    </tr>
                    <tr >
                        <td ><span >56.</span></td>
                        <td ><span >A.Senthamilselvan of IV year won Third Prize in the eventTechnical Quiz in National Level Technical Symposium ‘MECHXTROM 19’ at AVS College of Technology on 14.08.2019</span></td>
                    </tr>
                    <tr >
                        <td ><span >57.</span></td>
                        <td ><span >S.Nithish Kumar of IV year won First Prize in the event Paper Presentation in National Level Technical Symposium ‘MECHNOVA 19’ at Mahendra Engineering College on 30.08.2019</span></td>
                    </tr>
                    <tr >
                        <td ><span >58.</span></td>
                        <td ><span >M.Dhenadhayalan of IV year won Second Prize in the eventPaper Presentation in National Level Technical Symposium ‘ICE TECHFEST 2019’ at Imayam College of Engineering on 30.08.2019</span></td>
                    </tr>
                    <tr >
                        <td ><span >59.</span></td>
                        <td >
                            <p><span >Nithish Kumar S of Won First Prize in the Event of Paper Presentation in national level technical symposium MECHNOVA ‘19 organized by Mahendra Engineering College, Namakkal.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>60.</span></p>
                        </td>
                        <td >
                            <p><span >Dhenadhayalan M Won Second Prize in the Event of Paper Presentation in national level technical symposium (ICE TECHFEST – 19) organized by Imayam College of Engineering, Trichy on 30.08.19.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>61.</span></p>
                        </td>
                        <td >
                            <p><span >Sathishkumar V Won Second Prize in the Event of National level technical symposium “MECXTROM -19) Technical quiz organized by AVS College of Technology, Salem on 14.08.19.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>62.</span></p>
                        </td>
                        <td >
                            <p><span >Senthamil selvan. A Won Second Prize in the Event of National level technical symposium “MECXTROM -19) Technical quiz organized by AVS College of Technology, Salem on 14.08.19.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>63.</span></p>
                        </td>
                        <td >
                            <p><span >Karhik S Won Second Prize in the Event of National level technical symposium “MECXTROM -19) Technical quiz organized by AVS College of Technology, Salem on 14.08.19.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>64.</span></p>
                        </td>
                        <td >
                            <p><span >Manivel S Won Second Prize in the Event of National level technical symposium “MECXTROM -19) Technical quiz organized by AVS College of Technology, Salem on 14.08.19.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>65.</span></p>
                        </td>
                        <td >
                            <p><span >Sathishkumar P V Won Third Prize in the Event of National level technical symposium “MECXTROM -19) Technical quiz organized by AVS College of Technology, Salem on 14.08.19.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>66.</span></p>
                        </td>
                        <td >
                            <p><span >Sivacharan R Won Third Prize in the Event of National level technical symposium “MECXTROM -19) Technical quiz organized by AVS College of Technology, Salem on 14.08.19.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >67.</span></td>
                        <td >
                            <p><span >R.Sivacharan, won II prize in paper Presentation in National Level Technical Symposium ‘MECHXTROM 19’ at AVS College of Technology on 14.08.2019</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >68.</span></td>
                        <td ><span >R.Sivacharan, won II prize in paper Presentation in National Level Technical Symposium ‘MECHXTROM 19’ at AVS College of Technology on 14.08.2019</span></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
//Academic Year 2018 - 2019
const AcademicYear201819 = () => {
    return (
        <div className="table-responsive">
            <h3 className="middle-text text-primary" >Academic Year 2018 - 2019</h3>
            <table class="table table-bordered table-sm table-striped" >
                <thead>
                    <tr >
                        <th >
                            S.NO
                        </th>
                        <th >
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody><tr >
                    <td >
                        <p><span>1.</span></p>
                    </td>
                    <td>
                        <p><span >Danushkumar.B Won First Prize in the Event of Additive Manufacturing organized by SAE India Tier III, Bannari Amman Institute of Technology, Erode on 23.3.2019 and 24.3.2019.</span></p>
                    </td>
                </tr>
                    <tr >
                        <td >
                            <p><span>2.</span></p>
                        </td>
                        <td>
                            <p><span >Jegan T Won Second Prize in the Event of National level Technical Symposium Texperia ‘ 19 Paper Presentation organized by SNS College of Technology, Coimbatore on 27.02.2019 and 28.02.2019</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>3.</span></p>
                        </td>
                        <td>
                            <p><span >Harish S Won Second Prize in the Event of National level Technical Symposium Texperia ‘ 19 Paper Presentation organized by SNS College of Technology, Coimbatore on 27.02.2019 and 28.02.2019</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>4.</span></p>
                        </td>
                        <td>
                            <p><span >Praveen kumar A Won Second Prize in the Event of CAD Modeling organized by Care Group of Institutions, Thiruchirapalli on 13.02.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>5.</span></p>
                        </td>
                        <td>
                            <p><span >Elamururgan T Won Second Prize in the Event of Technical Symposium Spandana Paper Presentation organized by Narasu’S Sarathy Institute of Technology on 02.02.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>6</span></p>
                        </td>
                        <td>
                            <p><span >Dheenadayalan Won Second Prize in the Event of Technical Symposium Spandana Paper Presentation organized by Narasu’S Sarathy Institute of Technology on 02.02.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>7.</span></p>
                        </td>
                        <td>
                            <p><span >Yogesh Vijay. P Won Second Prize in the Event of Python Programming organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>8.</span></p>
                        </td>
                        <td>
                            <p><span >Rajesh. S Won First Prize in the Event of CNC Milling organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>9.</span></p>
                        </td>
                        <td>
                            <p><span >Poovarasan. M Won First Prize in the Event of CNC Milling organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>10.</span></p>
                        </td>
                        <td>
                            <p><span >Mohammed Abuthagir.I Won First Prize in the Event of Additive Manufacturing organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>11.</span></p>
                        </td>
                        <td>
                            <p><span >Prasath.P Won Second Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>12.</span></p>
                        </td>
                        <td>
                            <p><span >Palraj.V Won Second Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>13.</span></p>
                        </td>
                        <td>
                            <p><span >Poongkarthik. D Won First Prize in the Event of Solar Circuit Design organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>14.</span></p>
                        </td>
                        <td>
                            <p><span >Nisshanth.S.V Won First Prize in the Event of Solar Circuit Design organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>15.</span></p>
                        </td>
                        <td>
                            <p><span >Vishnusudharsan. M Won First Prize in the Event of Prototype Modeling Challenge organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>16.</span></p>
                        </td>
                        <td>
                            <p><span >Vigneshwaran. T Won First Prize in the Event of Prototype Modeling Challenge organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>17.</span></p>
                        </td>
                        <td>
                            <p><span >Sarankumar. R Won First Prize in the Event of Prototype Modeling Challenge organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>18.</span></p>
                        </td>
                        <td>
                            <p><span >Sakthimaheswaran. R Won First Prize in the Event of Prototype Modeling Challenge organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>19.</span></p>
                        </td>
                        <td>
                            <p><span >Gokul.S Won Second Prize in the Event of Design for Assembly organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>20.</span></p>
                        </td>
                        <td>
                            <p><span >Mahindiran.K Won Second Prize in the Event of Design for Assembly organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>21.</span></p>
                        </td>
                        <td>
                            <p><span >Nithishkumar.S Won Second Prize in the Event of Modelingand Animation organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>22.</span></p>
                        </td>
                        <td>
                            <p><span >Raja.P Won Second Prize in the Event of Modelingand Animation organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>23.</span></p>
                        </td>
                        <td>
                            <p><span >Venkat.J Won First Prize in the Event of Computer Aided Manufacturing organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>24.</span></p>
                        </td>
                        <td>
                            <p><span >Nitheshkumar.R Won Second Prize in the Event of Welding organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>25.</span></p>
                        </td>
                        <td>
                            <p><span >Harishkumar.K.S Won Second Prize in the Event of Welding organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>26.</span></p>
                        </td>
                        <td>
                            <p><span >Rambhaskar.M Won Second Prize in the Event of Bridge Building organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>27.</span></p>
                        </td>
                        <td>
                            <p><span >Mohammed Abuthagir.I Won Second Prize in the Event of Bridge Building organized by SAE India Tier II, Vellammal College of Engineering and Technology, Madurai on 25.01.2019.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>28.</span></p>
                        </td>
                        <td>
                            <p><span >Nisshanth.V Won Second Prize in the Event of Mobile Robotics organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>29.</span></p>
                        </td>
                        <td>
                            <p><span >Pravin S Won Second Prize in the Event of Mobile Robotics organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>30.</span></p>
                        </td>
                        <td>
                            <p><span >Partiban.M Won First Prize in the Event of Mobile Robotics organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>31.</span></p>
                        </td>
                        <td>
                            <p><span >Partiban.M Won Second Prize in the Event of Solar Circuit Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>32.</span></p>
                        </td>
                        <td>
                            <p><span >Nisshanth.V Won Second Prize in the Event of Solar Circuit Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>33.</span></p>
                        </td>
                        <td>
                            <p><span >Poongkarthick.D Won Second Prize in the Event of Solar Circuit Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>34.</span></p>
                        </td>
                        <td>
                            <p><span >SakthiMaheshwaran.R Won Second Prize in the Event of Bridge Building Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>35.</span></p>
                        </td>
                        <td>
                            <p><span >Vigneshwaran.T Won Second Prize in the Event of Bridge Building Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>36.</span></p>
                        </td>
                        <td><span >Mohamed Natharsha.S Won First Prize in the Event of Bridge Building Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>37.</span></p>
                        </td>
                        <td>
                            <p><span >Mohamed Abuthagir I Won First Prize in the Event of Bridge Building Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>38.</span></p>
                        </td>
                        <td>
                            <p><span >Ram Baskar.M Won First Prize in the Event of Bridge Building Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>39.</span></p>
                        </td>
                        <td>
                            <p><span >Naveenkumar.M Won First Prize in the Event of Reverse Engineering organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>40.</span></p>
                        </td>
                        <td>
                            <p><span >Pasupathi.R Won First Prize in the Event of Reverse Engineering organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>41.</span></p>
                        </td>
                        <td>
                            <p><span >Veeraiya.S Won Second Prize in the Event of Process Planning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>42.</span></p>
                        </td>
                        <td>
                            <p><span >Vigneshwaran.T Won Second Prize in the Event of Process Planning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>43.</span></p>
                        </td>
                        <td>
                            <p><span >Gunasekar.S Won First Prize in the Event of Process Planning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>44</span></p>
                        </td>
                        <td>
                            <p><span >Jeevanesh.M Won First Prize in the Event of Process Planning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>45.</span></p>
                        </td>
                        <td>
                            <p><span >Harish.S Won Second Prize in the Event of Engineering Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>46.</span></p>
                        </td>
                        <td>
                            <p><span >Harish.M Won Second Prize in the Event of Engineering Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>47.</span></p>
                        </td>
                        <td>
                            <p><span >Deepak.N Won Second Prize in the Event of Engineering Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>48.</span></p>
                        </td>
                        <td>
                            <p><span >Rengarajan.R Won First Prize in the Event of Engineering Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>49.</span></p>
                        </td>
                        <td>
                            <p><span >R Rakesh.R Won First Prize in the Event of Engineering Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>50.</span></p>
                        </td>
                        <td>
                            <p><span >R Ramprakesh.R Won First Prize in the Event of Engineering Design organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>51.</span></p>
                        </td>
                        <td>
                            <p><span >Harish Kumar.K.S Won Second Prize in the Event of Computer Aided Manufacturing Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>52.</span></p>
                        </td>
                        <td>
                            <p><span >Nithiskumar.R Won Second Prize in the Event of Computer Aided Manufacturing Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>53.</span></p>
                        </td>
                        <td>
                            <p><span >Nagaendran.K Won First Prize in the Event of Computer Aided Manufacturing Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>54.</span></p>
                        </td>
                        <td>
                            <p><span >Venkat.J Won First Prize in the Event of Computer Aided Manufacturing Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>55.</span></p>
                        </td>
                        <td>
                            <p><span >Rajeshwari.R Won Second Prize in the Event of Design of Assembly organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>56.</span></p>
                        </td>
                        <td>
                            <p><span >Surendhar.L Won Second Prize in the Event of Design of Assembly organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>57.</span></p>
                        </td>
                        <td>
                            <p><span >Swetha.K Won Second Prize in the Event of Design of Assembly organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>58.</span></p>
                        </td>
                        <td>
                            <p><span >Mahendran.K Won Second Prize in the Event of Threading and Taper Turning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>59.</span></p>
                        </td>
                        <td>
                            <p><span >Arunprathap.A Won Second Prize in the Event of Threading and Taper Turning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>60.</span></p>
                        </td>
                        <td>
                            <p><span >Jeevakumar.T Won First Prize in the Event of Threading and Taper Turning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>61.</span></p>
                        </td>
                        <td>
                            <p><span >Karthick.R Won First Prize in the Event of Threading and Taper Turning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>62.</span></p>
                        </td>
                        <td>
                            <p><span >Sakthi Maheshwaran.R Won Second Prize in the Event of Group Discussion Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>63.</span></p>
                        </td>
                        <td>
                            <p><span >Saran Kumar.S Won Second Prize in the Event of Group Discussion Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>64.</span></p>
                        </td>
                        <td>
                            <p><span >Vishnu Sudharsan Won Second Prize in the Event of Group Discussion Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>65.</span></p>
                        </td>
                        <td>
                            <p><span >SakthiSri.M Won First Prize in the Event of Group Discussion Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>66.</span></p>
                        </td>
                        <td>
                            <p><span >Menaga.R Won First Prize in the Event of Group Discussion Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>67.</span></p>
                        </td>
                        <td>
                            <p><span >Mythili.P Won First Prize in the Event of Group Discussion Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>68.</span></p>
                        </td>
                        <td>
                            <p><span >Sandiya.A Won First Prize in the Event of Group Discussion Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>69.</span></p>
                        </td>
                        <td>
                            <p><span >Pasupathi.R Won Second Prize in the Event of CNC Milling organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>70.</span></p>
                        </td>
                        <td>
                            <p><span >Surendhar. L Won Second Prize in the Event of CNC Milling organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>71.</span></p>
                        </td>
                        <td>
                            <p><span >Rajesh. S Won First Prize in the Event of CNC Milling organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>72.</span></p>
                        </td>
                        <td>
                            <p><span >Poovarasan.V Won First Prize in the Event of CNC Milling organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>73.</span></p>
                        </td>
                        <td>
                            <p><span >Deepak.N Won First Prize in the Event of CNC Milling organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>74.</span></p>
                        </td>
                        <td>
                            <p><span >GunaSekar.S Won Second Prize in the Event of Python Programming organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>75.</span></p>
                        </td>
                        <td>
                            <p><span >Jeevanesh M Won Second Prize in the Event of Python Programming organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>76.</span></p>
                        </td>
                        <td>
                            <p><span >YogeshVijay.P Won First Prize in the Event of Python Programming organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>77.</span></p>
                        </td>
                        <td>
                            <p><span >Veeraiya.S Won Second Prize in the Event of Process Planning organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>78.</span></p>
                        </td>
                        <td>
                            <p><span >Nagaendran.K Won Second Prize in the Event of How Things Work organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>79.</span></p>
                        </td>
                        <td>
                            <p><span >Venkat.J Won Second Prize in the Event of How Things Work organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>80.</span></p>
                        </td>
                        <td>
                            <p><span >Kannan.C Won First Prize in the Event of How Things Work organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>81.</span></p>
                        </td>
                        <td>
                            <p><span >Harihiruthik.R Won First Prize in the Event of How Things Work organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>82.</span></p>
                        </td>
                        <td>
                            <p><span >Mohamed Natharsha.S Won Second Prize in the Event of Sheet Metal organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>83.</span></p>
                        </td>
                        <td>
                            <p><span >Mohammed Abuthaheer.I Won Second Prize in the Event of Sheet Metal organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>84.</span></p>
                        </td>
                        <td>
                            <p><span >Danushkumar.B Won Second Prize in the Event of Sheet Metal organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>85.</span></p>
                        </td>
                        <td>
                            <p><span >Harish.S Won First Prize in the Event of Sheet Metal organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>86.</span></p>
                        </td>
                        <td>
                            <p><span >Harish.M Won First Prize in the Event of Sheet Metal organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>87.</span></p>
                        </td>
                        <td>
                            <p><span >Harishkumar.K.S Won First Prize in the Event of Sheet Metal organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>88.</span></p>
                        </td>
                        <td>
                            <p><span >Vidhya.S Won Second Prize in the Event of Work Holding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>89.</span></p>
                        </td>
                        <td>
                            <p><span >Kiruthika.B Won Second Prize in the Event of Work Holding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>90.</span></p>
                        </td>
                        <td>
                            <p><span >Rajeshwari.R Won First Prize in the Event of Work Holding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>91.</span></p>
                        </td>
                        <td>
                            <p><span >Surendhar.L Won First Prize in the Event of Work Holding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>92.</span></p>
                        </td>
                        <td>
                            <p><span >Swetha.K Won First Prize in the Event of Work Holding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>93.</span></p>
                        </td>
                        <td>
                            <p><span >Harish.S Harish.M Deepak.N Won Second Prize in the Event of Additive Manufacturing organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>94.</span></p>
                        </td>
                        <td>
                            <p><span >Harish.M Won Second Prize in the Event of Additive Manufacturing organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>95.</span></p>
                        </td>
                        <td>
                            <p><span >Deepak.N Won Second Prize in the Event of Additive Manufacturing organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>96.</span></p>
                        </td>
                        <td>
                            <p><span >Mohamed Natharsha.S Won First Prize in the Event of Additive Manufacturing organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>97.</span></p>
                        </td>
                        <td>
                            <p><span >Mohammed Abuthaheer.I Won First Prize in the Event of Additive Manufacturing organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>98.</span></p>
                        </td>
                        <td>
                            <p><span >Danushkumar.B Won First Prize in the Event of Additive Manufacturing organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>99.</span></p>
                        </td>
                        <td>
                            <p><span >SakthiSri.M Won Second Prize in the Event of Mechanical Engineering Design CAD organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>100.</span></p>
                        </td>
                        <td>
                            <p><span >Mythili.P Won Second Prize in the Event of Mechanical Engineering Design CAD organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>101.</span></p>
                        </td>
                        <td>
                            <p><span >Sandiya.A Won Second Prize in the Event of Mechanical Engineering Design CAD organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>102.</span></p>
                        </td>
                        <td>
                            <p><span >Gokulnath.R Won First Prize in the Event of Mechanical Engineering Design CAD organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>103.</span></p>
                        </td>
                        <td>
                            <p><span >Gobinath.S Won First Prize in the Event of Mechanical Engineering Design CAD organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>104.</span></p>
                        </td>
                        <td>
                            <p><span >Barath.A.S Won First Prize in the Event of Mechanical Engineering Design CAD organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>105.</span></p>
                        </td>
                        <td>
                            <p><span >Ramakrishnan.D Won First Prize in the Event of Mechanical Engineering Design CAD organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>106.</span></p>
                        </td>
                        <td>
                            <p><span >Gokulnath.R Won Second Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>107.</span></p>
                        </td>
                        <td>
                            <p><span >Gobinath.S Won Second Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>108.</span></p>
                        </td>
                        <td>
                            <p><span >Ramakrishnan.D Won Second Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>109.</span></p>
                        </td>
                        <td>
                            <p><span >Agilan.S Won Second Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>110.</span></p>
                        </td>
                        <td>
                            <p><span >Prasath.P Won First Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>111.</span></p>
                        </td>
                        <td>
                            <p><span >Palraj.V Won First Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>112.</span></p>
                        </td>
                        <td>
                            <p><span >Harikrishna.R Won First Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>113.</span></p>
                        </td>
                        <td>
                            <p><span >Agilan.SWon First Prize in the Event of Light Weight Mobility Vehicle organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>114.</span></p>
                        </td>
                        <td>
                            <p><span >Mohamed Natharsha.S Won Second Prize in the Event of CNC turningorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>115.</span></p>
                        </td>
                        <td>
                            <p><span >Mohammed Abuthaheer.I Won Second Prize in the Event of CNC turningorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>116.</span></p>
                        </td>
                        <td>
                            <p><span >Ram Baskar.MWon Second Prize in the Event of CNC turningorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>117.</span></p>
                        </td>
                        <td>
                            <p><span >Sukumar.R Won First Prize in the Event of CNC turningorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>118.</span></p>
                        </td>
                        <td>
                            <p><span >Sathish.P Won First Prize in the Event of CNC turningorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>119.</span></p>
                        </td>
                        <td>
                            <p><span >Nithishkumar.S Won Second Prize in the Event of Welding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>120.</span></p>
                        </td>
                        <td>
                            <p><span >Raja.P Won Second Prize in the Event of Welding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>121.</span></p>
                        </td>
                        <td>
                            <p><span >Harish Kumar.K.Won First Prize in the Event of Welding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>122.</span></p>
                        </td>
                        <td>
                            <p><span >Nithiskumar.R Won First Prize in the Event of Welding organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>123.</span></p>
                        </td>
                        <td>
                            <p><span >Vigneshwaran T Won Second Prize in the Event of Prototype Modeling organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>124.</span></p>
                        </td>
                        <td>
                            <p><span >Sathish.P Won Second Prize in the Event of Prototype Modelingorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>125.</span></p>
                        </td>
                        <td>
                            <p><span >CibiChakaravarthi Won Second Prize in the Event of Prototype Modelingorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>126.</span></p>
                        </td>
                        <td>
                            <p><span >SakthiMaheshwaran.R Won First Prize in the Event of Prototype Modeling organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>127.</span></p>
                        </td>
                        <td>
                            <p><span >Saran Kumar.S Won First Prize in the Event of Prototype Modelingorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>128.</span></p>
                        </td>
                        <td>
                            <p><span >Vishnu Sudharsan.M Won First Prize in the Event of Prototype Modelingorganized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>129.</span></p>
                        </td>
                        <td>
                            <p><span >Kannan.C Won Second Prize in the Event of Auto Quiz organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>130.</span></p>
                        </td>
                        <td>
                            <p><span >Harihiruthik.R Won Second Prize in the Event of Auto Quiz organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>131.</span></p>
                        </td>
                        <td>
                            <p><span >Arunprathap.A Won First Prize in the Event of Auto Quiz organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>132.</span></p>
                        </td>
                        <td>
                            <p><span >Arun.K Won First Prize in the Event of Auto Quiz organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>133.</span></p>
                        </td>
                        <td>
                            <p><span >Santhanu.B Won First Prize in the Event of Auto Quiz organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>134.</span></p>
                        </td>
                        <td>
                            <p><span >Arun.K Won Second Prize in the Event of Technical Paper Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>135.</span></p>
                        </td>
                        <td>
                            <p><span >Santhanu.B Won Second Prize in the Event of Technical Paper Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>136.</span></p>
                        </td>
                        <td>
                            <p><span >Vidhya.S Won First Prize in the Event of Technical Paper Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>137.</span></p>
                        </td>
                        <td>
                            <p><span >Poovarasan.V Won Second Prize in the Event of Modeling and Animation Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span>138.</span></p>
                        </td>
                        <td>
                            <p><span >Nithishkumar.S Won First Prize in the Event of Modeling and Animation Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >139.</td>
                        <td>
                            <p><span >Raja.P Won First Prize in the Event of Modeling and Animation Competition organized by SAE India Tier I, Kongunadu College of Engineering and Technology, Thottiam on 17.10.2018.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >140</td>
                        <td><span >SathishKumar.C Won Second Prize in the Event of Machine Runner in National level Technical symposium organized by Jai Shriram Engineering College, Tirupur on 10.9.2018</span></td>
                    </tr>
                    <tr >
                        <td >141</td>
                        <td><span >Vignesh.G Won Second Prize in the Event of Techno Quiz in National level Technical symposium organized by Jai Shriram Engineering College, Tirupur on 10.9.2018</span></td>
                    </tr>
                    <tr >
                        <td >142</td>
                        <td><span >SathishKumar.CWon First Prize in the Event of Junkyard in National level Technical symposium organized by Jai Shriram Engineering College, Tirupur on 10.9.2018</span></td>
                    </tr>
                    <tr >
                        <td >143</td>
                        <td><span >Surendhar.LWon First Prize in the Event of Junkyard in National level Technical symposium organized by Jai Shriram Engineering College, Tirupur on 10.9.2018</span></td>
                    </tr>
                    <tr >
                        <td >144</td>
                        <td><span >Venkat.J Won Second Prize in the Event of Mr.Machinist in National level Technical Symposium organized by Gnanamani College of Technology, Namakkal on 29.8.2018</span></td>
                    </tr>
                    <tr >
                        <td >145</td>
                        <td>
                            <p><span >Ragavan.T Won Second Prize in the Event of Paper presentation in National level Technical Symposium organized by Gnanamani College of Technology, Namakkal on 29.8.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >146</td>
                        <td><span >Nithishkumar.S Won Second Prize in the Event of Paper presentation in National level Technical Symposium organized by Gnanamani College of Technology, Namakkal on 29.8.2018.</span></td>
                    </tr>
                    <tr >
                        <td >147</td>
                        <td><span >Mohamad Natarsha.S Won First Prize in the Event of Technical Quiz in National level Technical Symposium organized by M.A.M. College of Engineering, Tiruchirapalli on 24.8.2018.</span></td>
                    </tr>
                    <tr >
                        <td >148</td>
                        <td><span >Harigaran.C Won First Prize in the Event of Technical Quiz in National level Technical Symposium organized by M.A.M. College of Engineering, Tiruchirapalli on 24.8.2018</span></td>
                    </tr>
                    <tr >
                        <td >149</td>
                        <td><span >R Won First Prize in the Event of CADD Drafting in National level Technical Symposium organized by M.A.M. College of Engineering, Tiruchirapalli on 24.8.2018.</span></td>
                    </tr>
                    <tr >
                        <td >150</td>
                        <td><span >Sasikumar.R Won Second Prize in the Event of Water Rocket in National level Technical Symposium organized by M.A.M. College of Engineering, Tiruchirapalli on 24.8.2018</span></td>
                    </tr>
                    <tr >
                        <td >151</td>
                        <td><span >Sumith.M Won Second Prize in the Event of Water Rocket in National level Technical Symposium organized by M.A.M. College of Engineering, Tiruchirapalli on 24.8.2018.</span></td>
                    </tr>
                    <tr >
                        <td >152</td>
                        <td><span >Thilak.V Won Second Prize in the Event of Paper presentation in National level Technical Symposium organized by M.A.M. College of Engineering, Tiruchirapalli on 24.8.2018</span></td>
                    </tr>
                    <tr >
                        <td >153</td>
                        <td><span >Ragul.C Ragavan.T Won Second Prize in the Event of Pipe line in National Level Technical Symposium organized by Mahendra Engineering College, Namakkal on 17.8.2018</span></td>
                    </tr>
                    <tr >
                        <td >154</td>
                        <td><span >Ragavan.T Won Second Prize in the Event of Pipe line in National Level Technical Symposium organized by Mahendra Engineering College, Namakkal on 17.8.2018</span></td>
                    </tr>
                    <tr >
                        <td >155</td>
                        <td><span >Nithish Kumar.S Won Second Prize in the Event of Water Rocketry in National Level Technical Symposium organized by Mahendra Engineering College, Namakkal on 17.8.2018</span></td>
                    </tr>
                    <tr >
                        <td >156</td>
                        <td>
                            <p><span >JanakiRaman.C Won Third Prize in the Event of Paper presentation in Black andWhite’18 Fest organized by Parisutham Institute of Technology and Science, Thanjavur on 10.8.2018 and 11.8.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >157</td>
                        <td><span >Gokulnath.R Won Third Prize in the Event of Paper presentation in Black andWhite’18 Fest organized by Parisutham Institute of Technology and Science, Thanjavur on 10.8.2018 and 11.8.2018</span></td>
                    </tr>
                    <tr >
                        <td >158</td>
                        <td><span >Gokul.S Won Second Prize in the Event of General Quiz in METMAT 18.0 organized by Government College of Engineering, Salem on 16.2.2018</span></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
//Academic Year 2017 - 2018
const AcademicYear201718 = () => {
    return (
        <div className="table-responsive">
            <h3 className="middle-text text-primary" >Academic Year 2017 - 2018</h3>
            <table class="table table-bordered table-sm table-striped">
                <thead>
                    <tr >
                        <th >
                            S.NO
                        </th>
                        <th >
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td >
                            <p><span >1.</span></p>
                        </td>
                        <td>
                            <p><span >B.Ajaykumar Reddy of III Year Won Second Prize in the event Mad Fingers Organized by Mahendra Engineering College on 03.02.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >2.</span></p>
                        </td>
                        <td>
                            <p><span >J.Dhivakar of III Year Won First Prize in the event Mad Fingers Organized by Mahendra Engineering College on 03.02.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >3.</span></p>
                        </td>
                        <td>
                            <p><span >S.Palanivel Rajan of III Year Won First Prize in the event RC Race Organized by Mahendra Engineering College on 03.02.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >4.</span></p>
                        </td>
                        <td>
                            <p><span >S.Palanivel Rajan of III Year Won First Prize in the event Mad Fingers Organized by Mahendra Engineering College on 03.02.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >5.</span></p>
                        </td>
                        <td>
                            <p><span >M.Naveen Kumar of III Year Won First Prize in the event Photography Organized by Mahendra Engineering College on 03.02.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >6.</span></p>
                        </td>
                        <td>
                            <p><span >M.Naveen Kumar of III Year Won First Prize in the event Mad Fingers Organized by Mahendra Engineering College on 03.02.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >7.</span></p>
                        </td>
                        <td>
                            <p><span >R.Manoj Kumar of III Year Won Third Prize in the event Paper Presentation Organized by Sri Eshwar College of Engineering on 19.01.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >8.</span></p>
                        </td>
                        <td>
                            <p><span >Mohamed Jameel of III Year Won Third Prize in the event Paper Presentation Organized by Sri Eshwar College of Engineering On 19.01.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >9.</span></p>
                        </td>
                        <td>
                            <p><span >S.Boopathi Raja of III Year Won First Prize in the event CNC Milling Organized by SAEINDIA -Tier II on 03.01.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >10.</span></p>
                        </td>
                        <td>
                            <p><span >I.Mohamed Abuthaheer o f III Year Won Second Prize in the event Bridge Building Organized by SAEINDIA -Tier II on 03.01.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >11.</span></p>
                        </td>
                        <td>
                            <p><span >S.Mohamed Natharasha of III Year Won Second Prize in the event Bridge Building Organized by SAEINDIA -Tier II on 03.01.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >12.</span></p>
                        </td>
                        <td>
                            <p><span >I.Mohammed Abuthaheer of III Year Won First Prize in the event Addictive Manufacturing Organized by SAEINDIA -Tier II on 03.01.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >13.</span></p>
                        </td>
                        <td>
                            <p><span >S.Gobinath of III Year Won First Prize in the event Cad Design Organized by SAEINDIA-Tier II on 03.01.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >14.</span></p>
                        </td>
                        <td>
                            <p><span >R.Arunprathap of III Year Won First Prize in the event Auto Quize Organized by SAEINDIA -Tier II on 03.01.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >15.</span></p>
                        </td>
                        <td>
                            <p><span >R.Sasikumar of III Year Won Second Prize in the event Connection Organized by K.Ramakrishnan College of Technology, Trichy on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >16.</span></p>
                        </td>
                        <td>
                            <p><span >R.Sasikumar of III Year Won Second Prize in the event Water Rocketry Organized by K.Ramakrishnan College of Technology, Trichy on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >17.</span></p>
                        </td>
                        <td>
                            <p><span >S.Boopathi Raja of III Year Won Third Prize in the event Paper Presentation Organized by AAA College of Engineering on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >18.</span></p>
                        </td>
                        <td>
                            <p><span >P.Gopinath of III Year Won Second Prize in the event Water Rocketry Organized by Mahendra Engineering College on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >19.</span></p>
                        </td>
                        <td>
                            <p><span >R.Ragavendhar of III Year Won First Prize in the event Water Rocketry Organized by K.Ramakrishnan College of Technology, Trichy on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >20.</span></p>
                        </td>
                        <td>
                            <p><span >N.M.Shiva Surya Of III Year Won Second Prize in the event Water Rocketry Organized by K.Ramakrishnan College of Technology, Trichy on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >21.</span></p>
                        </td>
                        <td>
                            <p><span >K.Mariveeriyan of III Year Won First Prize in the event Lathe O Mania Organized by K.Ramakrishnan College of Technology, Trichy on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >22.</span></p>
                        </td>
                        <td>
                            <p><span >S.Nitish Kumar of III Year Won Third Prize in the event Paper Presentation Organized by Mahendra Engineering College on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >23.</span></p>
                        </td>
                        <td>
                            <p><span >M.Naveen Kumar of III Year Won Third Prize in the event Paper Presentation Organized by Mahendra Engineering College on 15.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >24.</span></p>
                        </td>
                        <td>
                            <p><span >S.Boopathi Raja of III Year Won Second Prize in the event Water Rocketry Organized by TRP College of Engineeiring on 08.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >25.</span></p>
                        </td>
                        <td>
                            <p><span >A.G.Adhavan of III Year Won Second Prize in the event Water Rocketry Organized by TRP College of Engineeiring on 08.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >26.</span></p>
                        </td>
                        <td>
                            <p><span >S.Raghul of III Year Won Third Prize in the event Paper Presentation Organized by K.S.K College of Engineering And Technology on 07.09.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >27.</span></p>
                        </td>
                        <td>
                            <p><span >P.Gopinath of III Year Won First Prize in the event Hydro Rocketry Organized by Vetri Vinayaga Engg And Tech on 31.8.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >28.</span></p>
                        </td>
                        <td>
                            <p><span >J.Mohameed Jameel of III Year Won First Prize in the event Water Rocketry Organized by Karikudi Institute of Technology on 12.8.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >29.</span></p>
                        </td>
                        <td>
                            <p><span >R.Mathan of III Year Won First Prize in the event Water Rocketry Organized by Karikudi Institute Of Technology on 12.8.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >30.</span></p>
                        </td>
                        <td>
                            <p><span >P.Gopinath of III Year Won Second Prize in the event Water Rocketry Organized by Mahendra Engineering College on 11.8.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >31.</span></p>
                        </td>
                        <td>
                            <p><span >T.Gokulnath of III Year Won First Prize in the event Water Rocketry Organized by Mahendra Engineering College on 11.8.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >32.</span></p>
                        </td>
                        <td>
                            <p><span >S.Boopathi Raja of III Year Won Second Prize in the event Paper Presentation Organized by Parisutham Institute of Technology  Science, Thanjavur on 05.08.17</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >33.</span></p>
                        </td>
                        <td>
                            <p><span >D.Surya of III Year Won Third Prize In in the event Water Rocketry Organized by Parisutham Institute of Technology  Science, Thanjavur on 05.08.17</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >34.</span></p>
                        </td>
                        <td>
                            <p><span >D.Surya of III Year Won Second Prize in the event Chuck Glider Organized by Parisutham Institute of Technology  Science, Thanjavur on 05.08.17</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >35.</span></p>
                        </td>
                        <td>
                            <p><span >S.Chandru of III Year Won Second Prize in the event Paper Presentation Organized by Parisutham Institute of Technology  Science, Thanjavur on 05.08.17</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >36.</span></p>
                        </td>
                        <td>
                            <p><span >R.Vinothkumar of III Year Won Third Prize in the event Water Rocketry Organized by Parisutham Institute of Technology  Science, Thanjavur on 05.08.17</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >37.</span></p>
                        </td>
                        <td>
                            <p><span >S.Boopathi Raja of III Year Won Second Prize in the event Paper Presentation Organized by K.S.R College of Engineering, Tiruchengodu on 28.07.17</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >38.</span></p>
                        </td>
                        <td>
                            <p><span >S.Boopathi Raja of III Year Won First Prize in the event Water Rocketry Organized by K.S.R College of Engineering, Tiruchengodu on 28.07.17</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >39.</span></p>
                        </td>
                        <td>
                            <p><span >S.Chandru of III Year Won Second Prize in the event Paper Presentation Organized by K.S.R College of Engineering, Tiruchengodu on 28.07.17</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >40.</span></p>
                        </td>
                        <td>
                            <p><span >R.Praveen of II Year Won First Prize in the event Photography Organized by Mahendra Engineering College on 03.02.2018</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >41.</span></td>
                        <td><span >S.PalanivelRajan of II Year Won First Prize in the event RC RACE Organized by Mahendra Engineering College on 03.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >42.</span></td>
                        <td><span >S.PalanivelRajan of II Year Won First Prize in the event Mad FingersOrganized by Mahendra Engineering College on 03.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >43.</span></td>
                        <td><span >D.Ramakrishnan of II Year Won First Prize in the event Mad FingersOrganized by Mahendra Engineering College on 03.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >44.</span></td>
                        <td><span >M.Naveen Kumar of II Year Won First Prize in the event Photography Organized by Mahendra Engineering College on 03.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >45.</span></td>
                        <td><span >M.Naveen Kumar of II Year Won First Prize in the event Mad Fingers Organized by Mahendra Engineering College on 03.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >46.</span></td>
                        <td><span >S.Prabhu of II Year Won Second Prize in the event Paper Presentation Organized by Mahendra Engineering College on 07.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >47.</span></td>
                        <td><span >S.Prabhu of II Year Won Second Prize in the event Technical Quize Organized by M.P.NachimuthuM.Jaganathan Engineering College on 10.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >48.</span></td>
                        <td><span >M.Naveen Kumar of II Year Won First Prize in the event Poster Presentation Organized by K.S.Rangasamy College of Technology on 16.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >49.</span></td>
                        <td><span >S.Gokul of II Year Won Second Prize in the event General Quize Organized by Government College of Engineering on 16.02.2018</span></td>
                    </tr>
                    <tr >
                        <td ><span >50.</span></td>
                        <td><span >T.Jegan of II Year Won First Prize in the event Paper Presentation Organized by Nehru Institute of Technology on 01.03.2018</span></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
//Academic Year 2016 - 2017
const AcademicYear201617 = () => {
    return (
        <div className="table-responsive">
            <h3 className="middle-text text-primary" >Academic Year 2016 - 2017</h3>
            <table class="table table-bordered table-sm table-striped">
                <thead>
                    <tr >
                        <th >S. No</th>
                        <th >
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td ><span >1</span></td>
                        <td >
                            <p><span >D.Surya of III Year Won Second Prize in the event Water Rocketry Organized by Madras Institute of Technology,Chennai On 11-12.03.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >2</td>
                        <td >
                            <p><span >R.Vidya of III Year Won Second Prize in the event Paper Presentation Organized by Velalar College of Engineering And Technology,Erode On 11.03.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >3</td>
                        <td >
                            <p><span >T.Lakshmi of III Year Won Second Prize in the event Paper Presentation Organized by Velalar College of Engineering And Technology,Erode On 11.03.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >4</td>
                        <td >
                            <p><span >DON.D.THIMOTHEU of III Year Won Second Prize in the event VERB WAR Organized by Chettinad College of Engineering,Karur On 03.03.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >5</td>
                        <td >
                            <p><span >K.Sridharan of III Year Won First Prize in the event Short Flim Organized by Nehru Institute of Technology,Coimbatore On 02.03.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >6</td>
                        <td >
                            <p><span >M.Manoj of III Year Won Second Prize in the event Paper Presentation Organized by K.S.Rangasamy College of Technology,Namakkal On 01.03.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >7</td>
                        <td >
                            <p><span >K.P.Tamilselvan of III Year Won First Prize in the event Paper Presentation Organized by EBET Group of Institution,Kangeyam on 24-25.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >8</td>
                        <td >
                            <p><span >D.Balachandar of III Year Won First Prize in the event Project Expo Organized by Care Group of Institution,Trichy On 24-25.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >9</td>
                        <td >
                            <p><span >S.Prasanna Morthy of III Year Won First Prize in the event Paper Presentation Organized by Care Group of Institution,Trichy On 23-24.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >10</td>
                        <td >
                            <p><span >R.Poovarasan of III Year Won Second Prize in the event Paper Presentation Organized by Care Group of Institution,Trichy On 23-24.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >11</td>
                        <td >
                            <p><span >M.Aravindh of III Year Won First Prize in the event Lathomania Organized by Care Group of Institution,Trichy On 23-24.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >12</td>
                        <td >
                            <p><span >J.Mohamed Jameel Of III Year Won First Prize in the event Assembling  Dismantling Organized by Care Group Of Institution,Trichy On 23-24.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >13</td>
                        <td >
                            <p><span >R.Gowthaman of III Year Won First Prize in the event Assembling  Dismantling Organized by Care Group of Institution,Trichy On 23-24.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >14</td>
                        <td >
                            <p><span >I. Mohammed abuthaheer of III Year Won Second Prize in the event Shipwreck Organized by Institute of Road And Transport Nagar, Erode On 17-18.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >15</td>
                        <td >
                            <p><span >S.Midhun of III Year Won First Prize in the event Paper Presentation Organized by K.S.Rangasamy College of Technology,Namakkal On 17.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >16</td>
                        <td >
                            <p><span >S.Soundhar of III Year Won First Prize in the event Water Rocketry Organized by Selvam College of Technology,Namakkal On 18-02-2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >17</td>
                        <td >
                            <p><span >P.Vellasamy of III Year Won First Prize in the event Water Rocketry Organized by Selvam College of Technology,Namakkal On 18-02-2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >18</td>
                        <td >
                            <p><span >P.Sibichakaravarthi of III Year Won Second Prize in the event Water Rocketry Organized by Selvam College of Technology,Namakkal On 18-02-2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >19</td>
                        <td >
                            <p><span >R.Vineeth of III Year Won Second Prize in the event Water Rocketry Organized by Selvam College of Technology,Namakkal On 18-02-2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >20</td>
                        <td >
                            <p><span >P.Santhosh of III Year Won First Prize in the event Cad Modelling Organized by NSN College of Engineering And Technology On 10.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >21</td>
                        <td >
                            <p><span >S.Prasanna Morthy of III Year Won Second Prize in the event Paper Presentation Organized by NSN College of Engineeirng And Technology On 10.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >22</td>
                        <td >
                            <p><span >P.Santhosh of III Year Won First Prize in the event Cad Modelling Organized by NSN College of Engineering And Technology On 10.02.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >23</td>
                        <td >
                            <p><span >S.Sasitharan of III Year Won First Prize in the event Work Holding Organized by K.Ramakrishnan College of Technology, Trichy On 11.01.2017.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >24</td>
                        <td >
                            <p><span >R.Raghul of III Year Won First Prize in the event Work Holding Organized by Kongunadu College of Engineering And Technology,Trichy On 10.01.2017</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >25</td>
                        <td >
                            <p><span >M.Kiruphakaran of III Year Won Second Prize in the event Paper Presentation Organized by K.Ramakrishnan College of Technology, Trichy On 14.09.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >26</span></span></td>
                        <td >
                            <p><span >S. Santhosh and S. Sasitharan Of III Year Won Second Prize In Water Rocketry Organized by K.Ramakrishnan College Of Technology, Trichy On 09.09.2016.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >27</span></span></td>
                        <td >
                            <p><span >R. Prasanth and V. Ramkumar Of III Year Won Second Prize In Paper Presentation Organized by Annai Mathammal Sheela Engineering College, Namakkal On 07.09.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >28</span></span></td>
                        <td >
                            <p><span >M.Y. Tamilselvan Of III Year Won Third Prize In Photography Organized by Annai Mathammal Sheela Engineering College, Namakkal On 07.09.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >29</span></span></td>
                        <td >
                            <p><span >R. Aravindhan, V.S. Aswin Deva and M. Aravindh Iii Year Won Second Prize In Rc Nitro Race Organized by Velammal Engineering College, On 27.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >30</span></span></td>
                        <td >
                            <p><span >S. Mohan Prabhu And M. Madhan Of III Year Won First Prize In Poster Presentation Organized by Mahendra College Of Engineering, Salem On 26.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >31</span></span></td>
                        <td >
                            <p><span >A.Rajesh Of III Year Won First Prize In Quiz Organized by Mahendra College Of Engineering, Salem On 26.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >32</span></span></td>
                        <td >
                            <p><span >R. Pradeep Of III Year Won First Prize In Bucket With Ball Organized by Mahendra College Of Engineering, Salem On 26.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >33</span></span></td>
                        <td >
                            <p><span >R. Vijeshwar Of III Year Won Third Prize In Photography Organized by Mahendra College Of Engineering, Salem On 26.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >34</span></span></td>
                        <td >
                            <p><span >S. Boopathi Raja Of II Year Won First Prize In Para Glider Organized by Gnanamani College Of Technology, Namakkal On 24.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >35</span></span></td>
                        <td >
                            <p><span >P. Gobinath Of II Year Won First Prize In Water Rocketry Organized by Parisutham Institute Of Technology  Science, Thanjavur On 24-26.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >36</span></span></td>
                        <td >
                            <p><span >J.Vineth And K. Sridharan Of III Year Won Third Prize In Water Rocketry Organized by Parisutham Institute Of Technology  Science, Thanjavur On 24-26.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >37</span></span></td>
                        <td >
                            <p><span >G. Asokan And S. Chandru Of II Year Won Third Prize In Paper Presentation Organized by Parisutham Institute Of Technology  Science, Thanjavur On 24-26.08.2016.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >38</span></span></td>
                        <td >
                            <p><span >S. Boopathi Raja Of II Year Won First Prize In Paper Presentation Organized by Gnanamani College Of Technology, Namakkal On 24.08.2016.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >39</span></span></td>
                        <td >
                            <p><span >M. Madhan Of III Year Won Second Prize In Poster Presentation Organized by SNS College Of Engineering, Coimbatore On 11-12.08.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span ><span >40</span></span></td>
                        <td >
                            <p><span >S. Midhun Of III Year Won Second Prize In Paper Presentation Organized by K.S.R College Of Engineering, Tiruchengodu On 21.07.2016</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
//Academic Year 2015 - 2016
const AcademicYear201516 = () => {
    return (
        <div className="table-responsive">
            <h3 className="middle-text text-primary">Academic Year 2015 - 2016</h3>
            <table class="table table-bordered table-sm table-striped">
                <thead>
                    <tr >
                        <th>
                            S.No
                        </th>
                        <th>
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td ><span >1.</span></td>
                        <td >
                            <p><span >R. Pradeep of III Year MECH Student got Second Prize in the Paper Presentation Organized by RVS Technical Campus, Coimbatore On 31.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >2.</span></td>
                        <td >
                            <p><span >R. Pradeep of III Year MECH Student got Second Prize in thePhotography Organized by RVS Technical Campus, Coimbatore On 31.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >3.</span></td>
                        <td >
                            <p><span >N. Karthick N. Karthikeyan of III Year MECH Student got Second Prize in the Paper Presentation Organized by Adhiyaman College Of Engineering, Hosur On 24.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >4.</span></td>
                        <td >
                            <p><span >K.Vimal S. Sasvin of III Year MECH Student got First Prize in the Paper Presentation Organized by Muthayammal College Of Engineering, Rasipuram On 14.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >5.</span></td>
                        <td >
                            <p><span >M. Ramesh of III Year MECH Student got Second Prize in the Cad Modeling Organized by Muthayammal College Of Engineering, Rasipuram On 14.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >6.</span></td>
                        <td >
                            <p><span >M.A. Niranjan of III Year MECH Student got Second Prize in the Paper Presentation Organized by Erode Builder, Kangayam On 12.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >7.</span></td>
                        <td >
                            <p><span >S. Thiyagu of III Year MECH Student got Second Prize in the Paper Presentation Organized by Excel Engineering College, Pallakapalayam On 12.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >8.</span></td>
                        <td >
                            <p><span >R. Mohanraj of III Year MECH Student got First Prize in the Project Presentation Organized by Excel Engineering College, Pallakapalayam On 12.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >9.</span></td>
                        <td >
                            <p><span >S. Kaviarasu of III Year MECH Student got First Prize in the Project Presentation Organized by Excel Engineering College, Pallakapalayam On 12.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >10.</span></td>
                        <td >
                            <p><span >S.Sugumar  S. Thiyagu of III Year MECH Student got First Prize in the Poster Presentation Organized by Excel Engineering College, Pallakapalayam On 12.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >11.</span></td>
                        <td >
                            <p><span >S. Sanjei  V. Vignesh of III Year MECH Student got Second Prize in the Poster Presentation Organized by Excel Engineering College, Pallakapalayam On 12.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >12.</span></td>
                        <td >
                            <p><span >R. Balamurgan of III Year MECH Student got First Prize in the Component Assembly Organized by Nandha College Of Technology, Erode On 10.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >13.</span></td>
                        <td >
                            <p><span >M. Subanesan  N. Vasanth of III Year MECH Student got Second Prize in the Paper Presentation Organized by Nandha College Of Technology, Erode On 10.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >14.</span></td>
                        <td >
                            <p><span >M. Subanesan  N.Vasanth of III Year MECH Student got First Prize in the Clay Modeling Organized by Nandha College Of Technology, Erode On 10.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >15.</span></td>
                        <td >
                            <p><span >M. Subanesan  N. Vasanth of III Year MECH Student got Second Prize in the CNC Programming Organized by Nandha College Of Technology, Erode On 10.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >16.</span></td>
                        <td >
                            <p><span >R. Mohanraj  S. Kaviarasu of III Year MECH Student got First Prize in the Paper Presentation Organized by Nandha College Of Technology, Erode On 10.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >17.</span></td>
                        <td >
                            <p><span >M. Sudhakar of III Year MECH Student got First Prize in the Component Assembly Organized by Nandha College Of Technology, Erode On 10.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >18.</span></td>
                        <td >
                            <p><span >P.Arun Prasanth of III Year MECH Student got First Prize in theLathe Machining Organized by Ck College Of Engineering  Technology, Cuddalore On 09.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >19.</span></td>
                        <td >
                            <p><span >K. Manoj Prabhakar  G. Karthikeyan of III Year MECH Student got Third Prize in the Paper Presentation Organized by R.V.S College Of Engineering, Dindugal On 05.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >20.</span></td>
                        <td >
                            <p><span >P. Santhosh R. Prasath of II Year MECH Student got Second Prize in the Machathlon Organized by Kongu Engineering College, Erode On 04.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >21.</span></td>
                        <td >
                            <p><span >M.S. Vijay  S. Senthamizhan of III Year MECH Student got Second Prize in the Paper Presentation Organized by Sri Ramakrishna Engineering College, Coimbatore On 02.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >22.</span></td>
                        <td >
                            <p><span >S. Vijay  R. Vinoth of III Year MECH Student got Second Prize in the Short Film Organized by N.S.N College Of Engineering, Karur on 02.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >23.</span></td>
                        <td >
                            <p><span >M. Subanesan  N. Vasanth of III Year MECH Student got Second Prize in the Paper Presentation Organized by Government College Of Engineering, Salem on 01.03.2016 to 02.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >24.</span></td>
                        <td >
                            <p><span >S. Ashok Kumar  B. Arun Kumar of III Year MECH Student got Second Prize in the Industrial Define Problem Organized by Government College Of Engineering, Salem on 01.03.2016 to 02.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >25.</span></td>
                        <td >
                            <p><span >R.Barath Kumar of III Year MECH Student got Second Prize in the Clay Modeling Organized by Government College Of Engineering, Salem on 01.03.2016 to 02.03.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >26.</span></td>
                        <td >
                            <p><span >R. Barath Kumar of III Year MECH Student got Second Prize in the Water Rocketry Organized by Selvam College Of Engineering, Namakkal on 27.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >27.</span></td>
                        <td >
                            <p><span >S. Ashok Kumar of III Year MECH Student got Second Prize in the Water Rocketry Organized by Selvam College Of Engineering, Namakkal on 27.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >28.</span></td>
                        <td >
                            <p><span >S. Midhun  P. Noelraj of II Year MECH Student got First Prize in the Paper Presentation Organized by K.S.Ramgasamy College Of Engineering, Thiruchengode on 26.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >29.</span></td>
                        <td >
                            <p><span >G. Kavin Kumar  P. Pradeep of III Year MECH Student got Second Prize in the Blitz Alution Organized by M. Kumarasamy College Of Engineering, Karur on 24.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >30.</span></td>
                        <td >
                            <p><span >S. Senthamizhan of III Year MECH Student got Second Prize in the Paper Presentation Organized by Muthayammal Enginering College, Rasipuram on 20.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >31.</span></td>
                        <td >
                            <p><span >R. Vinoth  A.M. Syed Hameed of III Year MECH Student got Second Prize in the Short Film Making Organized by Muthayammal Enginering College, Rasipuram on 20.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >32.</span></td>
                        <td >
                            <p><span >S. Senthamizhan of III Year MECH Student got Second Prize in the Project-X Organized by Muthayammal Enginering College, Rasipuram on 20.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >33.</span></td>
                        <td >
                            <p><span >J.S. Subanesh Anand  S. Siva of III Year MECH Student got First Prize in the Material Contest Organized by Muthayammal Enginering College, Rasipuram on 20.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >34.</span></td>
                        <td >
                            <p><span >S. Siva of III Year MECH Student got Second Prize in thePoster Presentation Organized by Muthayammal Enginering College, Rasipuram on 20.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >35.</span></td>
                        <td >
                            <p><span >K. Gowtham of III Year MECH Student got First Prize in the Literary And Debating Association Organized by Institute Of Road And Transport Technology, Erode on 19  20.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >36.</span></td>
                        <td >
                            <p><span >K. Gowtham of III Year MECH Student got Second Prize in the Literary And Debating Quiz Organized by Institute Of Road And Transport Technology, Erode on 19  20.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >37.</span></td>
                        <td >
                            <p><span >K. Gowtham of III Year MECH Student got Third Prize in the Adzap Organized by Institute Of Road And Transport Technology, Erode on 19  20.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >38.</span></td>
                        <td >
                            <p><span >S. Loganath  S. Kaviarasu of III Year MECH Student got First Prize in the Paper Presentation Organized by Sengunthar Engineering College, Tiruchengode on 19.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >39.</span></td>
                        <td >
                            <p><span >J. Akhil of II Year MECH Student got First Prize in the Project Expo Organized by Nooril Islam Centre For Higher Education, Kanyakumari on 11  12.02.2016</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >40.</span></td>
                        <td >
                            <p><span >S. Kaviarasu  G. Kavinkumar of III Year MECH Student got Second Prize in the Paper Presentation Organized by Dr. N.G.P. Institute Of Technology, Coimbatore on 19.09.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >41.</span></td>
                        <td >
                            <p><span >A.Mohamed Riyaz  A.Mohammed Farukdeen of III Year MECH Student got Second Prize in the Technical Quiz Organized by Kings College Of Engineering, Thanjavur on 18.09.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >42.</span></td>
                        <td >
                            <p><span >S. Ashok Kumar  B. Arunkumar of III Year MECH Student got Second Prize in the Water Rocketry Organized by Nadar Saraswathi College Of Engineering And Technology, Theni On 09.09.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >43.</span></td>
                        <td >
                            <p><span >S. Ashok Kumar  R. Barathkumar of III Year MECH Student got Second Prize in the Machatrix Organized by Nadar Saraswathi College Of Engineering And Technology, Theni On 09.09.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >44.</span></td>
                        <td >
                            <p><span >B. Arunkumar  R. Barathkumar of III Year MECH Student got Second Prize in the Rc Race Organized by Nadar Saraswathi College Of Engineering And Technology, Theni On 09.09.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >45.</span></td>
                        <td >
                            <p><span >S. Naveen Kumar of IV Year MECH Student got Second Prize in the Cad Modeling Organized by Excel Engineering College, Namakkal On 05.09.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >46.</span></td>
                        <td >
                            <p><span >S. Naveen Kumar  G. Deepak of IV Year MECH Student got Second Prize in thePaper Presentation Organized by Excel Engineering College, Namakkal On 05.09.2015</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
//Academic Year 2014 - 2015
const AcademicYear201415 = () => {
    return (
        <div className="table-responsive">
            <h3 className="middle-text text-primary" >Academic Year 2014 - 2015</h3>
            <table class="table table-bordered table-sm table-striped">
                <thead>
                    <tr >
                        <th >S.No</th>
                        <th >Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td >
                            <p><span >1.</span></p>
                        </td>
                        <td >
                            <p><span >S. Ashok kumar of IInd year MECH Student got First Prize in the Technical Quiz organized by Sri Ramakrishna Institute of Technology, Coimbatore on 13.03.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >2.</span></p>
                        </td>
                        <td >
                            <p><span >N. Selvakumar of III year MECH Student got First Prize in the AD ZAP organized by Nandha Engineering College, Erode on 07.03.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >3.</span></p>
                        </td>
                        <td >
                            <p><span >R. Surendiaran of III year MECH Student got First Prize in the AD ZAP organized by Nandha Engineering College, Erode on 07.03.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >4.</span></td>
                        <td >
                            <p><span >P. Vignesh of III year MECH Student got First Prize in the AD ZAP organized by Nandha Engineering College, Erode on 07.03.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >5.</span></td>
                        <td >
                            <p><span >R. Surendiaran of III year MECH Student got Second Prize in the Multimedia organized by Nandha Engineering College, Erode on 07.03.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >6.</span></td>
                        <td >
                            <p><span >P. Vignesh of III year MECH Student got Second Prize in the Multimedia organized by Nandha Engineering College, Erode on 07.03.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >7.</span></td>
                        <td >
                            <p><span >B. Sridhar of III year MECH Student got First Prize in the Paper Presentation organized by United Institute Of Technology, Coimbatore on 06.03.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >8.</span></td>
                        <td >
                            <p><span >J.Sanjai of III year MECH Student got First Prize in the Paper Presentation organized by United Institute Of Technology, Coimbatore on 06.03.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >9.</span></td>
                        <td >
                            <p><span >G. Suresh kumar of III year MECH Student got First Prize in the Paper Presentation organized by Erode Sengunthar Engineering College, Erode on 21.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >10.</span></td>
                        <td >
                            <p><span >S. Vignesh kumar of III year MECH Student got First Prize in the Paper Presentation organized by Erode Sengunthar Engineering College, Erode on 21.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >11.</span></td>
                        <td >
                            <p><span >S. Arun of III year MECH Student got Second Prize in the Cad Modelling organized by Muthayammal Engineering College, Namakkal on 21.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >12.</span></td>
                        <td >
                            <p><span >S. Aswin of III year MECH Student got Second Prize in the Tech-Quiz organized by Arasu Engineering College on 20.02.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >13.</span></td>
                        <td >
                            <p><span >K.KuberVignesh of III year MECH Student got Second Prize in the Tech-Quiz organized by Arasu Engineering College on 20.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >14.</span></td>
                        <td >
                            <p><span >M.Balaji of III year MECH Student got First Prize in the Poster Presentation organized by Mahendra Engineering College on 19<span>.02.2015</span>  20.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >15.</span></td>
                        <td >
                            <p><span >M. Ayyapapan of III year MECH Student got Second Prize in the Poster Presentation organized by Mahendra Engineering College on 19<span>.02.2015</span>  20.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >16.</span></td>
                        <td >
                            <p><span >P. Ponraj of III year MECH Student got Third Prize in the Cad Contest organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >17.</span></td>
                        <td >
                            <p><span >P. Ponraj of III year MECH Student got Third Prize in the Treasure Hunt organized by N.S.N. College of engineering and technology, karur on 12.02.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >18.</span></td>
                        <td >
                            <p><span >S. Sathyamoorthi of III year MECH Student got Third Prize in the Treasure Hunt organized by N.S.N. College of engineering and technology, karur on 12.02.2015</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >19.</span></td>
                        <td >
                            <p><span >S. Sathyamoorthi of III year MECH Student got Second Prize in the Project Display organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >20.</span></td>
                        <td >
                            <p><span >S. Tamil mani of III year MECH Student got Third Prize in the Treasure Hunt organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >21.</span></td>
                        <td >
                            <p><span >S. Tamil mani of III year MECH Student got Second Prize in the Project Display organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >22.</span></td>
                        <td >
                            <p><span >R. Surendiran of III year MECH Student got Second Prize in the Treasure Hunt organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >23.</span></td>
                        <td >
                            <p><span >R. Surendiran of III year MECH Student got Second Prize in the Project Display organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >24.</span></td>
                        <td >
                            <p><span >P. Vignesh of III year MECH Student got Second Prize in the Treasure Hunt organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >25.</span></td>
                        <td >
                            <p><span >P. Vignesh of III year MECH Student got Second Prize in the Project Display organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >26.</span></td>
                        <td >
                            <p><span >B. Sabareesh of III year MECH Student got Second Prize in the Treasure Hunt organized by N.S.N. College of engineering and technology, karur on 12.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >27.</span></td>
                        <td >
                            <p><span >S. Madhusuthanan of III year MECH Student got Second Prize in the Poster Presentation organized by Sri Krishna College Of Engineering And Technology on 06.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >28.</span></td>
                        <td >
                            <p><span >K. Karthik of III year MECH Student got Second Prize in the Poster Presentation organized by Sri Krishna College Of Engineering And Technology on 06.02.2015.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >29.</span></td>
                        <td >
                            <p><span >G. Arunkumarof III year MECH Student got First Prize in the Paper Presentation organized by SVS College Of Engineering on 26.09.2014</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >30.</span></td>
                        <td >
                            <p><span >G. Arunkumar of III year MECH Student got First Prize in the Paper Presentation organized by M Kumarasamy College Of Engineering on 20.09.2014</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >31.</span></td>
                        <td >
                            <p><span >G. Arunkumar of III year MECH Student got First Prize in the Technical Quiz organized by M Kumarasamy College Of Engineering on 20.09.2014.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >32.</span></td>
                        <td >
                            <p><span >Mohammed Yafik of III year MECH Student got First Prize in the Multi Media organized by Mahendra Institute of Technology on 05.09.2014.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >33.</span></td>
                        <td >
                            <p><span >Sitharathan of III year MECH Student got First Prize in the Multi Media organized by Mahendra Institute of Technology on 05.09.2014</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >34.</span></td>
                        <td >
                            <p><span >S. Vijay of III year MECH Student got First Prize in the Bike Drift organized by Mahendra Institute of Technology on 05.09.2014</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
}
//Academic Year 2013 - 2014
const AcademicYear201314 = () => {
    return (
        <div className="table-responsive">
            <h3 className="middle-text text-primary" >Academic Year 2013 - 2014</h3>
            <table class="table table-bordered table-sm table-striped" >
                <thead>
                    <tr >
                        <th >
                            S.NO
                        </th>
                        <th >
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td >
                            <p><span >1.</span></p>
                        </td>
                        <td>
                            <p><span >G.Arunkumar of IV year MECH Student got First Prize in the Paper Presentation organized by SVS College Of Engineering On 29.09.14</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >2.</span></p>
                        </td>
                        <td>
                            <p><span >G.Arunkumar of IV year MECH Student got First Prize in the Paper Presentation organized by M. Kumarasamy college of engineering, karur on 20.9.014</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
//Academic Year 2012 - 2013
const AcademicYear201213 = () => {
    return (
        <div className="table-responsive">
            <h3 className="middle-text text-primary"  >Academic Year 2012 - 2013</h3>
            <table class="table table-bordered table-sm table-striped">
                <thead>
                    <tr >
                        <th >
                            S.No
                        </th>
                        <th >
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td >
                            <p><span >1.</span></p>
                        </td>
                        <td >
                            <p><span ><span >A. Arun Kumar of III year MECH Student got Second Prize in the Cad Contest organized by NSN College Of Engineering on 16.03.2013</span></span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >2.</span></p>
                        </td>
                        <td >
                            <p><span >R.Mohan of II year MECH Student got Third Prize in the Cad Contest organized by GCT, Coimbatore on 15.03.2013</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >3.</span></p>
                        </td>
                        <td >
                            <p><span >G. Mathivanan of II year MECH Student got Third Prize in the Project Presentation organized by GCT, Coimbatore on 15.03.2013</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td >
                            <p><span >4.</span></p>
                        </td>
                        <td >
                            <p><span >S.Krishnan of II year MECH Student got Third Prize in the Project Presentation organized by GCT, Coimbatore on 15.03.2013</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >5.</span></td>
                        <td >
                            <p><span >A. Vaikunda Raj of III year MECH Student got First Prize in the Paper Presentation organized by Sona Collge Of Engineering on 12.03.2013</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >6.</span></td>
                        <td >
                            <p><span >C. Silambarasan of IV year MECH Student got First Prize in the Paper Presentation organized by Sona Collge Of Engineering on 12.03.2013</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >7.</span></td>
                        <td >
                            <p><span >C. Silambarasan of IV year MECH Student got First Prize in the Project Presentation organized by Muthayamal Engineering College on 08.03.2013</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >8.</span></td>
                        <td >
                            <p><span >A. Vaikunda Raj of III year MECH Student got First Prize in the Project Presentation organized by Muthayamal Engineering College on 08.03.2013</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >9.</span></td>
                        <td >
                            <p><span >S. Manikandan of IV year MECH Student got First Prize in the Project Presentation organized by Muthayamal Engineering College on 08.03.2013.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >10.</span></td>
                        <td >
                            <p><span >K. Pradeep of III year MECH Student got Third Prize in the Engine Assembly organized by Muthayamal Engineering College on 08.03.2013.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >11.</span></td>
                        <td >
                            <p><span >R. Bala Kumaran of IV year MECH Student got Third Prize in the Project Presentation organized by SVS College of Engineering on 23.02.2013.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >12.</span></td>
                        <td >
                            <p><span >R. Naresh Kumar of IV year MECH Student got Third Prize in the Project Presentation organized by SVS College of Engineering on 23.02.2013.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >13.</span></td>
                        <td >
                            <p><span >S. Vigneshwaran of IV year MECH Student got Third Prize in the Project Presentation organized by SVS College of Engineering on 23.02.2013.</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >14.</span></td>
                        <td >
                            <p><span >Vibin Varghese of IV year MECH Student got First Prize in the Technical Quiz organized by Vetri Vinayaha College Of Engineering And Technology on 19.10.2012</span></p>
                        </td>
                    </tr>
                    <tr >
                        <td ><span >15.</span></td>
                        <td >
                            <p><span >Vibin Varghese of IV year MECH Student got First Prize in the Gaming organized by Vetri Vinayaha College Of Engineering And Technology on 19.10.2012</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

//Publications
const Publications = () => {
    return (
        <div>
            <TopImage />
            <div className="p-3">
                <div class="main-item">
                    <div class="itemBody">
                        <div class="itemFullText">
                            <p ><span className="middle-text text-primary" ><strong>Academic Year 2020 - 2021</strong></span><span ></span></p>
                            <p ><span  ><strong>International / National Journals</strong></span><span ></span></p>
                            <ul>
                                <li ><span>A.Kannan, R.Mohan, Dr.R.Vishwanathan amp; N.Sivashankar,2020” Experimental Investigation on Surface Roughness Tool Wear and Cutting force in turning of Hybrid (Al7075+Sic+Gr) Metal Matrix Composites,journal of Materials Research and technology” (Published in online).</span></li>
                                <li><span>Ganapathi Saravanan, Ramasamy Venkatachalam, Gurusamy amp; Nallakumarasamy, 2020 “Experimental assessment on the impact of cutouts on a hollow shaft system, Materials Testing, Vol.11, issue 62, pp1143-1146.</span></li>
                                <li><span>N. Ravikumar, P.Sharmila, S.P.Premnath, Rajakumar S Rai, J.Mohammed Feros Khan, Ram Subbiah, 2020 “ Performance and Optimization of parameters on rubber punching process, Elsevier Materials todayProceedings . (Published in online).</span></li>
                                <li><span>N.Sivashankar , Dr.R.Viswanathan, Dr.K.Periasamy, Dr.R.Venkatesh ,S.Chaandrakumar,2020” Multi objective optimization of performance characetristics in drilling of Mg AZ61 using twist end mill drill tool”, Elsevier – materials today proceedings. (Published in online)</span></li>
                                <li><span>Dr.D.Jagadeesh, M.Vivekanandhan, A.Natarajan, S.Chandrasekar,2020” Experimental conditions to identify the ideal shape of dryer investigation of Sx shapes of solar green house dryer in no load”, Elsevier – materials today proceedings. (Published in online)</span></li>
                                <li><span>V.Gopinath, R.Perisamay, G.Selvakumar, RA.Kingslly, S.Logeswaran,2020”Evaluation of the effect of gryogenic treatment of HSS drills in drilling SS310”, Elsevier – materials today proceedings. (Published in online)</span></li>
                                <li><span>Ra.Aravind, V.muthukumar, S.Kumaravel, E.Sivaprakash,2020” performance assessment of 2X90 TPH (AFBC) boiler and study of Hp heater”, Elsevier – materials today proceedings. (Published in online)</span></li>
                                <li><span>M.Vivekanandhan, Dr.K.Periasamy , C.Dineshbabu,G.Selvakumar, R.Arivazhagan,2020” Experimental Invetigation of Six Shapes of Solar Greenhouse Dryer in No Load Conditions to Identify the Ideal Shapes of Dryer”, Elsevier – materials today proceedings (Published in online)</span></li>
                                <li><span>M.Vivekanandhan, Dr.D.Jagadeesh, A.Natarajan, N.Mohan, M.Dineshkuar,2020” Experimental and CFD Investigation of Fully Developed Flow Solar Air Heater”, Elsevier – materials today proceedings (Published in online)</span></li>
                                <li><span>M.Vivekanandhan, Dr.R.Venkatesh, R.Periyasamy, S.Mohankumar, L.Devakumar,2020” Experimental and CFD Investigation of Helical Coil Heat Exchanger with Flower Baffle”, Elsevier – materials today proceedings (Published in online)</span></li>
                                <li><span>Mr.M.Vivekanandhan Dr.G.Saravanan Mr.V.Vijayan Mr.K.Gopalakrishnan Mr.J.Phani Krishna,2020” Experimental and CFD Investigation of Spiral Tube Heat Exchanger”, Elsevier – materials today proceedings (Published in online)</span></li>
                            </ul>
                            <p ><strong><span >International Conferences</span></strong></p>
                            <ul>
                                <li ><span>K.Karthik. ‘Optimization of WEDM Parameters for Machining of AZ31B Mg Alloy using Taguchi Method’ International Conference on ‘Futuristic Trends in Mechanical Engineering’ atPresidency University, Bengaluru on 11 th amp; 12 th September 2020.</span></li>
                                <li ><span>K.Balasubramani. ‘Optimization of Catalytic converter emission performance for Genset Diesel Engine amp; without Fuel additives’ International virtual Conference on ‘Recent Innovation in Science, Engineering and Technology’ at M.Kumarasamy College of Engineering, Karur on 03 rd July amp; 04 th July 2020.</span></li>
                                <li ><span>Dr.R.Venkatesh, ‘Performance of Temperature of a Room by using Solar Chimney’ International virtual Conference on ‘Recent Innovation in Science, Engineering and Technology’ atM.Kumarasamy College of Engineering, Karur on 03rd <span>amp;</span>04th July 2020.</span></li>
                                <li ><span>Dr.R.Venkatesh, ‘Optimization and Experimental Investigation of Spiral Coil Heat Exchanger under Tema Standards’ in International virtual Conference on ‘Recent Innovation in Science,Engineering and Technology’ at M.Kumarasamy College of Engineering, Karur on 03 rd July amp; 04 th July 2020.</span></li>
                                <li ><span>V.Muthukumar ‘Clean Iron Casting Production’ in International virtual Conference on ‘Recent Innovation in Science, Engineering and Technology’ at M.Kumarasamy College of Engineering,Karur on 03 rd July amp; 04 th July 2020.</span></li>
                            </ul>
                            <p ><span className="middle-text text-primary"  ><strong>Academic Year 2019 - 2020</strong></span></p>
                            <p ><span  ><strong>International / National Journals</strong></span></p>
                            <ul>
                                <li><span>Venkatesh.R,2020” Combustion analysis of biodiesel blends with different piston geometries”, Journal of Thermal Analysis and Calorimetry, (Published in online)</span></li>
                                <li><span>Chandrakumar.S, Periasamy.K, Sivashankar.N, Vairamani.V,2020” Effect of Thurst Force and Torque Analysis on Chemically Treated Kevlar Reinforced Composites during Drilling Process”, International Journal of Engineering and Advanced Technology, Vol.9 issue No. 3, pp-3101-3106</span></li>
                                <li><span >Ganapathy Saravanan, Ramasamy Venkatachalam and Gurusamy Nallakumarasamy, 2019” Effect of Cut- outs on the vibrational characteristics of a hollow shaft system”, Materials Testing, Vol.61., No. 7, Pages 652-658.</span></li>
                                <li><span >Sathish Thanikodi, DineshKumar Singaravelu, Chandramohan Devarajan, Vijayan Venkataraman, Venkatesh Rathinavelu, 2019” Tlonn for the Effective Prediction of Heat Transfer Rates in Tube Heat Exchanger”, Thermal Science, Vol.9., No. 12, Pages 922-927.</span></li>
                                <li><span >Gopinath.V, Selvakumar.G and Periyasamy. R, 2019” Performance and Emission Characteristics of Preheating Corn Oil Methyl Ester in CI Engine”, Mechanika, Vol.25., No. 5 Pages 413-418.</span></li>
                                <li><span >Gobinath Velu Kaliyannan,Senthil Velmurugan Palanisamy,Manivasakan Palanisamy, Mohankumar Subramanian,Prabhakaran Paramasivam Rajasekar Rathanasamy, 2019” Development of sol-gel derived gahnite anti-reflection coating for augmenting the power conversion efficiency of polycrystalline silicon solar cells”, Materials Science-Poland, Vol.37, No. 3, pp. 465-472</span></li>
                                <li><span >A.Natarajan , Dr.R.Venkatesh , Dr.S.Gobinath,L.Devakumar and K.Gopalakrishnan, 2019 “CFD Simulation of Heat Transfer Enhancement in Circular Tube With Twisted Tape Insert by Using Nanofluids” Elsevier – materials today proceedings, 2214-7853/2019 Elsevier Ltd.</span></li>
                                <li><span >V.Vairamani, N.Mohan,, Dr.Venkatesh, M.Sakthivel and S.K.Karthikeyan, 2019 “Optimization And Microstructure Analysis of Corten Steel Joint in MAG Welding by Post Heat Treatment”, Elsevier – materials today proceedings. 2214-7853/2019 Elsevier Ltd.</span></li>
                                <li><span >Kawin.P, Dr.D.Jagadesh,G.Saravanan and K.Periasamy, 2019 “Optimization of SugarCaneBAGGASSE Ash with Al2Si10Mg alloy Comoposite”, Elsevier – materials today proceedings. 2214-7853/2019 Elsevier Ltd.</span></li>
                                <li><span >Mohankumar. S ,Aravind. Ra,SelvaKumar. G,Raja. P and Selvam. V, 2019 “Experimental Investigation on the Tribological -Mechanical Properties of B4c And Fly Ash Reinforced Al 359 Composites’. 2214-7853/2019 Elsevier Ltd.</span></li>
                                <li><span >C.Dineshbabu, R.Arivazhagan Dr.R.Venkatesh K.Balasubramani and R.Periyasamy, 2019” Investigation of Aspect Ratio and Friction on Barrelling in Billets of Aluminium Upset Forging”, Elsevier – Materials Today Proceedings”, 2214-7853/2019 Elsevier Ltd.</span></li>
                                <li><span >Selvakumar.G, Mahendran.J, Thirunavukkarasu.R, Periyasamy. R, Gopinath.V,2019” Emission Characteristics of Preheating Corn oil Biodiesel Blend in CI Engine”, International Journal of Recent Technology and Engineering, vol.8, No. 4,pp.8251-8254.</span></li>
                                <li><span >V, Vivekanadan.M, Venkatesh.R, Rajaguru.K and Godwin Anthony.A 2020, “CFD Modelling and analysis of two phase vapor separator” Journal of thermal Analysis and Calorimetry. Online Published</span></li>
                                <li><span >Dr.A.Nithya AP, Mechanical Engineering presented paper on “A Study on customer’s Perception and special Emphasis of Emerging Market on Bajaj Two Wheeler” in the International Journal on Management Research, Vol11,Issue no.3, March 2020,ISSN: 2229-6883</span></li>
                                <li><span >Periasamy.K, Sivashankar.N, Chandrakumar.N and Viswanathan R 2020 “Measurement of Friction and wear in Aluminium Alloy Al7075/Sic and Gr Processed by Friction Stir Method” International Journal of Innovation Technology and Exploring Engineering, Vol.9, pp278-281</span></li>
                            </ul>
                            <p ><strong><span >International Conferences</span></strong></p>
                            <ul>
                                <li><span >Gopalkrishnan, “Efficiency Analysis of Turbine and Failure analysis of High Pressure Feed water”, 2nd International Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13th march 2020.</span></li>
                                <li><span >M.Praveen, “Improving Recovery boiler Efficiency using Automatic Air Port Rodding”, 6th International Conference on Engineering and Technologyat Selvam College of Technology, Namakkal on 04  05thMarch 2020</span></li>
                                <li><span >Raja, “An Experimental Stress Analysis on 60˚ Metre Bend” , 2nd International Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13th March 2020.</span></li>
                                <li><span >Balasubramani, “ Active Brake Torque Vectoring in Differential Unit” 6th International Conference on Engineering and Technoogy (ICET-2020) at Selvam College of Technology, Nammakkal on 04th  05th March 2020.</span></li>
                                <li><span >M.Dinesh Kumar, “Design and CFD Analysis of intake Manifold of four Cylinder Engine” 6th International Conference on Engineering and Technoogy (ICET-2020) at Selvam College of Technology, Nammakkal on 04th  05th March 2020</span></li>
                                <li><span >C.DineshBabu, “Reduction of Heat in Railway Axle Bearing” 6th International Conference on Engineering and Technology (ICET-2020) at Selvam College of Technology, Nammakkal on 04th  05th March 2020</span></li>
                                <li><span >S.Mohan Kumar “Experimental Investigation and Macro Property Analysis on AL6282 Metal Matrix Reinforced with TIO2 6th International Conference on Engineering and Technology at Selvam College of Technology on 04th  05th March 2020</span></li>
                                <li><span >G.Selvakumar “Modest Try to Add First Grade Fuel extraction from waste tire Scraps to Diesel Engine”, 6th International Conference on Engineering and Technology at Selvam College of Technology on 04th  05th March 2020</span></li>
                                <li><span >G.Selvakumar “Measurement of MRR and Circularity Error in Magnesium Alloy AZ61D during drilling” 6th International Conference on engineering and Technology at Selvam College of Technology on 04th  05th March 2020</span></li>
                                <li><span >Nithya “business Management and its Market Strategies” International Conference on “Catalysis in forming Business Management-ICCFBM’20” at Vijay Institute of Management on 7 Feb 2020.</span></li>
                                <li><span >A.Nithya , “Managing Business Technology and its Innovations” International Conference on “Catalysis in forming Business Management-ICCFBM’20” at Vijay Institute of Management on 7 Feb 2020</span></li>
                                <li><span >A.Natarajan, “Development of Quality in Casing by minimizing Defects ” , 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13<sup>th</sup> March 2020</span></li>
                                <li><span >R.Thirunavukkarasu “Effect of Nano Solid Additives to Diesel Engine to Improve the Engine Performance ”, 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology held on 13<sup>th</sup> March 2020</span></li>
                                <li><span >P.Raja, “ Problems in End hole Drilling of different length of Conveyor Roller Idler Shaft ”, 2nd national Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13<sup>th</sup> March 2020</span></li>
                                <li><span >S.K.Karthikeyan, “ Experimental Analysis and Optimization of parameter in WEDM on SS304”, 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13<sup>th</sup> March 2020</span></li>
                                <li><span >Arivazhagan, “Performance and characteristics comparsion of diesel  Bio fuels”, 2nd National Conference on Recent trends in Engineering  Technology on VetriVinayaha College of Engineering  Technology held on 13<sup>th</sup> March 2020.</span></li>
                                <li><span >N.Mohan, “NDT Evaluation and comparative analysis of steel with/without post wed heat treatment”, 2nd National Conference on Recent trends in Engineering  Technology on VetriVinayaha College of Engineering  Technology on 13 March 2020</span></li>
                                <li><span >S.Chandrakumar, “Friction Stir Welding on AL-6082 by using taper cylindrical tool profile”, 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology held on 13<sup>th</sup> March2020</span></li>
                                <li><span >R.Venkatesh, “ Friction Stir Welding on AL-6082 by using taper cylindrical tool profile”, 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13<sup>th</sup> March 2020</span></li>
                                <li><span >N.Ravikumar, “An Experimental Array of Pressure Drop for fluid flow mitre bend in various pipes”, 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology held on 13<sup>th</sup> March 2020</span></li>
                                <li><span >V.Selvam, “Design and Analysis of Rotor in motor”, 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13<sup>th</sup> March 2020</span></li>
                                <li><span >R.Periyasamy, “ Design and Analysis of Foot Valve in Pump”, 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13<sup>th</sup> March 2020</span></li>
                                <li><span >S.Gobinath, “Optimization of catalytic Convertor for Diesel Engine applications with/ without thermal coatings”, in 2nd National Conference on Recent trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13<sup>th</sup> March 2020</span></li>
                                <li><span >C.Dineshbabu “Poultry egg collection ‘C’ Type Conveyor System using Geneva Mechanism”, National Conference organized St Joseph’s College of Engineering and Technology, Thanjavur on 13th March 2020</span></li>
                                <li><span >A.Natarajan, “A Novel Approach for Increasing Efficiency of Solar and Heating by improving flow distribution using guide vanes and Flow Restriction”, National Level Conference on “Advance in Mechanical Science-AIMS 2020” at Mahendra Institute of Technology, Nammakkal on 14th February 2020</span></li>
                                <li><span >R.Karthik, “Helical Coil Heat Exchanger with Flower Shaped Baffle Plates to improve residence time inside shell” in National Level Conference on “Advance in Mechanical Science-AIMS 2020” at Mahendra Institute of Technology, Nammakkal on 14th February 2020</span></li>
                                <li><span >S.Mohan Kumar “Improvisation of Scale free Reheating in steel Billets” 3rd National conference on current  Emerging Process technology (CONCEPT 2020) at Kongu Engineering College, Erode on 25th Jan 2020</span></li>
                                <li><span >K.Periyasamy, “Helical Coil Heat Exchanger with Flower Shaped Baffle Plates to improve residence time inside shell” ,National Level Conference on “Advance in Mechanical Science-AIMS 2020” at Mahendra Institute of Technology, Nammakkal on 14th February 2020</span></li>
                                <li><span >A.Nithya “The Impact Total Quality Management on Organisation performance” National Level Conference on “Advance in Mechanical Science-AIMS 2020” at Mahendra Institute of Technology, Nammakkal on 14th February 2020</span></li>
                                <li><span >V.Selvam “The Impact Total Quality Management on Organisation performance” National Level Conference on “Advance in Mechanical Science-AIMS 2020” atMahendra Institute of Technology, Nammakkal on 14th February 2020</span></li>
                                <li><span >E.Sivaprakash “Belt  Screw Sorting Machine” , 9th National Level Conference on Renewable Energy system Project Expo “ELECTRONIKA-2K20” at Aishwarya College of Engineering and Technology, Erode on 13th March 2020</span></li>
                                <li><span >Ra.Aravind “Performance assessment of 2× 90TPH (AFBC) Boiler and study of HP Heater”9th National Level Conference on Renewable Energy system Project Expo “ELECTRONIKA-2K20” at Aishwarya College of Engineering and Technology, Erode on 13th March 2020</span></li>
                                <li><span >N.Sivashankar, “Development of Quality Cost system in Cast Iron Foundries”, 2nd National Conference on Recent Trends in Engineering  Technology at VetriVinayaha College of Engineering  Technology on 13th March 2020</span></li>
                                <li><span >V.Muthukumar, “ Method of Improving Boiler Efficiency”, 2nd National Conference on Recent Development in Automobile and Mechanical Engineering (RDAME’20) at Easwari Engineering College, Chennai on 11th March 2020</span></li>
                                <li><span >A.Arivazhagan, “Experimental Investigation and Optimization Machining parameter for EDM using Copper Electrode on D2 Steel”, 9th National Level Conference on Renewable Energy system Project Expo “ELECTRONIKA-2K20” at Aishwarya College of Engineering and Technology, Erode on 13th March 2020</span></li>
                                <li><span >R.Prakash, “Comparative Mechanical Properties of AL- Metal Matrix Connecting ROD with Various reinforcement”, 9th National Level Conference on Renewable Energy system Project Expo “ELECTRONIKA-2K20” at Aishwarya College of Engineering and Technology, Erode on 13th March 2020</span></li>
                            </ul>
                            <p ><span className="middle-text text-primary" ><strong>Academic Year 2018 - 2019</strong></span></p>
                            <p ><span  ><strong>International / National Journals</strong></span></p>
                            <ul>
                                <li><span >Viswanathan, R, Sivashankar, N, Chandrakumar, S and Karthik, R 2019, ‘Improving Corrosion Resistance of Magnesium Alloy for Aerospace Applications’, International Journal of Mechanical and Production Engineering Research and Development, vol. 9, no. 3, pp. 769-774.</span></li>
                                <li><span >Periasamy, K, Jayaraman, M and Rajkumar, S 2019, ‘Mechanical Properties of 7075-t6 Aluminium Alloys Surface Hybrid Composites Synthesized by Friction Stir Processing’, International Journal of Rapid Manufacturing, vol. 8, no. 1/2 pp. 52-64.</span></li>
                                <li><span >Vivekanandan, M, Venkatesh, R, Sathish, T, Dinesh, S, Ravichandran, M and Vijayan, V 2018, ‘Pressure Vessel Design Using PV-ELITE Software with Manual Calculations and Validation by FEM’, Journal of Engineering Technology, vol. 8, no. 1, pp. 425–433.</span></li>
                                <li><span >Venkatesh, R, Vijayan, V, Parthiban, A, Sathish, T and Siva Chandran, S 2018, ‘Comparison of Different Tool Path in Pocket Milling’, International Journal of Mechanical Engineering and Technology, vol. 9, no. 12, pp. 922–927.</span></li>
                                <li><span >Vijayan, V, Parthiban, A, Sathish, T, Siva Chandran, S and Venkatesh, R 2018, ‘Performance Analysis in End Milling Operation’, International Journal of Mechanical Engineering and Technology, vol. 10, no. 11, pp. 2263–2271.</span></li>
                                <li><span >Parthiban, A, Sathish, T, Siva Chandran, S, Venkatesh, R and Vijayan, V 2018, ‘Optimization of CO<sub>2</sub> Laser Cutting Parameters on Austenite Stainless Steel Using Grey Relational Analysis’, International Journal of Mechanical Engineering and Technology, vol. 10, no. 1, pp. 984-992.</span></li>
                                <li><span >Jagadeesh, D, Venkatachalam, R and Nallakumarasamy, G 2018, ‘Transient Computational Fluid Dynamics Investigations on Thermal Performance of Solar Air Heater with Hollow Vertical Fins’, International Scientific Journal-Thermal Science, vol. 22, no. 6, pp. 2389-2399.</span></li>
                                <li><span >Gopinath, V and Shanmugha Sundaram, P 2018, ‘Performance Analysis of Diesel Engine Using Corn Oil Biodiesel and Preheating of Inlet Air: The Taguchi Approach’, Ecology, Environment and Conservation, vol. 24, no. 2, pp. 916-923.</span></li>
                                <li><span >Gobinath, V, Kaliyannan, Palaniappan, SathishKumar and Mohankumar, S 2018, ‘Mechanical and Tribological Behavior of SiC and Fly Ash Reinforced Al 7075 Composites Compared to SAE 65 Bronze’, Materials Testing, vol. 60, no. 12, pp. 1225-1231.</span></li>
                                <li><span >Gobinath, S, Senthilkumar, G, Beemkumar, N 2018, ‘ Comparative study of room temperature control in buildings with and without the use of PCM in walls’, Energy Sources ,Part A: Recovery, Utilization and Environmental Effects, Vol. 40, no. 14, pp 1765 – 1771.</span></li>
                                <li><span >Gobinath, S, Senthilkumar, G, Beemkumar, N 2018, ‘Air nanobubble enhanced combustion study using mustard biodiesel in a common rail direct injection engine’, Energy Sources ,Part A: Recovery, Utilization and Environmental Effects, Vol. 40, no. 15, pp 1809-1816.</span></li>
                                <li><span >Kalaiselvan, C, Rao, Lokavarapu Bhaskara 2018,’ Highly Accelerated Life Testing of Ceramic Capacitors Using Capacitor Test Board by Lognormal Method and Integrated with PLM Solutions’, Advanced Science Letters, American Scientific Publishers Volume 24, Number 8, pp.5859-5865(7).</span></li>
                                <li><span >Devakumaran, P, Balakrishnan, C, Chandran,S, Azhaguraja,C Veluchamy,B and Vivekanandan,M 2018,’Attainment Of Fully Developed Flow in Air Distribution Duct of Boiler Using CFD Analysis’,IJARIIE, Vol-4 Issue-2, pp,1021-1025.</span></li>
                            </ul>
                            <p ><strong>International Conferences</strong></p>
                            <ul>
                                <li><span>Selvam V, ‘Reducing Cycle Time using Special Tools in CNC Machine’, International Conference on Information Sciences and Renewable Energy Sources at Selvam College of Technology, Namakkal on 7<sup>th</sup> and 8<sup>th</sup> March 2019.</span></li>
                                <li><span>Karthik R, ‘Involuntary Temperature Observing System for Poultry Eco-Friendly Setup’, International Conference on Information Sciences and Renewable Energy Sources at Selvam College of Technology, Namakkal on 7<sup>th</sup> and 8<sup>th</sup> March 2019.</span></li>
                                <li><span>Vairamani V, ‘Machinability of Aluminium Composite Matrix with Powder Mixed Electric Discharge Medium’, International Conference on Information Sciences and Renewable Energy Sources at Selvam College of Technology, Namakkal on 7<sup>th</sup> and 8<sup>th</sup> March 2019.</span></li>
                                <li><span>Saravanan G, ‘Design and Fabrication of Trolley for Modified Assembly Layout’, International Conference on Information Sciences and Renewable Energy Sources’ at Selvam College of Technology, Namakkal on 7<sup>th</sup> and 8<sup>th</sup> March 2019.</span></li>
                                <li><span>Jagadeesh D, ‘Optimisation of Spring in Safety Valve’, International Conference on Information Sciences and Renewable Energy Sources’ at Selvam College of Technology, Namakkal on 7<sup>th</sup> and 8<sup>th</sup> March 2019.</span></li>
                                <li><span>Mohan N, ‘Design a Fixture for Setting Stub for Manufacturing Header in P91’, International Conference on Information Sciences and Renewable Energy Sources at Selvam College of Technology, Namakkal on 7<sup>th</sup> and 8th March 2019.</span></li>
                                <li><span>Balasubramani K, ‘Recovery of Heat and Water from Boiler Blow Down’, International Conference on Information Sciences and Renewable Energy Sources at Selvam College of Technology, Namakkal on 7<sup>th</sup> and 8<sup>th</sup> March 2019.</span></li>
                                <li><span>Gobinath S, ‘Utilization of Water Heat by Heat Exchanger’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Selvakumar G, ‘Improvement of Turbine Efficiency in 210MW Thermal Power Station’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Chandrakumar S, ‘Startup Vent’s Steam Utilization in Chemical Recovery Boiler’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering’ at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Ravikumar N, ‘Design of Hydraulic Lift with Automobile Unloader for House Pulber’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Balasubramani K, ‘Problem Resolving Using Eight D Method’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Gopinath V, ‘Attainment of Fully Developed Flow in Boiler Duct’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Venkatesh R, ‘Design and Fabrication of Bike Engine for Irrigating Domestic Garden’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Arivazhagan R, ‘Study and Analysis on Supply Chain Management’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Saravanan G, ‘FEA of Supercritical Boiler Back Pass Lug Assembly’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Saravanan G, ‘Lubrication of Paper Machine in Pasaban Pulper Rotor Unit’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Gopalakrishnan K, ‘Eliminate the Repeated in CAP and Base Extruder’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Gopalakrishnan K, ‘Benefits of Baskets Changing from Gas Side to Air of RAPH’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                                <li><span>Sivashankar N, “Design and Fabrication of Bike Engine for Irrigating Domestic Garden’, International Conference on Recent Trends in Nanomaterials for Energy, Environmental and Engineering at K.Ramakrishnan College of Technology, Tiruchirappalli on 14<sup>th</sup> and 15<sup>th</sup> March 2019.</span></li>
                            </ul>
                            <p >National Conferences<span></span></p>
                            <ul>
                                <li>Balasubramanian R P, ‘Automatic Hydraulic Vertical Baling Press Machine’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th </sup>March 2019.</li>
                                <li>Venkatesh R, ‘Comparative Analysis of Chromium Coated HSS Tool and Non Coated HSS Tool’, National Conference on Advancement’s in Mechanical Engineering at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Venkatesh R, ‘Conversion of Conventional Gear Box Application to Plantary Gear in Sugar Mills’, National Conference on Advancement’s in Mechanical Engineering at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Venkatesh R, ‘Problem Resolving Using 8D Method’, National Conference on Advancement’s in Mechanical Engineering at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Devakumar L, ‘Optimization of EDM for Improving Geometrical Errors’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Karthikeyan S K, ‘An Experimental Investigation and Process Parameter Optimization of PMEDM Process on SS304 Steel’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Jagadeesh D, ‘Design and Fabrication of Automatic Waste Collecting Robot’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Sivaprakash E, ‘Fabrication of Spatter Grinding Machine’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Sivaprakash E, ‘Sensor Operated Automatic Bamming Machine’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Karthikeyan S K, ‘Performance Analysis of Watertube Boiler and Its Tube Failure’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Kawin N, ‘Experimental Study of Automatic Lubrication System’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Gopinath V, ‘Analysis of Overall Equipment Effectiveness of a Panel Processing Machine’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Venkatesh R, ‘Conversion of Conventional Boiler to Fluidized Bed Combustion Boiler in Sugar Mill’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Sivashankar N, ‘Design and Analysis of Bending Angle in Various Material’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Raja P, ‘Design and Fabrication of Pneumatic Injection Molding Machine’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019</li>
                                <li>Periasamy K, ‘Effect of Corrosion Behavior of Mild Steel Coated with Nickel and Chromium’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Periasamy K, ‘Poultry Egg Collection U Type Automatic Converter System’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Selvakumar G, ‘Study and Analysis of Circularity Error in CNC Machines’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Mohankumar S, ‘Chemical Recovery Boiler Efficiency Improvement by Utilizing Recovery Boiler Blow Down Water’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Karthik R, ‘Design of Faceplate for Horizontal Boring Machine’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Dineshbabu C, ‘Design of Effective Cutting Plan Using Laser and Oxy Fuel Cutting’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Natarajan A, ‘Elimination of Roll Off in Dishpad and Dust in Scorching Machine’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Kumaravel S, ‘Design and Analysis of Finishing House Pulper Belt Conveyor System Using Sensors’, National Conference on Recent Trends in Engineering and Technology at Vetri Vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                                <li>Raja P, ‘Investigation of Mechanical Behavior of Dissimilar Metal Welding for Monel and Inconel’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Vairamani V, ‘Comparative Analysis of Cryo Treated Weld Vs Conventional Weld’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Sakthivel M, ‘The Economic Reuse of Sugarmill Waste Management’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Balasubramanian R P, ‘Pneumatic Bearing Puller’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Muthukumar V, ‘A Study of Mechanical Properties of TIG Welding Joint of Mild Steel and Stainless Steel’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Kumaravel S, ‘Design of Chamfering Setup in Grinding Machine’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Dineshbabu C, ‘Optimization of Boiler Pipe Lines Using Caeser’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Meganathan J, ‘Rework Analysis in Blow Down Valve Used in Thermal Power Plant’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Mohankumar S, ‘Magneto Abrasive Flow Machining’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Periasamy K, ‘Design of Roller Conveyor with Pneumatic Stopper and Pusher’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Chandrakumar S, ‘Precision Gear-Cut Setting Attachment Through Shaping Machine’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Muthukumar V, ‘Modification of Grease Lubrication into Oil Lubrication System in Vertical Finishing House Pulper’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Ravikumar M, ‘Design and Fabrication of Fixture for Arresting Insulation Blanket of Local Heat Treatment For Circular Joint’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Jagadeesh D, ‘Design of Paddle Agitator for a Semi-Concentrated Black Liquor’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Sakthivel M, ‘Elasto Hydro Dynamic Lubrication in Spur and Helical Gear Contacts’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Arivazhagan R, ‘Problem Resolving in 8D Method’, National Conference on Challenges and Opportunities for Mechanical Engineering at Kongunadu College of Engineering and Technology, Thottiam on 16<sup>th</sup> March 2019.</li>
                                <li>Periyasamy R, ‘Auto Size Changing Mechanism for Paper Machine of Biometric Cutter’, National Conference on Advancements in Mechanical Engineering, at M.Kumarasamy College of Engineering, Karur on 15<sup>th</sup> March 2019.</li>
                                <li>Selvam V, ‘Efficiency and Performance Analysis of Stage I Boiler in TPS II’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Aravind Ra, ‘The Failure Re-Analysis of Top Mill Roll Shaft’, National Conference on Recent Trends in Engineering and Technology at Rathinam Technical Campus, Coimbatore on 15<sup>th</sup> March 2019.</li>
                                <li>Aravind Ra, ‘Design of Pivotally Tool Holder’, National Conference on Recent Trends in Engineering and Technology at Vetri vinayaha College of Engineering and Technology, Tiruchirappalli on 8<sup>th</sup> March 2019.</li>
                            </ul>
                            <p ><span className="middle-text text-primary" ><strong>Academic Year 2017 - 2018</strong></span></p>
                            <p ><span  ><strong>International / National Journals</strong></span></p>
                            <ul>
                                <li><span >Viswanathan, R, Ramesh, S and Subburam, V 2018, ‘Measurement and Optimization of Performance Characteristics in Turning of Mg Alloy under Dry and MQL Condition’, Measurement, vol. 120, no. 1, pp. 107-113.</span></li>
                                <li><span >Ragunath, N, Arulpandian, P, Gajendran, A, Selvam, V and Kawin, N 2018, ‘Investigation of Immersion Test in Bus body Composites-A Comparative Study on Polymers’, International Journal for Scientific Research and Development, vol. 5, no. 12, pp. 1017-1022.</span></li>
                                <li><span >Elavarasan, E, Mageshkumar, M, Periyasamy, R, Vairamani, V and Karthik, R 2018, ‘Experimental Investigation of Thermoacoustic Driven Thermoacoustic Refrigerator’, International Journal for Scientific Research and Development, vol. 6, no. 1, pp. 116-124.</span></li>
                                <li><span >Mohankumar, S, JeganPrabhakar, J, Kalaiyarasan, B, Kavinkumar, K and Natarajan, P 2018, ‘Design and Fabrication of Bio Composite Helmet’, International Journal for Scientific Research and Development, vol. 6, no. 1, pp. 1262-1263.</span></li>
                                <li><span >Saravanan, G, Rubanraj, R, Parthiban, A, Prakash, P and Ranjith Kumar, P 2018, ‘Experimental Analysis on Automation of Header Hydro Dummy Gas Cutting Machine’, International Journal for Scientific Research and Development, vol. 6, no. 1, pp. 1378-1381.</span></li>
                                <li><span >Sivashankar, N, Mohan, N, Periasamy, K, Vairamani, V and Chandrakumar, S 2018, ‘Stress and Optimal Design of Check Valve Disc Using Finite Element Analysis’, International Journal for Scientific Research and Development, vol. 6, no. 2, pp. 1185-1187.</span></li>
                                <li><span >Ravikumar, M, Kumaravel, S, Sivaprakash, E and Selvakumar, G 2018, ‘Enhancement of Micro-Sized Furniture by Using Wooden Wastes’, International Journal for Scientific Research and Development, vol. 6, no. 2, pp. 2713-2716.</span></li>
                                <li><span >Arivazhagan, R, Krishnan, P, Madhan, M, Mohanrajj, K and Nallasivam, Y 2018, ‘Design and Developing the Efficiency of Centrifugal Pump’, International Journal of Engineering, Science and Mathematics, vol. 7, no. 4, pp. 52-57.</span></li>
                                <li><span >Sureshbabu, S, Udhayaraj, S and Meganathan, J 2018, ‘Forging Defects Analysis in Suspension Arm and Controlling Flash’, International Journal for Scientific Research and Development, vol. 5, no. 11, pp. 122-124.</span></li>
                                <li><span >Raja, P , Abuthakeer, S, AneesAhamed, A, Hariharan, S and Dinesh, S 2018, ‘Power Generation and Reusing the Heat from Tunnel Kiln’, International Journal for Scientific Research and Development, vol. 6, no. 1, pp. 542-543.</span></li>
                                <li><span >Nithya, A and Gobinath, S 2018, ‘A Study on Effectiveness of Advertisements on FMCG’, International Journal of Accounts, Economics and Commerce Research,vol. 4, no. 3,pp. 1-2.</span></li>
                                <li><span >Balasubramani, K, Dineshbabu, C, Karthikeyan, G and Udhayaraj, S 2018, ‘Modernized Advancement of Industrial Washing Machine’, International Journal for Scientific Research and Development, vol. 6, no. 3, pp. 290-293.</span></li>
                                <li><span >Ravikumar, N 2018, ‘Review of Contaminated Lubricants in Bearing and Determination of Flash Temperature in Ansys’, International Journal of Research in Mechanical Engineering, vol. 5, no. 2, pp. 25-26.</span></li>
                                <li><span >Prabhakaran, P, Ranganathan, R, Muthukumar, V, Rajasekar, R, Devakumar, L and Pal, S K 2017, ‘Review on Parameters Influencing the Rice Breakage and Rubber Roll Wear in Sheller’, Archives of Metallurgy and Materials, vol. 62, no. 3, pp. 1875-1880.</span></li>
                                <li><span >Karthick, S, Karthikeyan, S K and Saravanan, G 2017, ‘Design, Analysis and Fabrication of Stair Climbing Robot with Tri-Wheel and Rover Mechanism’, International Journal of Science Technology and Engineering, vol. 3,no. 12, pp. 136 – 139.</span></li>
                                <li><span >Gopinath V, Shanmugasundram, P, Suresh, P, 2017,’Emission analysis of an Engine Operating on Corn Oil Methyl Ester Blends with Air Pre-heater’, International Journals of Renewable Energy Research, vol.7,no.4, pp. 1682-1685.</span></li>
                            </ul>
                            <p ><span >International Conferences</span></p>
                            <ul>
                                <li><span>Venkatesh R, ‘Erosion Controller of Water Wall Tubes in Boiler’, International Conference on Newer Engineering Concepts and Technology at K.Ramakrishnan College of Technology, Tiruchirappalli on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Gobinath S , ‘Alternate Bucket Wheel Drive Transmission System’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science, Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Viswanathan R, ‘Design and Analysis to Improve Effectiveness of Boiler Using Regenerator’ International Conference on Innovation in Biotechnology, Civil and Mechanical Science, Selvam College of Technology on Namakkal 16<sup>th</sup>and 17<sup>th</sup>March 2018</span></li>
                                <li><span>Viswanathan R, ‘Fabrication of Bio-Plastic Products from Crops’ International Conference on Civil, Mechanical, Chemical Engineering and Technologies’ at SVS College of Engineering, Coimbatore on 23<sup>rd</sup>and 24<sup>th</sup>February 2018.</span></li>
                                <li><span>Periasamy K, ‘Studies on the Fabrication of Surface Composites on CAS Aluminum Alloy by Friction Stir Processing’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science, Selvam College of Technology on Namakkal 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Jagadeesh D, ‘Failure Analysis of Output Shaft of Gear Box’ International Conference on Newer Engineering Concepts and Technology at K.Ramakrishnan College of Technology, Tiruchirappalli on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Jagadeesh D, ‘Design of Belt Conveyor for Finishing House Pulper’ International Conference on Sustainable Materials Design and Applications at Kongu Engineering College, Erode on 16<sup>th</sup>and 17th March 2018.</span></li>
                                <li><span>Saravanan G , ‘Automation of Induction Brazing’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science, Selvam College of Technology on Namakkal 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Saravanan G, ‘Development of Tool Holder for Chamfering Bend Tube’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Arivazhagan R, ‘Automatic Brick Measuring System’ International Conference on Innovations in Engineering, Technology and Science’ at K.Ramakrishnan College of Engineering, Tiruchirappalli on 13<sup>th</sup>and 14<sup>th</sup>March 2018.</span></li>
                                <li><span>Balasubramani K, ‘Structural and Thermal Analysis of Disc Brake Using ANSYS’, International Conference on Innovations in Engineering, Technology and Science at K.Ramakrishnan College of Engineering, Tiruchirappalli on 13<sup>th</sup>and 14<sup>th</sup>March 2018.</span></li>
                                <li><span>Gopinath V, ‘Investigation of Cryogenic Treated Drill Bit’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering’, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Karthikeyan S.K, ‘Design of Development of Universal Fixture for Lath Coil’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Karthikeyan S.K, ‘Design and Fabrication of Chest and ABS Crunch Machine’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Dineshbabu C, ‘Slug Removing Magnetic Conveyor’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Selvam V, ‘Elimination of Leakage in Fluid Pipeline of Internal Heat Exchanger’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Karthik R, ‘Advanced in Heat Insulation for Boilers and Pipes’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Mohan N, ‘Analysis on Overall Equipment Effectiveness of a Panel Processing Machine’, International Conference on Newer Engineering Concepts and Technology at K.Ramakrishnan College of Technology, Tiruchirappalli on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Mohan N, ‘Design and Fabrication of Oscillating Shower in Pulp Washing’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Vairamani V, ‘Design of Reel Splitting Machine by Using Sensor’ International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Kumaravel S, ‘Capacity Enhancement in Panel Processing Machine-II’, International Conference on Newer Engineering Concepts and Technology at K.Ramakrishnan College of Technology, Tiruchirappalli on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Raja P, ‘Power Generation and Reusing Heat from Tunnel Kiln’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Selvakumar G, ‘Boiler Tube Failure Analysis’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Selvakumar G, ‘Experimental Investigation on Energy Conversion and Conservation in Thermal Power Plant’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Gajendran A, ‘Performance Analysis of Air Preheater and Economizer in 210MW’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Muthukumar V, ‘Effect of Increasing Inlet Feed Water Temperature on Heat Transfer performance of the Economizer in Coal Fired Power Plant’ International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Muthukumar V, ‘Failure Analysis of Hydraulic System in Telescopic Cranes Working in Mines’ International Conference on Newer Engineering Concepts and Technology at K.Ramakrishnan College of Technology, Tiruchirappalli on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Karthikeyan G, ‘Design of Feeder for Single Roller Ironer’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Karthikeyan G, ‘Performance Test on Diesel Engine by Using Alternative Fuel’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Sivaprakash E, ‘Design and Analysis of Shaft Failure in Paper Machine’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Meganathan J, ‘Experimental and Stress Analysis of Pipe Routing at Various Temperature and Pressure by Changing the Various Material Support’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Meganathan J, ‘Design the Tool for Manufacturing the Ferrule Easily’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Chandrakumar S , ‘Experimental analysis of Various Couplents in Pulse Echo Manual Contact Ultrasonic Testing on Aluminium and Stainless Steels’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Chandrakumar S, ‘Effect of thrust Force and Torque on Kevlar Reinforced Composites During Drilling Process’, International Conference on Contemporary Design and Analysis of Manufacturing and Industrial Engineering Systems at National Institute of Technology, Tiruchirappalli on 18<sup>th</sup>to 20<sup>th</sup>January 2018.</span></li>
                                <li><span>Kawin N, ‘Fabrication of Sandring Machine’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Arulpandian P , ‘Importing Heat Transfer Characteristics of Double Pipe Heat Exchanger using Helical Baffle on the Annular Space’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Karthick S, ‘Design and Fabrication of Water Drying Machine’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Ragunath N, ‘Automatic Brick Measuring System’, International Conference on Innovations in Engineering, Technology and Science at K.Ramakrishnan College of Engineering, Tiruchirappalli on 13<sup>th</sup>and 14<sup>th</sup>March 2018.</span></li>
                                <li><span>Elavarasan E, ‘Design and Fabrication of Mini Refrigerator with Thermoelectric Cooling’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Elavarasan E, ‘Study of Hardness on Copper Alloy Reinforced with Ceramics for Machine Application’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Elavarasan E, ‘Hydrogen Fired Steam Boiler’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Elavarasan E, ‘A Combined Inflated Airbed and Additional Booster System for Emergency Landing’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Elavarasan E, ‘Tribological Test on Copper Based Hybrid Composite Material’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Elavarasan E, ‘Design and Fabrication of Mini Solar Refrigerator’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Mohankumar S, ‘Design and Fabrication of Second Operation Capstan Lathe’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Periyasamy R, ‘Experimental and Numerical Analysis of Heat Transfer on Plate in Heat Exchanger at Different Fins with Ceramic Coating’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Mageshkumar M, ‘Performance Evaluation of Four Stroke Diesel Engine with Pungamia Biodiesel as A Fuel’, International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering, Kongunadu College of Engineering and Technology, Thottiam on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li><span>Ravikumar N, ‘Cycle Time Reduction of Gr91 Header’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup>and 17<sup>th</sup>March 2018.</span></li>
                                <li><span>Venkatesh R, ‘Computing Exposure Time of Carbon Steel’, International Conference on Newer Engineering Concepts and Technology at K.Ramakrishnan College of Technology, Tiruchirappalli on 23<sup>rd</sup>and 24<sup>th</sup>March 2018.</span></li>
                                <li>Sivaprakash E, ’Fixture for Plug type End Cover Fitup’, International Conference on Newer Engineering Concepts and Technology at K.Ramakrishnan College of Technology, Tiruchirappalli on 23<sup>rd</sup> and 24<sup>th</sup> March 2018.</li>
                                <li>Vairamani V, ’ Conservation of Stream in Paper Dryer’, International Conference on Innovation in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 16<sup>th</sup> and 17<sup>th</sup> March 2018.</li>
                                <li>Mohan N, ’Experimental Investigations of Mechanical Properties of Hardfaced Aluminium by TIG Welding’, International Conference on Advance in Mechanical, Production  Industrial Engineering at AMPIE on 14<sup>th </sup>and 15<sup>th</sup> Feb. 2018</li>
                            </ul>
                            <p ><strong>National Conferences</strong></p>
                            <ul>
                                <li><span>Ravikumar N, ‘Designing of Multiple Hydro test Facility for Full Bore Valve Assembly’, National Conference on Engineering and Technology’ at Narasu’s Sarathy Institute of Technology, Salem on 23<sup>rd</sup>March 2018.</span></li>
                                <li><span>Udhayaraj S, ‘Design and Fabrication of Annealing Chain Conveyor’, National Conference on Engineering and Technology’ at Narasu’s Sarathy Institute of Technology, Salem on 23<sup>rd</sup>March 2018.</span></li>
                                <li><span>Sureshbabu S, ‘Design and Fabrication of Financially Repairing Radiant Tubes’, National Conference on Cutting Edge Technologies in Electrical, Communication and Soft Computing Techniques at Saranathan College of Engineering, Tiruchirappalli on 9<sup>th</sup>March 2018.</span></li>
                                <li><span>Sivashankar N, ‘Root Cause Analysis and Recommendation on Camshaft Operation Scrap’, National Conference on Engineering and Technology’ at Narasu’s Sarathy Institute of Technology, Salem on 23<sup>rd</sup>March 2018.</span></li>
                                <li><span>Elavarasan E, ‘Design and Fabrication of Double Die Drawing Process’, National Conference on Cutting Edge Technologies in Electrical, Communication and Soft Computing Techniques at Saranathan College of Engineering, Tiruchirappalli on 9<sup>th</sup>March 2018.</span></li>
                                <li><span>Kumaravel S, ‘Experimental Analysis of Increasing Condenser Efficiency’, National Conference on Engineering and Technology’ at Narasu’s Sarathy Institute of Technology, Salem on 23<sup>rd</sup>March 2018.</span></li>
                                <li><span>Kumaravel S and Ravikumar M, ‘Design and Development of Furniture by Using Micro Sized Wooden Wastes’, National Conference on Recent Trends in Mechanical and Manufacturing at Dhanalakshmi Srinivasan Engineering College, Tiruchirappalli on 26<sup>th</sup>March 2018.</span></li>
                            </ul>
                            <p ><span className="middle-text text-primary" ><strong>Academic Year 2016 - 2017</strong></span></p>
                            <p ><span  ><strong>International / National Journals</strong></span></p>
                            <ul>
                                <li><span >Viswanathan, R, Ramesh, S, Elango, N, and Kamesh kumar, P 2017, ‘Temperature Measurement and Optimization in Machining Magnesium Alloy Using RSM and ANOVA’, Pertanika Journal of Science and Technology, vol. 25, no. 1, pp. 255-262, 2017.</span></li>
                                <li><span >Karthikeyan, S K, Siva Krishnan, K, Siva Raj, B, Sasikumar, M and Vijayakumar, R 2017, ‘Effect of Fuel Injection Pump on The Engine and Simplified Pump Setting Procedure’, International Journal for Scientific Research and Development, vol. 5, no. 1, pp. 959-961.</span></li>
                                <li><span >Arunkumar, M, Shivalingappa, D, Kumaravel, S and Sathish Kumar, A 2017, ‘An Experimental Investigation on Corner Skidding Control System’, International Journal on Recent and Innovative Trend in Technology, vol. 3, no. 3, pp. 42-48.</span></li>
                                <li><span >Arunkumar, M, Ashwin Kannan, S, Sathish Kumar, A and Kumaravel, S 2017, ‘Simulation of Corner Skidding Control System’, International Journal of Advanced Engineering Research and Science, vol. 4, no. 3, pp. 120-125, 2017.</span></li>
                                <li><span >Saravanan, G, Sankaranarayanan, N, Senthamizhan, S and Sureshkumar, S and Vijay, M S, 2017, ‘The Economic Reuse of Sugar Mill Waste Management’, International Journal of Modern Trends in Engineering and Science, vol. 4, no. 4, pp. 332-337.</span></li>
                                <li><span >Gopinath, V, Subanesan, M, Vasanth, N, Thiyagu, S and Vignesh, R 2017, ‘Avoiding Drunken Driving Road Accidents by Using Alcoholic Sensors’, International Journal of Engineering and Applied Sciences, vol. 4, no. 5, pp. 81-83.</span></li>
                                <li><span >Vijayakumar, S, Mohan, N, Dineshbabu, C and Karthikeyan, G 2016, ‘Reduce the Mass Losses for Coated Al 7075 by Using Powder Mixed electric Discharge Coating’, International Journal of Modern Trends in Engineering and Science, vol.3, no. 7 , pp. 184-186.</span></li>
                                <li><span >Aravind, R A, Kumaravel, S, Kavin, M and Raja, P 2016, ‘Numerical Analysis of An Integrated Exhaust Duct System’, International Journal of Research in Mechanical Engineering, vol. 3, no. 3, pp. 12-13.</span></li>
                                <li><span >Ravikumar, M, Muthukumar, V, Rakheeb Basha, A M B and Sureshbabu, S 2016, ‘An Investigations of Mechanical and Thermal Properties of Composite Pipe’, International Journal of Research in Mechanical Engineering, vol. 3, no. 3, pp. 14-16.</span></li>
                                <li><span >Karthik, R, Ravikumar, N and Gopinath, V 2016, ‘Experimental Performance Analysis on Variable Compression Ratio Engine Using Diesel as Fuel’, International Journal of Research in Mechanical Engineering, vol. 3, no. 3,pp. 21-23.</span></li>
                                <li><span >Ravikumar, N, Balasubramani, K and Selvam, V 2016, ‘Dynamic Analysis on the Cross Plane Crankshaft Using ANSYS’, International Journal of Research and Mechanical Engineering, vol. 3, no. 4, pp. 1-3.</span></li>
                                <li><span >Arivazhagan, R 2016, ‘Combined Copper Aluminium Heat Exchanger’, International Journal of Research in Mechanical Engineering, vol. 3, no. 4, pp. 4-6.</span></li>
                                <li><span >Nithya, A and Gobinath, S 2016, ‘Advertising Strategies Towards Britannia Products’, International Journal of Management and Humanities, vol. 2, no. 6, pp. 6-8.</span></li>
                                <li><span >Nithya, A and Gobinath, S 2016, ‘A Study on Brand Preference with Special Reference to JPEE Alloys Coimbatore’, International Journal Engineering Research and Management Studies, vol.3 , no. 12, pp. 36-40.</span></li>
                                <li><span >Nithya, A and Gobinath, S 2016, ‘Emanating International Advertising Through Modern Technology’, International Journal of Advanced Engineering Technology, vol. 7, no. 2, pp. 1063-1065.</span></li>
                                <li><span >Gajendran, A, Chandrakumar, S, ArulPandiyan, P and Karthikeyan, S K 2016, ‘Investigation on The Effects of Methanol-Diesel Emulsions in a Di Diesel Engine Using Various Blends’, International Journal for Scientific Research and Development, vol. 4, no. 9, pp. 598 – 601.</span></li>
                                <li><span >Ragunath, N, Selvam, V, Karthikeyan, G, Meganathan, J and Balasubramani, K 2016, ‘Fire Retardant Laminates Test of Epoxy Resin and Polyester Resin Applied on Bus Bodies’, International Journal for Scientific Research and Development, vol. 4 , no. 10,pp.28-30.</span></li>
                                <li><span >Mohan, N, Vijayakumar, S, Vairamani, V and Raja, P 2016, ‘Analysis of Mechanical Properties on the Coir Fiber Composite Material’, International Journal for Scientific Research and Development, vol. 4, no. 9, pp. 606-609.</span></li>
                                <li><span >Sivashankar, N, Karthick, S and Kawin, N 2016, ‘Particle Characterization of Copper Nanoparticles by Electrochemical Method’, International Journal of Science Technology and Engineering, vol. 3, no. 1, pp. 262-266.</span></li>
                                <li><span >Ravikumar, M, Muthukumar, V, Sureshbabu, S and Kumaravel, S 2016, ‘Study and Investigation of Engine Muffler’, International Journal for Scientific Research and Development, vol. 4, no. 9, pp. 825-827.</span></li>
                                <li><span >Arivazhagan, R and Anban, G 2016, ‘Mobile source in automobiles’, IOSR Journal of mechanical and civil engineering, Vol. 13, no. 5, pp. 1-5.</span></li>
                                <li><span >Jagadeesh, D, Karthi, T, Mohan Raj, R and Raja, P, J, 2017, ‘Root Cause Analysis of Performance Anomalies in Soot Blowers of Chemical Recovery Boiler’ International Journal for Scientific Research  Development, Vol. 5, Issue 01,pp. 1168-1175.</span></li>
                            </ul>
                            <p ><strong>International Conferences</strong></p>
                            <ul>
                                <li><span>Gopinath V, ‘Avoiding Drunken Driving Road Accident by using Alcoholic Sensors’, International Conference on Engineering, Energy and Environment at TRP Engineering College, Tiruchirappalli on 31<sup>st</sup>March to 2<sup>nd</sup> April 2017.</span></li>
                                <li><span>Jagadeesh D, ‘Mechanical Paint Removing Tools’, International Conference on Futuristic Innovations in Mechanical Engineering and Manufacturing Management at M.Kumarasamy College of Engineering, Karur on 30<sup>th</sup>and 31<sup>th</sup>March 2017.</span></li>
                                <li><span>Periasamy K, ‘Bagasse Extraction System’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Periasamy K, ‘Introduction to Water Injection in Cement Factory’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Periasamy K, ‘Lean Manufacturing of Headers’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Periasamy K, ‘Modification of Coal Handling Chute Design’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Viswanathan R, ‘Reduction of Blow Holes in Cylinder Block’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Viswanathan R, ‘Automatic Work Holding in Four Jaw Chuck’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Muthukumar V, ‘Study of F91 Yoke Welding in Globe Valves for Stream Boilers’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Karthikeyan G, ‘Design and Analysis of Economizer and Air Preheater’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Periasamy K and Sivashankar N, ‘Design of FEA Analysis in the Disc of Check Value’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Raja P, ‘Design and Development of the Telescopic Chute for Bagasse Stacker in TNPL’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Aravind Ra, ‘Design of Condenser for Reutilization of Exhaust Steam from Boiler’, International Conference on Newer Engineering Concepts and Technology at K.Ramakrishnan College of Technology, Tiruchirappalli on 28<sup>th</sup>and 29th March 2017.</span></li>
                                <li><span>Saravanan G, ‘The Economic Reuse of Sugar Mill Waste Management’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Saravanan G, ‘Increasing the Chip Production by Extending the Life of Feed Roller’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup>and 18<sup>th</sup>March 2017.</span></li>
                                <li>Sivashankar N, ‘Design of FEA analysis on the Disk of Check Valve’, International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup> and 18<sup>th</sup> March 2017.</li>
                                <li>Arivazhagan R, ’Performance Analysis of Turbine’, International Conference on Advanced Materials  Processing, Organized by the Centre for Composite Materials at Kalasalingam University on 27<sup>th</sup> and 28<sup>th</sup> March 2017.</li>
                                <li>Vairamani V, ’Parameter and Optimization of Non-Metallic Laser Cutting’ International Conference on Advances in Biotechnology, Civil and Mechanical Science at Selvam College of Technology, Namakkal on 17<sup>th</sup> and 18<sup>th</sup> March 2017.</li>
                            </ul>
                            <p ><span ><strong>National Conferences</strong></span></p>
                            <ul>
                                <li><span>Jagadeesh D, ‘Root Cause Analysis of Performance Anomalies in Soot Blowers of Chemical Recovery Bolier’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Karthikeyan S.K, ‘Floating Solar PV Panel’, National Conference on Nexgen Technologies at Sengunthar Engineering College, Namakkal on 18<sup>th</sup>March 2017.</span></li>
                                <li><span>Periasamy K, ‘Design and Analysis of Turbo Charger with 11and 12 Blades’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Meganathan J, ‘Design and Development of on Areca Leaf Plate using Die Fabrication’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Mohan N, ‘Cycle Time Reduction in Once Through Super Critical Boiler Panel’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Ravikumar M, ‘An Investigation of Agro Fuel in Boiler’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Selvam V, ‘Design and Analysis of Belt Conveyor for Finishing House Puiper’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Raja P, ‘Optimizing Process Parameters of Arc Welding on Mild Steel’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Dineshbabu C, ‘Experimental Analysis of MIG Welding SS409’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Balasubramani K, ‘An Investigation and Predication of Flatness and Surface Roughness During Face Milling Operation’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Sivaprakash E, ‘Analysis of Moisture Reduction in Wetlap Machine Pulp Sheet’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Kawin N, ‘Cycle Time Reduction in Heater With Pressing Machine Using Nanolipter’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Karthick S, ‘Design and Modification of Wagon Coader Machine’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Chandrakumar S, ‘Design and Analysis of Leaf Spring in LMV’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Ragunath N, ‘Design of Reel Splitting Machine Using Hydraulic Cylinder’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Arivazhagan R, ‘Study on Defects in Orbital TIG Welding Process’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Karthikeyan S K, ‘Effect of Fuel Injection Pump on the Engine and Simplified Pump Setting Procedure’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Gajendran A, ‘Experimental Analysis and Geometrical Effect on OHNS in CNC Drilling with Various Process Parameter’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Ravikumar N, ‘Power Consumption on Material Transport’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Gopinath V, ‘Optimization of Emission Characteristics of Diesel Engine With Corn Oil Methyl Ester Blends and Aph Using Taguchi Method’, National Conference on Annual Research Congress at Karpagam University, Coimbatore on 3<sup>rd</sup>December 2016.</span></li>
                                <li><span>Muthukumar V and Ravikumar M, ‘Study and Investigation of Engine Muffler’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Mohan N, ‘Analysis of Mechanical Properties on the Coir Fiber Composite Material’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Selvam V, ‘Fire Retardant Laminates Test of Epoxy Resin and Polyester Resin Applied on Bus Bodies’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Kawin N, ‘An Investigations of Mechanical and Thermal Properties of Composite Pipe’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Arivazhagan R, ‘Combined Copper Aluminium Heat Exchanger’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Selvakumar G, ‘Numerical Analysis of an Integrated Exhaust Duct System’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Karthik R, ‘Experimental Performance Analysis on Variable Compression Ratio Engine Using Diesel As Fuel’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Karthikeyan S K, ‘Investigation on the Effects of Methanol-Diesel Emulsions in a Di Diesel Engine Using Various Blends’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Ravikumar N, ‘Review of Properties of Shape Memory Alloy’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Jagadeesh D, ‘Root Cause Analysis of Performance Anomalies in Soot Blowers of Chemical Recovery Bolier’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Saravanan G, ‘Optimization of CNC Tool Process Parameter’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Udhayaraj S, ‘Experimental Analysis of TIG Welding SS409’, National Conference on Recent Trends in Engineering and Management at Karpagam College of Engineering, Coimbatore on 22<sup>nd</sup>October 2016.</span></li>
                                <li><span>Venkatesh R, ‘Analyse of Ultrasonic Metal Welding on Nonferrous Metal’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                                <li><span>Venkatesh R, ‘Improve the Reliability of Plug Screw Feeder’, National Conference on Emerging Trends in Engineering and Technology at Gnanamani College of Technology, Namakkal on 24<sup>th</sup>March 2017.</span></li>
                            </ul>
                            <p className="middle-text text-primary" ><strong>Academic Year 2015 - 2016</strong></p>
                            <p  ><span><span ><strong>International / National Journals</strong></span></span></p>
                            <ul>
                                <li><span>Elango V, Jagadeesan V, ‘A Study on The Characteristics of Plate Welding of AISI 904L Super Austenitic Stainless Steel Using TIG, MIG and MMAW Processes’,International Journal of Applied Engineering Research, vol.10, no.12, pp. 11467- 11479, 2015.</span></li>
                                <li>
                                    <p><span>Elango V and Jegadeesan C, ‘Optimization of The Weld Bead Geometry in Gas Tungsten Arc Welding of AISI 904L Super Austenitic Stainless Steel by TOPSIS Methods’, International Journal of Applied Engineering Research, vol. 10, no, 24, pp.44092-44097, 2015.</span></p>
                                </li>
                                <li>
                                    <p><span>Nithya A, Gobinath SandMalyadri P, ‘Creative FMCG Packaging and Advertising’,VSRD International Journal of Accounts, Economics and Commerce Research, vol.1, no.1, pp. 15-23, 2015.</span></p>
                                </li>
                                <li>
                                    <p><span>Nithya A and Gobinath S, ‘Opportunities and Challenges of MSMEs’, International Journal of Modern Trends in Engineering and Science, vol.3, no.5, pp. 87-90,2016.</span></p>
                                </li>
                                <li>
                                    <p><span>Jagadeesh D, Venkatachalam R and Nallakumarasamy G,‘Characterisation of Banana Fiber-A Review’, Journal of Environmental Nanotechnology,vol.2, no.4, pp. 23-26, 2015.</span></p>
                                </li>
                                <li>
                                    <p><span>Saravanan G, Nallakumarasamy G andVenkatachalam R,‘Tribological and Thermal Characterization of Glass Fiber-A Review’, Journal of Environmental Nanotechnology, vol.2, no.4, pp. 27-30, 2015.</span></p>
                                </li>
                                <li>
                                    <p><span>Babu B, Dharmalingam S, Karthikeyan S K, Karthik R andVairamani V, ‘Investigation of Electro Chemical Micro Machining Process Parameters on Al- SiCp - Gr Composites Using Taguchi Methodology’, International Journal of Chemical Technology Research, vol. 8, no, 8, pp. 278-285, 2015.</span></p>
                                </li>
                                <li>
                                    <p><span>Babu B, Raja K, Dharmalingam S, Udhayaraj S and Vairamani V, ‘Electrochemical Micro Machining on Hybrid Metal Matrix Composites’, International Journal of Chemical Technology Research , vol.8, pp. 508-518, 2015.</span></p>
                                </li>
                                <li>
                                    <p><span>Periyasamy Kand Jayaraman M, ‘Studies on Fabrication of Surface Composites on Cast Aluminum Alloys Using Friction Stir Processing – A Review’,Journal of Environmental Nanotechnology, vol.5, no, 1, pp. 62-67, 2016.</span></p>
                                </li>
                                <li>
                                    <p><span>Ramesh R,Viswanathan R and Ambika S, ‘Measurement and Optimization of Surface Roughness and Tool Wear Via Grey Relational Analysis, TOPSIS and RSA Techniques’,Elsevier - Measurement,vol.78, pp. 63–72, 2016.</span></p>
                                </li>
                            </ul>
                            <p ><span><span ><strong>International Conferences</strong></span></span></p>
                            <ul>
                                <li >
                                    <p><span>Venkatesh R, ‘Performance Analysis of Multipurpose Solar Heating System by Using CFD’, International Conference on Advances in Mechanical Engineering at Anna University College of Engineering, Villupuram on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Elango V, Jagadeesh D, Periasamy K and G.Saravanan, ‘A Characteristic Study on TIG Welding Process Parameters Using Artificial Neural Networks and Response Surface Methodology for Super Austenitic Stainless Steel’, International Conference on Modern, Intelligent and Green Manufacturing at Erode Sengunthar Engineering College on 11<sup>th</sup> and 12<sup>th</sup> December 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Elango V, ‘Gas Tungsten Arc Welding Process Parameter Optimization of Aisi 904l Super Austenitic Stainless Steel Joints using Taguchi Grey Relations Analysis’, International Conference on Modern, Intelligent and Green Manufacturing at Erode Sengunthar Engineering College on 11<sup>th</sup> and 12<sup>th</sup> December 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Viswanathan R, ‘Temperature Measurement and Optimization in Machining Magnesium Alloy using RSM and ANOVA’, International Conference on Computational Methods in Engineering and Health Sciences at University Putra Malaysia, Malaysia on 19<sup>th</sup> and 20<sup>th</sup> December 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Karthikeyan S K, ‘Lean Manufacturing in Chassis Assembly Through Poka – Yoke’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Kavin M, ‘Investigation and experimental studies on drilling parameters of Aluminium Hybrid metal matrix composites’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Vijayakumar S, ‘Investigation on the Wear Behavior Al 7075 Coated With Nickel + Boron Carbide’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Meganathan J, ‘Design and Analysis of propeller shaft by using composite materials’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Selvakumar G, ‘Particle Concentrations and Effectiveness of Natural Fibre Air Filter in Split Air Conditioner System’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Kumaravel S, ‘Wear Behavior of Aluminium/ Basalt Metal Matrix Composites’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Muthukumar V, ‘Wear Behavior of Rubber Roll Sheller in Rice Milling’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Mohan N, ‘Design and Analysis of Ball Catch Mechanism’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Ravikumar M, ‘Experimental and Investigation of Natural Fiber Composite Material’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Ravikumar N, ‘E-Waste Management and its Approaches’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Udhayaraj S, ‘Improvement of Boiler Efficiency by Indirect Method’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Karthik R, ‘Increasing the Efficiency of Rotary Kiln by Reducing Heat’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Selvam R, ‘Reduction of Friction by using Pull Over Table in Coil Preparation Line’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Raja P, ‘Effect of Process Parameters on Microstructure and Mechanical Properties of FSW Dissimilar Joints’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Karthikeyan G, ‘Vibration Analysis of Gear Box System’ International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Dineshbabu C, ‘Optimization of Boiler Operation and Maintenance’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li >
                                    <p><span>Aravind Ra, ‘Numerical Analysis of Reverse Flow in Multiple T-Joints’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></p>
                                </li>
                                <li ><span>Aravind Ra, ‘Numerical Analysis of an Integrated Exhausted Duct System’, International Conference on Sustainable Materials Design and Applications at Kongu Engineering College, Erode on 18<sup>th</sup> and 19<sup>th</sup> March 2016.</span></li>
                                <li ><span>Vairamani V, ‘Investigation of Electrochemical Micro Machining Process Parameters on Al-SiCp’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></li>
                                <li ><span>Aslam P, ‘Investigation on the Mass Loss of Al 7075 Coated with Nickel + Boron Carbide’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></li>
                                <li ><span>Balasubramani K, ‘Optimization of Offset Operation in Micro Turn CNC Machine’, International Conference on Modeling, simulation and control, Karpagam College of Engineering, Coimbatore on 15 and 16 October 2015.</span></li>
                                <li ><span>Arivazhagan R, ‘Combined Copper Aluminium Heat Exchanger’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></li>
                                <li ><span>Rakheeb Basha A M P, ‘An Investigations of Mechanical and Thermal Properties of Composite Pipe’, International Conference on Modeling, Simulation and Control at Karpagam College of Engineering, Coimbatore on 15<sup>th</sup> and 16<sup>th</sup> October 2015.</span></li>
                            </ul>
                            <p ><span><strong>National Conference</strong></span></p>
                            <ul>
                                <li><span>Viswanathan R, ‘Study of Machining Parameters for Machining of Magnesium Alloy’, National Conference on Advanced Research and Innovations in Mechanical Engineering at KCG College of Technology, Chennai on 22<sup>nd</sup> and 23<sup>rd</sup> April 2016.</span></li>
                            </ul>
                            <p ><span ><strong>Academic Year 2014 - 2015</strong></span></p>
                            <p ><span><strong>International / National Journals</strong></span></p>
                            <ul>
                                <li><span>Gobinath S, Arumugam C, Ramya G andChandrasekaran M, ‘Optimization of Total Holding Cost in Job Shop Scheduling by Using Hybrid Algorithm’,Applied Mechanics and Materials, vol.591, pp. 176-179, 2014.</span></li>
                                <li><span>Gobinath S, Arumugam C, Tom page and Chandrasekaran M, ‘Solving Multi Objective Job Shop Scheduling Problems Using Artificial Immune System Shifting Bottleneck Approach’, Applied Mechanics and Materials, vol. 766-767, pp. 1209-1213, 2015.</span></li>
                                <li><span>Babu B, Karthikeyan S K and Adithya V, ‘Synthesis and Characterization of Al-Al2o3 Composites’, International Journal of Latest Trends in Engineering and Technology, vol.4, no. 2, pp. 321-329, 2014.</span></li>
                                <li><span>Babu B, Karthikeyan S K and Adithya V, ‘Experimental Investigation and Analysis of Corrosion and Hardness Using Aluminium Composites’, - International Journal of Latest Trends in Engineering and Technology, vol.4, no.4, pp. 37-46, 2014.</span></li>
                                <li><span>Babu B, Karthikeyan S K and Selvam V, ‘Experimental and Analysis of Welding Electrode Wire Straightening and Cutting Machine’, International Journal of Latest Trends in Engineering and Technology, vol.5, no.1, pp. 333 – 345, 2014.</span></li>
                                <li><span>Nithya Aand Senthilkumar S, ‘An Overview of Effect of Advertisement on FMCG with Special Reference to Multinational Products in Selected Asian Countries’,International Journal of Applied Environmental Science, vol.9, no.5, pp. 2551-2563, 2014.</span></li>
                                <li><span>Viswanathan Rand Ramesh S, ‘Optimizations of Turning Parameters on Tool Wear for Magnesium Alloy Using Taguchi Techniques’, IOSRD International Journal of Engineering,vol.1, no.1, pp. 46-50, 2014.</span></li>
                            </ul>
                            <p ><span><strong>International Conferences</strong></span></p>
                            <ul>
                                <li><span>Gopinath V, ‘Performance Evaluation of Diesel Engine Runs on Bio Diesel Blending’, International Mechanical Engineering Congress at National Institute of Technology, Tiruchirappalli, on 13<sup>th</sup> to 15<sup>th</sup> June 2014.</span></li>
                                <li><span>Gopinath V, ’Experimental Investigation on Diesel Engine Fuelled by Corn Oil Methyl Ester Blend with Varying Inlet Air Temperature by Using APH’ , International Conference on Green Technology for Environmental Pollution Prevention and Control at National Institute of Technology, Tiruchirappalli on 27<sup>th </sup>to 29<sup>th</sup> September 2014.</span></li>
                                <li><span>Nithya A, ‘FMCG Ad – Big Issues and Challenging’, International Conference on Contemporary Issues and Challenges in Commerce and Management’ at Sri Ganesh College of Arts and Science, Salem on 13<sup>th</sup> February 2015.</span></li>
                                <li><span>Viswanathan R, ‘Optimization of Machining Parameters for Magnesium Alloy using Taguchi Approach and RSM’ International Conference on Advances in Design and Manufacturing at National Institute of Technology, Tiruchirappalli on 5<sup>th </sup>to 7<sup>th</sup> December 2014.</span></li>
                            </ul>
                            <p ><strong>National Conference</strong></p>
                            <ul>
                                <li><span>Nithya A, ‘Emanating Advertising Through Modern Market Layout’, National Conference on Managerial Innovations and Challenges in Globalised Economy at KSR College of Engineering, Namakkal on 26<sup>th</sup> September 2014.</span></li>
                                <li><span>Viswanathan R, ‘Optimization of Turning Parameters on Tool Wear for Magnesium Alloy Using Taguchi Techniques’ National Conference on Advances and innovations in Civil and Mechanical Engineering at Vel Tech College, Chennai on 23<sup>rd</sup> August 2014.</span></li>
                                <li><span>Gopinath V, ‘Experimental Study on the Performance Characteristics of A Diesel Engine Using Corn Oil as Fuel’ National Conference on 6<sup>th</sup> Annual Research Congress at Karpagam University, 5<sup>th</sup>and 6<sup>th</sup> December 2014.</span></li>
                            </ul>
                            <p className="middle-text text-primary" ><strong>Academic Year 2013 - 2014</strong></p>
                            <p  ><span><span ><strong>International / National Journals</strong></span></span></p>
                            <ul className="list-style">
                                <li class="hand_guesture">
                                    <p><span>Venkatesh, R,  Christraj, W, 2013, ‘Experimental investigation of multipurpose solar heating system’, Journal of Energy Engineering, ISSN:0733-9402, Volume:141, Issue3.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Elango, V , Jagadeesh, D, Saravanan, G  Balasubramani, K, 2014, ‘Optimization of Offset Operation in MicroTurn CNC Machine’ International Journal of Scientific  Engineering Research , ISSN:2229-5518, Volume:5, Issue2, PP:425-436.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Velmanirajan, K , Karthikeyan, S.K  Dinesh, D, 2013, ‘Lean Manufacturing In Chassis Assembly Through Poka – Yoke’ International Journal of Technology Enhancements and Emerging Engineering Research , ISSN:2347-4289, Volume:1, Issue:1, PP:31-36.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Gobinath, S, Arumugam, C  Chandrasekaran, M, 2013, ‘A Hybrid Approach for Single Objective Job Shop Scheduling Problem’ Life Science Journal , ISSN:1097-8135, Volume:10, Issue3, PP:163-166.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Gopinath, V  Navaneethakrishnan, G, 2013, ‘Performance Evaluation of Gas turbine by reducing the inlet air temperature’ International Journal of Technology Enhancements and Emerging Engineering Research, ISSN:2347-4289, Volume:1, Issue1, PP:20-24.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Velmanirajan, K, Narayanasamy, R  Anuradha, K, 2013, ‘Effect of Chemical Composition on Texture Using Response Surface Methodology’ Journal of Materials Engineering and performance, ISSN:1059-9495, Volume:22, Issue11, PP:3237-3257.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Sivaprakash, E, Sridharan, M  Karthikeyan, S, 2014, ‘Performance Improving Methods For Series Solar Flat Plate Collectors And Introduction Of New Verification Tool’ International Journal of Innovative Research in Science, Engineering and Technology, ISSN:2347:6710, Volume:3, Issue3, PP:1155-1161.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Sivaprakash, E  Sridharan, M, 2014, ‘Experimental Investigation On Series Solar Flat Plate Collectors With Variable Mass Flow Rates’ International Journal of Innovative Research in Science, Engineering and Technology, ISSN:2347:6710, Volume:3, Issue3, PP:1150-1154.</span></p>
                                </li>
                            </ul >
                            <p ><span><span ><strong>International / National Conferences</strong></span></span></p>
                            <ul className="list-style">
                                <li class="hand_guesture">
                                    <p><span>Venkatesh, R,  Christraj, W , 2014, ‘Analysis of Heat Transfer Characteristics in Multipurpose solar heating system’, International Conference on Recent Trends in Engineering and Technology, Mountzion college of engineering and Technology, Pudukottai, March 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Venkatesh, R,  Christraj, W, 2014, ‘Performance Analysis of Solar Air heater in multipurpose solar heating system’, International conference on Science, Engineering and Management, Srinivasan Engineering College, Perambalur, March 2014 .</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Venkatesh, R, Christraj, W, 2014, ‘Design and Development of Modified Solar Air Heating System in Summer Season’, National conference, K.Ramakrishnan College of Engineering, Trichy, March 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Venkatesh, R,  Christraj, W, 2014, ‘Experimental Performance of Modified Solar Air Heating System in Winter Season’, National conference, Sengunthar Engineering College, Namakkal, March 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Jagadeesh, D, 2013, ‘Business Application of Composite Materials’, International conference, Annai Mathammal Sheela Engineering College, October 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Saravanan, G, 2013, ‘Performance of Bio fuels in IC Engines’, International conference, Annai Mathammal Sheela Engineering College, October 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Gobinath, S,2013, ‘Advances in Industrial Engineering’, International conference, Annai Mathammal Sheela Engineering College, October 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Gobinath, S,2013, ‘Emerging Trends in Engineering’, International conference, Sri Ganesh School of Business Management, February 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Nithya, A , 2013, ‘Impact of FMCG Advertisement in Indian Business’ , International conference, Annai Mathammal Sheela Engineering College, October 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Nithya, A , 2014, ‘Modern advertising strategy  technology for competency’ , International conference, SGSBM, Salem, February 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Ravikumar, N , 2014, ‘Analyzing the vibration failure in pick head of the pick and place robot arm’ , International conference, Paavai Engineering College, May 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Selvam, V, 2013, ‘Impact of Manufacturing Technology in Global Business’, International conference, Annai Mathammal Sheela Engineering College, October 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Udhayaraj, S, 2013, ‘Impact of Modern Manufacturing Process’, International conference, Annai Mathammal Sheela Engineering College, October 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Dineshbabu, C, 2014, ‘Fabrication of Hydraulic Floor Crane’, National conference, Nandha Engineering College, March 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Aravind, RA , 2014, ‘Design and Analysis of an integrated Exhaust duct’, Kongu Engineering College, National conference, March 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Aravind, RA , 2014, ‘Numerical Analysis of an integrated exhausted duct system’ , International conference,VIT, May 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Karthikeyan, G , 2014, ‘Experimental analysis of composite material blended with thermoplastic  jute fabric’, National conference, Selvam college of Technology, April 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Sivaprakash, E, 2014, ‘Transient thermal analysis on mixed mode solar FPC’ , International conference, Paavai Engineering College, May 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Sivaprakash, E, 2014, ‘Experimental investigation on flat plate collectors with variable mass flow rates’, International conference, K.L.N college of Engineering  Technology, March 2014.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Sivaprakash, E, 2014, ‘Performance improving methods for series solar flat plate collectors  introduction of new verification tool’ , International conference, K.L.N college of Engineering  Technology , March 2014.</span></p>
                                </li>
                            </ul>
                            <p ><span className="middle-text text-primary"><strong>Academic Year 2012 - 2013</strong></span></p>
                            <p ><span ><span ><strong>International / National Journals</strong></span></span></p>
                            <ul className="list-style">
                                <li class="hand_guesture">
                                    <p><span>Velmanirajan, K , Narayanasamy, R  Anuradha, K, 2013, ‘Statistical Evaluation of Forming Limit diagram for Annealed Al 1350 alloy sheet using first order reliability method’ ELSEVER , ISSN: 0307-904X,Volume:38, Issue1, PP:145-167.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Gopinath, V  Balanarasimman, N, 2012 ‘Effect Of Solidification Parameters On The Feeding Efficiency Of Lm6 Aluminium Alloy Casting’ ISOR Journal of Mechanical and Civil Engineering, Volume:4, Issue2, ISSN:2278-1684, PP:32-38.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Nithya, A , 2013, ‘A study of effect of advertisement of four wheeler of tata motors limited’ International journal of management, ISSN:0976-6502, Volume:4, Issue2, PP:85-90.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Nithya, A, 2013, ‘Advertising Strategy’ Indian Journal Of Research, ISSN:2250-1991, Volume:2, Issue2, PP:1-3.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Velmanirajan, K  Narayanasamy, R, 2012, ‘Effect Of Annealing Temperature In Al 1145 Alloy Sheets On Formability, Void Coalescence, And Texture Analysis’ Journal Of Materials Engineering And Performance , ISSN:1059-9495 ,Volume:22, Issue4, PP:1091-1107.</span></p>
                                </li>
                            </ul>
                            <p ><span><span ><strong>International / National Conferences</strong></span></span></p>
                            <ul className="list-style">
                                <li class="hand_guesture">
                                    <p><span>Elango, V, 2013, ‘Optimization of process parameters of TIG Welding process on super Austenetic Stainless Steel’, National Conference, Hindusthan college of engineering  Technology, May 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Elango, V, 2012, ‘Optimization of process parameters of MIG Welding process on super Austenetic Stainless Steel’, National Conference, Vels University, November 2012.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Periasamy, K, 2013, ‘Studies on the Fabrication of Surface Composites on Cast Aluminium Alloys by friction stir processing’, National Conference, Annai Mathammal Sheela Engineering College, March 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Arivazhagan, R , 2013, ‘Intelligent Manufacturing  Automation System NCIMAS 2013’ , National Conference, Hindusthan College of Engineering  Tech, May 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Navanethakrishnan, G ,2013, ‘Performance Evaluation of Gas turbine’ , National Conference, PSG College of Technology , April 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Jagadesh, D, Saravanan, G  Balasubramani, K, 2013 ‘Technical Advancement in Mechanical’, National Conference, Selvam college of Engg  Tech ,February 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Nithya, A , 2013, ‘Implementing Advertising Strategy for Sustainable Development ’, International Conference, Sri Ganesh school of business , February 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Karthikeyan, S K, 2013, ‘Rapid Prototyping’, National Conference, Karpagam University Coimbatore, March 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Karthikeyan, S K, 2013, ‘Optimization of cutting Parameter’, International Conference, Vels University, April 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Saravanan, G, 2012, ‘Effect of splitter blades on the flow field of a deep well pump’, National Conference, Vels University, November 2012.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Saravanan, G, 2013, ‘Stress and fatigue analysis of a CAM shaft’, National Conference, Hindusthan College of Engineering  Tech, May 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Navanethakrishnan, G , 2013, ‘Fracture surfaces Analysis and Residual Strength of a rear axial leaf spring in a SUV’, International Conference, Vels University, April 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Navanethakrishnan, G , 2013, ‘Fracture surfaces Analysis and Residual Strength of a rear axial leaf spring in a SUV’, National Conference, Karpagam University Coimbatore, March 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Gobinath, S, 2012, ‘An Overview of Scheduling Problems’, National Conference, Vels University, November 2012.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Gobinath, S, 2013, ‘Optimization Technology’, International Conference, Sri Ganesh School of Business Management, February 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Gobinath, S, 2013, ‘A State of art of review of Scheduling Techniques’, National Conference, Vels University, April 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Dineshbabu, C,2013, ‘Challenges And Opportunities in Mechamical Engineering’, National Conference, Kongunadu College of Engineering and Technology, March 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Dineshbabu, C, 2013, ‘Analysis Of Composite Materials Blended With Thermoplastic And Jute Fabric’, National Conference, Annai Mathammal Sheela Engineering College, March 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Udhayaraj, S, 2013, ‘Product Development For Drip Irrigation Process by Sustainability Concepts’, National Conference, JKK Munirajan College of Technology, April 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Udhayaraj, S, 2013, ‘Sustainable Life Cycle Design For Drip Irrigation Process’, National Conference, Kumaraguru College of Technology, April 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Udhayaraj, S, 2013, ‘Product Development For Drip Irrigation Process by Sustainability Concepts’, International Conference, Dr.M.G.R. Educational and Research Institute University, April 2013.</span></p>
                                </li>
                                <li class="hand_guesture">
                                    <p><span>Vairamani, V, 2013, ‘Studies on Automation of Roof sheet Welding using Curved Fixture by MAG Welding Process’, National Conference, Karpagam University, March 2013.</span></p>
                                </li>
                            </ul>
                        </div>










                    </div>
                </div>
                <hr />

            </div>
        </div>
    );
}
//Top images 

function TopImage() {
    return (
        <div>
            <img className=" d-block rounded " width="100%" src="http://www.kongunadu.ac.in/images/banners/mechanical_banner.jpg" alt="" />
        </div>
    );
}