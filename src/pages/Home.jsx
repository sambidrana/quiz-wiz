import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home coming soon
      <div>
        <Link to="/settings"> Settings </Link> |
        <Link to="/questions"> Question </Link>
      </div>
    </div>
  );
};

export default Home;
