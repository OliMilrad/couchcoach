import { Controller } from "@hotwired/stimulus"

const chatURL = "https://t.me/couch_coach_bot?start=";
const testZero = "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=Couch_coach&InvId=0&Culture=ru&Encoding=utf-8&OutSum=10&shp_interface=link&SignatureValue=681165c2e0d22c6606fc66678c2159c4"
const payment4T_5225 ="https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=Couch_coach&InvId=0&Culture=ru&Encoding=utf-8&Description=4%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8%20%D0%BF%D0%BE%2030%20%D0%BC%D0%B8%D0%BD%D1%83%D1%82&OutSum=5225&shp_interface=link&SignatureValue=3958da9ba0d2522bc539dd5bf5f3cb00"
const payment4T_7315 = "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=Couch_coach&InvId=0&Culture=ru&Encoding=utf-8&OutSum=7315&shp_interface=link&SignatureValue=1d0291a1f74b25e0240251a8f9f1cbac"
const payment8T_7007 = "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=Couch_coach&InvId=0&Culture=ru&Encoding=utf-8&OutSum=7007&shp_interface=link&SignatureValue=86d4d22e9aeab1147429d73d055b68ce"
const payment8T_10465 = "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=Couch_coach&InvId=0&Culture=ru&Encoding=utf-8&OutSum=10465&shp_interface=link&SignatureValue=a6db02380672170c82072fe1073ee4a9"
const payment24T_17000 = "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=Couch_coach&InvId=0&Culture=ru&Encoding=utf-8&OutSum=17000&shp_interface=link&SignatureValue=4dfee9504da11134b96c940354f8d9fc"
const payment24T_23545 = "https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=Couch_coach&InvId=0&Culture=ru&Encoding=utf-8&OutSum=23545&shp_interface=link&SignatureValue=b7569848b46de9daff6ce34cb1506977"

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
        if (this.chosen_price_four == 5225) {
          location.assign(payment4T_5225);
        } else {
          location.assign(payment4T_7315);
        }
        break;
      case "8":
        if (this.chosen_price_eight == 7007) {
          location.assign(payment8T_7007);
        } else {
          location.assign(payment8T_10465);
        }
        break;
      case "24":
        if (this.chosen_price_twfour == 17000) {
          location.assign(payment24T_17000);
        } else {
          location.assign(payment24T_23545);
        }
        break;
      default:
        // location.assign(testZero);
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
