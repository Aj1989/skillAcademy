import CourseMenuItem from "./courseMenuItem/CourseMenuItem";

const CourseMenu = (props) => {
  return (
    <>
      <CourseMenuItem data={props.data} />
    </>
  );
};
export default CourseMenu;
