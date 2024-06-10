import axios from "axios";
import { FormDataType } from "../@types/FormDataType";

export async function onSubmit(data: FormDataType) {
  const apiUrl = import.meta.env.VITE_API_URL;
  
  try {
    const response = await axios.post(`${apiUrl}/registration`, data);
    console.log("Response from server:", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error submitting form, code status :",
        error.response?.status
      );
    } else {
      console.error("Error submitting form:", error.message);
    }
  }
}
