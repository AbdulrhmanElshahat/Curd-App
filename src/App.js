import React , {Component } from 'react'
import Form from './components/Form/Form';
import List from './components/List/List';
import './App.css'

class App extends Component{
  state = {
    items:[],
    current :''
  }
  handelChange = e=>{
      const current = e.target.value;
      this.setState({current})
  }

  add = e=>{
    e.preventDefault()
    const current = this.state.current
    const items = this.state.items
    if(current.length){items.push({name:current})}
    
    this.setState({items , current :''})
}

  delete= currentindex=>{
    const Allitems = this.state.items;
    const items = Allitems.filter((item,index)=> index !== currentindex)
    this.setState({items})
  }

  update = (index,value)=>{
    const items = this.state.items;
    const currentItem = items[index]
    currentItem['name'] = value
    this.setState({items})
  }

  render(){
    const items = this.state.items;
    const currentItems = items.map((item , index)=>{
      return(
        <List
          key={index}
          name = {item.name}
          delete = {_=> this.delete(index)}
          update = {this.update}
          index = {index}
        />
      )
    })

    return (
      <div className='app'>
        <Form 
          handelChange = {this.handelChange}
          add = {this.add}
          value = {this.state.current}
        />
        <ul>{currentItems}</ul>
        
      </div>

    )
  }
}

export default App;
