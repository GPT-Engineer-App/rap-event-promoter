import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="bg-primary text-primary-foreground py-8 text-center">
        <h1 className="text-5xl font-extrabold">Rap Event at The Bar</h1>
      </header>

      <nav className="bg-secondary sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-center space-x-6 py-4">
          <Link to="#event-details" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium">Event Details</Link>
          <Link to="#artist-profiles" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium">Artists</Link>
          <Link to="#ticket-sales" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium">Tickets</Link>
          <Link to="#contact" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium">Contact</Link>
          <Link to="#social-media" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium">Social Media</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <section id="event-details" className="mb-16 bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-primary">Event Details</h2>
          <p className="mb-2 text-lg"><span className="font-semibold">Date:</span> July 30, 2024</p>
          <p className="mb-2 text-lg"><span className="font-semibold">Time:</span> 8:00 PM - 12:00 AM</p>
          <p className="mb-2 text-lg"><span className="font-semibold">Venue:</span> The Bar, Downtown</p>
          <p className="text-lg">Join us for an unforgettable night of rap music with top artists performing live!</p>
        </section>

        <section id="artist-profiles" className="mb-16 bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-primary">Artists</h2>
          <p className="text-lg">Artist profiles coming soon...</p>
        </section>

        <section id="ticket-sales" className="mb-16 bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-primary">Buy Tickets</h2>
          <p className="mb-6 text-lg">Get your tickets now before they sell out!</p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name:</label>
              <Input type="text" id="name" name="name" required className="w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
              <Input type="email" id="email" name="email" required className="w-full" />
            </div>
            <div>
              <label htmlFor="tickets" className="block mb-2 font-medium">Number of Tickets:</label>
              <Input type="number" id="tickets" name="tickets" min="1" max="10" required className="w-full" />
            </div>
            <Button type="submit" className="w-full">Buy Tickets</Button>
          </form>
        </section>

        <section id="contact" className="mb-16 bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-primary">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="block mb-2 font-medium">Name:</label>
              <Input type="text" id="contact-name" name="contact-name" required className="w-full" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block mb-2 font-medium">Email:</label>
              <Input type="email" id="contact-email" name="contact-email" required className="w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message:</label>
              <Textarea id="message" name="message" rows="4" required className="w-full" />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </section>

        <section id="social-media" className="mb-16 bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-primary">Follow Us</h2>
          <p className="mb-6 text-lg">Stay connected and get the latest updates:</p>
          <div className="space-y-4">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200 text-lg">Facebook</a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:text-blue-600 transition-colors duration-200 text-lg">Twitter</a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="block text-pink-600 hover:text-pink-800 transition-colors duration-200 text-lg">Instagram</a>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 text-center">
        <p className="text-lg">&copy; 2024 The Bar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;