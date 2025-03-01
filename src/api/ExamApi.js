import ShowNotification from "../Utils/Notification";


export async function getAllQuestionByCategoryById(id) {
    const link = `http://localhost:8080/api/exam/by-category/`+id;
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
export async function createQuestion(data) {
    const link = `http://localhost:8080/api/exam`;
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
export async function updateQuestion(data,id) {
    const link = `http://localhost:8080/api/exam/`+id;
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
export async function deleteQuestion(data) {
    const link = `http://localhost:8080/api/exam/`+data;
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
export async function getAllExamByCategoryByIdAndStatus(id) {
    const link = `http://localhost:8080/api/exam/by-category/${id}/status`;

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
