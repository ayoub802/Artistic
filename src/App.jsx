import Badge from './components/Badge/Badge';
import Button from './components/Buttons/button';
import './styles/globals.css'
function App() {
  
  
  return (
    <div className='h-screen relative w-full'> 
      <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <Button intent="primary" size="xsmall" roundness="pill" >Button</Button>
        <div className='mt-5'>
          <Badge intent="primary" size="small" roundness="pill" >sale</Badge>
        </div>
      </div>
    </div>
  )
}

export default App
