import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";
import LinkButton from "./components/LinkButton";
import profileImage from "./assets/dp.jpeg";

function App() {
  const handleShare = async () => {
    const shareData = {
      title: "Subham Singh",
      url: "https://links.subhamsingh.in",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  const socialLinks = [
    { icon: Globe, label: "Portfolio", href: "https://subhamsingh.in" },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/subhamcodes",
    },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/subhamsng" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/subham-singh-cc",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/subham-proj" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@subhamytc" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

      <main className="relative z-10 max-w-xl mx-auto px-6 py-16 flex flex-col items-center">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-6 group">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-24 h-24 rounded-full border-2 border-[#0a0a0a] object-cover bg-black"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-center">Subham Singh</h1>
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            Software Engineer
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full mb-12">
          {socialLinks.map((link, index) => (
            <LinkButton
              key={index}
              icon={link.icon}
              label={link.label}
              href={link.href}
            />
          ))}

          <LinkButton
            icon={Mail}
            label="Get in touch"
            href="mailto:subham.dev20@gmail.com"
            variant="primary"
          />
        </div>

        {/* Footer Actions */}
        <div className="flex gap-6 mt-auto">
          <a
            href="mailto:subham.dev20@gmail.com"
            className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-full"
          >
            <Mail className="w-5 h-5" />
          </a>
          <button className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-full">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-full"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
