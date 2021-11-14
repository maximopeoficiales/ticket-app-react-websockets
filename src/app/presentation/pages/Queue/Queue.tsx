interface MyProps {}
const defaultProps = {};
const Queue = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="Queue" className="">
      <h1>Queue component</h1>
    </div>
  );
};

export default Queue;
