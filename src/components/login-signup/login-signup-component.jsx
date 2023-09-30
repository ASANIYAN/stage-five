import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.svg";
import google from "../../assets/google.svg";
import CustomInput from "../input/custom-input";

const LoginSignUpComponent = () => {
    return (
        <main className="mt-10 px-10">
            
            <section className="flex items-center gap-1.5">
                <img src={logo} height={40} width={40} alt="logo" />
                <span className="font-bold text-color1"> HelpMeOut </span>
            </section>
            
            <section className="max-w-[500px] py-10 mx-auto">
                
                <h1 className="font-semibold text-3xl text-color2 text-center"> Log in or Sign up </h1>
                
                <p className="text-sm font-light text-color8 max-w-[320px] mt-4 mx-auto text-center"> Join millions of others in sharing successful moves on <span className="font-normal"> HelpMeOut. </span> </p>
                
                <section className="mt-8 space-y-5 flex flex-col items-center">
                    <button className="bg-transparent w-[475px] border border-color2 rounded-xl py-3 font-medium flex justify-center gap-2.5 items-center text-color2">  
                        <img src={google} width={24} height={24} alt="" />  Continue with Google  
                    </button>
                    <button className="bg-transparent w-[475px] border border-color2 rounded-xl py-3 font-medium flex justify-center gap-2.5 items-center text-color2">  
                        <img src={fb} width={24} height={24} alt="" />  Continue with Facebook  
                    </button>
                </section>
                
                <section className="flex gap-1 items-center mt-8 justify-center">
                    <div className="w-[200px] h-0.5 border-b border-b-color9"></div>
                    <span className="text-sm font-medium text-color9"> or </span>
                    <div className="w-[200px] h-0.5 border-b border-b-color9"></div>
                </section>
                <section className="space-y-2.5 mt-8">
                    <section className="max-w-[475px] mx-auto">
                        <CustomInput label={"Email"} type={"email"} placeholder={"Enter your email address"} />
                    </section>
                    <section className="max-w-[475px] mx-auto">
                        <CustomInput label={"Password"} type={"password"} placeholder={"Enter your Password"} />
                    </section>
                </section>
                
                <section className="flex justify-center">
                    <button className="w-[475px]  bg-color4 text-color12 text-lg font-medium rounded-lg py-2.5 text-center mt-5"> Sign Up </button>
                </section>

            </section>
        </main>
    );
}
 
export default LoginSignUpComponent;