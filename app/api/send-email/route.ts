import EmaiTemplateThankYou from "@/components/shared/email/email-template-thankyou";
import { Resend } from "resend";
import fs from "fs";
import path from "path";
const resend = new Resend(process.env.API_KEY_RESEND);

const img = "http://localhost:3000/assets/images/encabezado-email.jpg";

interface EmailRequest {
  type: "thankyou" | "me";
  email: string;
  name: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  const { type, email, name, subject, message }: EmailRequest =
    await request.json();

  try {
    if (type === "thankyou") {
      const imgPath = path.join(
        process.cwd(),
        "public",
        "assets",
        "images",
        "encabezado-email.jpg"
      );
      const imageContent = fs.readFileSync(imgPath).toString("base64");
      const { data, error } = await resend.emails.send({
        from: "DTCode - Soluciones Integrales <dtcode@resend.dev>",
        to: [email],
        subject: `Gracias por contactar ${name?.split(" ")[0] || ""}`,
        react: EmaiTemplateThankYou({
          url: `data:image/jpeg;base64,${imageContent}`,
          type: "thankyou",
        }),
        attachments: [
          {
            filename: "thankyou.jpg",
            content: imageContent,
          },
        ],
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }

      return Response.json(data);
    } else if (type === "me") {
      const { data, error } = await resend.emails.send({
        from: "DTCode - Soluciones Integrales <dtcode@resend.dev>",
        to: ["diego.productividad@gmail.com"],
        subject: `Contacto de ${name?.split(" ")[0] || ""}`,
        react: EmaiTemplateThankYou({
          url: `${img}`,
          type: "me",
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }

      return Response.json(data);
    } else {
      return Response.json({
        error: "Tipo de correo no válido!"
      }, {status:403});
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
