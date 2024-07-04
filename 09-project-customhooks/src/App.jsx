import NotesList from './components/NotesList'
import NoteForm from './components/NoteForm'
import { NoteProvider } from './contexts/NoteContexts'

import './App.css'

function App() {

  return (
    <div className="App">
      <NoteProvider>
        <NoteForm />
        <NotesList />
      </NoteProvider>
    </ div>
  )
}

export default App
