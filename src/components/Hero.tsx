
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 animate-fade-in">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/4c648c4f-9f41-4e7d-a8b3-21e57f61ac35.png" 
                alt="Praveen Reddaboina"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
          PRAVEEN REDDABOINA
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in">
          Full Stack Software Developer & AI Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in">
          Goal Oriented Graduate looking for a Challenging role in an organization where I can Upgrade and Utilize my Inter personal skills that can Contribute to Company's Growth as well.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-gray-300 animate-fade-in">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Janagaon, Telangana</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+91 9908076536</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <Button 
            asChild 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            <a href="https://github.com/praveenmudhiraj516" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          
          <Button 
            asChild 
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            <a href="https://www.linkedin.com/in/praveen-mudhiraj-4b2161287/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            asChild 
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
          >
            <a href="mailto:praveenmudhiraj516@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
