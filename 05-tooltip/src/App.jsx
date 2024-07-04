import './App.css'

import TooltipText from './tooltip/TooltipText'

function App() {

  return (
    <div className='App'>
      <p><TooltipText tooltip={"Texto generado"}>Lorem ipsum dolor sit</TooltipText>, amet consectetur adipisicing elit. Explicabo, maxime.</p>
      <p><TooltipText tooltip={"Texto del medio"}>Lorem ipsum dolor sit amet consectetur adipisicing elit</TooltipText>. Obcaecati laudantium nemo molestiae laboriosam eligendi alias?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio laudantium natus? Eaque, <TooltipText tooltip={"Texto final"}>nemo dolorem enim quam pariatur possimus vel.</TooltipText></p>
    </div>
  )
}

export default App
