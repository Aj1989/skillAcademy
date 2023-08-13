import classes from "../CourseMenu.module.css";

const CourseMenuItem = (props) => {
  const courseMenu = props.data;
  return (
    <>
      <ul className={classes.courseMenu}>
        {courseMenu.map((menu) => (
          <li className={classes.concept} key={menu.key}>
            <i className={menu.image}></i>
            <h2>{menu.title}</h2>
            <p>{menu.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default CourseMenuItem;
