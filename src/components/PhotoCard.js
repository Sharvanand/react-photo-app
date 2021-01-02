import React, { Component } from 'react'

class PhotoCard extends Component {
        constructor(props){
           super(props)
           this.state = {spans:0}
            this.photoRef = React.createRef();
        }

        componentDidMount(){
           this.photoRef.current.addEventListener('load',this.setSpans);
        }

        setSpans = () =>{
            const height = this.photoRef.current.clientHeight;
            const spans = Math.ceil(height/10);
            this.setState({spans})
        }

    render(){
        const {urls, description } = this.props.photo;
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
            <img ref={this.photoRef} src={urls.regular} alt={description}/>
            </div>
        );
    }
}

export default PhotoCard;