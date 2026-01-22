import { useEffect, useState } from "react";

function ThemeSwitch(){
    const [dark, setdark] = useState(false);
    useEffect(() => {
        document.body.className = dark ? "dark" : "portpolio-card"; }, [dark]);
    return(
            <button onClick={() => setdark(!dark)}>Switch</button>
    );
}

export default ThemeSwitch;