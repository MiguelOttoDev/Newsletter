import Input from "../Input/Input"

export default function Form ({onSubmit}){
    const safeSubmit = event =>{
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }
    return(
        <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
            <Input type="text"  placeholder="Insira seu nome..." required/>
            <Input type="email"  placeholder="Insira seu e-mail..." required/>
            <button type="submit" className=" hover:animate-pulse hover:shadow-md hover:dark:shadow-black hover:shadow-gray-500 py-1 w-full max-w-sm px-5 bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none" >Seguir</button>
        </form>
    )
}