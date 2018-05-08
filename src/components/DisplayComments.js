import React, {Component} from 'react';
import CommentPing from './CommentPing';
import _ from 'lodash';

const API = 'https://gb-server-api.herokuapp.com/guestbook'
class DisplayComments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount(){
        fetch(API)
        .then(response => response.json())
        .then(data => {
            const comments = data.reverse();
            this.setState({ comments: comments })
        });
    }
    CommentDisplay(){
        return _.map(this.state.comments, comment => {
            return <CommentPing
                        key={comment.id}
                        comment={comment}
                    />;
        });
    }
    
    
render(){
    return (
        <div className="comments-box">
            <ul>
                {this.CommentDisplay()}
            </ul>
        </div>
    );
}

}

export default DisplayComments;
