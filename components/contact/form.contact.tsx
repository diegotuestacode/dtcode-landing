"use client";

import { onSendEmail } from "@/actions/contact.action";
import { useRef, useState } from "react";

const FormContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false); // Estado para manejar el estado de envío

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita la recarga de la página
    setPending(true); // Establece pending en true antes de enviar

    const formData = new FormData(formRef.current!); // Obtiene los datos del formulario
    const result = await onSendEmail(formData); // Envía el correo
    setPending(false); // Establece pending en false después de recibir la respuesta

    if (result.ok) {
      alert("¡Correo enviado con éxito!"); // Mensaje de éxito
      formRef.current?.reset(); // Limpia el formulario
    } else {
      alert("Hubo un error al enviar el correo."); // Mensaje de error
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}> {/* Usa onSubmit en lugar de action */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label className="pl-1 font-medium">Nombre completo*</label>
          <input
            name="name"
            required
            className="py-2 w-full px-4 required rounded-lg bg-transparent border-colorBlack3 border-[2px] text-colorBlack2"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="pl-1 font-medium">Email*</label>
          <input
            name="email"
            required
            className="py-2 w-full px-4 required rounded-lg bg-transparent border-colorBlack3 border-[2px] text-colorBlack2"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="pl-1 font-medium">Asunto*</label>
          <input
            name="subject"
            required
            className="py-2 w-full px-4 required rounded-lg bg-transparent border-colorBlack3 border-[2px] text-colorBlack2"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="pl-1 font-medium">Mensaje*</label>
          <textarea
            name="message"
            required
            className="py-2 w-full px-4 required rounded-lg bg-transparent border-colorBlack3 border-[2px] text-colorBlack2"
            rows={5}
          />
        </div>
        <div className="flex justify-center mt-5">
          <input
            type="submit"
            aria-disabled={pending}
            disabled={pending}
            value={pending ? "Enviando..." : "Enviar"}
            className="cursor-pointer border-[2px] border-black rounded-md py-2 font-semibold px-10 text-colorBlack2 hover:text-white hover:bg-colorPrimary disabled:bg-colorPrimary disabled:text-white"
          />
        </div>
      </div>
    </form>
  );
};

export default FormContact;
