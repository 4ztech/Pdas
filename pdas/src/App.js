import ProfileCard from "./ProfileCard";
import AlexaImage from './images/';


function App(){
    

    return(
        <div>
            <div> Personal Digital Assistants</div>
            <img src="AlexaImage"/>
            <ProfileCard title="Alexa" handle="@alexa99"/>
            <ProfileCard title="Cortana" handle="@cortana32"/>
            <ProfileCard title="Siri" handle="@siri01"/>
        </div>
    );
}

export default App;