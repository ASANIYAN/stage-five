import  simple from "../../assets/simple.svg";
import  easy from "../../assets/easy.svg";
import  revisit from "../../assets/revisit.svg";
import  video_repo from "../../assets/video_repo.png";

const Features = () => {
    const features = [
        { heading: "Simple Screen Recording", text: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",  img: simple },
        { heading: "Easy-to-Share URL", text: "Share your recordings instantly with a single link. No attachments, no downloads.",  img: easy },
        { heading: "Revisit Recordings", text: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",  img: revisit },
    ];


    return (
        <section className="px-10 py-10">
            <h2 className="text-center text-color2 font-bold text-[40px]"> Features </h2>
            <p className="text-xl text-center text-color6 mt-1"> Key Highlights of Our Extension </p>

            <section className="flex justify-between mt-16">
                
                <section className="space-y-5">
                    { features.map(({heading, text, img}) => (
                        <section key={heading} className="flex gap-2.5 items-center">
                            <div className="mb-auto">
                                <img src={img} width={32}  alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl text-color7 font-semibold"> {heading} </h3>
                                <p className="max-w-[480px] text-color6 mt-1 text-lg"> {text} </p>
                            </div>
                        </section>

                    ))}
                </section>

                <section>
                    <img src={video_repo} width={550}  alt="" />
                </section>

            </section>

        </section>
    );
}
 
export default Features