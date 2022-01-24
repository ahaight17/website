import './pages.css'
const WORDLENGTH = 5
const TRIES = 6
const KEYBOARD = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
]

export default function Wordle(){
  return(
    <div className="color-1 min-h-screen flex flex-col items-center">
      <h1 className="text-7xl text-center text-gray-50 my-5">Wordle<span className="text-sm ml-2">(a remake)</span></h1>
      <div className="border-solide border border-grey-50 w-1/3 mb-6" />
      <div className="guess-board flex flex-col flex-1 justify-center">
        { 
          Array.apply(null, Array(TRIES)).map((_, i) => (
            <div className="my-2 grid grid-cols-5 h-full justify-items-center gap-2 word-group" data-index={i}>
              {
                Array.apply(null, Array(WORDLENGTH)).map((_, i) => (
                  <div className="border-gray-700 border-solid border-2 rounded-md word-letter" data-index={i}>A</div>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="keyboard flex flex-col select-none">
        {
          KEYBOARD.map((keyGroup, i) => (
            <div className='key-row justify-center' key={`row-${i}`}>
              {
                keyGroup.map((key, i) => (
                  <button className={`key-button bg-gray-500 text-gray-50 ${(key === 'ENTER' || key === 'BACKSPACE') ? 'one-and-a-half' : ''}`} key={`${key}-${i}`}>{key === 'BACKSPACE' ? <i class="material-icons">backspace</i> : key}</button>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}