import { Controller } from "@hotwired/stimulus"

const chatURL = "https://t.me/couch_coach_bot?start=";

export default class extends Controller {
  static targets = ["four_card_price_to_change", "four_card_half_time_to_change", "four_card_full_time_to_change", "eight_card_price_to_change", "eight_card_half_time_to_change", "eight_card_full_time_to_change", "twfour_card_price_to_change", "twfour_card_half_time_to_change", "twfour_card_full_time_to_change"]

  chosen_price_four = 7315;
  chosen_price_eight = 10465;
  chosen_price_twfour = 23545;



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
    console.log(span_four_no)
    console.log(span_four_yes)

    if (time_to_change.target.innerText =="60") {

      this.four_card_price_to_changeTarget.innerText = "1829 ₽"
      span_four_no.textContent = "7700 "
      span_four_yes.textContent = " / 7315 ₽"
      span_four_no_m.textContent = "7700 "
      span_four_yes_m.textContent = " / 7315 ₽"

      this.four_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.four_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.four_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.four_card_full_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_four = 7315
    }
    else  {
      this.four_card_price_to_changeTarget.innerText = "1306 ₽"
      span_four_no.textContent = "5500 "
      span_four_yes.textContent = " / 5225 ₽"
      span_four_no_m.textContent = "5500 "
      span_four_yes_m.textContent = " / 5225 ₽"

      this.four_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.four_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.four_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.four_card_half_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_four = 5225
    }
  }
  changetime_eight(time_to_change) {


    if (time_to_change.target.innerText =="60") {
      this.eight_card_price_to_changeTarget.innerText = "1308 ₽"
      span_eight_no.textContent = "11500 "
      span_eight_yes.textContent = " / 10465 ₽"
      span_eight_no_m.textContent = "11500 "
      span_eight_yes_m.textContent = " / 10465 ₽"

      this.eight_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.eight_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.eight_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.eight_card_full_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_eight = 10465
    }
    else  {
      this.eight_card_price_to_changeTarget.innerText = "876 ₽"
      span_eight_no.textContent = "7700 "
      span_eight_yes.textContent = " / 7007 ₽"
      span_eight_no_m.textContent = "7700 "
      span_eight_yes_m.textContent = " / 7007 ₽"

      this.eight_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.eight_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.eight_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.eight_card_half_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_eight = 7007
    }
  }
  changetime_twfour(time_to_change) {

    if (time_to_change.target.innerText =="60") {
      this.twfour_card_price_to_changeTarget.innerText = "981 ₽"
      span_twfour_no.textContent = "27700 "
      span_twfour_yes.textContent = " / 23545 ₽"
      span_twfour_no_m.textContent = "27700 "
      span_twfour_yes_m.textContent = " / 23545 ₽"

      this.twfour_card_half_time_to_changeTarget.classList.add("train-length-item")
      this.twfour_card_full_time_to_changeTarget.classList.add("train-length-item-active")

      this.twfour_card_half_time_to_changeTarget.classList.remove("train-length-item-active")
      this.twfour_card_full_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_twfour = 23545
    }
    else  {
      this.twfour_card_price_to_changeTarget.innerText = "708 ₽"
      span_twfour_no.textContent = "20000 "
      span_twfour_yes.textContent = " / 17000 ₽"
      span_twfour_no_m.textContent = "20000 "
      span_twfour_yes_m.textContent = " / 17000 ₽"

      this.twfour_card_full_time_to_changeTarget.classList.add("train-length-item")
      this.twfour_card_half_time_to_changeTarget.classList.add("train-length-item-active")

      this.twfour_card_full_time_to_changeTarget.classList.remove("train-length-item-active")
      this.twfour_card_half_time_to_changeTarget.classList.remove("train-length-item")

      this.chosen_price_twfour = 17000
    }
  }

}
