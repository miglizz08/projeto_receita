import "./globals.css";

export const metadata = {
  title: "Projeto Receita",
  description: "Atividade de receitas desenvolvida com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
