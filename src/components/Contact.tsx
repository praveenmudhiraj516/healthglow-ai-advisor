
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">Let's Connect!</CardTitle>
            <p className="text-center text-gray-600">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Hno:16-1-50/1 kareemabad, Warangal, Telangana</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-green-600" />
                  <a href="tel:+919908076536" className="hover:text-blue-600 transition-colors">
                    +91 9908076536
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-red-600" />
                  <a href="mailto:praveenmudhiraj516@gmail.com" className="hover:text-blue-600 transition-colors">
                    praveenmudhiraj516@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                >
                  <a href="https://github.com/praveenmudhiraj516" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View GitHub Profile
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                >
                  <a href="https://www.linkedin.com/in/praveen-mudhiraj-4b2161287/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                >
                  <a href="mailto:praveenmudhiraj516@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                Thank you for visiting my portfolio! I look forward to hearing from you.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
