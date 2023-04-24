import Image from "next/image"
import styles from "../../styles/Pokemon.module.css"

export const getStaticPaths = async () => {
    const maxPokemons = 251
        const api = 'https://pokeapi.co/api/v2/pokemon/'
    
        const res = await fetch(`${api}/?limit=${maxPokemons}`)
        const data = await res.json()

        //params
        const paths = data.results.map((pokemon, index) => {
            return {
                params: {id: (index + 1).toString()},
        }
        })

    return{
        paths,
        fallback: false,
    }

    
}

export const getStaticProps = async (context) => {
    const id = context.params.id

    const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return{ 
        props: {pokemon: data},
    }
    
}

export default function pokemon({pokemon}){
    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>
                {pokemon.name}
            </h1>
            <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width="200"
            height="200"
            alt={pokemon.name}
            />
            <div>
                <h3>
                   Número:
                </h3>
                <p>
                    #{pokemon.id}
                </p>
            </div>
            <div className={styles.typesContainer}>
                <h3>
                    Tipo:
                </h3>
                <div>
                    {pokemon.types.map((item, index )=> (
                        <span key={index} className={`${styles.type} ${styles[`type_${item.type.name}`]}`}>
                           { item.type.name}
                        </span>
                    ))}
                </div>
                <div className={styles.data_container}>
                    <div className={styles.data_height}>
                        <h4>
                            Altura:
                        </h4>
                        <p>
                            {pokemon.height  * 10} cm
                        </p>
                    </div>
                    <div className={styles.data_weight}>
                        <h4>
                            Peso:
                        </h4>
                        <p>
                            {pokemon.weight / 10} Kg
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}