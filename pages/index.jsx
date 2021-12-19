import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';

// Components
import Part from '../components/part';
import ButtonActive from '../components/buttons/button-active';
import ButtonBlack from '../components/buttons/button-black';

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
                        <p className="text-white text-sm mt-16 font-light leading-relaxed">Welcome to my portfolio site, where you can find any project that<br/>
                            i have done. So feel free to explore my projects in this website</p>
                        
                        <ButtonActive name="Explore" />

                        <div className="social-media-container mt-32">
                            <button className="text-white text-sm py-2 px-8 border border-transparent rounded-full hover:border-white">Instagram</button>
                            <button className="text-white text-sm ml-24 py-2 px-8 border border-transparent rounded-full hover:border-white">Portfolio</button>
                        </div>
                    </div>

                    <div className="right-side w-2/6 absolute top-0 right-0 bottom-0 border-l border-gray-400">
                        <div className="relative w-full">
                            <div className="gambar left-0 top-0 w-full h-96 bg-white"></div>

                            <div className="px-8 py-6 mt-10 ml-6">
                                <h1 className="font-semibold text-white text-4xl">Introduce.</h1>

                                <p className="text-white text-sm font-light my-6">Hi! I'm Gunawan Cipta, 18 Year Old.</p>

                                <p className="text-white text-sm font-light">I am a Graphic Designer who love to <br />
                                    design a thing. And also i am a Programmer.</p>

                                <button className="text-white text-sm py-2 px-6 border border-white rounded-full mt-10 hover:bg-lime-400 hover:text-black hover:border-lime-400 hover:italic">Download My CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Part title="Creative Side." number="01" second={false}/>

            <div className="h-1/4 flex">
                <img src="/graphic-design-sec.png" alt="graphic-design-image" className="w-2/4" />

                <div className="bg-lime-400 w-2/4 flex items-center justify-center">
                    <div className="w-2/4 flex flex-col items-end text-right">
                        <p className="w-max py-1 px-2 text-white text-xs rounded-full bg-black">#GraphicDesign</p>
                        <h1 className="my-6 font-semibold text-6xl leading-tight">Graphic Design<br/>Projects.</h1>

                        <p className="text-sm mt-12 leading-normal">Welcome to my portfolio site, where you can find any project that <br/>
                            i have done. So feel free to explore my projects in this website</p>

                        <ButtonBlack name="Explore" />
                    </div>
                </div>
            </div>

            <Part title="Engineering Side." number="02" second={true} />

            <div className="h-1/4 flex">
                <div className="bg-lime-400 w-2/4 flex items-center justify-center">
                    <div className="w-2/4">
                        <p className="w-max py-1 px-2 text-white text-xs rounded-full bg-black">#Programming</p>
                        <h1 className="my-6 font-semibold text-6xl leading-tight">Programming<br/>Projects.</h1>

                        <p className="text-sm mt-12 leading-normal">Welcome to my portfolio site, where you can find any project that <br/>
                            i have done. So feel free to explore my projects in this website</p>

                        <ButtonBlack name="Explore" />
                    </div>
                </div>

                <img src="/programming-image.png" alt="graphic-design-image" className="w-2/4" />
            </div>

            <div className="py-96 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white font-semibold text-6xl">Interested ?</h1>
                    <p className="text-white text-sm mt-10 leading-relaxed font-light">If you want to work with me you can <br/>
                        Email me or DM me via Instagram.</p>

                    <ButtonActive name="Email" />
                </div>
            </div>

        </section>
    )
}