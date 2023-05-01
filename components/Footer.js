
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer(){

    return(
        <>
        <footer className={styles.rodape}>
            <p>
                <span>
                    PokeNext
                </span> &copy; 2023 
            </p>
            <p>
                Desenvolvido por Marcos Vinicius França Silva.
            </p>
            <div className={styles.redes}>
                <Link href={'#'}>
                    GitHub
                </Link>
                <Link href={'#'}>
                    Linkedin
                </Link>
            </div>
        </footer>
        </>
    )
}