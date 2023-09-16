import { Controller } from "@hotwired/stimulus"

const chatURL = "https://t.me/couch_coach_bot?start=";

export default class extends Controller {
  static targets = ["four_card_price_to_change", "four_card_half_time_to_change", "four_card_full_time_to_change", "eight_card_price_to_change", "eight_card_half_time_to_change", "eight_card_full_time_to_change", "twfour_card_price_to_change", "twfour_card_half_time_to_change", "twfour_card_full_time_to_change"]

  chosen_price_four = 4940;
  chosen_price_eight = 9464;
  chosen_price_twfour = 24960;

  // initialize() {
  //   this.showCurrentСard_to_click()
  // }
  confirm_purchase(e) {
    const { numberOfTrainings } = e.target.dataset;

    switch (numberOfTrainings) {
      case "4":
        location.assign(chatURL + this.chosen_price_four);
        break;
      case "8":
        location.assign(chatURL + this.chosen_price_eight);
        break;
      case "24":
        location.assign(chatURL + this.chosen_price_twfour);
        break;
      default:
        location.assign(chatURL + "0");
        break;
    }
  }

  changetime_four(time_to_change) {

    if (time_to_change.target.innerText =="60") {
      this.four_card_price_to_changeTarget.innerText = "1235 ₽"
      span_four_no.textContent = "5200"
      span_four_yes.textContent = "/4940 ₽"

      this.four_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.four_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.four_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.four_card_full_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_four = 4940
    }
    else  {
      this.four_card_price_to_changeTarget.innerText = "757 ₽"
      span_four_no.textContent = "3120"
      span_four_yes.textContent = "/3027 ₽"

      this.four_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.four_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.four_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.four_card_half_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_four = 3027
    }
  }
  changetime_eight(time_to_change) {


    if (time_to_change.target.innerText =="60") {
      this.eight_card_price_to_changeTarget.innerText = "1183 ₽"
      span_eight_no.textContent = "10400"
      span_eight_yes.textContent = "/9464 ₽"

      this.eight_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.eight_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.eight_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.eight_card_full_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_eight = 9464
    }
    else  {
      this.eight_card_price_to_changeTarget.innerText = "726 ₽"
      span_eight_no.textContent = "6240"
      span_eight_yes.textContent = "/5804 ₽"

      this.eight_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.eight_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.eight_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.eight_card_half_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_eight = 5804
    }
  }
  changetime_twfour(time_to_change) {

    if (time_to_change.target.innerText =="60") {
      this.twfour_card_price_to_changeTarget.innerText = "1040 ₽"
      span_twfour_no.textContent = "31200"
      span_twfour_yes.textContent = "/24960 ₽"

      this.twfour_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.twfour_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.twfour_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.twfour_card_full_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_twfour = 24960
    }
    else  {
      this.twfour_card_price_to_changeTarget.innerText = "663 ₽"
      span_twfour_no.textContent = "18720"
      span_twfour_yes.textContent = "/15912 ₽"

      this.twfour_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.twfour_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.twfour_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.twfour_card_half_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_twfour = 15912
    }
  }

}
