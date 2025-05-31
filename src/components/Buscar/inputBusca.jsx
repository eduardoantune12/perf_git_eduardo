import './InputBusca.modules.css';

const InputBusca = ({ placeholder, onBlur }) => {
  return (
    <input
      type="text"
      className="inputBusca"
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

export default InputBusca;