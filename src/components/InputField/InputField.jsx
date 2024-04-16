import './inputfield.css'
function InputField({label, type, value, onChange,required}){
return(
    <div>
      <label>{label}</label>
      <input className="input" type={type} value={value} onChange={onChange} required={required} />
    </div>
    
)
}
export default InputField