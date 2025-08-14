import { Heart, MessageCircle, Users, Lightbulb, Leaf, Sun, Coffee, Smile } from 'lucide-react'

const supportItems = [
  {
    icon: Heart,
    title: "You're Not Alone",
    description: "Thousands of people are going through similar experiences. Your feelings are valid and important.",
    color: "text-pink-700 bg-gradient-to-br from-pink-50 to-pink-100",
    healingMessage: "💝 Your heart is healing"
  },
  {
    icon: MessageCircle,
    title: "Share Your Story",
    description: "Leave a comment or reach out. Sometimes talking helps more than we realize.",
    color: "text-blue-700 bg-gradient-to-br from-blue-50 to-indigo-100",
    healingMessage: "🗣️ Your voice matters"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others who understand. We're stronger together in healing.",
    color: "text-green-700 bg-gradient-to-br from-green-50 to-emerald-100",
    healingMessage: "🤝 Together we rise"
  },
  {
    icon: Lightbulb,
    title: "Small Wins Count",
    description: "Every application sent, every skill learned, every day survived is progress worth celebrating.",
    color: "text-amber-700 bg-gradient-to-br from-yellow-50 to-amber-100",
    healingMessage: "⭐ You're growing"
  }
]

const dailyAffirmations = [
  "This is temporary, you are resilient",
  "Every rejection brings you closer to the right opportunity",
  "Your worth isn't defined by your employment status",
  "You have unique gifts that the world needs",
  "Taking time to heal is productive too"
]

const breathingExercise = {
  inhale: 4,
  hold: 4,
  exhale: 4,
  rest: 4
}

export default function EmotionalSupport() {
  const currentAffirmation = dailyAffirmations[Math.floor(Math.random() * dailyAffirmations.length)]
  
  return (
    <div className="healing-card rounded-3xl p-10 my-12 relative overflow-hidden">
      {/* Gentle floating elements for visual calm */}
      <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
        <Leaf className="w-full h-full text-green-400 gentle-float" />
      </div>
      <div className="absolute bottom-4 left-4 w-12 h-12 opacity-15">
        <Sun className="w-full h-full text-yellow-400 soft-pulse" />
      </div>
      
      <div className="text-center mb-12">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center breathe-animation">
          <Heart className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent mb-4">
          Your Healing Space
        </h2>
        <p className="text-lg text-gray-700 font-medium">
          This is temporary. You are resilient. You will heal.
        </p>
      </div>

      {/* Daily Affirmation */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border-l-4 border-green-400">
        <div className="flex items-center mb-3">
          <Smile className="w-5 h-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-green-800">Today's Affirmation</h3>
        </div>
        <p className="text-green-700 text-lg italic font-medium">"{currentAffirmation}"</p>
      </div>

      {/* Breathing Exercise */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border-l-4 border-blue-400">
        <div className="flex items-center mb-3">
          <Coffee className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold text-blue-800">Take a Healing Breath</h3>
        </div>
        <p className="text-blue-700 mb-3">Try the 4-4-4-4 technique: Inhale for 4, hold for 4, exhale for 4, rest for 4</p>
        <div className="flex items-center space-x-4 text-sm text-blue-600">
          <span className="px-3 py-1 bg-blue-100 rounded-full">Inhale 4s</span>
          <span className="px-3 py-1 bg-blue-100 rounded-full">Hold 4s</span>
          <span className="px-3 py-1 bg-blue-100 rounded-full">Exhale 4s</span>
          <span className="px-3 py-1 bg-blue-100 rounded-full">Rest 4s</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {supportItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover-lift border border-green-200/30 group"
            >
              <div className={`inline-flex p-3 rounded-lg ${item.color} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {item.description}
              </p>
              <p className="text-xs text-green-700 font-medium italic">
                {item.healingMessage}
              </p>
            </div>
          )
        })}
      </div>

      <div className="text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200/30">
          <blockquote className="text-xl italic text-gray-700 mb-4 leading-relaxed">
            &quot;Rock bottom became the solid foundation on which I rebuilt my life.&quot;
          </blockquote>
          <p className="text-sm text-gray-600 font-medium">— J.K. Rowling</p>
          <div className="mt-4 pt-4 border-t border-green-200/30">
            <p className="text-sm text-green-700 font-medium">
              🌱 Remember: Every setback is setting you up for a comeback
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}