/* eslint-disable react/prop-types */
const CustomInput = ({ label, placeholder, type}) => {
    return (
        <section>
            <label className="text-color2 text-sm font-medium pb-2.5"> {label} </label>
            <input 
                className="focus:outline-none rounded-xl h-[50px] border border-color10 w-full placeholder:font-medium placeholder:text-color11 pl-2.5"
                placeholder={placeholder}
                type={type} 
            />
        </section>
    );
}
 
export default CustomInput;