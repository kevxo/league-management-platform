import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (email && password) {
            localStorage.setItem("user", JSON.stringify({email}));
            navigate("/");
        } else {
            alert("Please enter email and password");
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
            onSubmit={handleLogin}
            className="bg-white p-8 rounded shadow-md w-96"
        >
            <h2 className="text-2xl font-bold mb-6 text-center">
            Login to League Manager
            </h2>

            <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
                type="email"
                className="w-full border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="coach@email.com"
            />
            </div>

            <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
                type="password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
            />
            </div>

            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
            Login
            </button>
        </form>
    </div>
    )
}


export default Login;