import React from 'react';
import "../CSS/Skills.css"

class skills extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="skills">
                <div className="youTudeVideoDetails">
                    <b className="youTubeTitle"> React-Redux call flow Explanation in details  </b>
                    <br></br>
                    <iframe className="youtubeVideo" title="react-redux-call-flow" width="420" height="315" src="https://www.youtube.com/embed/wK1eGyzkAqM"
                        frameborder="0" allowfullscreen></iframe>
                </div>
                
                <div className="projectDetails">
<ul> <h2> His skills includes</h2>
<li>Implemented 3rd party Api integration with CRM by json parsing.</li>
<li>Design and implemented notification feature against  each order placed by customer.</li>
<li> Stored cart data to Redux store for accessing data throughout the marketplace. </li>
<li> Added Email notification to user for each order place.</li>
</ul>
                </div>

            </div>



        )
    }
}

export default skills;

