class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''}; //mydata: ''
      
      //add handle
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      
    }
    
    // add handleChange here
    handleChange(event) {
      this.setState({value: event.target.value}); //mydata: event.target.value
    }
    
    // add handleSubmit here 
    //call when the submit button clicked
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault(); //to prevent a new browser tab to open
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value= {this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );