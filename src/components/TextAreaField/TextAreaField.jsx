import './textarea.css'
function TextAreaField({ label, value, onChange,required }){
    return(
    <div>
        <label>{label}</label>
        <textarea className="txtarea" cols="30" rows="10"placeholder='write here' value={value} onChange={onChange} required={required}>

    </textarea>
    </div>
    )
}
export default TextAreaField