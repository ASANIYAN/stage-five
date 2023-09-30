import { ArrowDown2, Copy, Edit } from "iconsax-react";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import profile_icon from "../../assets/profile_icon.svg";
import bigger_video_frame from "../../assets/bigger_video_frame.png";

const VideoComponent = () => {
    const socials = [
        { text: "Facebook", img: fb },
        { text: "WhatsApp", img: whatsapp },
        { text: "Telegram", img: telegram },
    ];

    return (
        <>
            <header className="flex items-center justify-between px-16 mt-10">
                <section className="flex items-center gap-1.5">
                    <img src={logo} height={40} width={40} alt="logo" />
                    <span className="font-bold text-color1"> HelpMeOut </span>
                </section>

                <section className="flex gap-1.5 items-center">
                    <img src={profile_icon} height={40} width={40} alt="profile icon" />
                    <span className="font-normal text-color2"> John Mark </span>
                    <ArrowDown2 size="24" color="#000"/>
                </section>
            </header>

            <main className="px-16">
                <section className="mt-5">
                    <span className="text-color13 text-lg font-normal mt-5"> Home / Recent Videos / <span className="text-color18 font-medium"> How To Create A Facebook Ad Listing  </span> </span>
                </section>
                
                <section className="mt-5">
                    <section className="flex gap-2.5 items-center">
                        <h1 className="text-color2 capitalize text-2xl font-semibold mt-"> How To Create A Facebook Ad Listing  </h1>
                        <Edit size="24" color="#120B48"/>
                    </section>
                    <section className="mt-5 border border-color16 bg-color17 p-3 rounded-3xl w-full h-[400px]">
                        <img src={bigger_video_frame} className="h-full w-full" alt="bigger_video_frame" />
                    </section>
                </section>

                <section className="flex justify-between mt-5">
                    
                    <section className="w-[500px] bg-color14 py-2 px-4 flex items-center gap-2 border border-[#E7E7ED] rounded-xl placeholder:text-color2 text-lg font-normal">
                        <input 
                            type="text" 
                            className="focus:outline-none bg-transparent border-transparent border-none flex-1 h-full"
                            placeholder="enter email of receiver" 
                        />
                        <button className="py-1.5 rounded text-white text-center font-medium px-4 bg-[#605C84]"> Send </button>
                    </section>    

                    <section 
                    className="w-[600px] bg-[#FAFAFA] py-2 px-4 flex justify-between items-center border-[0.5px] border-[#929292] rounded-xl placeholder:text-color2 text-lg font-normal">
                        <span className="font-normal text-[#4B4B4B]"> https://www.helpmeout/ </span>
                        <button className="border border-color4 rounded py-1.5 px-3 flex items-center gap-1"> <Copy size="20" color="#120B48"/> Copy URL </button>
                    </section>    
                </section>

                <section className="mt-5">
                    <p className="text-[#08051E] text-xl font-medium"> Share your video </p>
                    <section className="mt-5 flex gap-2.5">
                        { socials.map(({text, img}) => (
                            <section key={text} className="rounded-md border border-[#0A0628] flex items-center gap-2 w-fit py-2 px-3">
                                <img src={img} width={24} height={20} alt={text} />
                                <p className="font-medium text-[#08051E] "> {text} </p>
                            </section>
                        ))}
                    </section>
                </section>

                <section className="mt-10">
                    <p className="text-[#08051E] text-xl font-medium"> Transcript </p>
                    <div className="flex mt-5 gap-2.5 items-center p-2 w-fit border border-[#CFCFCF]"> <p className="text-[#9D9D9D] font-normal"> English </p>  <ArrowDown2 size={16} color="#BBBBBB" /> </div>
                </section>

                <section className="mt-5 flex gap-5">
                    <span className="text-color2 text-xl font-medium"> 0.01 </span>
                    <span className="text-black text-lg font-normal "> 
                        First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the  
                    </span>
                </section>

            </main>
        </>
    );
}
 
export default VideoComponent;