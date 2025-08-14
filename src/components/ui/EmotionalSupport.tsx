import { Heart, MessageCircle, Users, Lightbulb } from 'lucide-react'

const supportItems = [
  {
    icon: Heart,
    title: "You're Not Alone",
    description: "Thousands of people are going through similar experiences. Your feelings are valid.",
    color: "text-pink-600 bg-pink-100"
  },
  {
    icon: MessageCircle,
    title: "Share Your Story",
    description: "Leave a comment or reach out. Sometimes talking helps more than we realize.",
    color: "text-blue-600 bg-blue-100"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others who understand. We're stronger together.",
    color: "text-green-600 bg-green-100"
  },
  {
    icon: Lightbulb,
    title: "Small Wins Count",
    description: "Every application sent, every skill learned, every day survived is progress.",
    color: "text-yellow-600 bg-yellow-100"
  }
]

export default function EmotionalSupport() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 rounded-3xl p-10 my-12 shadow-lg border border-white/40">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Remember: This is Temporary
        </h2>
        <p className="text-gray-600">
          Unemployment is a chapter, not your whole story
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supportItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 hover-lift border border-white/50"
            >
              <div className={`inline-flex p-3 rounded-lg ${item.color} mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>

      <div className="text-center mt-8">
        <blockquote className="text-lg italic text-gray-700 mb-4">
          &quot;Rock bottom became the solid foundation on which I rebuilt my life.&quot;
        </blockquote>
        <p className="text-sm text-gray-500">— J.K. Rowling</p>
      </div>
    </div>
  )
}