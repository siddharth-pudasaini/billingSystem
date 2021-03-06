//Adding item to bill
const addItem = () => {
    const inputData = document.querySelectorAll("input[type='text']");
    const sNumber = document.querySelectorAll('.item').length / 3 + 1;
    const quantity = inputData[2].value;
    const price = inputData[3].value;

    for (let i = 0; i <= inputData.length - 1; i++) {
        let item = inputData[i + 1];

        if (item.value === '' && item.name !== 'roomNumber') {
            alert('Fill all data');
            return;
        }
        if (item.name !== 'roomNumber') {
            let parentTag = document.getElementById(`${item.name}`);
            parentTag.innerHTML += `<div class="item">${item.value}</div>`;
            item.value = '';
        }
    }
    document.getElementById('sn').innerHTML += `<div>${sNumber}</div>`;
    document.getElementById('total').innerHTML += `<div>${
        parseFloat(quantity) * parseFloat(price)
    }</div>`;
    return;
};
