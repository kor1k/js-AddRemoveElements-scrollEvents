// 1) При нажатии на добавление - появляются 3 инпута и кнопка "добавить"
// 2) При нажатии на добавление - добавить новый ряд в таблицу(в конец)
// TODO 3) При нажатии на удаление - удалить последнюю строчку
// TODO 4) Добавить валидацию полей, при попытке отправить неправильные данные - выдать ошибку ( или добавить класс )
// TODO 5) Сделать валидацию при вводе значений

let isAdding = false;

document.addEventListener('click', function (e) {

    if (e.target.id === 'add-row') {
        if (!isAdding) {
            isAdding = true;
            const nameInput = document.createElement('input');
            nameInput.id = 'good-name';
            const priceInput = document.createElement('input');
            priceInput.id = 'good-price';
            const quantityInput = document.createElement('input');
            quantityInput.id = 'good-quantity';
            const addButton = document.createElement('button');
            nameInput.placeholder = 'Name';
            priceInput.placeholder = 'Price';
            quantityInput.placeholder = 'Quantity';
            addButton.innerHTML = 'add';
            addButton.id = 'add-good';
            document.body.appendChild(nameInput);
            document.body.appendChild(priceInput);
            document.body.appendChild(quantityInput);
            document.body.appendChild(addButton);
        }
    }
    if (e.target.id === 'add-good') {
        const id = document.querySelectorAll('tbody tr').length + 1;
        const goodName = document.getElementById('good-name');
        const goodPrice = document.getElementById('good-price');
        const goodQuantity = document.getElementById('good-quantity');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${id}</td><td>${goodName.value}</td><td>${goodPrice.value}</td><td>${goodQuantity.value}</td>`;
        document.querySelector('#goods-table tbody').appendChild(newRow);
        goodName.parentElement.removeChild(goodName);
        goodPrice.parentElement.removeChild(goodPrice);
        goodQuantity.parentElement.removeChild(goodQuantity);
        document.getElementById('add-good').parentElement.removeChild(document.getElementById('add-good'));
        isAdding = false;
    }
});
