import { useState } from "react";
import { useEffect } from "react";

function FetchPost() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dog, setDog] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        setDog(res.message);
      });
  }, []);
   const handleFormSubmit = (event)=>{
       event.preventDefault();
       const dataToSubmit = {
           name,
           phone,
           email,
       }
       fetch('https://jsonplaceholder.typicode.com/posts' , {
           method:'POST',
           headers:{
               'Content-type':'application/json; charset=UTF-8'
           },
           body: JSON.stringify(dataToSubmit)
       }).then(res=>res.json())
       .then(res=>{
           console.log(res)
       })
   }
  return (
    <div>
      cute dog image here:
      {dog ? (
        <img width={400} height={300} src={dog} alt="cute dog image" />
      ) : (
        <p>image laoding</p>
      )}
      <br />
      <br />
      <form method="post" action="#" onSubmit={handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
          />
        </label>
        <label>
          phone
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            name="phone"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
          />
        </label>
        <input type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
}
export default FetchPost;
