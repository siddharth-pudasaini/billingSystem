//Vehicle Data Input
const vehicleInput = (noOfVehicles) => {
    let vehicleData = document.querySelector('.vehicleData');
    vehicleData.innerHTML = '';
    for (let i = 0; i < noOfVehicles; i++) {
        vehicleData.innerHTML += `
      <label>Vehicle ${i + 1} Number:</label>
      <input type='text' name='vehicleData'>
      `;
    }
};

const getVaccantRooms = async () => {
    let list = document.querySelector('ul');
    const apiResponse = await fetch(
        'http://localhost:8000/api/room/getData?vaccant=true'
    );
    const response = await apiResponse.json();
    const vaccantRooms = response.data;
    if (vaccantRooms.length === 0) {
        list.innerHTML = '<p>No Vaccant Rooms</p>';
        return;
    }
    vaccantRooms.forEach((room) => {
        list.innerHTML += `<li>Room Number ${room.roomNumber}</li>`;
    });
};
getVaccantRooms();

//Sending customer data to database
const apiRequest = async (data) => {
    const response = await fetch(
        'http://localhost:8000/api/customer/registerNewCustomer',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    );
    const responseData = await response.json();
    return responseData;
};

//Adding Customer To Database
const addCustomerToDatabase = async () => {
    let data = { vehicleData: [] };

    //Reading all input data
    const inputData = document.querySelectorAll('input');

    //Creating JSON
    for (let i = 0; i < inputData.length; i++) {
        let item = inputData[i];

        if (item.value === '') {
            alert('Fill in all data');
            return;
        }

        if (item.value !== 'Check In' && item.name !== 'vehicleData') {
            data[`${item.name}`] = `${item.value}`;
        }

        if (item.name === 'vehicleData') {
            data['vehicleData'].push(item.value);
        }
    }

    //Making API request
    const apiResponse = await apiRequest(data);
    if (apiResponse.status === 'success') {
        alert(`Customer sucessfully checked in to room ${apiResponse.room}`);
        location.reload();
        return;
    }
    alert(apiResponse.message);
};
