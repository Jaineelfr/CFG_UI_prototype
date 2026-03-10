import { Calendar, BookOpen, Users, Video, User, CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Link } from 'react-router';

export default function Dashboard() {
  const studentName = "Maya";
  const upcomingSession = {
    title: "Portrait Lighting Techniques",
    date: "March 2, 2026",
    time: "6:00 PM EST",
    instructor: "Sarah Chen"
  };

  const announcements = [
    {
      id: 1,
      title: "New Module Released: Street Photography",
      date: "Feb 20, 2026",
      priority: "normal"
    },
    {
      id: 2,
      title: "Assignment Deadline: Documentary Project",
      date: "Feb 28, 2026",
      priority: "high"
    },
    {
      id: 3,
      title: "Community Spotlight: Share Your Story",
      date: "Feb 18, 2026",
      priority: "normal"
    }
  ];

  const progress = {
    modulesCompleted: 8,
    totalModules: 12,
    assignmentsSubmitted: 6,
    totalAssignments: 10
  };

  const quickLinks = [
    { name: "Lessons", icon: BookOpen, path: "/lessons", color: "bg-warmPurple bg-opacity-10 text-warmPurple" },
    { name: "Community", icon: Users, path: "/community", color: "bg-teal bg-opacity-10 text-teal" },
    { name: "Live Sessions", icon: Video, path: "/sessions", color: "bg-coral bg-opacity-10 text-coral" },
    { name: "Profile", icon: User, path: "/profile", color: "bg-gold bg-opacity-10 text-gold" }
  ];

  return (
    <div className="space-y-6">
        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-2xl mb-2">Welcome back, {studentName}!</h1>
          <p className="text-gray-600">Continue your photography journey with Cameras For Girls</p>
        </div>

        {/* Upcoming Live Session Card */}
        <Card className="border-l-4 border-l-coral shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Next Live Session</CardTitle>
              <Badge variant="secondary" className="bg-coral bg-opacity-10 text-coral">Upcoming</Badge>
            </div>
            <CardDescription className="text-base mt-2">{upcomingSession.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span>{upcomingSession.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>{upcomingSession.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <User className="h-4 w-4 text-gray-500" />
              <span>{upcomingSession.instructor}</span>
            </div>
            <Link to="/sessions">
              <Button className="w-full bg-coral hover:bg-coral/90 text-white mt-2">
                Join Session
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Progress Summary */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Your Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">Modules Completed</span>
                <span className="text-gray-900">
                  {progress.modulesCompleted}/{progress.totalModules}
                </span>
              </div>
              <Progress 
                value={(progress.modulesCompleted / progress.totalModules) * 100} 
                className="h-2"
              />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">Assignments Submitted</span>
                <span className="text-gray-900">
                  {progress.assignmentsSubmitted}/{progress.totalAssignments}
                </span>
              </div>
              <Progress 
                value={(progress.assignmentsSubmitted / progress.totalAssignments) * 100} 
                className="h-2"
              />
            </div>
            <div className="flex items-center gap-2 pt-2 text-sm text-teal-700 bg-teal-50 px-3 py-2 rounded-md">
              <CheckCircle2 className="h-4 w-4" />
              <span>You're making great progress!</span>
            </div>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {announcements.map((announcement) => (
              <div 
                key={announcement.id}
                className="flex items-start gap-3 pb-3 border-b last:border-b-0 last:pb-0"
              >
                <div className="flex-1">
                  <p className="text-sm">
                    {announcement.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{announcement.date}</p>
                </div>
                {announcement.priority === "high" && (
                  <Badge variant="destructive" className="text-xs">Important</Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link key={link.name} to={link.path}>
              <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className={`${link.color} p-3 rounded-full mb-3`}>
                    <link.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm">{link.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
    </div>
  );
}
