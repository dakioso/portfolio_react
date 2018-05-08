import React, {Component} from 'react';
import DisplayComments from './DisplayComments';

class guestbookForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            author: '',
            body:''
        }
    }

    handleAuthorChange(author) {
        this.setState({author})
        console.log(author);
    }
    handleBodyChange(body) {
        this.setState({body})
        console.log(body);
    }
    handleSubmit(event){
        // event.preventDefault();
        fetch('https://gb-server-api.herokuapp.com/guestbook', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({author: this.state.author, body: this.state.body})
        })
    }

    render() {
        return (
            <div className="gb-page">
                <div className="form">
                    <form className="gbForm"
                        onSubmit={this.handleSubmit}>
                        <h2>Please leave a comment!</h2>
                        <input className="gb-input"
                            onChange={event => this.handleAuthorChange(event.target.value)}
                            value={this.state.author}
                            placeholder="Name" required />
                            <textarea className="gb-text" rows="8" cols="60"
                                onChange={event => this.handleBodyChange(event.target.value)}
                                value={this.state.body}
                                placeholder="Write some nice things here!" required/>
                                <button type="submit" onClick="window.location.reload()">Post Comment</button>
                            </form>
                        </div>
                      <DisplayComments />
                    </div>
                );
            }
        };

        export default guestbookForm;
