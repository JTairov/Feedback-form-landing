export default function checkName(name, callback) {
	if (name !== '') {
		callback(true)
	} else {
		callback(false)
	}
}