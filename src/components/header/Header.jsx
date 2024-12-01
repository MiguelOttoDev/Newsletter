import ToggleTheme from "../ToggleTheme/ToggleTheme"

export default function Header(){
    return(
        <div className="flex h-20 bg-alura-200 justify-between items-center px-5 sm:rounded-xl sm:m-5 dark:bg-dark-200" >
            <span className="text-gray-100">Olá, Usuário</span>
            <h1 className="text-gray-100 text-xl">Newsletter</h1>
            <ToggleTheme/>
        </div>
    )
}