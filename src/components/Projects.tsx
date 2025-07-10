
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RAG Applications",
      period: "Jun 2025",
      description: "This is a RAG-based chatbot integrated with n8n that helps users find the best hospitals using a CSV database. Users upload a CSV file containing hospital details, which is processed through an automated n8n workflow. When users ask questions, the chatbot retrieves relevant hospital info and generates smart, contextual answers.",
      skills: ["n8n", "JSON", "CSV", "RAG", "Chatbot"],
      company: "NxtWave"
    },
    {
      title: "Weekend Planner with LangChain and Groq AI",
      period: "Jun 2025",
      description: "I created a Weekend Planner using LangChain, Groq API, and Streamlit. The app helps users find great weekend places based on their location. Users enter the weekend date, city, and budget to get smart travel suggestions for weekends with a simple and easy-to-use interface.",
      skills: ["LangChain", "Groq AI", "Streamlit", "Python"],
      company: "NxtWave"
    },
    {
      title: "MCP Servers",
      period: "May 2025",
      description: "I created a project using MCP servers that connects with Claude and ChatGPT. The project can send emails automatically, post comments on YouTube videos, and upload photos directly to Google Drive. This automation makes communication and file sharing easier and faster.",
      skills: ["MCP Servers", "Claude AI", "Automation", "API Integration"],
      company: "NxtWave"
    },
    {
      title: "Health-Glow-Advisor",
      period: "Apr 2025",
      description: "HealthGlow Advisor is a chat-driven health intake app that lets users describe symptoms via text, with AI asking follow-up questions. It provides symptoms assessment, general wellness tips, and health content summaries from reputable sources.",
      skills: ["Gen AI", "Lovable", "Supabase", "Healthcare"],
      company: "NxtWave"
    },
    {
      title: "Hospital Management System",
      period: "Academic Project",
      description: "A comprehensive web application for hospital management that efficiently manages doctors and patients. Built during diploma studies with focus on healthcare digitization.",
      skills: ["Web Development", "Database Management", "Healthcare IT"],
      company: "Academic"
    }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects & Academic Work
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-gray-800 mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Associated with {project.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
