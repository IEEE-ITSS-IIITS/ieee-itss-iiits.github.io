import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from '../UI/Button';
import Card from '../UI/Card';

const Inputs = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'event-suggestion',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        // Simulating dynamic submission (e.g., to Formspree or Firebase)
        // In a real scenario, you'd use fetch() here.
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setStatus('success');
        setFormData({ name: '', email: '', type: 'event-suggestion', message: '' });
    };

    if (status === 'success') {
        return (
            <div className="min-h-[70vh] flex items-center justify-center px-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <CheckCircle2 size={64} className="text-accent mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
                    <p className="text-muted mb-8">Your inputs have been recorded. We'll get back to you soon.</p>
                    <Button onClick={() => setStatus('idle')}>Send Another Input</Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center">
                <span className="italic-serif text-accent text-3xl mb-6 block">06 / Voice</span>
                <h1 className="text-7xl font-bold mb-6 tracking-tighter mx-auto">Your <span className="text-accent lowercase italic-serif">inputs</span> matter.</h1>
                <p className="text-muted/80 font-medium max-w-xl mx-auto">Help us shape the future of our chapter by sharing your ideas for upcoming events and initiatives.</p>
            </div>

            <div className="max-w-3xl mx-auto">
                <Card className="p-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="Enter your name"
                                    className="w-full bg-background border-b border-foreground/10 py-3 focus:outline-none focus:border-accent transition-colors transition-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="your@email.com"
                                    className="w-full bg-background border-b border-foreground/10 py-3 focus:outline-none focus:border-accent transition-colors transition-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Input Type</label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({...formData, type: e.target.value})}
                                className="w-full bg-background border-b border-foreground/10 py-3 focus:outline-none focus:border-accent transition-colors transition-none appearance-none"
                            >
                                <option value="event-suggestion">Event Suggestion</option>
                                <option value="feedback">General Feedback</option>
                                <option value="collaboration">Collaboration Idea</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Your Message</label>
                            <textarea
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                placeholder="Describe your idea or feedback..."
                                className="w-full bg-background border-b border-foreground/10 py-3 focus:outline-none focus:border-accent transition-colors transition-none resize-none"
                            />
                        </div>

                        <div className="pt-6">
                            <Button 
                                type="submit" 
                                className="w-full py-4 text-sm tracking-[0.2em]"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'RECORDING...' : 'SUBMIT INPUTS'}
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Inputs;
