import "../CSS Files/toggle.css";
import "../CSS Files/App.css";
import "../CSS Files/index.css";
import "../CSS Files/header.css";
import "../CSS Files/aside.css";
import { useState } from "react";

function Toggle() {
    const [theme, setTheme] = useState("light");
    
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.classList.add("dark-theme");
            
        } else {
            setTheme("light");
            document.body.classList.remove("dark-theme");
        }
    };
    return (
        <div className="toggle" onClick={toggleTheme}>
            <img src= {theme === "light" ? "https://img.icons8.com/ios-filled/50/000000/moon--v1.png" : "https://img.icons8.com/ios-filled/50/000000/sun--v1.png"} alt="" />

        </div>
    );
}

export default Toggle;