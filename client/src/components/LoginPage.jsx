import React from 'react';
import {loginStyles} from '../assets/dummyStyles';
import { useState } from 'react';

const LoginPage = () =>{
    const [formData, setFormData] = useState({
      email:'',
      password:''});
      const[showPassword, setShowPassword] = useState(false);
      const[isLoading, setIsLoading] = useState(false);
      

    return (
      <div>

      </div>
    )
}

export default LoginPage;