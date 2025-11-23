import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (message: string, history: string[] = []): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key not found. Using mock response.");
    return "I'm currently in offline mode. Please configure the API_KEY to chat with the live medical advisor.";
  }

  try {
    const model = ai.models;
    
    // Construct a prompt with context
    const systemInstruction = "You are a helpful academic advisor for MBBS students. You help them understand how to become global doctors. Keep answers concise and encouraging.";
    
    const response: GenerateContentResponse = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I'm having trouble connecting to the server right now.";
  }
};