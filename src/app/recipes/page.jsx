"use client";

import ReceitaCard from "@/components/ReceitaCard";
import { useEffect, useState } from "react";

export default function Receitas() {

    const [listaReceitas, setListaReceitas] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {

        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListaReceitas(data.recipes);
                setMsgErro("");
            })
            .catch(error => setMsgErro(error.message));

    }, []); // quando vazio, é executado ao carregar a tela

    return (
        <main>

            <h1>Receitas</h1>

            {msgErro != "" && <p>ERRO: {msgErro}</p>}

            {listaReceitas.length > 0 ?

                //aparece quando tem usuario

                <div>
                    {listaReceitas.map((receita) => {
                        return (
                            <ReceitaCard
                                key={receita.id}
                                receita={receita}
                            />
                        )
                    })}
                </div>

                :

                //aparece quando não tem nenhum usuario

                <div>
                    <p>Carregando receitas...</p>
                </div>

            }

        </main>
    )
}
