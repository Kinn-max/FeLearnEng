import React from 'react'
import ShowNotification from '../Utils/Notification';

export async function getAllCommentById(id) {
    const link = `http://localhost:8080/api/product-rating/${id}`;
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
            return data.comment;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function postComment(id,data) {
    const link = `http://localhost:8080/api/product-rating/${id}`;
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
            ShowNotification("success", "Thành công", data.message);
            return true;
        } else {
            const errorText = await response.json();
            ShowNotification("error", "Thất bại",  errorText.message ); 
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

