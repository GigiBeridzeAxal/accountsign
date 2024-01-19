'use client'


import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {



  useEffect(() => {
   const getposts = async () =>{
    
    const data =  await axios.get("http://localhost:500" ,  )
    
    console.log(data.data)
 
    setdata(data.data)
    

   }
   getposts()
    


  


  },[])

  const [dater, setdata] = useState(["hello","hello"])
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')

  const namehandler = (e) =>{
    setname(e.target.value)    

  }
  const pasworhandler = (e) =>{
    setpassword(e.target.value)    

  }

  const SendData = () =>{
    axios.post("http://localhost:500/" , {name,password} )


  }


  return (
    <>
     <table class="table-auto">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
   { 
    dater.map(data =>  <tr>
      <td> Id:  {data.id}</td>
     
      <td> Name: {data.name}</td>

      <td> Product:  {data.password}</td>
     
    </tr>)
   }
 
  </tbody>
</table>
    
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    </img>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input onChange={(e) => namehandler(e)} id="email" name="email" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </input>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input onChange={(e) => pasworhandler(e)} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </input>
        </div>
      </div>

      <div>
        <button onClick={() => SendData()} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
  
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>
    
    </>


  );
}
