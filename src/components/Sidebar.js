import { useSelector } from "react-redux";

const Sidebar = () => {
  const toggle = useSelector((store) => store.sideMenu.menuOpen);

  if (window.innerWidth > 640 && toggle) {
    return (
      <div className={`w-44 shadow-lg flex-shrink-0`}>
        <ul className="my-4 w-full">
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Home
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Shorts
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Subscriptions
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            YouTube Music
          </li>
        </ul>
        <hr className="my-4 mx-2" />
        <h3 className="my-2 ml-2 font-semibold">Explore</h3>
        <ul className="my-4 w-full">
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Trending
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Shopping
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Music
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Movies & Tv Music
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Live
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Gaming
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            News
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Sports
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Learning
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Fashion & Beauty
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Podcasts
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            Technology
          </li>
        </ul>
        <hr className="my-4 mx-2" />
        <h3 className="my-2 ml-2 font-semibold">More from YouTube</h3>
        <ul className="my-4 w-full">
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            YouTube Music
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            YouTube TV
          </li>
          <li className="my-2 ml-2 font-medium p-2 hover:bg-gray-300 rounded-xl cursor-pointer">
            YouTube Kids
          </li>
        </ul>
        <hr className="my-4 mx-2" />
      </div>
    );
  }
};

export default Sidebar;
