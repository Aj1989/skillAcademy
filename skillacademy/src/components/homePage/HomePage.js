import classes from "./HomePage.module.css";
import CourseMenu from "../courseMenu/CourseMenu";

const HomePage = () => {
  const courseSections = [
    {
      key: 1,
      name: "ABACUS",
      title: "ABACUS",
      desc: "Brain Development program with lot of fun and experiments for kids",
      image: "bi bi-gem",
    },
    {
      key: 2,
      name: "CLASS",
      title: "CLASSES",
      desc: "Brain Development program with lot of fun and experiments for kids",
      image: "bi bi-bank",
    },
    {
      key: 3,
      name: "summer batch",
      title: "SUMMER BATCH",
      desc: "Brain Development program with lot of fun and experiments for kids",
      image: "bi bi-boombox",
    },
    {
      key: 4,
      name: "success Stories",
      title: "SUCCESS STORIES",
      desc: "Brain Development program with lot of fun and experiments for kids",
      image: "bi bi-graph-up-arrow",
    },
  ];
  return (
    <>
      <div id="sloganSection" className={classes.homePageDiv}>
        <h2>HARDWORK IS THE ONLY TALENT IN THE WORLD.</h2>
      </div>
      <CourseMenu data={courseSections}></CourseMenu>
    </>
  );
};

export default HomePage;
