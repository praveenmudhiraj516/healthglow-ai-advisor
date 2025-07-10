
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "Python", "Bootstrap", "SQL", 
    "Tailwind CSS", "MS Excel", "MS Word", "React", "Node.js",
    "LangChain", "Groq AI", "n8n", "Claude AI", "Supabase"
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">Technologies & Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technicalSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover-scale cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
