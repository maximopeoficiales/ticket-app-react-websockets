interface MyProps {}
const defaultProps = {};
const Enter = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="Enter" className="">
      <h1>Enter component</h1>
    </div>
  );
};

export default Enter;
