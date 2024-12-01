export default function Header(){
    return(
        <div className="flex h-20 bg-gray-500 justify-between items-center px-5 sm:rounded-xl sm:m-5" >
            <span className="text-gray-100">Olá, Usuário</span>
            <h1 className="text-gray-100 text-xl">Newsletter</h1>
            <input type="checkbox" className="hidden sm:block" />
        </div>
    )
}