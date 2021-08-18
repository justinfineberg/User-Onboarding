import React from 'react'

const Form = (props) =>{

    const {changeForm, values, submit, disabled } = props;

    const onChange = (evt) =>{
       const { name, value, checked, type } = evt.target;
        const valueToBeUsed = type === 'checkbox' ? checked : value;
       changeForm(name, valueToBeUsed)
    }


    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <label>Fill Out the Form
                <form className="mainForm" onSubmit={onSubmit}>
                    <label>
                        Name:
                        <input name="name" type="text" placeholder="Fill out Name" onChange={onChange} value={values.name} />
                    </label>
                    <label>
                        Email:
                        <input name="email" type="email" placeholder="Fill out your Email" onChange={onChange} value={values.email} />
                    </label>
                    <label>
                        Password:
                        <input name="password" type="text" placeholder="Fill password" onChange={onChange} value={values.password} />
                    </label>
                    <label>
                        Do you agree to Terms of Service?
                        <input name="terms" type="checkbox" checked={values.terms} onChange={onChange} />
                    </label>
                    <button disabled={disabled}> Submit </button>
                </form>
            </label>
        </div>
    )

}

export default Form