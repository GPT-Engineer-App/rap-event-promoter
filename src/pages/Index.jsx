import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 text-center">
        <h1 className="text-4xl font-bold">Rap Event at The Bar</h1>
      </header>

      <nav className="bg-secondary">
        <div className="container mx-auto flex justify-center space-x-4 py-4">
          <Link to="#event-details" className="text-secondary-foreground hover:text-primary">Event Details</Link>
          <Link to="#artist-profiles" className="text-secondary-foreground hover:text-primary">Artists</Link>
          <Link to="#ticket-sales" className="text-secondary-foreground hover:text-primary">Tickets</Link>
          <Link to="#contact" className="text-secondary-foreground hover:text-primary">Contact</Link>
          <Link to="#social-media" className="text-secondary-foreground hover:text-primary">Social Media</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section id="event-details" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Event Details</h2>
          <p className="mb-2">Date: July 30, 2024</p>
          <p className="mb-2">Time: 8:00 PM - 12:00 AM</p>
          <p className="mb-2">Venue: The Bar, Downtown</p>
          <p>Join us for an unforgettable night of rap music with top artists performing live!</p>
        </section>

        <section id="artist-profiles" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Artists</h2>
          {/* Artist profiles will be added here */}
        </section>

        <section id="ticket-sales" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Buy Tickets</h2>
          <p className="mb-4">Get your tickets now before they sell out!</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name:</label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email:</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="tickets" className="block mb-2">Number of Tickets:</label>
              <Input type="number" id="tickets" name="tickets" min="1" max="10" required />
            </div>
            <Button type="submit">Buy Tickets</Button>
          </form>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block mb-2">Name:</label>
              <Input type="text" id="contact-name" name="contact-name" required />
            </div>
            <div>
              <label htmlFor="contact-email" className="block mb-2">Email:</label>
              <Input type="email" id="contact-email" name="contact-email" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message:</label>
              <Textarea id="message" name="message" rows="4" required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </section>

        <section id="social-media" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
          <p className="mb-4">Stay connected and get the latest updates:</p>
          <div className="space-y-2">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">Facebook</a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">Twitter</a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="block text-pink-600 hover:underline">Instagram</a>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-4 text-center">
        <p>&copy; 2024 The Bar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;