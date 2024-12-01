import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme(){

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect( () => {
        systemPreference && document.documentElement.classList.add('dark')
    })

    const Toggle = () => {
        document.documentElement.classList.toggle('dark')
    }

    return(
        <div className="hidden sm:block">
            <MoonIcon className="h-8 text-gray-100 block cursor-pointer dark:hidden" onClick={Toggle}/>
            <SunIcon className="h-8 text-gray-100 hidden cursor-pointer dark:block" onClick={Toggle}/>
        </div>
    )
}