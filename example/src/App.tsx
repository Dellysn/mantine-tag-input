
import { TagInput } from 'mantine-tag-input'
import './App.css'
import { MantineProvider } from '@mantine/core'

function App() {

  return (
    <MantineProvider>
      <p className="read-the-docs">
      <TagInput placeHolder='enter emails' size='xl' error='error'/>
      </p>
    </MantineProvider>
  )
}

export default App
