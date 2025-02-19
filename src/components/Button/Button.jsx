import "./Button.css";

const Button = ({ onSubmit, text, bg }) => {
  return <button onSubmit={onSubmit}>{text}</button>;
};

export default Button;
