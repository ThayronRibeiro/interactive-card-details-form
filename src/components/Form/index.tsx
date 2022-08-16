import "./styles.css";

export const Form = ({ defaultValues, children, onSubmit }: any) => {
  return (
    <div className="ContainerForm">
      <form>{children}</form>
    </div>
  );
};

export default Form;
