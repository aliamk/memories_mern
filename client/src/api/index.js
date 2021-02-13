import axios from 'axios'

// Triggered by actions > auth.js
// Index sends requests to the backend

const API = axios.create({ baseURL: 'http://localhost:5000' })

// API endpoints for the Posts
export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

// API endpoints for the sign-in and sign-out
export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);