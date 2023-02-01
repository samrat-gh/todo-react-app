import { useState } from "react"

export default function Header() {

    const [darkMode, setDarkMode] = useState(false);

return (
     <header className="bg-gray-400">
        <div>
            <button> 
                <img src={'settings.svg'} alt='setting icon' width={24} height={24} />
            </button>
        </div>

        <div>
            if(isDarkMode)?(<button onClick={() => setDarkMode(!darkMode)}> 
                <img src={'lightmoon.svg'} alt='Light icon' width={24} height={24} />
            </button>) : (<button onClick={() => setDarkMode(!darkMode)}> 
                <img src={'Darkmoon.svg'} alt='Dark icon' width={24} height={24} />
            </button>)
            
        </div>
     </header>
)
};
