
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-900" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-100">Career Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              Bhai Bolthe... 
            </p>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-300"><strong>Address:</strong> Hno:16-1-50/1 kareemabad, Janagaon, Telangana</p>
              <p className="text-gray-300"><strong>Phone:</strong> +91 9908076536</p>
              <p className="text-gray-300"><strong>Email:</strong> praveenmudhiraj516@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">Interpersonal Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>• Excellent verbal and written communication skills</li>
                <li>• Strong organizational abilities</li>
                <li>• Analytical and problem-solving skills</li>
                <li>• Team collaboration and mentoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
