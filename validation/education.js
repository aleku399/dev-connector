const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
    let errors = {};

    data.school = !isEmpty(data.title) ? data.shool : '';
    data.degree = !isEmpty(data.company) ? data.degree : '';
    data.fieldofstudy = !isEmpty(data.location) ? data.fieldofstudy : '';
    data.from = !isEmpty(data.password2) ? data.from : '';
   
    if (Validator.isEmpty(data.title)) {
        errors.school = 'School field is required';
    }

    if (Validator.isEmpty(data.degree)) {
        errors.degree = 'Degree field is required';
    }

    if (!Validator.isEmail(data.fieldofstudy)) {
        errors.fieldofstudy = 'Field of study is invalid';
    }

    if (Validator.isEmpty(data.from)) {
        errors.from = 'From field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};