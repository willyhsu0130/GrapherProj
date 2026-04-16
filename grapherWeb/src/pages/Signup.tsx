import { useState } from 'react';
import { signup } from '../services/fetchers.ts';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.ts';
import { Input } from '@/components/ui/input';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const { loginToken } = useAuth();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
            lastName: lastName,
            firstName: firstName,
            username: username
        }
        try {
            const res = await signup(data);
            if (res.success) {
                const token = res?.data?.token
                const tokenUsername = res?.data?.username;
                if (token && tokenUsername) loginToken(token, tokenUsername);
                navigate("/graphs")
            } else {
                alert(res.message);
            }
        } catch (error) {
            console.log(error)
            alert("Signup failed.");
        }
    };

    return (
        <div
            className="min-h-screen bg-black text-white flex flex-col"
            style={{ fontFamily: "'Geist', sans-serif" }}
        >
            {/* Nav matching Login */}
            <nav className="flex justify-between items-center px-12 py-6 border-b border-white/10">
                <div className="text-xl font-semibold tracking-tight">
                    grapher<span className="text-white/40">.</span>
                </div>
            </nav>

            {/* Form Container */}
            <div className="flex-1 flex items-center justify-center py-12">
                <div className="w-full max-w-sm px-6">
                    <h1 className="text-3xl font-semibold tracking-tight mb-1">Create account</h1>
                    <p className="text-xs text-white/40 mb-8">
                        Already have an account?{" "}
                        <a href="/login" className="text-white hover:text-white/60 transition-colors underline underline-offset-4">
                            Sign in
                        </a>
                    </p>

                    <form onSubmit={handleSignup} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest">Username</label>
                            <Input
                                id="username"
                                type="text"
                                className="bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-none h-10 focus:border-white/40"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-white/40 uppercase tracking-widest">First Name</label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    className="bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-none h-10 focus:border-white/40"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-white/40 uppercase tracking-widest">Last Name</label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    className="bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-none h-10 focus:border-white/40"
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest">Email Address</label>
                            <Input
                                id="email"
                                type="email"
                                className="bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-none h-10 focus:border-white/40"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest">Password</label>
                            <Input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                className="bg-transparent border-white/10 text-white placeholder:text-white/20 rounded-none h-10 focus:border-white/40"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-white text-black py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-white/80 transition-opacity cursor-pointer border-none"
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;