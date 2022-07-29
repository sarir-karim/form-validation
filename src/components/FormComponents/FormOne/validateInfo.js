export default function validateInfo(values){
    let errors = {}

    // Username validation
    if(!values.username.trim()){
        errors.username = "Username required"
    }

    //Email validation

    if(!values.email){
        errors.email = 'Email required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }

    //password validation

    if(!values.password){
        errors.password = "Password required"
    }else if (values.password.length < 6){
        errors.password = 'password must be 6 characers or more'
    }

    //password2 validation

    if(!values.password2){
        errors.password2 = "Password required"
    }else if(values.password !== values.password2){
        errors.password2 = 'Passwords do not match'
    }

    return errors
}


