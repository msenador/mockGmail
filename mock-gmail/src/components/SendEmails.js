import React, { Component } from 'react'
// import axios from 'axios'

export class ComposeEmail extends Component{
    constructor({props}){
        super({props})
        this.state = {
            emailSender: [
            {
            id: 20,
            sender: '',
            recipient: '',
            subject: '',
            message: '',
             }
            ]
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log('sender:' + this.state.sender)
        console.log('recipient:' + this.state.recipient )
        console.log('subject:' + this.state.subject )
        console.log('message:' + this.state.message )
        console.log('emails' + this.state.emailSender.emails)
        const url = 'http://localhost:3001/send'
        const data = {
            sender: this.state.sender,
            recipient: this.state.recipient,
            subject: this.state.subject,
            message: this.state.message,
            id: this.state.id
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }})
            .then(res => res.json())
            .catch(error => {
                console.error('There was an error!')
            })
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
        const { sender, recipient, subject, message } = this.state
        return(
            <div>
              <form onSubmit={this.submitHandler}>
                <div>
                    Sender:
                    <input type='text' name='sender' value={sender} placeholder='Enter sender' onChange={this.changeHandler}/>
                </div>
                <div>
                    Recipient: 
                    <input type='text' name='recipient' value={recipient} placeholder='Enter recipient' onChange={this.changeHandler}/>
                </div>
                <div>
                    Subject: 
                    <input type='text' name='subject' value={subject} placeholder='Enter subject' onChange={this.changeHandler}/>
                </div>
                <div>
                    Body: 
                    <input type='text' name='message' value={message} placeholder='Enter body' onChange={this.changeHandler}/>
                </div>
                <button type='submit'>Send Email</button>
              </form>
            </div>
        )
    }
}

export default ComposeEmail