import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0,0,0,0,0,0]
    }
    this.selectAnecdote = this.selectAnecdote.bind(this)
    this.voteAnecdote = this.voteAnecdote.bind(this)
  }

  selectAnecdote = () => {
    const random = Math.floor(Math.random()*6)
      this.setState({selected : random})
  } 

  voteAnecdote = () => {
    const kopio = this.state.votes
    kopio[this.state.selected] += 1
    this.setState({votes : kopio})
  }
  
  
  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p> has {this.state.votes[this.state.selected]} votes </p>
        <button onClick={this.voteAnecdote}>vote</button>
        <button onClick={this.selectAnecdote}>next anecdote</button>
      </div>
    )
  }
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)