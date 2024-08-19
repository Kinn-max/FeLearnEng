import ShowNotification from "../Utils/Notification";


export async function getAllItemOfCategory(name) {
    const link = `http://localhost:8080/api/category/`+name;

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
export async function postCategory(categoryData) {
    const link = `http://localhost:8080/api/category`;

    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryData),
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
export async function updateCategory(categoryData,id) {
    const link = `http://localhost:8080/api/category/`+id;

    try {
        const response = await fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryData),
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
export async function deleteCategory(id) {
    const link = `http://localhost:8080/api/category/`+id;

    try {
        const response = await fetch(link, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
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

export async function statusCategory(id) {
    const link = `http://localhost:8080/api/category/status/`+id;

    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
export async function getCategoryById(id) {
    const link = `http://localhost:8080/api/category/`+id;

    try {
        const response = await fetch(link, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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




