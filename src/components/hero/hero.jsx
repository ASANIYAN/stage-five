import { ArrowRight } from "iconsax-react";
import img1 from "../../assets/woman_on_pc.png";
import img2 from "../../assets/father_son_pc.png";
import img3 from "../../assets/woman_using_smartphone.png";
import grid_1 from "../../assets/grid_1.png";
import grid_2 from "../../assets/grid_2.png";

const Hero = () => {
    return (
        <section className="flex justify-between pt-32 py-20 px-10 shadow-md">
            <section className="pt-16">
                <h1 className="text-6xl font-bold text-color2 max-w-[460px]"> Show Them Don&apos;t Just Tell </h1>
                <p className="text-color3 mt-6 max-w-[530px]"> Help your friends and loved ones by creating and sending videos on how to get things done on a website. </p>

                <button className="text-white text-center mt-6 px-5 py-3 flex items-center rounded-lg gap-1 bg-color4"> Install HelpMeOut <ArrowRight size={20} color="#fff"/>  </button>
            </section>

            <section className="relative">
                <section className="flex gap-2.5 overflow-clip">
                    <section className="flex flex-col gap-2.5">
                        <img className="rounded-md z-10" width={260} height={200} src={img1} alt="woman_on_pc" />
                        <img className="rounded-md z-10" width={260} height={200}  src={img2} alt="father_son_pc" />
                    </section>
                    <img className="rounded-md z-10" width={250} height={400} src={img3} alt="woman_using_smartphone" />
                </section>
                <img src={grid_1} width={240} className="absolute -top-[44px] -right-[36px]" alt="grid-1" />
                <img src={grid_2} width={250} className="absolute left-0 bottom-0 translate-y-16 -translate-x-8" alt="grid-2" />

            </section>

        </section>
    );
}
 
export default Hero;