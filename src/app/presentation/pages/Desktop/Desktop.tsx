interface MyProps {}
const defaultProps = {};
const Desktop = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="Desktop" className="">
      <h1>Desktop component</h1>
    </div>
  );
};

export default Desktop;
