import axios from "axios";

const API_URL = "https://mynngazvupxnowovnvcu.supabase.co/rest/v1/note";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bm5nYXp2dXB4bm93b3ZudmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDc4MTQsImV4cCI6MjA2NDQ4MzgxNH0._6eKiKeXNuELpAFJo5Bg0SAa8LImMZqbGCrAMoqJQ-4";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async deleteNote(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },

  async updateNote(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
      headers,
    });
    return response.data;
  },
};
