// src/_services/authors.js
import API from "../_api";

export const getAuthors = async () => {
  const { data } = await API.get("/authors");
  return data.data || [];
};

export const createAuthor = async (formData) => {
  try {
    // formData should be FormData instance with 'name', 'bio', 'photo'
    const response = await API.post("/authors", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data;
  } catch (error) {
    console.error("createAuthor error:", error);
    throw error;
  }
};
