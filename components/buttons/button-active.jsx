import 'tailwindcss/tailwind.css';

export default function ButtonActive(props){
    return (
        <button className="py-2 px-8 mt-10 text-sm bg-lime-400 text-black rounded-full">{props.name}</button>
    )
}