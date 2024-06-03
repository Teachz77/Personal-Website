import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className='container py-16'>
                <h1 className='border-bottom mt-5 text-dark display-6 pb-4 text-center'>
                    About Me
                </h1>
                <p className='text-dark fs-5 text-center'>
                I'm a passionate web developer dedicated to crafting immersive digital experiences through innovative coding and design. With a background in information system and a flair for creativity, I specialize in translating ideas into seamless, user-centric websites and applications. Equipped with expertise in HTML, CSS, JavaScript, and beyond, I thrive on solving complex problems and staying at the forefront of emerging technologies. {" "}
                </p>

                <div className='d-flex justify-content-center'>
                    <Link
                        to={"/about"}
                        className='text-primary fs-5 text-center'>
                        Know More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default About;
