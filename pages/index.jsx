import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';

// Components
import Part from '../components/part';

export default function Home(props){

    useEffect(() => {
        window.document.title = "Home";

        return () => window.document.title = "";
    })

    return (
        <section className="full-container bg-black "> 

            <div className="full-container h-full relative mx-auto flex justify-between border-b border-gray-400">
                <div className="80%-container w-4/5 py-20 mx-auto">

                    <div className="left-side w-max mt-32">
                        <p className="text-white font-normal">Welcome to Portfolio</p>
                        <h1 className="mt-3 text-white font-semibold text-6xl leading-tight">Explore Inspired <br/> Projects.</h1>
                        <p className="text-white text-sm mt-16 leading-normal">Welcome to my portfolio site, where you can find any project that<br/>
                            i have done. So feel free to explore my projects in this website</p>
                        
                        <button className="py-2 px-8 mt-10 text-sm bg-lime-400 text-black rounded-full">Explore</button>

                        <div className="social-media-container mt-32">
                            <button className="text-white text-sm">--- Instagram</button>
                            <button className="text-white text-sm ml-40">--- Portfolio</button>
                        </div>
                    </div>

                    <div className="right-side w-2/6 absolute top-0 right-0 bottom-0 border-l border-gray-400">
                        <div className="relative w-full">
                            <div className="gambar left-0 top-0 w-full h-96 bg-white"></div>

                            <div className="px-8 py-6 mt-10 ml-6">
                                <h1 className="font-semibold text-white text-3xl">Introduce.</h1>

                                <p className="text-white text-sm my-6">Hi! I'm Gunawan Cipta, 18 Year Old.</p>

                                <p className="text-white text-sm">I am a Graphic Designer who love to <br />
                                    design a thing. And also i am a Programmer.</p>

                                <button className="text-white text-sm py-2 px-6 border border-white rounded-full mt-10 hover:bg-lime-400 hover:text-black hover:border-lime-400">Download My CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Part title="Creative Side." number="01" second={false}/>

            <div className="h-1/4 flex">
                <img src="/graphic-design-sec.png" alt="graphic-design-image" className="w-2/4" />

                <div className="bg-lime-400 w-2/4 flex items-center justify-center">
                    <div className="w-2/4 text-right">
                        <h1 className="my-6 font-semibold text-6xl leading-tight">Graphic Design<br/>Projects.</h1>

                        <p className="text-sm leading-normal">Welcome to my portfolio site, where you can find any project that <br/>
                            i have done. So feel free to explore my projects in this website</p>

                        <button className="py-2 px-8 mt-10 text-sm rounded-full bg-black text-white">Explore</button>
                    </div>
                </div>
            </div>

            <Part title="Engineering Side." number="02" second={true} />

            <div className="h-1/4 flex">
                <div className="bg-lime-400 w-2/4 flex items-center justify-center">
                    <div className="w-2/4">
                        <h1 className="my-6 font-semibold text-6xl leading-tight">Programming<br/>Projects.</h1>

                        <p className="text-sm leading-normal">Welcome to my portfolio site, where you can find any project that <br/>
                            i have done. So feel free to explore my projects in this website</p>

                        <button className="py-2 px-8 mt-10 text-sm rounded-full bg-black text-white">Explore</button>
                    </div>
                </div>

                <img src="/programming-image.png" alt="graphic-design-image" className="w-2/4" />
            </div>

        </section>
    )
}