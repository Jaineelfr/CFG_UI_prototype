import { Video, Calendar, Clock, User, Play, Circle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

interface Session {
  id: number;
  title: string;
  instructor: string;
  date: string;
  time: string;
  description: string;
  status: 'live' | 'upcoming' | 'recorded';
  duration?: string;
  recordingUrl?: string;
}

export default function LiveSessions() {
  const sessions: Session[] = [
    {
      id: 1,
      title: "Portrait Lighting Techniques",
      instructor: "Sarah Chen",
      date: "March 2, 2026",
      time: "6:00 PM EST",
      description: "Learn professional portrait lighting setups using natural and artificial light sources",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Editing Workflow in Lightroom",
      instructor: "James Rodriguez",
      date: "February 24, 2026",
      time: "6:00 PM EST",
      description: "Master the essential editing techniques and workflow optimization",
      status: "live",
      duration: "60 min"
    },
    {
      id: 3,
      title: "Street Photography Ethics",
      instructor: "Aisha Patel",
      date: "February 17, 2026",
      time: "6:00 PM EST",
      description: "Navigate ethical considerations when photographing people in public spaces",
      status: "recorded",
      duration: "55 min",
      recordingUrl: "#"
    },
    {
      id: 4,
      title: "Building Your Portfolio",
      instructor: "Sarah Chen",
      date: "February 10, 2026",
      time: "6:00 PM EST",
      description: "Curate and present your best work effectively",
      status: "recorded",
      duration: "48 min",
      recordingUrl: "#"
    },
    {
      id: 5,
      title: "Documentary Photography",
      instructor: "Marcus Williams",
      date: "February 3, 2026",
      time: "6:00 PM EST",
      description: "Tell compelling stories through photographic documentation",
      status: "recorded",
      duration: "62 min",
      recordingUrl: "#"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return (
          <Badge className="bg-coral text-white">
            <Circle className="h-2 w-2 mr-1 fill-current" />
            Live Now
          </Badge>
        );
      case 'upcoming':
        return <Badge variant="secondary" className="bg-teal bg-opacity-10 text-teal">Upcoming</Badge>;
      case 'recorded':
        return <Badge variant="outline">Recorded</Badge>;
      default:
        return null;
    }
  };

  const liveSession = sessions.find(s => s.status === 'live');
  const upcomingSessions = sessions.filter(s => s.status === 'upcoming');
  const recordedSessions = sessions.filter(s => s.status === 'recorded');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl mb-1">Live Sessions</h1>
        <p className="text-gray-600 text-sm">Join live classes and watch past recordings</p>
      </div>
        {/* Live Session - Priority Display */}
        {liveSession && (
          <Card className="shadow-md border-2 border-red-500">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg">{liveSession.title}</CardTitle>
                {getStatusBadge(liveSession.status)}
              </div>
              <CardDescription>{liveSession.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <User className="h-4 w-4 text-gray-500" />
                <span>{liveSession.instructor}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>{liveSession.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>{liveSession.time}</span>
              </div>
              <Button className="w-full bg-coral hover:bg-coral/90 text-white mt-2">
                <Circle className="h-3 w-3 mr-2 fill-current" />
                Join Live Session Now
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Upcoming Sessions */}
        {upcomingSessions.length > 0 && (
          <div>
            <h2 className="text-lg mb-3 px-1">Upcoming Sessions</h2>
            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-base">{session.title}</CardTitle>
                      {getStatusBadge(session.status)}
                    </div>
                    <CardDescription className="text-sm">{session.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{session.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{session.time}</span>
                    </div>
                    <Button className="w-full bg-warmPurple hover:bg-warmPurple/90 text-white mt-2">
                      Set Reminder
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Past Session Recordings */}
        {recordedSessions.length > 0 && (
          <div>
            <h2 className="text-lg mb-3 px-1">Past Session Recordings</h2>
            <div className="space-y-3">
              {recordedSessions.map((session) => (
                <Card key={session.id} className="shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-base">{session.title}</CardTitle>
                      {getStatusBadge(session.status)}
                    </div>
                    <CardDescription className="text-sm">{session.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{session.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{session.duration}</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mt-3">
                      <Video className="h-12 w-12 text-gray-400" />
                    </div>
                    <Button variant="outline" className="w-full mt-2">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Recording
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
