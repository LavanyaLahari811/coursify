import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="h1">
          <h1>WORK WITH US</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="btns">
          <button id="btn1">Find your next hire</button>
          <button>Find your next job</button>
        </div>
      </div>
      <div className="img">
        <img src="https://i.ibb.co/BgfPg0x/5568824-2895011.jpg" alt="pic" />
      </div>
    </div>
  );
};
export default Home;
