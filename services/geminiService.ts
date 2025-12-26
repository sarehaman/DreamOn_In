
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCareerRoadmap = async (targetRole: string, currentRole: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the Indian tech market trends for a ${targetRole} coming from ${currentRole}. 
    Identify 5 critical skill gaps and suggest 15-minute micro-learning topics for each. 
    Format as JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          skills: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                level: { type: Type.STRING },
                gap: { type: Type.BOOLEAN },
                microLearningTopic: { type: Type.STRING }
              }
            }
          }
        }
      }
    }
  });
  return JSON.parse(response.text);
};

export const getFinancialInsight = async (transactions: any[], goal: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze these UPI transactions: ${JSON.stringify(transactions)}. 
    The goal is: ${goal}. Calculate a 'painless skim' strategy (Chillar Method). 
    Identify patterns of discretionary spending (Swiggy, Zomato, Starbucks) in an Indian context. 
    Return a summary and a daily savings recommendation.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          dailyRecommendation: { type: Type.NUMBER },
          savingsPotential: { type: Type.STRING }
        }
      }
    }
  });
  return JSON.parse(response.text);
};
