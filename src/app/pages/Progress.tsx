import { BarChart3, TrendingUp, Award, Target, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

export default function ProgressPage() {
  const overallStats = {
    modulesCompleted: 8,
    totalModules: 12,
    assignmentsSubmitted: 6,
    totalAssignments: 10,
    liveSessionsAttended: 4,
    totalLiveSessions: 6,
    communityPosts: 12
  };

  const recentAchievements = [
    {
      id: 1,
      title: "First Module Complete",
      description: "Completed your first photography module",
      date: "Feb 10, 2026",
      icon: Award
    },
    {
      id: 2,
      title: "Active Learner",
      description: "Attended 4 live sessions",
      date: "Feb 20, 2026",
      icon: TrendingUp
    },
    {
      id: 3,
      title: "Community Contributor",
      description: "Made 10+ community posts",
      date: "Feb 22, 2026",
      icon: Target
    }
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.5 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 2 },
    { day: 'Fri', hours: 2.5 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 1 }
  ];

  const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl mb-1">My Progress</h1>
        <p className="text-gray-600 text-sm">Track your learning journey</p>
      </div>

      {/* Overall Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Modules Completed</CardDescription>
            <CardTitle className="text-2xl">
              {overallStats.modulesCompleted}/{overallStats.totalModules}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress 
              value={(overallStats.modulesCompleted / overallStats.totalModules) * 100} 
              className="h-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Assignments Submitted</CardDescription>
            <CardTitle className="text-2xl">
              {overallStats.assignmentsSubmitted}/{overallStats.totalAssignments}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress 
              value={(overallStats.assignmentsSubmitted / overallStats.totalAssignments) * 100} 
              className="h-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Live Sessions Attended</CardDescription>
            <CardTitle className="text-2xl">
              {overallStats.liveSessionsAttended}/{overallStats.totalLiveSessions}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress 
              value={(overallStats.liveSessionsAttended / overallStats.totalLiveSessions) * 100} 
              className="h-2"
            />
          </CardContent>
        </Card>
      </div>

      {/* Weekly Activity Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-warmPurple" />
            This Week's Activity
          </CardTitle>
          <CardDescription>Hours spent learning each day</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between gap-2 h-48">
            {weeklyActivity.map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-100 rounded-t-lg relative h-full flex items-end">
                  <div
                    className="w-full bg-gradient-to-t from-coral to-warmPink rounded-t-lg transition-all"
                    style={{ height: `${(day.hours / maxHours) * 100}%` }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600">{day.day}</p>
                  <p className="text-xs font-medium">{day.hours}h</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="h-5 w-5 text-gold" />
            Recent Achievements
          </CardTitle>
          <CardDescription>Milestones you've reached</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentAchievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={achievement.id}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <div className="bg-gold bg-opacity-20 p-2 rounded-lg">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{achievement.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                </div>
                <Badge variant="secondary" className="bg-gold bg-opacity-20 text-gold border-gold">
                  New
                </Badge>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Learning Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="h-5 w-5 text-teal" />
            Current Goals
          </CardTitle>
          <CardDescription>What you're working towards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm">Complete all modules by March 15</p>
              <Badge variant="outline" className="text-teal border-teal">On Track</Badge>
            </div>
            <Progress value={67} className="h-2" />
          </div>
          <div className="p-3 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm">Submit 10 assignments</p>
              <Badge variant="outline" className="text-teal border-teal">60%</Badge>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          <div className="p-3 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm">Attend all live sessions</p>
              <Badge variant="outline" className="text-teal border-teal">67%</Badge>
            </div>
            <Progress value={67} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
