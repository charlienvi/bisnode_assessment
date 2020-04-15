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
                $('#' + inputId + 'Submit').text(inputVal)
                $('#' + inputId + 'SubmitErr').text(inputVal + ' : valid')
                i.removeClass('input-red-border')
                successFlag = true
            } else {
                $('#' + inputId + 'SubmitErr').text('This field is required')
                i.addClass('input-red-border')
                errorFlag = true
            }
            //handle the feedback after check
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
        $('#userModalTitle').text('Create New User')
        $('#userModalMessage').text('Insert all fields before submitting. They are all mandatory')
        $('#userModalBtnCaption').text('Add New User')
        $('#firstName').val('').removeClass('input-red-border')
        $('#lastName').val('').removeClass('input-red-border')
        $('#email').val('').removeClass('input-red-border')
        $('#position').val('').removeClass('input-red-border')
    } else {
        $('#userModalTitle').text('Edit User Data')
        $('#userModalMessage').text('Here You can edit the user data.')
        $('#userModalBtnCaption').text('Save Changes')
        $('#firstName').val(data.firstName).removeClass('input-red-border')
        $('#lastName').val(data.lastName).removeClass('input-red-border')
        $('#email').val(data.email).removeClass('input-red-border')
        $('#position').val(data.position).removeClass('input-red-border')
    }
    $('#userModal').modal('show');
}