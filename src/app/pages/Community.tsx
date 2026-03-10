import { useState } from 'react';
import { MessageSquare, Pin, Flag, Plus, Search, Users, Megaphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface Post {
  id: number;
  author: string;
  title: string;
  preview: string;
  category: string;
  replies: number;
  date: string;
  pinned?: boolean;
}

export default function Community() {
  const [showNewPost, setShowNewPost] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const mentorAnnouncements: Post[] = [
    {
      id: 1,
      author: "Sarah Chen (Mentor)",
      title: "Welcome to the Spring 2026 Cohort!",
      preview: "I'm excited to work with all of you this semester. Remember, this is a safe space to learn and grow...",
      category: "announcement",
      replies: 12,
      date: "Feb 15, 2026",
      pinned: true
    },
    {
      id: 2,
      author: "James Rodriguez (Mentor)",
      title: "Assignment Deadline Extension",
      preview: "Due to technical difficulties last week, I'm extending the documentary assignment deadline to March 1st...",
      category: "announcement",
      replies: 8,
      date: "Feb 20, 2026"
    }
  ];

  const discussionPosts: Post[] = [
    {
      id: 3,
      author: "Maya",
      title: "Tips for photographing in low light?",
      preview: "I've been struggling with indoor photography without flash. Any advice on camera settings or techniques?",
      category: "technique",
      replies: 15,
      date: "Feb 23, 2026"
    },
    {
      id: 4,
      author: "Priya S.",
      title: "Sharing my first street photography series!",
      preview: "I finally completed my first street photography project. Would love feedback from the community...",
      category: "showcase",
      replies: 22,
      date: "Feb 22, 2026"
    },
    {
      id: 5,
      author: "Jordan K.",
      title: "Storytelling with portraits - discussion",
      preview: "How do you capture someone's personality in a single frame? Let's discuss approaches to portrait storytelling...",
      category: "discussion",
      replies: 18,
      date: "Feb 21, 2026"
    },
    {
      id: 6,
      author: "Anika M.",
      title: "Budget-friendly equipment recommendations?",
      preview: "As a beginner, what affordable gear would you recommend for starting out in photography?",
      category: "equipment",
      replies: 31,
      date: "Feb 20, 2026"
    }
  ];

  const categories = [
    { name: "Technique", color: "bg-warmPurple bg-opacity-10 text-warmPurple" },
    { name: "Showcase", color: "bg-coral bg-opacity-10 text-coral" },
    { name: "Discussion", color: "bg-teal bg-opacity-10 text-teal" },
    { name: "Equipment", color: "bg-gold bg-opacity-10 text-gold" },
    { name: "Announcement", color: "bg-warmPink bg-opacity-10 text-warmPink" }
  ];

  const cohortGroups = [
    { name: "Spring 2026 Cohort", members: 24, active: true },
    { name: "Documentary Photography Group", members: 18, active: false },
    { name: "Portrait Workshop Participants", members: 15, active: false }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl mb-1">Community</h1>
        <p className="text-gray-600 text-sm">Connect, share, and learn together</p>
      </div>
        {/* Community Guidelines Banner */}
        <Card className="shadow-sm bg-teal bg-opacity-5 border-teal border-opacity-20">
          <CardContent className="pt-4">
            <p className="text-sm text-gray-800">
              <strong>Community Guidelines:</strong> This is a safe, respectful space for learning. 
              Please be kind, supportive, and professional in all interactions. Report any concerning content to mentors.
            </p>
          </CardContent>
        </Card>

        {/* Search and New Post */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            onClick={() => setShowNewPost(!showNewPost)}
            className="bg-pink-600 hover:bg-pink-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* New Post Form */}
        {showNewPost && (
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Create New Post</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Post title..." />
              <Textarea 
                placeholder="Share your thoughts, questions, or work..." 
                rows={4}
              />
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Category:</span>
                {categories.slice(0, 4).map((cat) => (
                  <Badge 
                    key={cat.name}
                    variant="outline" 
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    {cat.name}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowNewPost(false)}>
                  Cancel
                </Button>
                <Button className="bg-coral hover:bg-coral/90 text-white">
                  Post to Community
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Cohort Groups */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="h-4 w-4" />
              My Groups
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {cohortGroups.map((group, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm">{group.name}</p>
                  <p className="text-xs text-gray-500">{group.members} members</p>
                </div>
                {group.active && (
                  <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                    Active
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tabs for Announcements and Discussions */}
        <Tabs defaultValue="announcements" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="announcements">
              <Megaphone className="h-4 w-4 mr-2" />
              Announcements
            </TabsTrigger>
            <TabsTrigger value="discussions">
              <MessageSquare className="h-4 w-4 mr-2" />
              Discussions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="announcements" className="space-y-3 mt-4">
            {mentorAnnouncements.map((post) => (
              <Card key={post.id} className={`shadow-sm ${post.pinned ? 'border-l-4 border-l-orange-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {post.pinned && (
                        <div className="flex items-center gap-1 text-orange-600 mb-1">
                          <Pin className="h-3 w-3" />
                          <span className="text-xs">Pinned</span>
                        </div>
                      )}
                      <CardTitle className="text-base">{post.title}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        by {post.author}
                      </CardDescription>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 ml-2">
                      Announcement
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">{post.preview}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {post.replies} replies
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="discussions" className="space-y-3 mt-4">
            {discussionPosts.map((post) => (
              <Card key={post.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base">{post.title}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        by {post.author}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <Flag className="h-4 w-4 text-gray-400" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">{post.preview}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {post.replies} replies
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Join Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Moderation Note */}
        <Card className="shadow-sm bg-gray-50">
          <CardContent className="pt-4">
            <p className="text-xs text-gray-600 text-center">
              All posts are moderated by mentors. Use the flag icon to report inappropriate content.
            </p>
          </CardContent>
        </Card>
    </div>
  );
}
