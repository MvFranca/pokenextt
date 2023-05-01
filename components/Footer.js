
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

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
                <div className={styles.linkedin}>
                    <Link href={'https://www.linkedin.com/in/mvfranc4/'}  target='_blank' >
                        <Image src={'/imagens/linkedIn.png'} width={30} height={28} alt='Logo LinkedIn'/>
                    </Link>
                </div>
                <div>
                    <Link href={'https://github.com/MvFranca'} target='_blank' >
                        <Image src={'/imagens/githubb.png'} width={30} height={28} alt='Logo GitHub'/>
                    </Link>
                </div>
            </div>
        </footer>
        </>
    )
}