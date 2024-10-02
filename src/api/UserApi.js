import ShowNotification from "../Utils/Notification";

export async function createUser(data) {
    const link = `http://localhost:8080/api/user/register`;
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
            return data.id;
        } else {
            const errorText = await response.text();
            ShowNotification("error", "Thất bại", errorText);
        }
    } catch (error) {
        ShowNotification("error", "Thất bại", error);
    }
    return null;
}

export async function loginApi(data) {
    const link = `http://localhost:8080/api/user/login`;

    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            ShowNotification("success", "Thành công",  "Login account successful!" ); 
            const data = await response.json();
            const token = data.token;
            // save localStorage 
            localStorage.setItem('jwtToken', token);
            return true;
        } else {
            const errorText = await response.json();
            ShowNotification("error", "Thất bại",  errorText ); 
            console.log(errorText)
        }
    } catch (error) {
        ShowNotification("error", "Thất bại",  error ); 
        console.log(error)
    }
    return null;
}
export async function getAllUser(data) {
    const link = `http://localhost:8080/api/user`;
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
            return data.data;
        } else {
            const errorText = await response.json();
            return { message: errorText };
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function statusUser(id) {
    const link = `http://localhost:8080/api/user/status/`+id;
    const token = localStorage.getItem('jwtToken');
    console.log(token)
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'newStatus' })
        });

        if (response.ok) {
            const data = await response.json();
            return null;
        } else {
            ShowNotification("error", "Thật bại", "Lỗi xảy ra");
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function deleteUser(id) {
    const link = `http://localhost:8080/api/user/${id}`;
    const token = localStorage.getItem('jwtToken');
    console.log(token)
    try {
        const response = await fetch(link, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return null;
        } else {
            ShowNotification("error", "Thật bại", "Lỗi xảy ra");
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function getItemUserSearch(name) {
    const link = `http://localhost:8080/api/user/search?name=${name}`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
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
export async function getUserById(id) {
    const link = `http://localhost:8080/api/user/${id}`;
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
            const errorText = await response.json();
            return { message: errorText };
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function getByToken(id) {
    const link = `http://localhost:8080/api/user/by-token`;
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
            const errorText = await response.json();
            return { message: errorText };
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function updateUser(data) {
    const link = `http://localhost:8080/api/user/by-token`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            return true;
        } else {
            ShowNotification("error", "Thật bại", "Lỗi xảy ra");
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function setRoleOfUser(role,id) {
    const link = `http://localhost:8080/api/user/${role}/${id}`;
    const token = localStorage.getItem('jwtToken');
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'newStatus' })
        });

        if (response.ok) {
            const data = await response.json();
            return null;
        } else {
            ShowNotification("error", "Thật bại", "Lỗi xảy ra");
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return null;
}
export async function activationAccount(id,code) {
    const link = `http://localhost:8080/api/user/activation/${id}/${code}`;

    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify("OK"),
        });

        if (response.ok) {
            ShowNotification("success", "Thành công",  "Login account successful!" ); 
            return true;
        } else {
            const errorText = await response.json();
            ShowNotification("error", "Thất bại",  errorText ); 
        }
    } catch (error) {
        ShowNotification("error", "Thất bại",  error ); 
        console.log(error)
    }
    return null;
}

