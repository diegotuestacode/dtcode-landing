"use server";
const { HOST } = process.env;

export const onSendEmail = async (data: FormData) => {
  const name = data.get("name")?.toString();
  const email = data.get("email")?.toString();
  const subject = data.get("subject")?.toString();
  const message = data.get("message")?.toString();

  const dataSend = {
    name,
    email,
    subject,
    message,
  };

  try {
    const url = `${HOST}/api/send-email`;
    
    // Realizamos la primera llamada
    const resultThankyou = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...dataSend,
        type: "thankyou",
      }),
    });

    // Realizamos la segunda llamada
    const resultMe = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...dataSend,
        type: "me",
      }),
    });

    const resultThankyouJson = await resultThankyou.json();
    const resultMeJson = await resultMe.json();

    // Verificamos si ambas respuestas fueron exitosas
    if (resultThankyouJson?.id && resultMeJson?.id) {
      return { ok: true };
    } else {
      return { ok: false };
    }

  } catch (error) {
    console.error("Error en onSendEmail:", error);
    return { error: "Hubo un problema al enviar el correo.", ok: false };
  }
};
