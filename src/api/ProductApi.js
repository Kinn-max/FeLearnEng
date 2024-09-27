import ShowNotification from "../Utils/Notification";

export async function getAllProductByCategoryById(id) {
    const link = `http://localhost:8080/api/product/by-category/`+id;

    try {
        const response = await fetch(link);
        if(response.ok){
            const data = await response.json();
            return data;  
        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error(error); 
    }
    return null;
}
export async function createProduct(data) {
    const link = `http://localhost:8080/api/product`;
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
            const data = await response.json();
            return data;
        } else {
            const errorText = await response.json();
            return { message: errorText };
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function updateProduct(data,id) {
    const link = `http://localhost:8080/api/product/`+id;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const data = await response.json();
            ShowNotification("success", "Thành công", response.message);
            return data;
        } else {
            const errorText = await response.json();
            return { message: errorText };
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function deleteProduct(data) {
    const link = `http://localhost:8080/api/product/`+data;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorText = await response.json();
            return { message: errorText };
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function getAllProductByCategoryStatus(id) {
    const link = `http://localhost:8080/api/product/by-category/${id}/status`;

    try {
        const response = await fetch(link);
        if(response.ok){
            const data = await response.json();
            return data;  
        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error(error); 
    }
    return null;
}
export async function getProductById(id) {
    const link = `http://localhost:8080/api/product/${id}`;

    try {
        const response = await fetch(link);
        if(response.ok){
            const data = await response.json();
            return data;  
        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error(error); 
    }
    return null;
}
export async function getRanDomProduct() {
    const link = `http://localhost:8080/api/product/random`;

    try {
        const response = await fetch(link);
        if(response.ok){
            const data = await response.json();
            return data;  
        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error(error); 
    }
    return null;
}


