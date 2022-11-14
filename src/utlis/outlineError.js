export default function outlineErrorInput(id, dep) {
	const el = document.getElementById(id)
	if (!dep) {
		el.classList.add('errored')
	} else {
		el.classList.remove('errored')
	}
}