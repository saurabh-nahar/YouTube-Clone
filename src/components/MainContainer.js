import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
    return(
        <div className="flex-1  flex-grow mx-2"> 
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer;

// (add flex-grow to class since removed from body)