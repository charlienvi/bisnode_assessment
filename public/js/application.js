$(document).ready((e) => {
    
    $('#userManagementForm').on('submit', function(e){
       e.preventDefault()
       let f = $(this).find('.form-group') // this refers to the selected user management form
       let errorFlag = false
       let successFlag = false

       //loop trough each input box within div.form-group to check for errors
       f.children('input').each(function() {
            let i = $(this) // this referres to the current selected input tag
            let inputId = i.attr('id')
            let inputVal = i.val()
            if(inputVal !== '') {
                i.removeClass('input-red-border')
                successFlag = true
            } else {
                $('#' + inputId + 'SubmitErr').text('This field is required')
                i.addClass('input-red-border')
                errorFlag = true
            }           
       })
       console.log(successFlag, errorFlag)
       //handle the feedback after check
       if( successFlag === true && errorFlag === false){
        $('#err').addClass('hid')
        //$('#success').removeClass('hid')
        $.ajax({
            type: 'POST',
            data: {
                id: $('#userId').val(),
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                email: $('#email').val(),
                position: $('#position').val(),
                action: $('#formAction').val()
            },
            url: location.protocol + '//' + location.hostname + '/post',
            success: function(data) {
                const {data:formData, message, status} = data
                //show the success alert under the form
                if(status === 'success') {
                    $('#firstNameSubmit').text(formData.firstName)
                    $('#lastNameSubmit').text(formData.lastName)
                    $('#emailSubmit').text(formData.email)
                    $('#positionSubmit').text(formData.position)
                    $('#successMessageFromValidation').text(message)
                    $('#success').removeClass('hid')
                } else {
                    $('#errMsgFromValidation').text(message)
                    $('#err').removeClass('hid')
                }
                
                console.log('post successfull', formData, message)
            },
            error: function(data) {
                //show the error alert under the form
                console.log('post with errors', data)
                $('#errMsgFromValidation').text("A unexpected error occured, please contact the site administrator if the problem persists")
                $('#err').removeClass('hid')
            }
         })
    } else {
        $('#success').addClass('hid')
        $('#err').removeClass('hid')
    }

   })
})
function showUserForm(data = {}, formAction ='add'){
    /* hide eventual messages and values before opening */
    $('#success').addClass('hid')
    $('#err').addClass('hid')
    /* check for data and visualize if present*/
    console.log('checks', data, formAction)
    $('#formAction').val(formAction)
    if(Object.keys(data).length === 0) {
        $('#userModalTitle').text('Create New User')
        $('#userModalMessage').text('Insert all fields before submitting. They are all mandatory')
        $('#userModalBtnCaption').text('Add New User')
        $('#userId').val('emptyId')
        $('#firstName').val('').removeClass('input-red-border')
        $('#lastName').val('').removeClass('input-red-border')
        $('#email').val('').removeClass('input-red-border')
        $('#position').val('').removeClass('input-red-border')
    } else {
        $('#userModalTitle').text('Edit User Data')
        $('#userModalMessage').text('Here You can edit the user data.')
        $('#userModalBtnCaption').text('Save Changes')
        $('#userId').val(data.userId)
        $('#firstName').val(data.firstName).removeClass('input-red-border')
        $('#lastName').val(data.lastName).removeClass('input-red-border')
        $('#email').val(data.email).removeClass('input-red-border')
        $('#position').val(data.position).removeClass('input-red-border')
    }
    $('#userModal').modal('show');
}