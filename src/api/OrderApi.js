import ShowNotification from "../Utils/Notification";

export async function orderUserApi(data) {
    const link = `http://localhost:8080/api/order`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            ShowNotification("success", "Thành công", "Đặt hàng thành công");
            return true;
        } else {
            ShowNotification("error", "Có lỗi!",);   
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function getOrderOfWaiting() {
    const link = `http://localhost:8080/api/order`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            ShowNotification("error", "Có lỗi!",);   
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function orderStatusConfirm(method,id) {
    const link = `http://localhost:8080/api/order/${id}?name=${method}`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            ShowNotification("success", "Thành công", "Đã xác nhận");
            return true;
        } else {
            ShowNotification("error", "Có lỗi!",);   
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function getAllOrder() {
    const link = `http://localhost:8080/api/order/admin`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            ShowNotification("error", "Có lỗi!",);   
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function getAllOrderedByUserId() {
    const link = `http://localhost:8080/api/order/by-user`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            ShowNotification("error", "Có lỗi!",);   
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}