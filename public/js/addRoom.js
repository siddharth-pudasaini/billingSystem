const addRoom = async () => {
    let apiData = {};
    const inputData = document.querySelectorAll('input');
    for (i = 0; i < inputData.length; i++) {
        let item = inputData[i];

        if (item.value === '') {
            alert('Insert All Data');
            return;
        }
        if (item.type === 'text' && item.value !== '') {
            apiData[item.name] = item.value;
        }
        if (item.type === 'checkbox') {
            apiData[item.value] = item.checked;
        }
    }

    const apiResponse = await fetch('http://localhost:8000/api/room/addRoom', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
    });

    const response = await apiResponse.json();
    console.log(response);
    if (response.status === 'success') {
        alert('Room added successfully');
        location.reload();
    }
    if (response.status === 'failed') {
        alert(response.message);
        location.reload();
    }
};
