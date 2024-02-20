import { createAsyncThunk } from '@reduxjs/toolkit'
// import { apiBackend } from '../../utils/config'
// import { events } from '../utils/events'
import axiosInstance from '../../utils/apiBackend'
// import axios from 'axios'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  try {
    const { data } = await axiosInstance.get('/events')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getEventById = createAsyncThunk('events/getOne', async (id) => {
  try {
    const { data } = await axiosInstance.get(`/events/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const createEvent = createAsyncThunk('events/create', async (body) => {
  try {
    const { data } = await axiosInstance.post('/events', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const favorite = createAsyncThunk('users/favorite', async (body) => {
  const { id, eventId } = body
  try {
    const { data } = await axiosInstance.patch(`/users/favorite/${id}`, {
      eventId
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
})
