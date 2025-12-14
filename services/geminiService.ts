import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey: apiKey });

export const estimateConstructionMaterials = async (promptInput: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const prompt = `
      You are an expert construction civil engineer for Bijoy Traders BD. 
      The user wants to estimate brick requirements.
      User Input: "${promptInput}"
      
      Please provide:
      1. Estimated number of bricks (Standard Bangladesh size: 9.5" x 4.5" x 2.75" with mortar).
      2. Estimated amount of cement and sand if possible.
      3. A clear breakdown of the calculation logic.
      4. Add 5% wastage to the total brick count.
      
      Keep the tone professional, helpful, and encouraging. 
      Format the response with clear headings and bullet points in Markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate estimation. Please try again with more details.";
  } catch (error) {
    console.error("Gemini Estimation Error:", error);
    return "Sorry, we encountered an error calculating your estimate. Please try again later.";
  }
};