import { InputContainer } from "./styles";

const Input = ({ label, register, error, name, ...rest }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span> {error} </span>}</div>
    </InputContainer>
  );
};

export default Input;
