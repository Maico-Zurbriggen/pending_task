//Componente para los botones

const Button = ({ onSubmit, text }) => {
  return <button onSubmit={onSubmit}>{text}</button>;
};

export default Button;
