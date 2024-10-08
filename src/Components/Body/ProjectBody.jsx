import React from 'react'
import ImgScro from '../Body/ImgScro'
import AWIP4 from '../Body/Images/AWIP4.jpg'
import AWIP2 from '../Body/Images/AWIP2.jpg'


const ProjectBody = () => {
  return (
    <div>
       <div className='flex flex-col lg:flex-row justify-between  lg:items-center gap-6 my-8'>

        <div className='flex lg:justify-start gap-6'>
        <p className='font-mono'>01</p>
        <div className='w-full'>
            <h1 className='text-8xl lg:text-[128px] font-interTight text-[#561D0A] tracking-[-0.06em]'>Afya Care</h1>
        </div>
        </div>



        <p className='text-[#2020209c] lg:hidden'>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying on meaningful content. 
        </p>


            <p className='text-[#2020209c] lg:block hidden'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to  <br /> demonstrate the visual form  of a document or a typeface without relying on meaningful <br /> content. 
            </p>


</div>


                <div className='w-full flex flex-col lg:flex-row gap-4'>

                    <div className='w-full lg:w-[30%] rounded-xl bg-[#343434] h-[450px] lg:h-[750px]'>            
                        <img src={AWIP4}  alt=""  className='w-full rounded-xl h-full object-cover'/>
                        </div>

                        <div className='w-full lg:w-[70%] rounded-xl bg-[#343434] h-[750px]'>
                        <img src={AWIP2}  alt=""  className='w-full rounded-xl h-full object-cover'/>
                    </div>
                </div>








<hr className='mx-4 my-7' />

<div className='flex flex-col lg:flex-row justify-between lg:items-center gap-6 my-8'>

<div className='flex lg:justify-start gap-6'>
<p className='font-mono'>02</p>
<div className='w-full'>
<h1 className='text-8xl w-full lg:text-[128px] font-interTight text-[#561D0A] tracking-[-0.06em]'>Verraki Partners</h1>
</div>
</div>



<p className='text-[#2020209c]  lg:hidden'>
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying on meaningful content. 
</p>


<p className='text-[#2020209c] w-[30%] lg:block hidden'>
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
</p>


</div>


<div className='w-full flex flex-col lg:flex-row gap-4'>
<div className='w-full lg:w-[70%]  bg-[#343434] rounded-xl h-[450px] lg:h-[750px]'>            
    <img src={AWIP4}  alt=""  className='w-full rounded-xl h-full object-cover'/>
    </div>
    <div className='w-full lg:w-[30%] bg-[#343434] rounded-xl h-[750px]'>
    <img src={AWIP2}  alt=""  className='w-full h-full rounded-xl object-cover'/>
</div>
</div>









  <hr className='mx-4 my-7' />

<div className='flex flex-col lg:flex-row justify-between lg:items-center gap-6 my-8'>

  <div className='flex lg:justify-start gap-6'>
    <p className='font-mono'>01</p>
    <div className='w-full'>
      <h1 className='text-8xl lg:text-[128px] w-full font-interTight text-[#561D0A] tracking-[-0.06em]'>Bastion HMO</h1>
    </div>
  </div>



  <p className='text-[#2020209c] lg:hidden'>
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying on meaningful content. 
  </p>


  <p className='text-[#2020209c] w-[30%] lg:block hidden'>
  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
  </p>
  

</div>


<div className='w-full flex flex-col lg:flex-row gap-4'>
      <div className='w-full lg:w-[30%] rounded-xl bg-[#343434] h-[450px] lg:h-[750px]'>            
          <img src={AWIP4}  alt=""  className='w-full rounded-xl h-full object-cover'/>
          </div>
          <div className='w-full lg:w-[70%] rounded-xl bg-[#343434] h-[750px]'>
          <img src={AWIP2}  alt=""  className='w-full rounded-xl h-full object-cover'/>
      </div>
</div>

    </div>
  )
}

export default ProjectBody
