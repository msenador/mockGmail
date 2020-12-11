import React, { Component } from 'react'
// import axios from 'axios'

export class ComposeEmail extends Component{
    constructor(props){
        super(props)
        this.state = {
            emails: [
            {recipientCompose: '',
            subjectCompose: '',
            bodyCompose: ''}
            ]
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log('recipientCompose:' + this.state.recipientCompose )
        console.log('subjectCompose:' + this.state.subjectCompose )
        console.log('bodyCompose:' + this.state.bodyCompose )
        const url = 'http://localhost:3001/emails'
        const data = {
            recipientCompose: this.state.recipientCompose,
            subjectCompose: this.state.subjectCompose,
            bodyCompose: this.state.bodyCompose
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}})
            .then(res => res.json())
        alert('EMAIL HAS BEEN SENT!')
            
    }
    

    // submitHandler = (e) => {
    //     e.preventDefault()
    //     fetch('http://localhost:3001/emails', {
    //         method: 'POST',
    //         body: JSON.stringify(this.state.emails),
    //         headers:{
    //             "Content-type": 'application/json; charset=UTF-8'
    //         }
    //     })
    //       .then(response => response.json())
    //       .then(data => console.log(data))
    //       .catch(error => console.log(error));
    //     alert('EMAIL HAS BEEN SENT!')
    // };


        // axios.post('localhost:3001/emails', this.state.emails)
        //   .then(response => {
        //       console.log(response.data)
        //   })
        //   .catch(error => {
        //       console.error(error);
        //   })
        //   alert('EMAIL HAS BEEN SENT!')
    


    render(){
        const { recipientCompose, subjectCompose, bodyCompose } = this.state
        return(
            <div>
              <form onSubmit={this.submitHandler}>
                <div>
                    Recipient: 
                    <input type='text' name='recipientCompose' value={recipientCompose} onChange={this.changeHandler}/>
                </div>
                <div>
                    Subject: 
                    <input type='text' name='subjectCompose' value={subjectCompose} onChange={this.changeHandler}/>
                </div>
                <div>
                    Body: 
                    <input type='text' name='bodyCompose' value={bodyCompose} onChange={this.changeHandler}/>
                </div>
                <button type='submit'>Send Email</button>
              </form>
            </div>
        )
    }
}

export default ComposeEmail