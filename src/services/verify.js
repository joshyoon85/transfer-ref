import axios from "axios";

export async function verifyRumor(data) {
  //   const url = `${process.env.NEXT_PULBIC_BACKEND_URL}/verify`;

  try {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    console.log("Error: Could not verify rumor");
  }
}
