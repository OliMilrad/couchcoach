import { Controller } from "@hotwired/stimulus"
const filter_array = []

export default class extends Controller {
  static targets = ["coach_filter", "coach_card"]
  // static values = {class: String}



  initialize() {
    this.showCoaches()

   }

  changecolor(coach_filterTarget) {
    // console.log(coach_filterTarget)
    if (coach_filterTarget.target.classList.contains("btn-dark")) {
    coach_filterTarget.target.classList.remove("btn-dark")
    coach_filterTarget.target.classList.add("btn-outline-dark")}
    else {
    coach_filterTarget.target.classList.add("btn-dark")
    coach_filterTarget.target.classList.remove("btn-outline-dark")}
    this.showCoaches()

  }

  showCoaches() {
    var our_filters = this.coach_filterTargets
    .filter((item) => item.attributes.class.nodeValue.includes('btn-dark'))
    .map((filter) => filter.innerText);


    this.coach_cardTargets.forEach((element) => {
      var coach_filters = element.attributes.filter_we_need.nodeValue.split(", ")
      // console.log(our_filters)
      console.log(coach_filters)

      console.log(coach_filters.some(r=> our_filters.includes(r)))

      if (coach_filters.some(r=> our_filters.includes(r))) {
        element.hidden = false
      }
      else {
        element.hidden = true
      }
    })
  }

  // changepic() {
  //   this.indexValue++
  //   this.showCurrentСard_to_click()
  // }

  // showCurrentСard_to_click() {
  //   this.card_to_clickTargets.forEach((element, index) => {
  //     element.hidden = index != this.indexValue
  //   })
  // }

}
