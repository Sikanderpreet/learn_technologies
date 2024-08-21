import Card from "./components/Card"
function App() {

  return (
    <div className="flex justify-center">
      <h1 className='text-3xl font-bold bg-green-400 text-black rounded p-4 w-48 underline'>Hello React with Tailwind</h1>
      <Card headline='Noteworthy technology acquisitions 2021'/>
      <Card headline='lorem ipsum'/>
    </div>
  )
}

export default App
