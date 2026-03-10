import { useState } from 'react';
import { User, Mail, MapPin, Calendar, CheckCircle2, FileText, MessageSquare, Edit2, Save, Image } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface Assignment {
  id: number;
  module: string;
  submittedDate: string;
  status: 'reviewed' | 'pending';
  grade?: string;
}

interface Feedback {
  id: number;
  module: string;
  mentor: string;
  date: string;
  comment: string;
  rating: number;
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Maya Johnson",
    email: "maya.j@email.com",
    location: "Brooklyn, NY",
    joinDate: "January 2026",
    bio: "Aspiring photographer passionate about documentary storytelling and community-focused work."
  });

  // Picdrop gallery URL - only set by teacher when student is ready
  const picdropGalleryUrl = "https://picdrop.com/mayajohnson/portfolio"; // This would be set by teacher in real implementation
  const hasPicdropAccess = !!picdropGalleryUrl; // Only show tab if teacher has granted access

  const completedModules = [
    { id: 1, title: "Introduction to Photography Fundamentals", completedDate: "Feb 10, 2026" },
    { id: 2, title: "Camera Settings and Controls", completedDate: "Feb 15, 2026" }
  ];

  const submissions: Assignment[] = [
    {
      id: 1,
      module: "Introduction to Photography Fundamentals",
      submittedDate: "Feb 9, 2026",
      status: "reviewed",
      grade: "Excellent"
    },
    {
      id: 2,
      module: "Camera Settings and Controls",
      submittedDate: "Feb 14, 2026",
      status: "reviewed",
      grade: "Very Good"
    },
    {
      id: 3,
      module: "Natural Light Photography",
      submittedDate: "Feb 23, 2026",
      status: "pending"
    }
  ];

  const mentorFeedback: Feedback[] = [
    {
      id: 1,
      module: "Introduction to Photography Fundamentals",
      mentor: "Sarah Chen",
      date: "Feb 11, 2026",
      comment: "Excellent understanding of composition principles. Your use of the rule of thirds shows great awareness. Keep exploring different perspectives!",
      rating: 5
    },
    {
      id: 2,
      module: "Camera Settings and Controls",
      mentor: "James Rodriguez",
      date: "Feb 16, 2026",
      comment: "Strong grasp of exposure triangle. Your low-light shots demonstrate good technical skills. Consider experimenting more with shutter speed for creative effects.",
      rating: 4
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl mb-1">My Profile</h1>
        <p className="text-gray-600 text-sm">Your progress and personal information</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className={`grid w-full max-w-md ${hasPicdropAccess ? 'grid-cols-2' : 'grid-cols-1'} mb-6`}>
          <TabsTrigger value="profile">Profile & Progress</TabsTrigger>
          {hasPicdropAccess && (
            <TabsTrigger value="picdrop" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Picdrop
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
        {/* Personal Information */}
        <Card className="shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Personal Information</CardTitle>
              {!isEditing ? (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <Button 
                  size="sm"
                  onClick={handleSave}
                  className="bg-teal hover:bg-teal/90 text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              )}
            </div>
            <CardDescription className="text-xs text-orange-700 bg-orange-50 px-3 py-2 rounded mt-3">
              Note: This information is private and only visible to you and program mentors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isEditing ? (
              <>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Full Name</label>
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Email</label>
                  <Input
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Location</label>
                  <Input
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Bio</label>
                  <Textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    rows={3}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="bg-warmPurple bg-opacity-10 p-3 rounded-full">
                    <User className="h-6 w-6 text-warmPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="text-sm">{profileData.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal bg-opacity-10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-sm">{profileData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-sm">{profileData.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-coral bg-opacity-10 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Member Since</p>
                    <p className="text-sm">{profileData.joinDate}</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-gray-600 mb-2">About Me</p>
                  <p className="text-sm text-gray-700">{profileData.bio}</p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Completed Modules */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-teal-600" />
              Completed Modules
            </CardTitle>
            <CardDescription>Modules you've successfully completed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {completedModules.map((module) => (
              <div key={module.id} className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm">{module.title}</p>
                  <p className="text-xs text-gray-600 mt-1">Completed on {module.completedDate}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Submitted Assignments */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-warmPurple" />
              Submitted Assignments
            </CardTitle>
            <CardDescription>Your assignment submission history</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {submissions.map((assignment) => (
              <div key={assignment.id} className="flex items-start justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="text-sm mb-1">{assignment.module}</p>
                  <p className="text-xs text-gray-600">Submitted: {assignment.submittedDate}</p>
                </div>
                <div className="flex items-center gap-2">
                  {assignment.status === 'reviewed' ? (
                    <Badge className="bg-teal-100 text-teal-700">
                      {assignment.grade}
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      Under Review
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Mentor Feedback */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-warmPurple" />
              Mentor Feedback
            </CardTitle>
            <CardDescription>Personalized feedback from your instructors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mentorFeedback.map((feedback) => (
              <div key={feedback.id} className="border-l-4 border-l-warmPurple pl-4 py-2">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm">{feedback.module}</p>
                    <p className="text-xs text-gray-600">
                      {feedback.mentor} • {feedback.date}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-3 w-3 rounded-full ${
                          i < feedback.rating ? 'bg-yellow-400' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                  {feedback.comment}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
        </TabsContent>

        <TabsContent value="picdrop" className="space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Image className="h-5 w-5 text-warmPurple" />
                Picdrop Gallery
              </CardTitle>
              <CardDescription>View and share your photography portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px] lg:h-[800px] rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src={picdropGalleryUrl}
                  title="Picdrop"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Powered by Picdrop - Professional photo gallery and client delivery platform
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}