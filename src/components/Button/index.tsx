import "./styles.css";

type ButtonProps = {
  value: string;
  type: string;
  onClick: any;
};

export const Button = ({ value, type, onClick }: ButtonProps) => {
  return (
    <div>
      <input type={type} value={value} onClick={onClick} />
    </div>
  );
};
