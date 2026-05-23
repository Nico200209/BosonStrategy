import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Lazily initialized so build succeeds without env vars present
function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured.");
  return new Resend(key);
}

const TO_EMAIL = "mpaetz@bosonstrategy.com";
const FROM_EMAIL = "noreply@bosonstrategy.com";

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 2000);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const nombre = sanitize(body.nombre);
    const email = sanitize(body.email);
    const empresa = sanitize(body.empresa);
    const telefono = sanitize(body.telefono);
    const mensaje = sanitize(body.mensaje);

    // Basic validation
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Los campos nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "El email proporcionado no es válido." },
        { status: 400 }
      );
    }

    const resend = getResend();
    await resend.emails.send({
      from: `Bosón — Formulario de Contacto <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nueva consulta estratégica — ${nombre}${empresa ? ` · ${empresa}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #08111F;">
          <div style="background: #08111F; padding: 32px 40px; border-bottom: 3px solid #26C0CF;">
            <p style="color: #26C0CF; font-size: 11px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; margin: 0 0 8px;">
              Bosón Ingeniería Estratégica de Negocios
            </p>
            <h1 style="color: #ffffff; font-size: 22px; font-weight: 300; margin: 0;">
              Nueva <strong style="font-weight: 900;">consulta estratégica</strong>
            </h1>
          </div>

          <div style="padding: 40px; background: #EBECED;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(8,17,31,0.1); width: 130px;">
                  <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #26C0CF;">Nombre</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(8,17,31,0.1);">
                  <span style="font-size: 14px; color: #08111F;">${nombre}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(8,17,31,0.1);">
                  <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #26C0CF;">Email</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(8,17,31,0.1);">
                  <a href="mailto:${email}" style="font-size: 14px; color: #08111F;">${email}</a>
                </td>
              </tr>
              ${empresa ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(8,17,31,0.1);">
                  <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #26C0CF;">Empresa</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(8,17,31,0.1);">
                  <span style="font-size: 14px; color: #08111F;">${empresa}</span>
                </td>
              </tr>` : ""}
              ${telefono ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(8,17,31,0.1);">
                  <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #26C0CF;">Teléfono</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(8,17,31,0.1);">
                  <a href="tel:${telefono}" style="font-size: 14px; color: #08111F;">${telefono}</a>
                </td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 28px; padding: 20px; background: #ffffff; border-left: 3px solid #26C0CF;">
              <p style="font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #26C0CF; margin: 0 0 12px;">Mensaje</p>
              <p style="font-size: 14px; line-height: 1.7; color: #08111F; margin: 0; white-space: pre-wrap;">${mensaje}</p>
            </div>
          </div>

          <div style="background: #08111F; padding: 20px 40px; text-align: center;">
            <p style="color: rgba(255,255,255,0.4); font-size: 10px; margin: 0;">
              © 2025 Bosón Ingeniería Estratégica de Negocios · bosonstrategy.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/contact] Error:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}
