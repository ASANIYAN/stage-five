import { ArrowDown2, Link1, More, SearchNormal1 } from "iconsax-react";
import logo from "../../assets/logo.svg";
import profile_icon from "../../assets/profile_icon.svg";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const VideosComponent = () => {
    const [cookies] = useCookies(['videosURLFromCloudinary']);

    return (
        <>
            <header className="flex items-center justify-between px-16 mt-10">
                
            <Link to={"/"}>
                <section className="flex items-center gap-1.5 hover:scale-110 transition-all">
                    <img src={logo} height={40} width={40} alt="logo" />
                    <span className="font-bold text-color1"> HelpMeOut </span>
                </section>
            </Link>

                <section className="flex gap-1.5 items-center">
                    <img src={profile_icon} height={40} width={40} alt="profile icon" />
                    <span className="font-normal text-color2"> John Mark </span>
                    <ArrowDown2 size="24" color="#000"/>
                </section>

            </header>
            <main className="">
                <section className="flex justify-between items-center py-10 shadow-sm px-16">
                    <section>
                        <h1 className="text-color2 text-3xl font-bold "> Hello, John Mark </h1>
                        <p className="text-lg text-color13 font-normal mt-1"> Here are your recorded videos </p>
                    </section>
                    <section className="w-[400px] bg-color14 py-3 px-4 flex items-center gap-2 border border-[#E7E7ED] rounded-xl placeholder:text-[#C3C3C3] text-sm font-normal">
                        <SearchNormal1 size="20" color="#C3C3C3"/>
                        <input 
                            type="text" 
                            className="focus:outline-none bg-transparent border-transparent border-none flex-1 h-full"
                            placeholder="Search for a particular video" 
                        />
                    </section>
                </section>

                <section className="px-16 mt-5">
                    <h4 className="text-color15 text-lg font-medium"> Recent files </h4>
                    
                    <section className="flex flex-wrap gap-6">
                        
                       { cookies?.videosURLFromCloudinary && cookies.videosURLFromCloudinary.map((video, index) => (
                                <section 
                                    key={index} 
                                    className="mt-5 w-[550px] h-[320px]"
                                >
                                    <section className="border border-color16 bg-color17 p-3 rounded-3xl">
                                        <section className="relative">
                                            <video src={video} className="h-[200px] w-full" controls loop />
                                        </section>
                                        <section className="flex justify-between items-center mt-5">
                                            <section >
                                                <h5 className="text-color2 text-xl font-medium capitalize"> How to create Facebook Ad listing </h5>
                                                <span className="capitalize font-normal text-color10 mt-1"> September 23, 2023 </span>
                                            </section>
                                            <section className="flex items-center gap-5 h-fit mb-auto">
                                                <Link1 size="24" color="#141414"/>
                                                <More size="24" color="#141414" className="-rotate-90" />
                                            </section>
                                        </section>
                                    </section>
                                </section>
                       ))}
                    </section>

                    { !cookies?.videosURLFromCloudinary && <h2 className="mt-10 text-3xl text-center"> No Recent Files </h2> }

                </section>

            </main>
        </>
    );
}
 
export default VideosComponent;