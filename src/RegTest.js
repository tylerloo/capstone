import React, {useState} from "react";

function Regis() {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        phonenumber:'',
        nric:'',
    });

    const handleChange = (e) => {
        const{ name,value } =e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value
        }));}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return(
        <div>
            <h2>RegForm2</h2>
            <form onSubmit={handleSubmit}>
                <div className="reg-form">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input 
                    type="text"
                    id="phonenumber"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor="nric">NRIC</label>
                    <input 
                    type="text"
                    id="nric"
                    name="nric"
                    value={formData.nric }
                    onChange={handleChange}
                    />        
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
    }

export default Regis;