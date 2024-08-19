import Swal from 'sweetalert2';

const ShowNotification = (icon, title, text) => {
    Swal.fire({
        icon: icon,
        title: title,
        html: text, 
        confirmButtonText: 'OK'
    });
};

export default ShowNotification;
