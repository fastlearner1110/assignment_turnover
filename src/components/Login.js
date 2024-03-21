import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault();
        setError(null);

        try {
            e.preventDefault();

            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to login");
                }

                window.location.href = "/dashboard";
            } catch (error) {
                setError("Failed to login. Please check your credentials.");
            }
        } catch (error) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl mb-2 text-center">LOGIN</h2>
                <p className="text-gray-600 text-center mb-4">
                    Welcome back to ecommerce
                </p>
                <p className="text-gray-600 text-center mb-4">
                    The next generation business marketplace
                </p>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-500">
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
