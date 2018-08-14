// get host
export const useHost = () => {
	const host = window.location.hostname;

	let prefix = 'http://localhost/kp2018/web'

	if (host !== 'localhost') {
		//is development
		prefix = ''
	}

	return prefix
}