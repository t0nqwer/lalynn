import axios from "axios";
export const GET = async (req, res) => {
  try {
    console.log("fetchHeroProduct");
    const { data } = await axios.get(
      "https://khwanta.site/lalynnwebsite/fetchHeroProduct"
    );

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    // res.status(400).json({ message: "Error" });
  }
};
