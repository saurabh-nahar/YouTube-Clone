import { useSelector } from "react-redux";

const Sidebar = () => {
    const toggle = useSelector((store) => store.sideMenu.menuOpen)
    
    return toggle? (
        <div className="w-48 md:w-48 lg:w-52 xl:w-60 shadow-lg relative">
            <ul className="my-4">
                <li className="my-2 ml-2 font-medium">Home</li>
                <li className="my-2 ml-2 font-medium">Shorts</li>
                <li className="my-2 ml-2 font-medium">Subscriptions</li>
                <li className="my-2 ml-2 font-medium">YouTube Music</li>
            </ul>
            <hr className="my-4 mx-2"></hr>
            <h3 className="my-2 ml-2 font-semibold">Explore</h3>
            <ul className="my-4">
                <li className="my-2 ml-2 font-medium">Trending</li>
                <li className="my-2 ml-2 font-medium">Shopping</li>
                <li className="my-2 ml-2 font-medium">Music</li>
                <li className="my-2 ml-2 font-medium">Movies & Tv Music</li>
                <li className="my-2 ml-2 font-medium">Live</li>
                <li className="my-2 ml-2 font-medium">Gaming</li>
                <li className="my-2 ml-2 font-medium">News</li>
                <li className="my-2 ml-2 font-medium">Sports</li>
                <li className="my-2 ml-2 font-medium">Learning</li>
                <li className="my-2 ml-2 font-medium">Fashion & Beauty</li>
                <li className="my-2 ml-2 font-medium">Podcasts</li>  
                <li className="my-2 ml-2 font-medium">Technology</li>              
            </ul>
            <hr className="my-4 mx-2"></hr>
            <h3 className="my-2 ml-2 font-semibold">More from YouTube</h3>
            <ul className="my-4">
                <li className="my-2 ml-2 font-medium">YouTube Music</li>
                <li className="my-2 ml-2 font-medium">YouTube TV</li>
                <li className="my-2 ml-2 font-medium">YouTube Kids</li>    
            </ul>
            <hr className="my-4 mx-2"></hr>
        </div>
    ) : null;
}

export default Sidebar;

