import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
	static targets = ["infos", "form", "card"]

	displayForm() {
		this.formTarget.classList.toggle("d-none")
		this.infosTarget.classList.toggle("d-none")
	}

	async update(event) {
		event.preventDefault()
		const url = this.formTarget.action

		const response = await fetch(url, {
			headers: { Accept: "text/plain" },
			method: "PATCH",
			body: new FormData(this.formTarget),
		})

		const html = await response.text()

		this.cardTarget.outerHTML = html
	}
}
