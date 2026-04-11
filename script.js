const inputPeople = document.getElementById('people');
const inputDays = document.getElementById('days');
const totalPriceElement = document.getElementById('total-price');
const discountInfo = document.getElementById('discount-info');
const bookBtn = document.getElementById('book-btn');

const pricePerDay = 8500;

function calculate() {
    let people = parseInt(inputPeople.value);
    let days = parseInt(inputDays.value);

    if (people > 0 && days > 0) {
        let total = people * days * pricePerDay;
        if (people >= 4) {
            total = total * 0.9; 
            discountInfo.innerText = "скидка 10%!";
        } else {
            discountInfo.innerText = "";
        }

        totalPriceElement.innerText = total.toLocaleString('ru-RU');
    } else {
        totalPriceElement.innerText = "Данные не верны";
        totalPriceElement.classList.add('error'); 
        discountInfo.innerText = "";
}
}


bookBtn.addEventListener('click', () => {
    const finalPrice = totalPriceElement.innerText;
    if (finalPrice !== "Введите данные") {
        alert(`Заявка принята! Сумма к оплате: ${finalPrice} ₽. Мы свяжемся с вами в ближайшее время.`);
    }
});

inputPeople.addEventListener('input', calculate);
inputDays.addEventListener('input', calculate);

calculate();