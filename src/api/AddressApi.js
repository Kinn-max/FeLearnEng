


export async function getAllProvince() {
    const link = `https://web-staging.ghtklab.com/api/v1/public/address/list`;
    try {
        const response = await fetch(link, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok){
            const result = await response.json();
            return result.data;  
        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error(error); 
    }
    return null;
}
export async function getAllDistrict(idProvince) {
    const link = `https://web-staging.ghtklab.com/api/v1/public/address/list?parentId=${idProvince}&type=3`;
    try {
        const response = await fetch(link, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok){
            const result = await response.json();
            return result.data;  
        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error(error); 
    }
    return null;
}
export async function getAllWard(id) {
    const link = `https://web-staging.ghtklab.com/api/v1/public/address/list?parentId=${id}&type=1`;
    try {
        const response = await fetch(link, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok){
            const result = await response.json();
            return result.data;  
        } else {
            console.error('Failed to fetch data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error(error); 
    }
    return null;
}