import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class EventForm extends Component {
    state = {
       title: '',
       date: '',
       city: '',
       venue: '',
       hostedBy: ''
    }
    handleFormSubmit = (evt) => {
         evt.preventDefault();
        this.props.createEvent(this.state);

    }

    hundleInputChange = ({target: {name, value}}) => {
        this.setState({
          [name]: value
        })
    }
    render() {

      const {cancelFormOpen} =  this.props;
      const {title, date, city, venue, hostedBy} = this.state;
        return (
                 <Segment>
                   <Form onSubmit = {this.handleFormSubmit} autoComplete='off'>
                     <Form.Field>
                       <label>Event Title</label>
                       <input 
                       name='title'
                       onChange = {this.hundleInputChange}
                       value = {title} 
                       placeholder="Event Name" />
                     </Form.Field>
                     <Form.Field>
                       <label>Event Date</label>
                       <input 
                       name='date'
                       onChange = {this.hundleInputChange}
                       value = {date} 
                       type="date" placeholder="Event Date" />
                     </Form.Field>
                     <Form.Field>
                       <label>City</label>
                       <input 
                       name='city'
                       onChange = {this.hundleInputChange}
                       value = {city} 
                       placeholder="City event is taking place" />
                     </Form.Field>
                     <Form.Field>
                       <label>Venue</label>
                       <input 
                       name='venue'
                       onChange = {this.hundleInputChange}
                       value = {venue} 
                       placeholder="Enter the Venue of the event" />
                     </Form.Field>
                     <Form.Field>
                       <label>Hosted By</label>
                       <input 
                       name='hostedBy'
                       onChange = {this.hundleInputChange}
                       value = {hostedBy} 
                       placeholder="Enter the name of person hosting" />
                     </Form.Field>
                     <Button positive type="submit">
                       Submit
                     </Button>
                     <Button onClick = {cancelFormOpen} type="button">Cancel</Button>
                   </Form>
                 </Segment>
        )
    }
}

export default EventForm