"use server";
import {CVData} from "@/lib/utils";
import 'dotenv/config'; // loads env variables from .env file
// OR: import dotenv from 'dotenv'; dotenv.config();
import { GoogleGenAI } from "@google/genai";



async function getInfo(query: string) {
  const apiKey = process.env.GEMINI_API_KEY;


  const ai = new GoogleGenAI({ apiKey: apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: query,
    });
    console.log(response.text);
  return response.text;
}


export async function generateCVFromDescription(description: string, currentData: CVData): Promise<CVData | undefined> {
  try {
    /*
    const systemPrompt = `
      You are an expert CV writer and career coach. Analyze the provided job description and generate a CV that matches the requirements.
      Return ONLY a valid JSON object that follows the CVData structure with no additional text or explanation.
      
      Use the current CV data as a base and enhance it with relevant information from the job description.
      Identify the job title, required skills, and key responsibilities.
      Generate a professional summary that highlights the candidate's qualifications for this specific role.
      
      Focus on:
      1. Extracting technical skills mentioned in the job description
      2. Identifying soft skills that would be valuable for the role
      3. Creating achievement bullet points that align with the job requirements
      4. Suggesting a job title if none exists
      
      The response should be a complete JSON object matching the CVData interface.
    `;
*/


    const cleanCv = {
      summary: currentData.summary,
      jobTitle: currentData.jobTitle,
      skills: currentData.skills,
      softSkills: currentData.softSkills,
      experience: currentData.experience,
      certifications: currentData.certifications,
    }
    const currentDataString = JSON.stringify(cleanCv, null, 2);
    console.log("cleanCv", cleanCv);
    const userPrompt = `
      Job Description:
      ${description}
      
      Current CV Data:
      ${currentDataString}
      
      Generate an improved CV that matches this job description. Return ONLY the JSON object.
    `;
    console.log(userPrompt)
    const generatedCV = await getInfo(userPrompt);
    if (generatedCV === undefined) return undefined;
    try {
      // clean data first
      const cleaned = generatedCV
          .replace(/^```json\s*/, '')  // remove opening fence
          .replace(/```$/, '')         // remove closing fence
          .trim();
      const out =  JSON.parse(<string>cleaned);
      return {...currentData,...out} ;
    }catch (e){
      console.error("error on parsing generated cv");
      console.error(e);
    }
  } catch (error) {
    console.error("Error generating CV:", error);
    throw new Error("Failed to generate CV. Please try again.");
  }
}