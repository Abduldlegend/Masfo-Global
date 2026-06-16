import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: 'Amina Usman',
        role: 'Blockchain Developer',
        location: 'Maiduguri',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        content: 'MASFO GLOBAL transformed my career. The smart contract course was comprehensive and practical. I now work remotely for a DeFi protocol.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Ibrahim Musa',
        role: 'Crypto Trader',
        location: 'Kano',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        content: 'The trading mastery course gave me the skills to trade profitably. The live sessions with experts were invaluable. Highly recommended!',
        rating: 5,
    },
    {
        id: 3,
        name: 'Fatima Abubakar',
        role: 'NFT Artist',
        location: 'Abuja',
        image: 'https://randomuser.me/api/portraits/women/3.jpg',
        content: 'I learned how to create and market NFTs. Now I have a thriving digital art business. Thank you MASFO GLOBAL!',
        rating: 5,
    },
    {
        id: 4,
        name: 'David Okafor',
        role: 'Web3 Developer',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        content: 'The Web3 development course was exactly what I needed. The instructors are knowledgeable and supportive.',
        rating: 4,
    },
]

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What Our <span className="gradient-text">Students Say</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Join thousands of successful graduates who started their Web3 journey with us
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Testimonial Card */}
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 shadow-xl">
                        <Quote className="h-12 w-12 text-primary-400 mb-6" />

                        <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                            "{testimonials[currentIndex].content}"
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                                    <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < testimonials[currentIndex].rating
                                                ? 'text-yellow-400 fill-current'
                                                : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition"
                    >
                        <ChevronLeft className="h-6 w-6 text-primary-600" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition"
                    >
                        <ChevronRight className="h-6 w-6 text-primary-600" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? 'w-8 bg-primary-600'
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}