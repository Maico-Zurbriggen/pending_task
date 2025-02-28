//Componente para los botones

export const Button = ({ onSubmit, text }) => {
  return <button onSubmit={onSubmit}>{text}</button>;
};
