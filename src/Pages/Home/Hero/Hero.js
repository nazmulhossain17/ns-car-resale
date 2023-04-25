import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {


  return (
    <section className='home' id='home'>
            <div className='text'>
            <div class="mr-auto place-self-center lg:col-span-7 px-10">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span className='text-orange-300'>Looking</span> <span className='text-white'>for Car</span></h1>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Buy or Sell</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white"> payment stack.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
           
            <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-gray-200 text-purple-500 border border-gray-300 rounded-lg  text-gray-950 ">
               Get Started
               <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

            </button>
        </div>
            </div>
        </section>


  );
}


export default Hero;