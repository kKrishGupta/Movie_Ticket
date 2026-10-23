import React, { useState } from 'react';
import { signUpStyles, signUpCSS } from '../assets/dummyStyles';
import { toast, ToastContainer } from 'react-toastify';
import { ArrowLeft, Film, Clapperboard, Mail, Eye, EyeOff, Popcorn, Ticket, User, Lock, Phone } from 'lucide-react';

const SignupPage = () => {
  const signupStyles = signUpStyles;
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const[isLoading, setIsLoading] = useState(false);
  const[errors, setErrors] = useState({});

  const goBack = () => {
    window.history.back();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  // function to validate the form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if(!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if(!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if(!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if(!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    if(!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    setIsLoading(true);
    console.log('Form submitted:', {
      ...formData,
      password: '********' + formData.password.slice(-2),
    });
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Signup successful! Redirecting to login page...');

      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    }, 1500);
  };

  return (
    <div className={signUpStyles.container}>
      <div className={signUpStyles.particlesContainer}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={signUpStyles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className={signUpStyles.gradientOrbs}>
        <div className={signUpStyles.orb1} />
        <div className={signUpStyles.orb2} />
      </div>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />

      <div className={signUpStyles.mainContent}>
        <button onClick={goBack} className={signUpStyles.backButton}>
          <ArrowLeft className={signUpStyles.backIcon} size={20} />
          <span className={signUpStyles.backText}>Back to home</span>
        </button>

        <div className={signUpStyles.card}>
          <div className={signUpStyles.cardHeader}></div>
          <div className={signUpStyles.cardContent}>
            <div className={signUpStyles.header}>
              <div className={signUpStyles.headerFlex}>
                <Ticket className={signUpStyles.headerIcon} size={32} />
                <h2 className={signUpStyles.headerTitle}>JOIN OUR CINEMA</h2>
              </div>
              <p className={signUpStyles.headerSubtitle}>Create your account and start your cinematic journey</p>
            </div>
            <form onSubmit={handleSubmit} className={signUpStyles.form}>
              <div className={signUpStyles.formGrid}>
                {/* fullname */}
                <div>
                  <label htmlFor="fullName" className={signUpStyles.field}>Full Name</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${
                        errors.fullName
                          ? signUpStyles.input.error
                          : signUpStyles.input.normal
                      } ${signUpStyles.inputWithIcon}`}
                      placeholder="Enter your Full Name"
                    />

                    <div className={signUpStyles.inputIcon}>
                      <User size={18} />
                    </div>
                  </div>
                  {errors.fullName && <p className={signUpStyles.errorText}>{errors.fullName}</p>}
                </div>
                  {/* Username */}
                <div>
                  <label htmlFor="username" className={signUpStyles.field}>User Name</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${
                        errors.username
                          ? signUpStyles.input.error
                          : signUpStyles.input.normal
                      } ${signUpStyles.inputWithIcon}`}
                      placeholder="Enter your User Name"
                    />

                    <div className={signUpStyles.inputIcon}>
                      <User size={18} />
                    </div>
                  </div>
                  {errors.username && <p className={signUpStyles.errorText}>{errors.username}</p>}
                </div>
                  {/* email */}
                <div>
                  <label htmlFor="email" className={signUpStyles.field}>Email</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${
                        errors.email
                          ? signUpStyles.input.error
                          : signUpStyles.input.normal
                      } ${signUpStyles.inputWithIcon}`}
                      placeholder="Enter your Email"
                    />

                    <div className={signUpStyles.inputIcon}>
                      <Mail size={18} />
                    </div>
                  </div>
                  {errors.email && <p className={signUpStyles.errorText}>{errors.email}</p>}
                </div>
                    {/* Phone */}
                <div>
                  <label htmlFor="phone" className={signUpStyles.field}>Phone</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${
                        errors.phone
                          ? signUpStyles.input.error
                          : signUpStyles.input.normal
                      } ${signUpStyles.inputWithIcon}`}
                      placeholder="Enter your Phone"
                    />

                    <div className={signUpStyles.inputIcon}>
                      <Phone size={18} />
                    </div>
                  </div>
                  {errors.phone && <p className={signUpStyles.errorText}>{errors.phone}</p>}
                </div>
                    {/* Password */}
                <div>
                  <label htmlFor="password" className={signUpStyles.field}>Password</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${
                        errors.password
                          ? signUpStyles.input.error
                          : signUpStyles.input.normal
                      } ${signUpStyles.inputWithToggle}`}
                      placeholder="Enter your Password"
                    />

                    <div className={signUpStyles.inputIcon}>
                      <Lock size={18} />
                    </div>
                    <button
                      type="button"
                      className={`${signUpStyles.passwordToggle} cursor-pointer focus:outline-none`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={18} className={signUpStyles.toggleIcon} />
                      ) : (
                        <Eye size={18} className={signUpStyles.toggleIcon} />
                      )}
                    </button>
                  </div>
                  {errors.password && <p className={signUpStyles.errorText}>{errors.password}</p>}
                </div>

                {/* confirm password */}
                 <div>
                  <label htmlFor="confirmPassword" className={signUpStyles.field}>Confirm Password</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${
                        errors.confirmPassword
                          ? signUpStyles.input.error
                          : signUpStyles.input.normal
                      } ${signUpStyles.inputWithToggle}`}
                      placeholder="Confirm your password"
                    />

                    <div className={signUpStyles.inputIcon}>
                      <Lock size={18} />
                    </div>
                    <button
                      type="button"
                      className={`${signUpStyles.passwordToggle} cursor-pointer focus:outline-none`}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} className={signUpStyles.toggleIcon} />
                      ) : (
                        <Eye size={18} className={signUpStyles.toggleIcon} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className={signUpStyles.errorText}>{errors.confirmPassword}</p>}
                </div>


              </div>

              <div className={signUpStyles.submitContainer}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${signUpStyles.submitButton.base} ${
                    isLoading ? signUpStyles.submitButton.loading : ""
                  }`}
                >
                  {isLoading ? (
                    <div className={signUpStyles.submitContent}>
                      <div className={signUpStyles.loadingSpinner}></div>
                      CREATING YOUR ACCOUNT...
                    </div>
                  ) : (
                    <div className={signUpStyles.submitContent}>
                      <Film className={signUpStyles.submitIcon} size={20} />
                      <span className="font-cinema">CREATE CINEMA ACCOUNT</span>
                    </div>
                  )}
                </button>
              </div>
            </form>

            <div className={signUpStyles.loginContainer}>
              <p className={signUpStyles.loginText}>
                Already have an account?{' '}
                <a href="/login" className={signUpStyles.loginLink}>
                  Sign in to your account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{signUpCSS}</style>
    </div>
  );
};

export default SignupPage;