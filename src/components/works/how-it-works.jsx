import image_rec from "../../assets/image_rec.png";

const HowItWorks = () => {
    const works = [
        { num: 1, heading: "Record Screen", text: 'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.'},
        { num: 2, heading: "Share Your Recording", text: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform."},
        { num: 3, heading: "Learn Effortlessly", text: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone."}
    ];

    return (
        <section className="pt-20 px-10">
            <h2 className="text-center text-color2 font-bold text-[40px]"> How it works </h2>
            <section className="flex justify-evenly mt-10">
                { works.map(({ num, heading, text }) => (
                    <section key={num} className="flex flex-col gap-2.5 w-[350px]">
                        <div className="bg-color4 h-[68px] w-[68px] rounded-full text-white font-bold text-3xl flex justify-center items-center mx-auto"> {num} </div>
                        <h3 className="text-color7 text-2xl font-semibold text-center"> {heading} </h3>
                        <p className="text-center text-lg font-normal text-color6">  {text} </p>
                        <section className="flex justify-center">
                            <img src={image_rec} width={300} alt="image_rec" />
                        </section>
                    </section>
                ))}
            </section>
        </section>
    );
}
 
export default HowItWorks;