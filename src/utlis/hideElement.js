export default function hideElement(ref, dep) {
	if (!dep) {
		ref.current.hidden = false
	} else {
		ref.current.hidden = true
	}
}