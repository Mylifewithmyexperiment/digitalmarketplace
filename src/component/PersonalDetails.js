import React from 'react';
import { component_details } from '../utils/CMSAdapter';
import "../CSS/homepage.css"
import '../CSS/List_info.css'
import profile_pic from '../img/profile_pic.png'
 
class PersonalDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            component_type: "Basic Details",
        }
    }
    style = {
        color: " #111 ",
    };
    render() {

        var personal_details = component_details(this.props.personal_details_id, this.state.component_type)
        let personal_details_component_data = "";
        if (personal_details_component_data != null) {
            personal_details_component_data = personal_details;
        } console.clear();
        console.log("Standard data after translation :- " + JSON.stringify(personal_details_component_data))

        return (

            <div className="home_main">
                <div className="left_side">
                    {/* <small>  "hello everybody, i am" </small> */}
                    <h2> {personal_details_component_data.name} </h2>
                    <small> {personal_details_component_data.technology} </small>
                    <p>
                        <b style={this.style}> {personal_details_component_data.name} </b> {personal_details_component_data.description}
                        {/* <a target="_collage" href="https://www.lumbini.edu.np/">
                            <b>{sec_bold}</b>
                        </a> */}
                        {/* {after_anchor} */}
                    </p>
                    {/* <p> {sec_para} </p> */}
                    {/* <Ulinfo /> */}
                    <ul className="personal_info" >
                        <li> <i className="fas fa-calendar-week"></i> 10 October </li>
                        <li> <i className="fas fa-phone"></i> {personal_details_component_data.mobileNo}</li>
                        <li> <i className="fas fa-envelope"></i> {personal_details_component_data.email}</li>
                        <li> <i className="fas fa-home"></i>  {personal_details_component_data.location}</li>
                    </ul>
                    <ul className="social_links">

                        {/* <a target="_Facebook" href="https://www.facebook.com/profile.php?id=100009138323253">
                            <li><i className="fab fa-facebook"></i></li>
                        </a>
                        <a target="_insta" href="https://www.instagram.com/rajeevkhadka18/">
                            <li> <i className="fab fa-instagram"></i>  </li>
                        </a> */}
                        <a target="_linkedin" href="https://www.linkedin.com/in/shashijaiswal17/" >
                        <li>
                            <i className="fab fa-linkedin"> Linkedin</i>
                        </li>
                        </a>
                    </ul>

                </div>
                <hr />

                <div className="right_side">
                    <div className="img_contaner">
                        <img alt="Profile pic Not Found" src={profile_pic} />
                    </div>
                </div>
            </div>



        )

    }

}

export default PersonalDetails;