import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  description: z.string().min(5).max(1000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY in environment variables");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await resend.emails.send({
      from: "Formularz kontaktowy <noreply@motywo.pl>",
      to: "amstuffeu@proton.me",
      subject: `Nowa wiadomość od ${data.name}`,
      html: `
        <div style="font-family: sans-serif; font-size: 16px; color: #111; line-height: 1.5;">
          <h2 style="color: #34D399;">Nowa wiadomość kontaktowa</h2>
          <p><strong>Od:</strong> ${data.name} &lt;${data.email}&gt;</p>
          <hr style="border:none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p><strong>Treść:</strong> ${data.description.replace(
            /\n/g,
            "<br>"
          )}</p>
          <hr style="border:none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color:#888; font-size:12px;">To wiadomość automatyczna wysłana z formularza na motywo.pl</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}
