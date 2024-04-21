import axios from "axios";

export async function verifyRumor(data) {
  //   const url = `${process.env.NEXT_PULBIC_BACKEND_URL}/verify`;
  const url = "http://127.0.0.1:5000/verify";

  try {
    const res = await axios.post(url, data);
    return res?.data;
  } catch (error) {
    console.log(error);
    console.log("Error: Could not verify rumor");
  }
}
