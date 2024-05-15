import { useState } from "react";

function OptionsModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="fixed p-4" onClick={() => setIsOpen(!isOpen)}>
        Abrir
      </button>
      {isOpen ? (
        <div className="h-full w-56 bg-zinc-700 ">
          <h1 className="text-xl text-center mt-14">Configurações</h1>
        </div>
      ) : null}
    </>
  );
}

export default OptionsModal;
