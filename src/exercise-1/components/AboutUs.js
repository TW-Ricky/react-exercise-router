import React from "react";
import { Link } from "react-router-dom";

class AboutUs extends React.Component {
    render() {
        return <div>
            <h3>Company:ThoughtWorks Local</h3>
            <h3>Location:Xi'an</h3>
            <br></br>
            <h3>For more information, please view our <Link to = '/' style = {{color: "red"}}>website</Link></h3>
        </div>
    }
}

export default AboutUs;