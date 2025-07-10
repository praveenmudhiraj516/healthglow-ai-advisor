
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">Career Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Goal Oriented Graduate looking for a Challenging role in an organization where I can 
              Upgrade and Utilize my Inter personal skills that can Contribute to Company's Growth as well.
              Currently working as a Full Stack Software Developer (SDM) at NxtWave, where I mentor and 
              support learners in building web applications using modern frontend and backend technologies.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600"><strong>Address:</strong> Hno:16-1-50/1 kareemabad, warangal, Telangana</p>
              <p className="text-gray-600"><strong>Phone:</strong> +91 9908076536</p>
              <p className="text-gray-600"><strong>Email:</strong> praveenmudhiraj516@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Interpersonal Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
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
