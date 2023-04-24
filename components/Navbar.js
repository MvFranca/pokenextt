import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"
export default function Navbar(){

    return(
        <header className={styles.cabecalho}>
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
            </nav>
        </header>
    )
}