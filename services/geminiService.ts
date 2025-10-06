import { GoogleGenAI } from "@google/genai";

// Assumes API_KEY is set in the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a fun fact using the Gemini API based on profile information.
 * @param profileInfo A string containing professional details.
 * @returns A promise that resolves to a string with the generated fun fact.
 */
export const generateFunFact = async (profileInfo: string): Promise<string> => {
  try {
    const prompt = `Based on this professional profile of a test lead named Manova, generate one short, creative, and fun fact about their potential professional alter-ego or a superpower they might have in the world of software testing. Keep it professional but imaginative, witty, and concise (1-2 sentences). Profile: "${profileInfo}"`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.8,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate fun fact from Gemini API.");
  }
};
