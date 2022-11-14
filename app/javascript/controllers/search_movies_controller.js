import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
	static targets = ["input", "list", "form"]

	async update() {
		// Get the search term
		const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
		const response = await fetch(url, { headers: { Accept: "text/plain" } })
		const data = await response.text()

		this.listTarget.outerHTML = data
	}
}
