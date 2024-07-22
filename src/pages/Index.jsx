import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const artists = [
    {
      name: "MC Rhyme",
      image: "/images/mc-rhyme.jpg",
      bio: "MC Rhyme is known for his quick wit and clever wordplay. With over a decade in the game, he's become a staple in the underground rap scene.",
    },
    {
      name: "DJ Beats",
      image: "/images/dj-beats.jpg",
      bio: "DJ Beats brings the heat with her innovative mixes and crowd-pumping energy. She's collaborated with some of the biggest names in hip-hop.",
    },
    {
      name: "Lyrical Genius",
      image: "/images/lyrical-genius.jpg",
      bio: "Lyrical Genius lives up to his name with introspective verses and thought-provoking lyrics. His albums have garnered critical acclaim.",
    },
  ];

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
        <section id="event-details" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-primary">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="text-primary" />
                <p className="text-lg"><span className="font-semibold">Date:</span> July 30, 2024</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-primary" />
                <p className="text-lg"><span className="font-semibold">Time:</span> 8:00 PM - 12:00 AM</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary" />
                <p className="text-lg"><span className="font-semibold">Venue:</span> The Bar, 123 Main Street, Downtown</p>
              </div>
              <p className="text-lg mt-4">
                Get ready for an electrifying night of rap music at The Bar! Our annual Rap Event brings together the hottest local and national rap artists for an unforgettable evening of beats, rhymes, and energy. From up-and-coming talents to established stars, this event showcases the best of the rap scene. Don't miss out on this chance to experience live performances, connect with fellow rap enthusiasts, and be part of the vibrant hip-hop community. Mark your calendars and secure your spot for the most anticipated rap event of the year!
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="artist-profiles" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-primary">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video relative">
                    <img src={artist.image} alt={artist.name} className="object-cover w-full h-full" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <CardTitle className="text-white text-2xl">{artist.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{artist.bio}</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
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