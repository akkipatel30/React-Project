import { useEffect, useState } from "react";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };


// function ChatRoom () {

// const [serverlUrl, setServerlUrl] = useState('https://www.bing.com/');

// useEffect(() => {
//   const connection = createConnection(serverlUrl, roomId);
//   connection.connect();
//   return() => {
//     connection.disconnect();
//   }
// }, [serverlUrl,roomId])







  return (
    <div className="flex-col">
    <form onSubmit={handleSubmit} className="flex-1 gap-5 ">
      <input className="bg-amber-200 border rounded"
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
    </div>

    
  );
}

export default Loginpage
