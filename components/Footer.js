
import styles from '../styles/Footer.module.css'

export default function Footer(){

    return(
        <>
        <footer className={styles.rodape}>
            <p>
                <span>
                    PokeNext
                </span> &copy; 2021 
            </p>
            <p>
                Criado por Marcos Vinicius França Silva.
            </p>
        </footer>
        </>
    )
}