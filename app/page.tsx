import Image from "next/image";

export default function Home() {
  const habits = {};
  return (
    <main>
      {habits === null || Object.keys(habits).length === 0 && (
        <h1 className="mt-20 text-4xl font-light text-white font-display">
          Você não tem hábitos cadastrados
        </h1>
      )}
    </main>
  );
}
