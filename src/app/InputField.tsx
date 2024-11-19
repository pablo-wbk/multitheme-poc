interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField = ({ label, type, placeholder }: InputFieldProps) => {
  return (
    <div className="grid gap-2">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className="p-3 rounded-lg" />
    </div>
  );
};


export default InputField;