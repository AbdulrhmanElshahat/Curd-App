function Form (props){
    return(
       <form onSubmit={props.add}>
           <input onChange={props.handelChange} value={props.value}/>
           <button type='submit'>Add</button>
       </form>
    )
}
export default Form