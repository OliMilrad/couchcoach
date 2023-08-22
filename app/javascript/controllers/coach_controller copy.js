import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card_to_click"]
  static values = {index: Number}

  initialize() {
    this.showCurrentСard_to_click()
  }

  changepic() {
    this.indexValue++
    this.showCurrentСard_to_click()
  }

  showCurrentСard_to_click() {
    this.card_to_clickTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }

}
