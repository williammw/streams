import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component{
    
    renderError({error, touched}){
        if(touched &&  error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({input, label, meta}) =>{
        //console.log(formProps)
        //console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} autoComplete="off" />
                    <div>{this.renderError(meta)}</div>
                </div>
            )
    }
    onSubmit = (formValues) =>{
        //console.log(formValues);
        //formValues.preventDefault();
        this.props.createStream(formValues);
    }
    render(){        
        //console.log(this.props)
        return (
            
            <form 
            /*this.props.handleSubmit <- provided by reduxForm, */
            onSubmit={this.props.handleSubmit(this.onSubmit)}              
            className="ui form error"
            >
                 {/*component form element display on scree */}
                <Field name="title" label="Enter Title" component={this.renderInput} />
                <Field name="description" label="Enter Description" component={this.renderInput} />

                <button className="ui button primary">Submit</button>
            </form>
        )
    }
    
}

const validate = (formValues) => {
    // validate looking for the <Field name="WhateverItis" propertys
    const errors = {};
    if(!formValues.title ){
        errors.title = 'you must enter a titel';
    }
    if(!formValues.description){
        errors.description = 'you must enter a description';
    }
    // import to return the error to this.renderInput method
    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate 
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);