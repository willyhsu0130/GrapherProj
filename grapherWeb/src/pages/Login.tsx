import { useState, useEffect } from 'react';
import { login } from '../services/fetchers.ts';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.ts';
import { Input } from '@/components/ui/input';

const Login = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const { token, loginToken } = useAuth()
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (token) navigate("/graphs");
    }, [token, navigate])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await login({ username, password });
            if (res.success) {
                const tokenUsername = res?.data?.username
                const token = res?.data?.token
                if (token && tokenUsername) loginToken(token, tokenUsername);
                navigate("/graphs")
            } else {
                console.log(res)
                alert(res.message);
            }
        } catch (error) {
            console.log(error)
            alert("Login failed.");
        }
    };

    return (
        <div
            className="min-h-screen bg-black text-white flex flex-col"
            style={{ fontFamily: "'Geist', sans-serif" }}
        >
            {/* Nav */}
            <nav className="flex justify-between items-center px-12 py-6 border-b border-white/10">
                <div className="text-xl font-semibold tracking-tight">
                    grapher<span className="text-white/40">.</span>
                </div>
            </nav>

            {/* Form */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-sm">

                    {/* Session expired banner */}
                    {state?.sessionExpired && (
                        <div className="mb-6 border border-white/20 px-4 py-3 text-xs text-white/60 uppercase tracking-widest">
                            Session expired — please sign in again.
                        </div>
                    )}

                    <h1 className="text-3xl font-semibold tracking-tight mb-1">Sign in</h1>
                    <p className="text-xs text-white/40 mb-8">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-white hover:text-white/60 transition-colors underline underline-offset-4">
                            Sign up
                        </a>
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest">Username</label>
                            <Input
                                type="text"
                                className="bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-none h-10 focus:border-white/40"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest">Password</label>
                            <Input
                                type="password"
                                className="bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-none h-10 focus:border-white/40"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-2 bg-white text-black py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-white/80 transition-opacity cursor-pointer border-none"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;