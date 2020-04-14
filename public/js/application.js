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
                successFlag = true
            } else {
                console.log('check ERR bereikt', inputVal)
                $('#' + inputId + 'SubmitErr').text('This field is required')
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
    console.log('test', data)
    $('#success').addClass('hid')
    $('#err').addClass('hid')
    /* check for data and visualize if present*/
    if(data !== {}) {
        console.log('data aanwezig', data)
        $('#userModalTitle').text('Edit User Data')
        $('#userModalMessage').text('Here You can edit the user data.')
        $('#userModalBtnCaption').text('Save Changes')
        $('#firstName').val(data.firstName)
        $('#lastName').val(data.lastName)
        $('#email').val(data.email)
        $('#position').val(data.position)
    } else {
        console.log('data niet aanwezig', data)
        $('#userModalTitle').text('Create New User')
        $('#userModalMessage').text('Insert all fields before submitting. They are all mandatory')
        $('#userModalBtnCaption').text('Add New User')
        $('#firstName').val('')
        $('#lastName').val('')
        $('#email').val('')
        $('#position').val('')
    }
    $('#userModal').modal('show');
}