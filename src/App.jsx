import './index.css'

function App() {
  

  return (
    <div className=' h-full text-white content-center'>

      <nav className='h-14 bg-gradient-to-b from-black to-black-500'>
        <img className='w-24 ml-3' alt='logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'>
          </img>
      </nav>
      
      <div><h1 className='text-center mt-40 text-4xl font-medium'>Quien esta viendo ahora?</h1></div>
      
      <div className='h-20  grid-cols-4 gap-4 my-12 flex justify-center'>
        
        <div className='text-center'>
            <img alt='image' 
              src='https://occ-0-5357-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUawQ9WDc25EacAMPCA85Dw6DvTdMlsZEAwKzq9DQcoj8PsS9LEkr3nJj_a9YLeHOgTgZJd833fX5NioydaYCbk7uNvrInnc68vM.png?r=181'
              className='box-border h-40 w-40  border-0 rounded hover:border-2'
              ></img>
            <div className='mt-5'>
                <text>user 1</text>
            </div>
        </div> 

        <div className='text-center'> 
            <img alt='image' 
              src='https://occ-0-5357-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABajp58Ly3XyrQjdbRsx6_zRne43d3L676WQbA0cv9FmlCaM2ReF8QMrGv9frXlbxwhjTK9rMhCMymTrLCoWy_N4ZYWiAueL9FnyU.png?r=ab6'
              className='box-border h-40 w-40  border-0 rounded hover:border-2'
            ></img>
            <div className='mt-5'>
                <text>user 2</text>
            </div>
        </div> 
 
        <div className='text-center'> 
          <img alt='image' 
            src='https://occ-0-5357-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUawQ9WDc25EacAMPCA85Dw6DvTdMlsZEAwKzq9DQcoj8PsS9LEkr3nJj_a9YLeHOgTgZJd833fX5NioydaYCbk7uNvrInnc68vM.png?r=181'
            className='box-border h-40 w-40  border-0 rounded hover:border-2'
          ></img>
          <div className='mt-5'>
              <text>user 3</text>
          </div>
        </div> 
 
        <div className='text-center'> 
            <img alt='image' 
            src='https://occ-0-5357-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWw0vRAvv1VCQh43eIGGbOU9YGB0c_wGM1K8LDuUnYfB0jVIwRW1gTpYldIoy67LtH1Ky8cxhC_mjBb6C4qfcJWHzLAJasWAXuNR.png?r=ce4'
            className='box-border h-40 w-40  border-0 rounded hover:border-2'
            ></img>
            <div className='mt-5'>
                <text>user 4</text>
            </div>
        </div>

      </div>
      <span className='flex mt-60 justify-center'>
        <button className='text-gray-500 border-solid border-2 border-gray-600 px-4 py-2 rounded hover:border-gray-300 hover:text-gray-300'>Administrar perfiles</button>
      </span>
    </div>
  )
}

export default App
