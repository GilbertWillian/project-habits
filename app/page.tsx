import DayState from "@/components/DayState";
import Image from "next/image";

export default function Home() {
  const habits = {
    'beber água': {
      '2024-07-16' : true,
      '2024-07-15' : false,
      '2024-07-14' : true,
    }, 'estudar programação': {
      '2024-07-16' : false,
      '2024-07-15' : true,
      '2024-07-14' : true,
    }
  };
  
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  
  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null || 
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            Você não tem hábitos cadastrados
          </h1>
        ))}
      {habits !== null && 
        Object.entries(habits).map(([habits, habitsStreak]) => (
          <div key={habits} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text=xl font-light text-white font-sans">{habits}</span>
              <button>
                <Image 
                  src="/images/trash.svg" 
                  width={20} height={20} 
                  alt="ícone de lixeita vermelha"
                />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {weekDays.map((day) => (
                <div key={day} className="flex flex-col ">
                  <span className="font-sans text-xs text-white text-center">
                    {day}
                  </span>
                  {/* day state */}
                  <DayState day={undefined}/>
                </div>
              ))}
            </section>
          </div>
        ))}
    </main>
  );
}
