import React , {Component } from 'react'
class List extends Component{
    state = {
        status : true
    }
     liEle= _=> {
         return(
             <li>
                 <span>{this.props.name}</span>
                 <span>
                    <button onClick={this.toggleStatus}>Eidet</button>
                    <button onClick={this.props.delete}>Delete</button>
                 </span>

             </li>
         )
        
     }
    formEle = _=> {
        return(
            <form onSubmit={this.updateClick}>
                <input defaultValue={this.props.name} ref={v=>{this.input= v}}/>
                <button >Update</button>
            </form>
        )
    }
    toggleStatus = _=>{
        const status = this.state.status;
        this.setState({status:!status})
    }
    updateClick = e=>{
        e.preventDefault()
        if(this.input.value.length){
            this.props.update(this.props.index , this.input.value)
            this.toggleStatus()
        }
        
    }
    render(){
        return(
            <React.Fragment>
                {this.state.status ? this.liEle(): this.formEle()}
            </React.Fragment>
        )
    }

}
export default List