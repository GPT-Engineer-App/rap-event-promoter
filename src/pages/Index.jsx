import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Clock, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: "",
  });
  const [errors, setErrors] = useState({});

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactErrors, setContactErrors] = useState({});

  const artists = [
    {
      name: "MC Rhyme",
      image: "/images/mc-rhyme.jpg",
      bio: "MC Rhyme är känd för sin snabba humor och smarta ordlekar. Med över ett decennium i branschen har han blivit en stapelvara i den underjordiska rapscenen.",
    },
    {
      name: "DJ Beats",
      image: "/images/dj-beats.jpg",
      bio: "DJ Beats levererar hetta med sina innovativa mixar och energi som får publiken att pumpa. Hon har samarbetat med några av de största namnen inom hiphop.",
    },
    {
      name: "Lyrical Genius",
      image: "/images/lyrical-genius.jpg",
      bio: "Lyrical Genius lever upp till sitt namn med introspektiva verser och tankeväckande texter. Hans album har fått kritikernas erkännande.",
    },
  ];

  const socialMediaLinks = [
    { name: "Facebook", url: "https://facebook.com/rapatevent", icon: <Facebook className="w-6 h-6" aria-hidden="true" /> },
    { name: "Twitter", url: "https://twitter.com/rapatevent", icon: <Twitter className="w-6 h-6" aria-hidden="true" /> },
    { name: "Instagram", url: "https://instagram.com/rapatevent", icon: <Instagram className="w-6 h-6" aria-hidden="true" /> },
    { name: "YouTube", url: "https://youtube.com/rapatevent", icon: <Youtube className="w-6 h-6" aria-hidden="true" /> },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Namn krävs";
    if (!formData.email.trim()) newErrors.email = "E-post krävs";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Ogiltig e-postadress";
    if (!formData.tickets.trim()) newErrors.tickets = "Antal biljetter krävs";
    else if (isNaN(formData.tickets) || parseInt(formData.tickets) < 1) newErrors.tickets = "Vänligen ange ett giltigt antal biljetter";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulär skickat:", formData);
      toast.success("Biljetter köpta framgångsrikt!");
      setFormData({ name: "", email: "", tickets: "" });
    } else {
      toast.error("Vänligen korrigera felen i formuläret.");
    }
  };

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setContactErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateContactForm = () => {
    const newErrors = {};
    if (!contactForm.name.trim()) newErrors.name = "Namn krävs";
    if (!contactForm.email.trim()) newErrors.email = "E-post krävs";
    else if (!/\S+@\S+\.\S+/.test(contactForm.email)) newErrors.email = "Ogiltig e-postadress";
    if (!contactForm.message.trim()) newErrors.message = "Meddelande krävs";
    setContactErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (validateContactForm()) {
      console.log("Kontaktformulär skickat:", contactForm);
      toast.success("Meddelande skickat framgångsrikt!");
      setContactForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Vänligen korrigera felen i formuläret.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="bg-primary text-primary-foreground py-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">Rapevenemang på Burboun</h1>
      </header>

      <nav className="bg-secondary sticky top-16 z-10 shadow-md" aria-label="Huvudnavigering">
        <div className="container mx-auto flex justify-center space-x-2 md:space-x-6 py-4 overflow-x-auto">
          <Link to="#event-details" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap">Evenemangsdetaljer</Link>
          <Link to="#artist-profiles" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap">Artister</Link>
          <Link to="#ticket-sales" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap">Biljetter</Link>
          <Link to="#contact" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap">Kontakt</Link>
          <Link to="#social-media" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap">Sociala Medier</Link>
          <Link to="/calendar" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap">Kalender</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <section id="event-details" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">Evenemangsdetaljer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="text-primary" aria-hidden="true" />
                <p className="text-base md:text-lg"><span className="font-semibold">Datum:</span> 30 juli 2024</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-primary" aria-hidden="true" />
                <p className="text-base md:text-lg"><span className="font-semibold">Tid:</span> 20:00 - 00:00</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary" aria-hidden="true" />
                <p className="text-base md:text-lg"><span className="font-semibold">Plats:</span> Burboun, Huvudgatan 123, Centrum</p>
              </div>
              <p className="text-base md:text-lg mt-4">
                Gör dig redo för en elektrifierande kväll med rapmusik på Burboun! Vårt årliga rapevenemang samlar de hetaste lokala och nationella rapartisterna för en oförglömlig kväll med beats, rim och energi. Från uppåtgående talanger till etablerade stjärnor, detta evenemang visar upp det bästa från rapscenen. Missa inte denna chans att uppleva liveframträdanden, knyta kontakter med andra rapentusiaster och vara en del av den livliga hiphop-gemenskapen. Markera i kalendern och säkra din plats för årets mest efterlängtade rapevenemang!
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="artist-profiles" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Medverkande Artister</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video relative">
                    <img src={artist.image} alt={`Bild på ${artist.name}`} className="object-cover w-full h-full" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <CardTitle className="text-white text-xl md:text-2xl">{artist.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{artist.bio}</p>
                  <Button variant="outline" className="w-full">Läs mer om {artist.name}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="ticket-sales" className="mb-16 bg-card p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Köp Biljetter</h2>
          <p className="mb-6 text-base md:text-lg">Skaffa dina biljetter nu innan de tar slut!</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Namn:</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">E-post:</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="tickets" className="block mb-2 font-medium">Antal Biljetter:</label>
              <Input
                type="number"
                id="tickets"
                name="tickets"
                value={formData.tickets}
                onChange={handleInputChange}
                min="1"
                max="10"
                required
                className={`w-full ${errors.tickets ? 'border-red-500' : ''}`}
                aria-invalid={errors.tickets ? "true" : "false"}
                aria-describedby={errors.tickets ? "tickets-error" : undefined}
              />
              {errors.tickets && <p id="tickets-error" className="text-red-500 text-sm mt-1">{errors.tickets}</p>}
            </div>
            <Button type="submit" className="w-full">Köp Biljetter</Button>
          </form>
        </section>

        <section id="contact" className="mb-16 bg-card p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Kontakta Oss</h2>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="block mb-2 font-medium">Namn:</label>
              <Input
                type="text"
                id="contact-name"
                name="name"
                value={contactForm.name}
                onChange={handleContactInputChange}
                required
                className={`w-full ${contactErrors.name ? 'border-red-500' : ''}`}
                aria-invalid={contactErrors.name ? "true" : "false"}
                aria-describedby={contactErrors.name ? "contact-name-error" : undefined}
              />
              {contactErrors.name && <p id="contact-name-error" className="text-red-500 text-sm mt-1">{contactErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="block mb-2 font-medium">E-post:</label>
              <Input
                type="email"
                id="contact-email"
                name="email"
                value={contactForm.email}
                onChange={handleContactInputChange}
                required
                className={`w-full ${contactErrors.email ? 'border-red-500' : ''}`}
                aria-invalid={contactErrors.email ? "true" : "false"}
                aria-describedby={contactErrors.email ? "contact-email-error" : undefined}
              />
              {contactErrors.email && <p id="contact-email-error" className="text-red-500 text-sm mt-1">{contactErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Meddelande:</label>
              <Textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleContactInputChange}
                rows="4"
                required
                className={`w-full ${contactErrors.message ? 'border-red-500' : ''}`}
                aria-invalid={contactErrors.message ? "true" : "false"}
                aria-describedby={contactErrors.message ? "message-error" : undefined}
              />
              {contactErrors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{contactErrors.message}</p>}
            </div>
            <Button type="submit" className="w-full">Skicka Meddelande</Button>
          </form>
        </section>

        <section id="social-media" className="mb-16 bg-card p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Följ Oss</h2>
          <p className="mb-6 text-base md:text-lg">Håll dig uppdaterad och få de senaste nyheterna:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label={`Besök vår ${link.name} sida`}
              >
                {link.icon}
                <span className="hidden md:inline">{link.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 text-center">
        <p className="text-base md:text-lg">&copy; 2024 Burboun. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
};

export default Index;