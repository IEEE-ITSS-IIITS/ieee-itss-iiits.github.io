import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { CHAPTER_CONFIG } from '../../data';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ContactForm = () => {
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4 text-accent">Message Received!</h3>
                <p className="text-muted mb-8">We'll get back to you shortly.</p>
                <Button onClick={() => setStatus('idle')} variant="secondary">Send Another</Button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" required className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" required className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground">
                    <option>General Inquiry</option>
                    <option>Event Participation</option>
                    <option>Collaboration</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea required rows={4} className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none resize-none text-foreground" />
            </div>
            <Button className="w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
            </Button>
        </form>
    );
};

const Contact = () => (
    <div className="pt-24 pb-24">
        <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
            <div className="mb-24">
                <span className="italic-serif text-accent text-3xl mb-6 block">06 / Get in Touch</span>
                <h1 className="text-7xl font-bold mb-6 tracking-tighter">Connect <span className="text-accent lowercase italic-serif">with</span> <br /> <span className="text-accent lowercase italic-serif">us</span>.</h1>
                <p className="text-muted/80 font-medium max-w-xl">Have questions about our upcoming events, membership, or collaboration opportunities? Reach out to us using the form or the contact details below.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-5">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center text-accent shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm mb-1">Email Address</h4>
                                <a href={`mailto:${CHAPTER_CONFIG.email}`} className="text-muted hover:text-accent">{CHAPTER_CONFIG.email}</a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center text-accent shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm mb-1">Location</h4>
                                <p className="text-muted">{CHAPTER_CONFIG.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Card className="p-8 md:col-span-7 bg-foreground/5 border-foreground/10">
                    <ContactForm />
                    <p className="text-[10px] text-muted/40 mt-6 text-center italic">
                        Note: For static hosting like GitHub Pages, we recommend using services like Formspree or EmailJS to handle these queries dynamically.
                    </p>
                </Card>
            </div>
        </div>
    </div>
);

export default Contact;
