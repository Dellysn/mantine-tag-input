
import { TagInput } from 'mantine-tag-input'
import './App.css'
import { MantineProvider } from '@mantine/core'

function App() {

  return (
    <MantineProvider>
      <p className="read-the-docs" 
      
      style={{
        width:'700px'
      }}>
      <TagInput
      size='md'
      placeHolder='enter emails'  error='error' 
      badgeProps={{
        variant:'filled',
        styles:{
          root:{
            backgroundColor:'red',
            color:'white'
            
          }

        }
      }}
      closeButtonProps={{
        unstyled:true,
        styles:{
          root:{
            backgroundColor:'black',
            color:'white'
          }
        }

      }}
      beforeAddValidate={(tag,tags)=>{
        if(tag.includes('@')){
          return true
        }
        return false
      }}

      
      />
      </p>
    </MantineProvider>
  )
}

export default App
