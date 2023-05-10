import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import React, { useState } from "react"
import MenuMobile from "./menuMobile"

export default function Navbar({setMenuSituation}){    

    const menuAparecer = () => {
        document.getElementById('MenuMobile').style.display = 'flex'
    }

    return(
        <>
            
        <header className={styles.cabecalho}> 
            <div className={styles.menuM} id="MenuMobile">
                <MenuMobile
                />
            </div>
            <div>
                <Image src={'/imagens/pokeball.png'} width={30} height={30} alt="PokeNext">

                </Image>
                <h1>
                    PokeNext
                </h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/sobre'>
                            Sobre
                        </Link>
                    </li>
                </ul>
                <div className={styles.menu}>
                    <Image src='https://static.wixstatic.com/media/af8ac3_efbe6ee4ac194be3a62e33c2713531c0~mv2.png/v1/fill/w_196,h_196,al_c,q_95,enc_auto/BOT%C3%83O%20MENU%203%20tra%C3%A7os%20c%C3%B3pia_edited.png' width={35} height={35} alt="Traços menu" onClick={menuAparecer}/>
                </div>
            </nav>
        </header>
        </>
        
    )
}