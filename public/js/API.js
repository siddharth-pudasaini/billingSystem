class API {
    constructor() {}
    addRoomApi = async (data) => {
        const apiResponse = await fetch(
            'http://192.168.1.70:8000/api/room/addRoom',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData),
            }
        );
        const response = await apiResponse.json();
        if (response.status === 'success') {
            return { success: true, message: 'Room added successfully' };
        }
        if (response.status === 'failed') {
            return { success: false, message: response.message };
        }
    };
}
