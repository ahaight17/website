const WORDLENGTH = 5
const TRIES = 5

export default function Wordle(){
  return(
    <div className="color-1 h-screen flex flex-col items-center">
      <h1 className="text-7xl text-center text-gray-50 my-5">Wordle<span className="text-sm ml-2">(a remake)</span></h1>
      <div className="border-solide border border-grey-50 w-1/3 mb-2" />
      { 
        Array.apply(null, Array(TRIES)).map((_, i) => (
          <div className="my-4 grid grid-cols-5 h-full justify-items-center gap-4 try-group" data-index={i}>
            {
              Array.apply(null, Array(WORDLENGTH)).map((_, i) => (
                <div className="border-gray-500 border-solid border-2 h-32 w-32 rounded-md try-letter" data-index={i}></div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}