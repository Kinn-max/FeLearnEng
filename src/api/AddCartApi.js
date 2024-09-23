import ShowNotification from "../Utils/Notification";

export async function addCartApi(data) {
    const link = `http://localhost:8080/api/add-cart`;
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
            ShowNotification("success", "Thành công", "Đã thêm sản phẩm vào giỏ hàng thành công");
            return true;
        } else {
            ShowNotification("error", "Hãy đăng nhập trước để thêm sản phẩm vào giỏ hàng!",);   
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function getItemsInCartApi() {
    const link = `http://localhost:8080/api/add-cart`;
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
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function deleteItemApi(id) {
    const link = `http://localhost:8080/api/add-cart/${id}`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            ShowNotification("success", "Thành công", "Đã xóa sản phẩm thành công");
            return true;
        } else {
            ShowNotification("error", "Có lỗi",);   
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
