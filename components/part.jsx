import 'tailwindcss/tailwind.css';

export default function Part(props){

    const { title, number, second } = props;

    if(second){
        return (
            <div className="">
                <div className="w-4/5 flex items-center justify-between mx-auto py-16">
                    <h1 className="p-10 text-white text-6xl rounded-full border-4 border-lime-400">{number}</h1>
                    
                    <h1 className="text-white text-5xl font-medium">{title}</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className="">
                <div className="w-4/5 flex items-center justify-between mx-auto py-16">
                    <h1 className="text-white text-5xl font-medium">{title}</h1>
    
                    <h1 className="p-10 text-white text-6xl rounded-full border-4 border-lime-400">{number}</h1>
                </div>
            </div>
        )
    }

}