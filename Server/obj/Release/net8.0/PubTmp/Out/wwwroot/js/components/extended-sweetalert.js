
window.loadSweetAlert = function () {
    //Basic
    if (document.getElementById("sweetalert-basic")) {
        document.getElementById("sweetalert-basic").addEventListener("click", function () {
            try {
                Swal.fire({
                    title: 'Any fool can use a computer',
                    buttonsStyling: false,
                    showCloseButton: false,
                    customClass: {
                        confirmButton: 'btn btn-primary w-xs mt-2',
                    },
                });
            } catch (error) {
                console.error("An error occurred while displaying the SweetAlert:", error);
            }
        });
    }



    //A title with a text under
    if (document.getElementById("sweetalert-title")) {
        document.getElementById("sweetalert-title").addEventListener("click", function () {
            try {
                Swal.fire({
                    title: "The Internet?",
                    text: "That thing is still around?",
                    icon: "question",
                    buttonsStyling: false, // Disables SweetAlert2's default button styling
                    showCloseButton: false,
                    customClass: {
                        confirmButton: "btn btn-primary w-xs mt-2", // Use Bootstrap or custom classes here
                    },
                });
            } catch (error) {
                console.error("Error occurred while showing SweetAlert:", error);
            }
        });
    }


    //Success Message
    if (document.getElementById("sweetalert-success")) {
        document.getElementById("sweetalert-success").addEventListener("click", function () {
            try {
                Swal.fire({
                    title: 'Good job!',
                    text: 'You clicked the button!',
                    icon: 'success',
                    showCancelButton: true,
                    buttonsStyling: false, // Disables SweetAlert2's default button styling
                    showCloseButton: false,
                    customClass: {
                        confirmButton: 'btn btn-primary w-xs me-2 mt-2', // Custom classes for confirm button
                        cancelButton: 'btn btn-danger w-xs mt-2', // Custom classes for cancel button
                    },
                });
            } catch (error) {
                console.error("An error occurred while displaying the SweetAlert:", error);
            }
        });
    }


    //error Message
    if (document.getElementById("sweetalert-error")) {
        document.getElementById("sweetalert-error").addEventListener("click", function () {
            try {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: 'error',
                    buttonsStyling: false, // Disables SweetAlert2's default button styling
                    footer: '<a href="">Why do I have this issue?</a>',
                    showCloseButton: false,
                    customClass: {
                        confirmButton: 'btn btn-primary w-xs mt-2', // Bootstrap or custom styles for the confirm button
                    },
                });
            } catch (error) {
                console.error("An error occurred while displaying the SweetAlert:", error);
            }
        });
    }


    //info Message
    if (document.getElementById("sweetalert-info")) {
        document.getElementById("sweetalert-info").addEventListener("click", function () {
            try {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: 'info',
                    customClass: {
                        confirmButton: "btn btn-info w-xs mt-2",
                    },
                    buttonsStyling: false,
                    footer: '<a href="">Why do I have this issue?</a>',
                    showCloseButton: false
                });
            } catch (error) {
                console.error("An error occurred while displaying the SweetAlert:", error);
            }
        });
    }


    //Warning Message
    if (document.getElementById("sweetalert-warning")) {
        document.getElementById("sweetalert-warning").addEventListener("click", function () {
            try {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: 'warning',
                    buttonsStyling: false, // Prevents default button styles
                    footer: '<a href="">Why do I have this issue?</a>',
                    showCloseButton: false,
                    customClass: {
                        confirmButton: 'btn btn-primary w-xs mt-2', // Apply custom styles for the confirm button
                    },
                });
            } catch (error) {
                console.error("An error occurred while displaying the SweetAlert:", error);
            }
        });
    }


    // long content
    if (document.getElementById("sweetalert-longcontent")) {
        document.getElementById("sweetalert-longcontent").addEventListener("click", function () {
            try {
                Swal.fire({
                    imageUrl: 'https://placeholder.pics/svg/300x1500',
                    imageHeight: 1500,
                    imageAlt: 'A tall image',
                    buttonsStyling: false, // Disables SweetAlert2's default button styling
                    showCloseButton: false,
                    customClass: {
                        confirmButton: 'btn btn-primary w-xs mt-2', // Bootstrap or custom styles for the confirm button
                    },
                });
            } catch (error) {
                console.error("An error occurred while displaying the SweetAlert:", error);
            }
        });
    }
    

    //Parameter
    if (document.getElementById("sweetalert-params")) {
        document.getElementById("sweetalert-params").addEventListener("click", function () {
            try {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    buttonsStyling: false,
                    showCloseButton: false,
                    customClass: {
                        confirmButton: 'btn btn-primary w-xs me-2 mt-2',
                        cancelButton: 'btn btn-danger w-xs mt-2'
                    }
                }).then(function (result) {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                            buttonsStyling: false,
                            customClass: {
                                confirmButton: 'btn btn-primary w-xs mt-2'
                            }
                        });
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        Swal.fire({
                            title: 'Cancelled',
                            text: 'Your imaginary file is safe :)',
                            icon: 'error',
                            buttonsStyling: false,
                            customClass: {
                                confirmButton: 'btn btn-primary mt-2'
                            }
                        });
                    }
                });
            } catch (error) {
                console.error("An error occurred while displaying the SweetAlert confirmation dialog:", error);
            }
        });
    }


    //Custom Image
    if (document.getElementById("sweetalert-image")) {
        document.getElementById("sweetalert-image").addEventListener("click", function () {
            try {
                Swal.fire({
                    title: 'Sweet!',
                    text: 'Modal with a custom image.',
                    imageUrl: 'assets/images/logo-sm.png',
                    imageHeight: 40,
                    showCloseButton: false,
                    buttonsStyling: false,
                    animation: false,
                    customClass: {
                        confirmButton: 'btn btn-primary w-xs mt-2'
                    },
                });
            } catch (error) {
                console.error("An error occurred while displaying the SweetAlert image modal:", error);
            }
        });
    }

}