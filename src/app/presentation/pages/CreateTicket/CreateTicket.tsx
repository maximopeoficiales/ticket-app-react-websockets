interface MyProps {}
const defaultProps = {};
const CreateTicket = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="CreateTicket" className="">
      <h1>CreateTicket component</h1>
    </div>
  );
};

export default CreateTicket;
