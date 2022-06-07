import { useState } from 'react';
import { useEffect } from 'react';

function FetchApi(){
    const [dog , setDog] = useState('')

 useEffect(()=>{
   fetch('https://dog.ceo/api/breeds/image/random')
   .then(res=>res.json())
   .then(res=>{
    setDog(res.message)
   })
 },[])

return (
    <div>
      cute dog image here:
      {dog ? <img width={400} src={dog} alt='cute dog image' />:<p>image laoding</p>}
      
    </div>
  );

}
export default FetchApi;


