import ThemeToggle from "@/components/ThemeToggle";
import ServerTimePage from "@/app/server-client/page";


export default function ServerTimePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Data/Hora do Servidor</h1>
      <p className="text-lg mt-2">{new Date().toLocaleString()}</p>
      <ThemeToggle />
    </main>
  );
}
