import { useState } from 'react';
import {Collapse} from 'react-collapse'; // npm install --save react-collapse   
import { useWindowWidth } from '@react-hook/window-size'
import { IoIosArrowDown } from 'react-icons/io';

const Menu = ({title, items}) => {

    const windowWidth = useWindowWidth()

    const [isOpen, setIsOpen] = useState(windowWidth >= 768)
    
    const toggleFunction = () => {
        if (windowWidth <= 768){
            setIsOpen(!isOpen)
        }
    }

    return(
        <section>
            <nav className="grid gap-y-4">
                <h6 onClick={toggleFunction} className="text-lg text-primary-brand-color flex items-center justify-between">
                    {title}
                    <button className={`w-6 h-6 grid place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color transform ${isOpen ? 'rotate-180' : null} ${windowWidth > 768 ? 'hidden' : 'null'} `}>
                        <IoIosArrowDown size={15} /> 
                    </button>
                </h6>
                <Collapse isOpened={isOpen || (windowWidth > 768)}> 
                    <nav>
                        <ul className="grid gap-y-2">
                            {items.map((item, index) => (
                                <li key={index} >
                                    <a href="#" className="text-sm hover:text-brand-color">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Collapse>
            </nav>
        </section>
    )
}

export default Menu