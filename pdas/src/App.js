import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png'


function App(){
    

    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                        Personal Digital Assistants
                    </p>
                    <p className='subtitle'>
                        PDA's
                    </p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        {/* Here goes Alexa */}
                        <div className='column is-2'>
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage}
                            description="Alexa was made by Amazon, Jeff Bezos BI is quite astonishing"
                            />
                        </div>
                        {/* Here goes Cortana */}
                        <div className='column is-2'>
                            <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage}
                            description="Cortana was made by Microsoft, I love Seattle and love Bill Gates"
                            />
                        </div>
                        {/* Here goes Siri */}
                        <div className='column is-2'>
                            <ProfileCard 
                            title="Siri" 
                            handle="@siri01" 
                            image={SiriImage}
                            description="Siri was made by Apple, Steve Jobs was my inspiration to get into SE"
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;