import { createDomain, createStore } from 'effector'

export const api = createDomain()

export const $authError = createStore<any>('')
