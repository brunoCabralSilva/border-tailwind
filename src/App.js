import './App.css';

function App() {
  return (

    <div class="h-screen relative flex items-center justify-center">
      <img
        src={require('../src/mountains.jpg')}
        alt="montanhas"
        class="absolute h-full w-full object-cover"
      />
      <div class="rounded-2xl border-8 border-white border-double bg-blue-100/70 w-1/3 h-1/2 z-50 flex flex-col items-center justify-center font-bold">
        <h1 class="text-center px-20">
          Você está gostando de aprender sobre Bordas em Tailwind?
        </h1>
        <div class="mt-5">
          <button
            type="button"
            class="px-4 py-3 border-4 border-black outline outline-2 outline-white outline-offset-4 hover:outline-none"
          >
            Sim
          </button>
          <button
            type="button"
            class="ml-6 px-4 py-3 border-4 border-black outline outline-2 outline-white outline-offset-4 hover:border-none"
          >
            Não
          </button>
        </div>
      </div>
    </div>

  );
}

export default App;
