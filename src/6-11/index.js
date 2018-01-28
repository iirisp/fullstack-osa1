import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  asetaArvo = (counter, arvo) => {
    if(counter==="hyva") {
    return () => {
      this.setState({ hyva: arvo })
     }
  }

    if(counter==="neutraali") {
      return () => {
        this.setState({ neutraali: arvo })
       }
    }

      if(counter==="huono") {
        return () => {
          this.setState({ huono: arvo })
         }
      }
  }



  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <Button handleClick={this.asetaArvo("hyva", this.state.hyva+1)} teksti="hyva" />
          <Button handleClick={this.asetaArvo("neutraali",this.state.neutraali+1)} teksti="neutraali" />
          <Button handleClick={this.asetaArvo("huono", this.state.huono+1)} teksti="huono" />  
        </div>
         

        <h1>statistiikka</h1>
        <Statistics statistics={this.state} />
      </div>
    )

  }
}




const Button = ({handleClick, teksti}) => {
  return(
    <button onClick={handleClick}>{teksti}</button>
  )
}

const Statistics = (props) => {

if(props.statistics.hyva+props.statistics.neutraali+props.statistics.neutraali === 0) {
  return(
    <div>
      <p>ei yhtään palautetta</p>
    </div>
  )
}

  return (
    <div>
      <table>
        <tbody>
        <Statistic text="hyva" value={props.statistics.hyva} />
        <Statistic text="neutraali" value={props.statistics.neutraali} />
        <Statistic text="huono" value={props.statistics.huono} />
        <Statistic text="keskiarvo" value={(props.statistics.hyva - props.statistics.huono) / (props.statistics.hyva + props.statistics.neutraali +props.statistics.huono)} />
        <Statistic text="positiivisia %" value ={100*props.statistics.hyva / (props.statistics.hyva + props.statistics.neutraali + props.statistics.huono)} />
      </tbody>
    </table>
    </div>
  )
}

const Statistic = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
