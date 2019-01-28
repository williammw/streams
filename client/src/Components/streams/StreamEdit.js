import React from 'react';
import {connect} from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';
class StreamEdit extends React.Component{
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }   
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id,  formValues);
    }
    render(){        
        //console.log(this.props)
        if(!this.props.stream){
            return <div>...loading</div>
        }
        return (
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm                         
                        // method 1
                        // initialValues{{title:this.props.stream.title}}
                        // method 2 (good approach)
                        initialValues={_.pick(this.props.stream, 'title', 'description')}
                        onSubmit={this.onSubmit}
                    />
                </div>
            );
    };
    
    
}

const  mapStateToProps = (state, ownProps) => {
    // ownProps equal StreamEdit.props    
    return {
        stream : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);
