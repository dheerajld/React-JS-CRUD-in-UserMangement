import React, { useState }  from 'react';


export const UserMangement = () => {
   
     const [name,setName] = useState("");
      const [email,setEmail] = useState("");
      const [address,setAddress] = useState("");
      const [users , setUsers] = useState([]);
      const [edit,setEdit] = useState(false);
      const [newItem, setNewItem] = useState("");

      const addUser =(e) => {
       
        e.preventDefault();

       const user ={
           
           name,
           email,
           address,
       };
       
       setUsers([...users,user]);

       setName("");
       setEmail("");
       setAddress("");
      }

      const editUser = (sachin) => {
        const {name,email,address} = users.find(user => user.email === sachin);
       setName(name);
       setEmail(email);
       setAddress(address);
       setEdit(true);
       setNewItem(email);
    }

    const updateUser = (e) =>{
        e.preventDefault();
        const user ={
            name,
            email,
            address,
        };
        const index = users.findIndex(user => user.email === newItem);
        
        if(index > -1) {
           let copy = [...users]
           copy.splice(index,1,user);
           setUsers(copy);
           setEdit(false);
        }
        
        
    }

      const deleteUser = (email) => {
        const index = users.findIndex(user => user.email === email);
        if(index > -1) {
           let copy = [...users]
           copy.splice(index,1);
           setUsers(copy)
        }
    }
     

    return (
    
   
    <div className='container'>
    <div className='row .justify-content-center'>
    <div className='col-6'>
    <form onSubmit={(e)=>(edit ? updateUser(e) : addUser(e))}>
    <input type="text" className='form-control mb-2'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <input type="text" className='form-control mb-2'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <input type="text" className='form-control mb-2' 
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    />
    <button className='form-control btn btn-primary' type='submit'>{edit ? "UPDATE USER" : "ADD USER"}</button>
 
    </form>
    </div>
    </div>
    <table className='table table-bordered m-5'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th colSpan={2}>Action</th>


        </tr>
    </thead>
    <tbody>
        {
            users.map(({name,email,address}) => {
              
                return (
                    <tr>
                        <td >{name}</td>
                        <td>{email}</td>
                        <td>{address}</td>
                        <td>   <button className='form control btn btn-info' onClick={()=>editUser(email)} >Edit</button></td>
                       <td> <button className='form control btn btn-danger' onClick={()=>deleteUser(email)}>Delete</button></td>
                        

                    </tr>
                    

                )
            })
        }
    </tbody>
</table>
    </div>
    );

}
          
