import React, { useState } from 'react'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        if (value.length >= 4) {
            setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (/\S+@\S+\.\S+/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value.length >= 4) {
            setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        if (value.length >= 4) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Password:", password);
            console.log("Confirm Password:", confirmPassword);
            alert("Registration Successful!");
        } else {
            setErrors(validationErrors);
        }
    };

    const validate = () => {
        const error = {};

        if (!username) {
            error.username = "Username is required";
        } else if (username.length < 4) {
            error.username = "Username must be at least 4 characters";
        }

        if (!email) {
            error.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Invalid Email Format";
        }

        if (!password) {
            error.password = "Password is required";
        } else if (password.length < 4) {
            error.password = "Password must be at least 4 characters";
        }

        if (!confirmPassword) {
            error.confirmPassword = "Confirm Password is required";
        } else if (password !== confirmPassword) {
            error.confirmPassword = "Passwords do not match";
        }

        return error;
    };

    return (
        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-no-repeat bg-center min-h-screen">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">
                    <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Registration
                    </h2>

                    <form className="space-y-6" method="POST" onSubmit={handleSubmit} noValidate>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            {errors.username && <div className="text-red-500">{errors.username}</div>}
                            <input name="username" type="text" required
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                value={username}
                                onChange={handleUsernameChange} />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            {errors.email && <div className="text-red-500">{errors.email}</div>}
                            <input name="email" type="email" required
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                value={email}
                                onChange={handleEmailChange} />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            {errors.password && <div className="text-red-500">{errors.password}</div>}
                            <input name="password" type="password" required
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                value={password}
                                onChange={handlePasswordChange} />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
                            <input name="confirmPassword" type="password" required
                                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange} />
                        </div>

                        <div>
                            <button type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;