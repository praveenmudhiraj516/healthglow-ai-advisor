
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl text-gray-800 mb-2">
                  Software Developer || SDM @ NXT Wave
                </CardTitle>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Mar 2025 - Present · 5 mos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Hyderabad, Telangana, India · On-site</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm currently working as a Full Stack Software Developer (SDM) at NxtWave, where I mentor and 
              support learners in building web applications using modern frontend and backend technologies. 
              I focus on explaining complex concepts in a simple way and helping others improve their full 
              stack development skills.
            </p>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Full Stack Development", "Mentoring", "Teaching"].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
