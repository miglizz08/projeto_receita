import styles from "./ReceitaCard.module.css";

export default function ReceitaCard({ receita }) {
    return(
        <div className={styles.card}>

            <img
                className={styles.imagem}
                src={receita.image}
                alt={receita.name}
            />

            <h2 className={styles.titulo}>
                {receita.name}
            </h2>

            <p className={styles.info}>
                <strong>Culinária:</strong> {receita.cuisine}
            </p>

            <p className={styles.info}>
                <strong>Dificuldade:</strong> {receita.difficulty}
            </p>

            <p className={styles.info}>
                <strong>Tempo de preparo:</strong> {receita.prepTimeMinutes} min
            </p>

            <p className={styles.info}>
                <strong>Avaliação:</strong> {receita.rating}
            </p>

            <div className={styles.ingredientes}>

                <h3>Ingredientes</h3>

                <ul>
                    {receita.ingredients.map((ingrediente, idx) => {
                        return(
                            <li key={idx}>
                                {ingrediente}
                            </li>
                        )
                    })}
                </ul>

            </div>

        </div>
    )
}
