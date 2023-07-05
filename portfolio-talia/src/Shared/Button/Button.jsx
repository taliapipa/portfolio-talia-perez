const Button =({text})=>{
    return (
        <button className="bg-primary text-white p-5 rounded-lg shadow-lg shadow-indigo-500/40 hover:bg-secondary m-3">
            {text}
        </button>
    )
}

export default Button