import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["four_card_price_to_change", "four_card_full_price_to_change", "four_card_half_time_to_change", "four_card_full_time_to_change", "eight_card_price_to_change", "eight_card_full_price_to_change", "eight_card_half_time_to_change", "eight_card_full_time_to_change", "twfour_card_price_to_change", "twfour_card_full_price_to_change", "twfour_card_half_time_to_change", "twfour_card_full_time_to_change"]
  // static values = {index: Number}

  // initialize() {
  //   this.showCurrentСard_to_click()
  // }
  changetime_four(time_to_change) {

    if (time_to_change.target.innerText =="60") {
      this.four_card_price_to_changeTarget.innerText = "1235 ₽"
      this.four_card_full_price_to_changeTarget.innerHTML = <p><span style="text-decoration:line-through; text-decoration-thickness:1px">5200</span></p>

      this.four_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.four_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.four_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.four_card_full_time_to_changeTarget.classList.remove("train-length-item")
    }
    else  {
      this.four_card_price_to_changeTarget.innerText = "757 ₽"
      this.four_card_full_price_to_changeTarget.innerHTML = <p><span style="text-decoration:line-through; text-decoration-thickness:1px">3120</span></p>

      this.four_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.four_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.four_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.four_card_half_time_to_changeTarget.classList.remove("train-length-item")
    }
  }
  changetime_eight(time_to_change) {

    if (time_to_change.target.innerText =="60") {
      this.eight_card_price_to_changeTarget.innerText = "1183 ₽"
      this.eight_card_full_price_to_changeTarget.innerHTML = <p><span style="text-decoration:line-through; text-decoration-thickness:1px">10400</span>/9464 ₽</p>

      this.eight_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.eight_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.eight_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.eight_card_full_time_to_changeTarget.classList.remove("train-length-item")
    }
    else  {
      this.eight_card_price_to_changeTarget.innerText = "726 ₽"
      this.eight_card_full_price_to_changeTarget.innerHTML = <p><span style="text-decoration:line-through; text-decoration-thickness:1px">6240</span>/5804 ₽</p>

      this.eight_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.eight_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.eight_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.eight_card_half_time_to_changeTarget.classList.remove("train-length-item")
    }
  }
  changetime_twfour(time_to_change) {

    if (time_to_change.target.innerText =="60") {
      this.twfour_card_price_to_changeTarget.innerText = "1040 ₽"
      this.twfour_card_full_price_to_changeTarget.innerHTML =<p><span style="text-decoration:line-through; text-decoration-thickness:1px">31200</span>/24960 ₽</p>

      this.twfour_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.twfour_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.twfour_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.twfour_card_full_time_to_changeTarget.classList.remove("train-length-item")
    }
    else  {
      this.twfour_card_price_to_changeTarget.innerText = "663 ₽"
      this.twfour_card_full_price_to_changeTarget.innerHTML = <p><span style="text-decoration:line-through; text-decoration-thickness:1px">18720</span>/15912₽</p>

      this.twfour_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.twfour_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.twfour_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.twfour_card_half_time_to_changeTarget.classList.remove("train-length-item")
    }
  }

}
