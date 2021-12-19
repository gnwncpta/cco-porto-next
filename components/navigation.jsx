import 'tailwindcss/tailwind.css';
import Image from 'next/image';

export default function Navigation(props){
    return (
        <main className="bg-black">
            <section className="w-full bg-black border-b border-gray-400">
                <div className="w-4/5 py-10 mx-auto flex items-center justify-between">
                    <Image src="/logo.svg" alt="logo-cco" width={40} height={40} className="text-white"/>

                    <div>
                        <a href="/artworks" className="text-white text-sm mx-5 py-2 px-6 rounded-full hover:bg-white hover:text-black">Artworks</a>
                        <a href="/projects" className="text-white text-sm mx-5 py-2 px-6 rounded-full hover:bg-white hover:text-black">Projects</a>
                        <a href="/archived" className="text-white text-sm mx-5 py-2 px-6 rounded-full hover:bg-white hover:text-black">Archived</a>
                    </div>

                    <a href="/connection" className="text-white text-sm py-2 px-6 rounded-full hover:bg-white hover:text-black">Connection</a>
                </div>

            </section>

            { props.children }
        </main>
    )
}