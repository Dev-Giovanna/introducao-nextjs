import './globals.css';

export const metadata = {
  title: 'Exercício 02',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="">
        {children}
      </body>
    </html>
  );
}
