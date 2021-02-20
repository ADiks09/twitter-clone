import { createDomain, createEvent, createStore } from 'effector'

export const api = createDomain()

export const $authError = createStore<any>('')

export const $authState = createStore<boolean>(false)

export const unauthorizedEvent = createEvent()
