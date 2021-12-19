import 'tailwindcss/tailwind.css';

export default function ButtonBlack(props){
    return (
        <button className="py-2 px-8 mt-10 text-sm rounded-full bg-black text-white">{props.name}</button>
    )
}