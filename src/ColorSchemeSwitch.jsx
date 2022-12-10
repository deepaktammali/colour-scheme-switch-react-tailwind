import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { COLOR_SCHEME_MAP, LOCALSTORAGE_COLOR_SCHEME_KEY } from './constants';

const ColorSchemeSwitch = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const themeAttribute = document.documentElement.getAttribute("data-theme");
        setTheme(themeAttribute);
    }, [])

    const isDarkTheme = theme === COLOR_SCHEME_MAP.DARK;

    // persist to local storage and set data attribute on the HTML element
    const changeTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(LOCALSTORAGE_COLOR_SCHEME_KEY, theme);
    }

    const handleThemeToggle = () => {
        let theme;

        // If dark change to light and vice versa
        if (isDarkTheme) {
            theme = COLOR_SCHEME_MAP.LIGHT;
        }
        else {
            theme = COLOR_SCHEME_MAP.DARK;
        }

        setTheme(theme);
        changeTheme(theme);
    }

    return (
        <motion.div className={
            clsx("flex w-14 h-8 p-2 cursor-pointer rounded-xl border", isDarkTheme ? "justify-end border-slate-100" : "justify-start border-slate-900")
        } layout="position" onClick={() => { handleThemeToggle() }}>
            {
                theme != null ? <motion.div layout>
                    {
                        theme === "dark" ? <MoonIcon className="text-white" /> : <SunIcon className="text-black" />
                    }
                </motion.div> : <span className="h-6"></span>
            }
        </motion.div>
    );
}

export default ColorSchemeSwitch;