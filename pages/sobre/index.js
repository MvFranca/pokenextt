import Image from "next/image"
import styles from '../../styles/Sobre.module.css'

export default function sobre(){
    return(
        <>
        <section className={styles.sobre}>
            <div className={styles.informacoes}>
                <div>
                    <h1>
                        Sobre o Projeto
                    </h1>
                    <p>
                        Este projeto foi desenvolvido com o objetivo de treinar minhas habilidades em NextJs e ReactJS. Para realizá-lo, utilizei a API -- NOME DA API --, onde obtive as informações necessárias sobre os Pokemons e pude organizá-las da melhor maneira.
                    </p>
                </div>
                <div>
                    <Image src={'/imagens/charizard.png'} width={300} height={300} alt="Charizard">
                    </Image>
                </div>
            </div>
        </section>
        </>
        
    )
}