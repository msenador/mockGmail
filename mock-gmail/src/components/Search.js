import React from 'react'

// const SearchAll = ({search}) => {

//   var getInput = <input type="text" placeholder='Search by subject' id='searchEmail'/>

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formInput = e.target.searchEmail.value;
//   }

//   const getEmail = (formInput) => {
//     alert(formInput)
//     search.forEach(item => {
//       if(item.subject === formInput){
//         return(
//           <>
//             <p>{item.subject}</p>
//           </>
//         )
//       }
//     })
//   }

//   return(
//     <>

//       <form onSubmit={handleSubmit}>
//        <p>{getInput}</p>
//        <button> Search</button>
//        </form>
       

//     </>
//   )
// }

// export default SearchAll;

class SearchAll extends React.Component {
    constructor({search}){
        super({search});
        this.state = { 
          emails : search,
          formInput: ''
        }
      }

    // handleChange = (e) => {
    //   this.setState({formInput: e.target.value})
    //   console.log(this.state.formInput)
    // }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.searchSubject.value)
      console.log(this.state.emails)
      this.state.emails.map(subjects => {
        if(subjects.subject === e.target.searchSubject.value){
        return (
          <li>Subjects: {subjects.subject}</li>
          )
        }
      })
    }

    // getDetails = () => {
    //   console.log(this.state.emails)
    //   this.state.emails.map(subjects => {
    //     if(subjects.subject === this.formInput){
    //     return (
    //       <li>Subjects: {subjects.subject}</li>
    //     )
    //     }
    //   })
    // }

    render(){
      return(
        <form onSubmit={this.handleSubmit}>
        {/* // <form> */}
        <h3>*Search by subject*</h3>
        <input type='text' id='searchSubject' placeholder='Search by subject' 
        // onChange={this.handleChange}

        />
        <button>Search</button>
        {/* <u>
          {
            this.getDetails
          }
        </u> */}
        </form>
    )
  }
}

export default SearchAll;