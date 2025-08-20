import { Zap, Calendar, Heart, MessageSquare, Book, Coffee } from 'lucide-react'

const resources = [
  {
    icon: Heart,
    title: "Daily Check-in",
    description: "How are you feeling today? Track your emotional well-being.",
    action: "Check-in",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50"
  },
  {
    icon: Coffee,
    title: "Mindful Moment",
    description: "Take 5 minutes for breathing exercises and mindfulness.",
    action: "Breathe",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Book,
    title: "Growth Journal",
    description: "Document your learning and personal growth moments.",
    action: "Write",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: MessageSquare,
    title: "Connect",
    description: "Share your thoughts with the healing community.",
    action: "Share",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Zap,
    title: "Small Win",
    description: "Celebrate any progress, no matter how small.",
    action: "Celebrate",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Calendar,
    title: "Self-Care Plan",
    description: "Schedule time for activities that nurture your soul.",
    action: "Plan",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50"
  }
]

export default function HealingResources() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50/50 via-blue-50/50 to-purple-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center breathe-animation">
            <span className="text-3xl">🌿</span>
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Your Daily Healing Toolkit
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Small daily actions that support your healing journey. Choose what feels right for you today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <div
                key={index}
                className={`${resource.bgColor} rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-gray-900">
                      {resource.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>
                <div className={`inline-flex px-4 py-2 bg-gradient-to-r ${resource.color} text-white text-sm font-medium rounded-lg hover:shadow-md transition-shadow`}>
                  {resource.action}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="healing-card rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-green-800 mb-3">Remember:</h3>
            <p className="text-gray-700 leading-relaxed">
              Healing isn&apos;t linear. Some days you&apos;ll use all these tools, other days just one might be enough. 
              Be gentle with yourself and trust your healing process. 🌱
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}