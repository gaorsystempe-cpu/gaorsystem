import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  if (!ai) {
    console.warn("API Key not found. Chat functionality will be limited.");
    return "Lo siento, el asistente virtual no está configurado correctamente en este momento. Por favor contacta a soporte.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      Eres el asistente virtual de GaorSystem Perú.
      Tu nombre es "GaorBot".
      Representas a una empresa, no a una sola persona.
      Tono: Profesional, amigable, innovador y tecnológico. Habla siempre en plural ("nosotros", "nuestro equipo", "ofrecemos").
      Objetivo: Ayudar a visitantes a entender los servicios de la empresa (Desarrollo Web, Apps Móviles, Consultoría TI, Cloud).
      Restricciones: Respuestas breves (máx 50 palabras si es posible). No inventes precios, pide que contacten para cotizar.
      Servicios clave:
      - Desarrollo de Software a medida.
      - Transformación Digital.
      - Staff Augmentation.
      - Diseño UX/UI.
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Tuve un problema conectando con mis servidores neuronales. Por favor intenta de nuevo.";
  }
};