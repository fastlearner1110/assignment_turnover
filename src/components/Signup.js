import React, { useState } from "react";
import "../App.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
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
                throw new Error("Failed to create account");
            }
            console.log("Account created successfully");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div
            className="flex justify-center items-center h-screen"
            style={{ textAlign: "center" }}
        >
            <form
                className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 signup-form"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl mb-4 text-center create-account-text">
                    Create your account
                </h2>
                <div className="mb-4">
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                    </div>
                    <div>
                        <input
                            className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                    </div>
                    <div>
                        <input
                            className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                    </div>
                    <div>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline input-field"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        style={{
                            width: "456px",
                            height: "56px",
                            padding: "18px 148px",
                            gap: "10px",
                            borderRadius: "6px 0px 0px 0px",
                            border: "1px solid #000",
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Create an account
                    </button>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                    Have an account?{" "}
                    <a href="/login" className="text-blue-500">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Signup;
