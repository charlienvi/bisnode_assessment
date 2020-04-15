$(document).ready((e) => {
    
    $('#userManagementForm').on('submit', function(e){
       e.preventDefault()
       let f = $(this).find('.form-group') // this refers to the selected user management form
       let errorFlag = false
       let successFlag = false
       //let emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i

       //loop trough each input box within div.form-group to check for errors
       f.children('input').each(function() {
            let i = $(this) // this referres to the current selected input tag
            let inputId = i.attr('id')
            let inputVal = i.val()
            console.log('nazicht inputVal', typeof inputVal)
            if(inputVal !== '') {
                console.log('check bereikt', inputVal)
                $('#' + inputId + 'Submit').text(inputVal)
                $('#' + inputId + 'SubmitErr').text(inputVal + ' : valid')
                i.removeClass('input-red-border')
                successFlag = true
            } else {
                console.log('check ERR bereikt', inputVal)
                $('#' + inputId + 'SubmitErr').text('This field is required')
                i.addClass('input-red-border')
                errorFlag = true
            }

            if( successFlag === true && errorFlag === false){
                $('#err').addClass('hid')
                $('#success').removeClass('hid')
            } else {
                $('#success').addClass('hid')
                $('#err').removeClass('hid')
            }
       })
   })
})
function showUserForm(data = {}){
    /* hide eventual messages and values before opening */
    $('#success').addClass('hid')
    $('#err').addClass('hid')
    /* check for data and visualize if present*/
    if(Object.keys(data).length === 0) {
        console.log('data niet aanwezig', data, Object.keys(data).length )
        $('#userModalTitle').text('Create New User')
        $('#userModalMessage').text('Insert all fields before submitting. They are all mandatory')
        $('#userModalBtnCaption').text('Add New User')
        $('#firstName').val('').removeClass('input-red-border')
        $('#lastName').val('').removeClass('input-red-border')
        $('#email').val('').removeClass('input-red-border')
        $('#position').val('').removeClass('input-red-border')
    } else {
        console.log('data aanwezig', data, Object.keys(data).length )
        $('#userModalTitle').text('Edit User Data')
        $('#userModalMessage').text('Here You can edit the user data.')
        $('#userModalBtnCaption').text('Save Changes')
        $('#firstName').val(data.firstName)
        $('#lastName').val(data.lastName)
        $('#email').val(data.email)
        $('#position').val(data.position)


    }
    $('#userModal').modal('show');
}