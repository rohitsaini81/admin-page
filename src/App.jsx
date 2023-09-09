import './App.css'
import Form from './Form'
import Delete from './Delete'
import Get from './Get'
function App() {
  const url = "https://admin-api-maaj.onrender.com/api/"; 

  return (
    <>
    <Get uri={url}/>
    <Delete uri={url}/>
    <Form link={url}/>
    </>
  )
}

export default App
