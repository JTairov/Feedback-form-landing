export default function checkEmail(email, callback) {
	const regex = /^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
	if (email.match(regex)) {
		callback(true)
	} else {
		callback(false)
	}
}