import { useEffect, useState } from 'react'
import { Users, BookOpen, Award, Globe } from 'lucide-react'

const stats = [
    { icon: Users, label: 'Students Enrolled', value: 5234, suffix: '+' },
    { icon: BookOpen, label: 'Courses Available', value: 48, suffix: '+' },
    { icon: Award, label: 'Certificates Issued', value: 3120, suffix: '+' },
    { icon: Globe, label: 'Countries Reached', value: 15, suffix: '+' },
]

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime = null
        let animationFrame = null

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration])

    return <span>{count.toLocaleString()}</span>
}

export const Stats = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center text-white">
                            <div className="flex justify-center mb-4">
                                <stat.icon className="h-12 w-12" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                <Counter end={stat.value} />
                                {stat.suffix}
                            </div>
                            <div className="text-lg opacity-90">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}