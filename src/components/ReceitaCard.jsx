import styles from "./ReceitaCard.module.css";

function formatarNota(nota) {
  const valor = Number(nota);
  return Number.isFinite(valor) ? valor.toFixed(1) : "—";
}

export default function ReceitaCard({ receita }) {
  const ingredientes = Array.isArray(receita.ingredients) ? receita.ingredients : [];

  return (
    <article className={styles.card}>
      <img
        className={styles.imagem}
        src={receita.image}
        alt={`Foto da receita ${receita.name}`}
      />

      <div className={styles.conteudo}>
        <div className={styles.cabecalho}>
          <p className={styles.cozinha}>{receita.cuisine || "Culinária variada"}</p>
          <h2 className={styles.titulo}>{receita.name}</h2>
        </div>

        <dl className={styles.detalhes}>
          <div>
            <dt>Dificuldade</dt>
            <dd>{receita.difficulty || "Não informada"}</dd>
          </div>
          <div>
            <dt>Preparo</dt>
            <dd>{receita.prepTimeMinutes ?? "—"} min</dd>
          </div>
          <div>
            <dt>Avaliação</dt>
            <dd>★ {formatarNota(receita.rating)}</dd>
          </div>
        </dl>

        <div className={styles.ingredientes}>
          <h3>Ingredientes</h3>
          <ul>
            {ingredientes.map((ingrediente, indice) => (
              <li key={`${ingrediente}-${indice}`}>{ingrediente}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
