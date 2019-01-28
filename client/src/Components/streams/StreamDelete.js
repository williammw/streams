import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';
import {Link} from 'react-router-dom';
class StreamDelete extends React.Component{

    componentDidMount(){
        //console.log(this.props.match.params.id);
        //this.props.match.params.id
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions() {
        const {id} = this.props.match.params;
        return (      
            <React.Fragment>
                <button 
                    onClick={() => {this.props.deleteStream(id)}} 
                    className="ui button negative">
                        Delete
                </button>
                <Link to="/" className="ui button ">Cancel</Link>    
            </React.Fragment>
        )
    }    

    renderContent(){
        if(!this.props.stream){
            return 'are you sure want to delete this stream?'    
        }
        return `Are you sure want to delte the stream with titel ${this.props.stream.title}`
    }

    render(){
        return (            
                <Modal 
                    title="delete stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.pushState('/')}
                />          
            )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream} )(StreamDelete);
