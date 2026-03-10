import { useState } from 'react';
import { CheckCircle2, Circle, Download, Upload, Video, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Textarea } from '../components/ui/textarea';

interface Resource {
  name: string;
  type: string;
  size: string;
}

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  resources: Resource[];
}

export default function Lessons() {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [assignmentText, setAssignmentText] = useState("");

  const modules: Module[] = [
    {
      id: 1,
      title: "Introduction to Photography Fundamentals",
      description: "Learn the basics of exposure, composition, and lighting",
      duration: "45 min",
      videoUrl: "#",
      completed: true,
      resources: [
        { name: "Photography Basics Guide.pdf", type: "PDF", size: "2.3 MB" },
        { name: "Composition Cheat Sheet.pdf", type: "PDF", size: "1.1 MB" }
      ]
    },
    {
      id: 2,
      title: "Camera Settings and Controls",
      description: "Understanding aperture, shutter speed, and ISO",
      duration: "52 min",
      videoUrl: "#",
      completed: true,
      resources: [
        { name: "Camera Settings Guide.pdf", type: "PDF", size: "1.8 MB" },
        { name: "Practice Exercises.pdf", type: "PDF", size: "980 KB" }
      ]
    },
    {
      id: 3,
      title: "Natural Light Photography",
      description: "Working with available light to create stunning images",
      duration: "38 min",
      videoUrl: "#",
      completed: false,
      resources: [
        { name: "Lighting Diagrams.pdf", type: "PDF", size: "3.2 MB" },
        { name: "Golden Hour Guide.pdf", type: "PDF", size: "1.5 MB" }
      ]
    },
    {
      id: 4,
      title: "Storytelling Through Images",
      description: "Creating narratives and emotional connections",
      duration: "41 min",
      videoUrl: "#",
      completed: false,
      resources: [
        { name: "Visual Storytelling Workbook.pdf", type: "PDF", size: "2.7 MB" }
      ]
    }
  ];

  const completedCount = modules.filter(m => m.completed).length;
  const progressPercentage = (completedCount / modules.length) * 100;

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl mb-1">My Lessons</h1>
        <p className="text-gray-600 text-sm">Your learning modules and course materials</p>
      </div>
        {/* Overall Progress */}
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700">Overall Progress</span>
              <span className="text-gray-900">
                {completedCount} of {modules.length} modules completed
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </CardContent>
        </Card>

        {/* Modules */}
        <div className="space-y-4">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className={`shadow-sm ${module.completed ? 'border-l-4 border-l-teal-500' : ''}`}
            >
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    {module.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{module.title}</CardTitle>
                      <CardDescription className="text-sm">{module.description}</CardDescription>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-gray-500">{module.duration}</span>
                        {module.completed && (
                          <Badge variant="secondary" className="bg-teal-100 text-teal-700 text-xs">
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    {expandedModule === module.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </CardHeader>

              {expandedModule === module.id && (
                <CardContent className="space-y-4 pt-0">
                  {/* Video Lesson */}
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center gap-2 mb-3">
                      <Video className="h-4 w-4 text-warmPurple" />
                      <span className="text-sm">Video Lesson</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mb-3">
                      <Video className="h-12 w-12 text-gray-400" />
                    </div>
                    <Button className="w-full bg-warmPurple hover:bg-warmPurple/90 text-white">
                      {module.completed ? 'Rewatch Lesson' : 'Start Lesson'}
                    </Button>
                  </div>

                  {/* Downloadable Resources */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-4 w-4 text-teal" />
                      <span className="text-sm">Downloadable Resources</span>
                    </div>
                    <div className="space-y-2">
                      {module.resources.map((resource, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded"
                        >
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <Download className="h-4 w-4 text-gray-500 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm truncate">{resource.name}</p>
                              <p className="text-xs text-gray-500">{resource.size}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="flex-shrink-0 ml-2">
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assignment Submission */}
                  <div className="border rounded-lg p-4 bg-warmPurple bg-opacity-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Upload className="h-4 w-4 text-warmPurple" />
                      <span className="text-sm">Module Assignment</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">
                      Submit your assignment for instructor review
                    </p>
                    <Textarea
                      placeholder="Describe your work or paste a link to your submission..."
                      value={assignmentText}
                      onChange={(e) => setAssignmentText(e.target.value)}
                      className="mb-3 bg-white"
                      rows={4}
                    />
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Attach File
                      </Button>
                      <Button size="sm" className="flex-1 bg-warmPurple hover:bg-warmPurple/90 text-white">
                        Submit Assignment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
    </div>
  );
}
