export const validateUserInputs = user => {
    let errors = {};
    if(!user.firstname)
        errors.firstname = 'Please enter your firstname';
    if(!user.lastname)
        errors.lastname = 'Please enter your lastname';
    if(!user.age)
        errors.age = 'Please enter your age';
    if(user.age < 1)
        errors.age = 'Please enter your valid age';
    if(!user.hobby)
        errors.hobby = 'Please enter your hobby';
    if(!user.birthday)
        errors.birthday = 'Please select a birthday';

    return errors;
}