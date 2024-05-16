import { Gear } from "@phosphor-icons/react";
import { useState } from "react";

function OptionsModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {
        /* Botão para abrir o modal */
        isOpen ? null : (
          <button
            className="fixed m-4 p-3 bg-zinc-700 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Gear size={24} />
          </button>
        )
      }

      {isOpen ? (
        <div className="h-full w-56 bg-zinc-700 transition-all duration-1000 ease-in-out flex flex-col justify-center">
          <h1 className="text-xl text-center mt-14">Configurações</h1>
          <button onClick={() => setIsOpen(false)}>Fechar</button>
        </div>
      ) : null}
    </>
  );
}

export default OptionsModal;
