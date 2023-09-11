import classes from "../CourseMenu.module.css";

const CourseMenuItem = (props) => {
  const onModuleClick = function (event) {
    const value = event;
  };
  const courseMenu = props.data;
  return (
    <div onClick={onModuleClick}>
      <ul className={classes.courseMenu}>
        {courseMenu.map((menu) => (
          <li className={classes.concept} key={menu.key}>
            <i className={menu.image}></i>
            <h2>{menu.title}</h2>
            <p>{menu.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CourseMenuItem;
