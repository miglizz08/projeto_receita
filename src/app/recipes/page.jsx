"use client";

import { useEffect, useState } from "react";
import ReceitaCard from "@/components/ReceitaCard";
import styles from "./page.module.css";

export default function Receitas() {
  const [listaReceitas, setListaReceitas] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function carregarReceitas() {
      try {
        const resposta = await fetch("https://dummyjson.com/recipes", {
          signal: controller.signal,
        });

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar as receitas.");
        }

        const dados = await resposta.json();
        setListaReceitas(Array.isArray(dados.recipes) ? dados.recipes : []);
      } catch (error) {
        if (error.name !== "AbortError") {
          setErro(error.message || "Ocorreu um erro inesperado.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarReceitas();

    return () => controller.abort();
  }, []);

  return (
    <main className={styles.pagina}>
      <section className={styles.apresentacao}>
        <p className={styles.eyebrow}>Cozinha sem complicação</p>
        <h1>Receitas para experimentar</h1>
        <p>
          Ideias saborosas, com ingredientes e informações de preparo em um só lugar.
        </p>
      </section>

      {erro && (
        <p className={styles.erro} role="alert">
          Erro: {erro}
        </p>
      )}

      {carregando && <p className={styles.status} role="status">Carregando receitas...</p>}

      {!carregando && !erro && listaReceitas.length === 0 && (
        <p className={styles.status}>Nenhuma receita foi encontrada.</p>
      )}

      {listaReceitas.length > 0 && (
        <section className={styles.grade} aria-label="Lista de receitas">
          {listaReceitas.map((receita) => (
            <ReceitaCard key={receita.id} receita={receita} />
          ))}
        </section>
      )}
    </main>
  );
}
