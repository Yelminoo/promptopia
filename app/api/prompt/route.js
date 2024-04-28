import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const revalidate = 0;
export const GET = async (request) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    const headers = {
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Content-Type": "application/json",
    };
    return new Response(JSON.stringify(prompts), { status: 200, headers });
  } catch (error) {
    console.log(error + "error");
    return new Response("Failed to fetch", { status: 500 });
  }
};
