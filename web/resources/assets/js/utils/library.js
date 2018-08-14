export const baseUrl = $('meta[name="csrf-token"]').attr('data-url')

export const CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content')

export const userFullname = $('meta[name="user-data"]').attr('fullname') || ''

export const userEmail = $('meta[name="user-data"]').attr('email') || ''

export const statusUser = $('meta[name="user-data"]').attr('status') || 'user'

export const userId = $('meta[name="user-data"]').attr('id') || ''