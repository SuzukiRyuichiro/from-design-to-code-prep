import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["input", "list"];

  connect() {}
}
