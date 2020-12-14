import React from 'react'

class SearchAll extends React.Component {
    constructor({search}){
        super({search});
        this.state = { 
          emails : search,
          formInput: '',
          selectedSubject: '',
          selectedRecipient: '',
          selectedSender: '',
          selectedBody: '',
          selectedDate:'',
          messageExist: false        
        }
      }

    handleChange = (e) => {
      this.setState({formInput: e.target.value})
    }

    logValue = () => {
      console.log(this.state.emails)
      console.log(this.state.formInput)
      this.state.emails.map(thing => {
        if(thing.subject === this.state.formInput){
          this.setState({messageExist: true})
          this.setState({selectedSubject: thing.subject})
          this.setState({selectedRecipient: thing.recipient})
          this.setState({selectedSender: thing.sender})
          this.setState({selectedBody: thing.message})
          this.setState({selectedDate: thing.date})
        } 
      })
    }

    display = () => {
      <>
      <h3><b>Sender: </b>{this.state.selectedSender}</h3>
      <h3><b>Recipient: </b>{this.state.selectedRecipient}</h3>
      <h3><b>Date: </b>{this.state.selectedDate}</h3>
      <h3><b>Subject: </b>{this.state.selectedSubject}</h3>
      <h3><b>Message: </b>{this.state.selectedBody}</h3>
      </>
    }

    render(){

      return(
        <>
        <h3>*Search by subject*</h3>
        <input type='text' placeholder='Search by subject'  onChange={this.handleChange} />
        <button onClick={this.logValue}>Search</button>
        <h3><b>Sender: </b>{this.state.selectedSender}</h3>
        <h3><b>Recipient: </b>{this.state.selectedRecipient}</h3>
        <h3><b>Date: </b>{this.state.selectedDate}</h3>
        <h3><b>Subject: </b>{this.state.selectedSubject}</h3>
        <h3><b>Message: </b>{this.state.selectedBody}</h3>

        </>
    )
  }
}

export default SearchAll;