import { Heart, Camera, Sparkles, BookOpen, Users2, Lightbulb, FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Button } from '../components/ui/button';

export default function Resources() {
  const mentalHealthResources = [
    {
      title: "Self-Care for Creative Minds",
      description: "Tips for maintaining mental wellness while pursuing your artistic passions",
      link: "#"
    },
    {
      title: "Dealing with Creative Block",
      description: "Strategies to overcome creative burnout and find inspiration",
      link: "#"
    },
    {
      title: "Building Confidence Through Photography",
      description: "How photography can be a tool for self-expression and empowerment",
      link: "#"
    },
    {
      title: "Support Resources",
      description: "Crisis hotlines and mental health support services",
      link: "#"
    }
  ];

  const photographyGuides = [
    {
      title: "Camera Basics for Beginners",
      description: "Understanding aperture, shutter speed, and ISO",
      link: "#"
    },
    {
      title: "Composition Techniques",
      description: "Rule of thirds, leading lines, and framing your subject",
      link: "#"
    },
    {
      title: "Natural Light Photography",
      description: "Making the most of golden hour and outdoor lighting",
      link: "#"
    },
    {
      title: "Portrait Photography Tips",
      description: "Posing, angles, and capturing authentic expressions",
      link: "#"
    },
    {
      title: "Photo Editing Basics",
      description: "Introduction to post-processing and editing software",
      link: "#"
    }
  ];

  const storytellingResources = [
    {
      title: "Finding Your Voice",
      description: "Developing your unique perspective and style",
      link: "#"
    },
    {
      title: "Documentary Photography",
      description: "Telling stories through authentic, candid moments",
      link: "#"
    },
    {
      title: "Photo Essays and Series",
      description: "Creating cohesive narratives through multiple images",
      link: "#"
    },
    {
      title: "Ethics in Photography",
      description: "Responsible storytelling and respecting your subjects",
      link: "#"
    }
  ];

  const careerResources = [
    {
      title: "Building Your Portfolio",
      description: "Curating and presenting your best work",
      link: "#"
    },
    {
      title: "Social Media for Photographers",
      description: "Growing your audience and sharing your work online",
      link: "#"
    },
    {
      title: "Freelance Photography 101",
      description: "Getting started with paid photography work",
      link: "#"
    },
    {
      title: "Photography Scholarship Opportunities",
      description: "Financial aid and grants for aspiring photographers",
      link: "#"
    }
  ];

  const equipmentGuides = [
    {
      title: "Choosing Your First Camera",
      description: "What to look for when buying camera equipment on a budget",
      link: "#"
    },
    {
      title: "Essential Accessories",
      description: "Tripods, lenses, and other helpful tools",
      link: "#"
    },
    {
      title: "Smartphone Photography",
      description: "Creating amazing photos with just your phone",
      link: "#"
    },
    {
      title: "Camera Maintenance and Care",
      description: "Keeping your equipment in great condition",
      link: "#"
    }
  ];

  const communityResources = [
    {
      title: "Finding Photography Communities",
      description: "Connect with other photographers online and locally",
      link: "#"
    },
    {
      title: "Mentorship Opportunities",
      description: "How to find and work with a photography mentor",
      link: "#"
    },
    {
      title: "Photography Contests and Exhibitions",
      description: "Opportunities to showcase your work",
      link: "#"
    },
    {
      title: "Collaborative Projects",
      description: "Working with other artists and creatives",
      link: "#"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl mb-2">Resources</h1>
        <p className="text-gray-600">
          Guides, tips, and support for your photography journey
        </p>
      </div>

      {/* Featured Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="shadow-sm border-l-4 border-l-coral">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="bg-coral bg-opacity-10 p-3 rounded-full">
              <Heart className="h-5 w-5 text-coral" />
            </div>
            <div>
              <h3 className="text-sm">Mental Health</h3>
              <p className="text-xs text-gray-500">Wellness resources</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-l-4 border-l-warmPurple">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="bg-warmPurple bg-opacity-10 p-3 rounded-full">
              <Camera className="h-5 w-5 text-warmPurple" />
            </div>
            <div>
              <h3 className="text-sm">Photography Guides</h3>
              <p className="text-xs text-gray-500">Technical tips</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-l-4 border-l-teal">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="bg-teal bg-opacity-10 p-3 rounded-full">
              <Sparkles className="h-5 w-5 text-teal" />
            </div>
            <div>
              <h3 className="text-sm">Career Resources</h3>
              <p className="text-xs text-gray-500">Professional growth</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resource Sections with Accordions */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Heart className="h-5 w-5 text-coral" />
            Mental Health & Wellness
          </CardTitle>
          <CardDescription>
            Resources to support your mental and emotional wellbeing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {mentalHealthResources.map((resource, index) => (
              <AccordionItem key={index} value={`mental-${index}`}>
                <AccordionTrigger className="text-sm hover:text-coral">
                  {resource.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <Button variant="outline" size="sm" className="text-coral border-coral hover:bg-coral hover:text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    View Guide
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Camera className="h-5 w-5 text-warmPurple" />
            Photography Techniques
          </CardTitle>
          <CardDescription>
            Master the technical and creative aspects of photography
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {photographyGuides.map((guide, index) => (
              <AccordionItem key={index} value={`photo-${index}`}>
                <AccordionTrigger className="text-sm hover:text-warmPurple">
                  {guide.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                  <Button variant="outline" size="sm" className="text-warmPurple border-warmPurple hover:bg-warmPurple hover:text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    View Guide
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-teal" />
            Storytelling & Visual Narrative
          </CardTitle>
          <CardDescription>
            Learn to tell powerful stories through your images
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {storytellingResources.map((resource, index) => (
              <AccordionItem key={index} value={`story-${index}`}>
                <AccordionTrigger className="text-sm hover:text-teal">
                  {resource.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <Button variant="outline" size="sm" className="text-teal border-teal hover:bg-teal hover:text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    View Guide
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold" />
            Career Development
          </CardTitle>
          <CardDescription>
            Build your professional photography career
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {careerResources.map((resource, index) => (
              <AccordionItem key={index} value={`career-${index}`}>
                <AccordionTrigger className="text-sm hover:text-gold">
                  {resource.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <Button variant="outline" size="sm" className="text-gold border-gold hover:bg-gold hover:text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    View Guide
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-warmPink" />
            Equipment & Gear
          </CardTitle>
          <CardDescription>
            Everything you need to know about photography equipment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {equipmentGuides.map((guide, index) => (
              <AccordionItem key={index} value={`equipment-${index}`}>
                <AccordionTrigger className="text-sm hover:text-warmPink">
                  {guide.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                  <Button variant="outline" size="sm" className="text-warmPink border-warmPink hover:bg-warmPink hover:text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    View Guide
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users2 className="h-5 w-5 text-coral" />
            Community & Networking
          </CardTitle>
          <CardDescription>
            Connect with other photographers and grow your network
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {communityResources.map((resource, index) => (
              <AccordionItem key={index} value={`community-${index}`}>
                <AccordionTrigger className="text-sm hover:text-coral">
                  {resource.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <Button variant="outline" size="sm" className="text-coral border-coral hover:bg-coral hover:text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    View Guide
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card className="shadow-sm bg-teal bg-opacity-5 border-teal">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-teal bg-opacity-10 p-3 rounded-full">
              <Lightbulb className="h-6 w-6 text-teal" />
            </div>
            <div>
              <h3 className="text-base mb-2">Need More Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Can't find what you're looking for? Reach out to our mentors and community for personalized support.
              </p>
              <Button className="bg-teal hover:bg-teal/90 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
