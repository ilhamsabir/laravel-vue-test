import axios from 'axios'
import {
	baseUrl,
	CSRF_TOKEN,
} from '../utils/library.js'

const BASEAPI = baseUrl


const configHeader = {
	'X-CSRF-TOKEN': CSRF_TOKEN,
	'Content-Type': 'multipart/form-data',
}

// request list data news
export const requestApinews = () => {

	const url = `${BASEAPI}/api/news`

	const config = {
		url,
		method: 'get',
		headers: configHeader,
	}

	return axios(config)
}

// create news
export const createNews = (data) => {

	const url = `${BASEAPI}/api/news`

	const formData = new FormData()

	formData.append('title', data.title)
	formData.append('description', data.description)

	const config = {
		url,
		method: 'post',
		data: formData,
		headers: configHeader,
	}

	return axios(config)
}

// update news
export const updateNews = (data) => {

	const url = `${BASEAPI}/api/news/update`

	const formData = new FormData()

	formData.append('id', data.id)
	formData.append('title', data.title)
	formData.append('description', data.description)

	const config = {
		url,
		method: 'post',
		data: formData,
		headers: configHeader,
	}

	return axios(config)
}

export const deleteNews = (id) => {

	const url = `${BASEAPI}/api/news/delete`

	const formData = new FormData()

	formData.append('id', id)

	const config = {
		url,
		method: 'post',
		data: formData,
		headers: configHeader,
	}

	return axios(config)
}