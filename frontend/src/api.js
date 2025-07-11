// frontend/src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // Works both locally (with proxy) and on Render
});

export const sendMessageToPAL = (message) =>
  API.post('/chat', { message });
