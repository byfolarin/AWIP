import React from 'react'

const Projects = () => {




  return (
    <div className='my-12 '>
      <h1 className='text-[160px] my-12 text-[#561D0A] mx-4 font-extralight tracking-[-0.11em]
       font-interTight leading-[1.00]'>Projects</h1>
      


<div className='flex overflow-scroll gap-[192px]'>

            <div className='mx-8 flex gap-7'>
                <div className='flex items-center relative'>
                    <div className='w-[450px] h-[450px] bg-slate-400'></div>
                    <div className='w-[250px] h-[250px] bg-slate-500 absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/2'>
                    </div>
                </div>

                <div className='w-[423px] '>
                <h2 className='text-[#561D0A] text-[64px] font-interTight '>Verraki</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.</p>
             </div>
            </div>

            <div className='mx-8 flex gap-7'>
                <div className='flex items-center relative'>
                    <div className='w-[450px] h-[450px] bg-slate-400'></div>
                    <div className='w-[250px] h-[250px] bg-slate-500 absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/2'>
                    </div>
                </div>

                <div className='w-[423px]'>
                <h2 className='text-[#561D0A] text-[64px] font-interTight '>Afya Care</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Mattis egestas ut arcu scelerisque orci mauris. Scelerisque aenean lobortis volutpat in quam. Sit velit libero varius hendrerit egestas aenean.</p>
             </div>
            </div>
           
           
     </div>

    </div>
  )
}

export default Projects
