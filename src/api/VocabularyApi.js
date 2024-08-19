import ShowNotification from "../Utils/Notification";


export async function getAllVocabularyByCategoryById(id) {
    const link = `http://localhost:8080/api/vocabulary/by-category/`+id;

    try {
        const response = await fetch(link);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            return data;  
        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error(error); 
    }
    return null;
}
export async function createVocabulary(data) {
    const link = `http://localhost:8080/api/vocabulary`;

    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
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
export async function deleteVocabulary(id) {
    const link = `http://localhost:8080/api/vocabulary/`+id;

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
export async function getVocabularyId(id) {
    const link = `http://localhost:8080/api/vocabulary/`+id;

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
