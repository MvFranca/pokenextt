
import styles from '../styles/MenuMobile.module.css'
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import { useState } from 'react';

export default function MenuMobile(){
    const [menuSituation, setMenuSituation] = useState('')

    const menuFechar = () => {
       let menuAtual = document.getElementById('MenuMobile').style.display = 'none'
       setMenuSituation(menuAtual)
    }

    return(
        <main className={styles.container} >
            <div>
                <AiOutlineClose onClick={menuFechar}/>
            </div>  
            <nav>
                    <Link href="/">Home</Link>
                    <Link href="/sobre">Sobre</Link>
                    <Link href={'https://www.linkedin.com/in/mvfranc4/'}  target='_blank' >LinkedIn</Link>
                    <Link href={'https://github.com/MvFranca'} target='_blank' >GitHub</Link>
            </nav>
        </main>
    )
}