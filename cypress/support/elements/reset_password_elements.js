class ResetPasswordElements {

    current_password_field = () => {
        return '#currentPassword'
    }

    new_password_field = () => {
        return '#newPassword'
    }

    new_confirm_password_field = () => {
        return '#newPasswordConfirm'
    }

    change_password = () => {
        return ':nth-child(4) > .styles_button__1hbjW'
    }

    error_current_password_empty = () => {
        return '.styles_mt10__i8OtL > .styles_labeledInputContainer__1PKIn > :nth-child(2) > .styles_input__12sJV > .styles_helperText__dJPEz > .styles_helperText__3Llrc'
    }

    error_new_password_empty = () => {
        return ':nth-child(2) > .styles_labeledInputContainer__1PKIn > :nth-child(2) > .styles_input__12sJV > .styles_helperText__dJPEz > .styles_helperText__3Llrc'
    }

    error_confirmation_password_empty = () => {
        return '.styles_helperText__3Llrc'

    }
   
}

export default ResetPasswordElements;