const inputPeople = document.getElementById('people');
const inputDays = document.getElementById('days');
const totalPriceElement = document.getElementById('total-price');
const discountInfo = document.getElementById('discount-info');
const bookBtn = document.getElementById('book-btn');
const smartAdvice = document.getElementById('smart-advice');

const pricePerDay = 8500;

function calculate() {
    let people = parseInt(inputPeople.value) || 1;
    let days = parseInt(inputDays.value) || 1;

    if (people > 0 && days > 0) {
        totalPriceElement.classList.remove('error');
        
        let total = people * days * pricePerDay;
        let discount = 0;
        let message = "";

        if (people >= 6) {
            discount = 0.15; 
            message = "Мега-скидка 15% для большой компании!";
        } else if (people >= 3) {
            discount = 0.10;
            message = "Групповая скидка 10%!";
        } else if (days > 10) {
            discount = 0.05; 
            message = "Бонус 5% за долгий отдых!";
        }

        total = total * (1 - discount);
        discountInfo.innerText = message;
        totalPriceElement.innerText = Math.round(total).toLocaleString('ru-RU');

        smartAdvice.style.display = "block";
        if (people === 1) {
            smartAdvice.innerHTML = "<b>Совет:</b> Идеальное время для соло-путешествия и поиска новых знакомств!";
        } else if (people === 2) {
            smartAdvice.innerHTML = "<b>Совет:</b> Мы подготовили для вас столик на двоих с видом на море";
        } else {
            smartAdvice.innerHTML = "<b>Совет:</b> Для вашей компании мы забронируем отдельный микроавтобус для экскурсий!";
        }
    } else {
        totalPriceElement.innerText = "Данные не верны";
        totalPriceElement.classList.add('error');
        discountInfo.innerText = "";
        smartAdvice.style.display = "none";
    }
}


if (inputPeople && inputDays) {
    inputPeople.addEventListener('input', calculate);
    inputDays.addEventListener('input', calculate);
    calculate();
}

if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        alert("Заявка отправлена! Менеджер свяжется с вами.");
    });
}


const reviewForm = document.getElementById('review-form');
const reviewList = document.getElementById('review-list');

if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reviewer-name').value;
        const text = document.getElementById('review-text').value;

        const newReview = document.createElement('div');
        newReview.classList.add('review-item');
        newReview.innerHTML = `<strong>${name}:</strong><p>${text}</p>`;
        
        reviewList.prepend(newReview);
        reviewForm.reset();
    });
}