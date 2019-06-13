import React, { Component } from 'react';
import axios from 'axios';





class BuzzComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Content:'',
            Category:'Activity',
            Image:[]
        }
    }
    componentDidMount=()=>{
        axios.get('http://localhost:8080/data/buzz/renderBuzz',{headers:{'Authorization': `${localStorage.getItem('Token')}`,'MyHeader':'My value'}}    )
        .then((req,res)=>{
            console.log("response is here ",req);
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.Content){
            axios.post('http://localhost:8080/data/buzz/createBuzz', 
            this.state,
            {headers:{'Authorization': `${localStorage.getItem('Token')}`,'MyHeader':'My value'}},
        ).then((response) => {
            console.log(response);
            if(response.data.message === 'DBError'){
                localStorage.removeItem('Token');
                this.props.history.push('/login');
            }
        }).catch((err) => {
            console.log(err);
        })

            this.setState({
                Content:'',
            Category:'Activity',
            Image:[]
            })

        
        }else{
            alert('Buzz content cant be empty')
        }

    }


    render(){
        return(
          <div className={'buzz-form'}  >
            <form onSubmit={this.handleSubmit} encType='application/x-www-form-urlencoded' >
                <textarea onChange={this.handleChange}
                        name={'Content'}
                        value={this.state.Content}
                        placeholder={'Create your own buzz'}
                ></textarea>
                <select name={'Category'} onChange={this.handleChange}>
                    
                    <option value={'activity'}>Activity Buzz</option>
                    <option value={'lostfound'}>Lost/Found Buzz</option>
                </select>
                <input type={'submit'} value='Post'></input>
            </form>
            <div>

            </div>
            </div>
        )
    }
}




export default BuzzComponent;