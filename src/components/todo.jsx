import { useContext } from "react";
import { themeContext } from "./header";

export default function Todo(){
    const theme = useContext(themeContext);
    console.log(theme);

return (
    <div className={(theme === 'light') ? "bg-slate-600 w-20 h-auto" : "bg-slate-400 w-20 h-auto"}>
The Todo Elements go here.
    </div>
)
}