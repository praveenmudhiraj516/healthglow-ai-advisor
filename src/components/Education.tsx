
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      year: "2023-2025",
      degree: "Master's of Technology in Computer Science",
      institution: "Kakatiya University",
      grade: ""
    },
    {
      year: "2020-2023",
      degree: "Bachelor's in Computer Science",
      institution: "Jayamukhi Institute of Technological Sciences",
      grade: "CGPA: 7.6/10"
    },
    {
      year: "2017-2020",
      degree: "Diploma in Mining Engineering",
      institution: "Sree Kavitha Engineering College, Khammam",
      grade: "Percentage: 77%"
    },
    {
      year: "2016-2017",
      degree: "High School",
      institution: "Vani Vidyanikethan Digi High School",
      grade: "CGPA: 9.2/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Educational Qualifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-800">{edu.degree}</CardTitle>
                    <p className="text-blue-600 font-semibold">{edu.year}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                {edu.grade && (
                  <p className="text-green-600 font-semibold">{edu.grade}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center text-gray-800">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              • Basics of Python internship Certificate at ICSS INFORMATICS Pvt Ltd.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
