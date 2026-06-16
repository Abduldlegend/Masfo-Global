import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react'
import { Button } from '../common/Button'

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />

            {/* Animated Shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" />

            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full">
                                <Award className="h-4 w-4 text-primary-600 mr-2" />
                                <span className="text-sm font-semibold text-primary-700">
                                    #1 Crypto Academy in Northern Nigeria
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Master Crypto &{' '}
                                <span className="gradient-text">Blockchain</span>
                                <br />
                                in Maiduguri
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Join Nigeria's leading crypto academy based in Maiduguri, Borno State.
                                Learn blockchain, trading, DeFi, and launch your Web3 career with expert guidance.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/register">
                                <Button size="lg" className="group">
                                    Start Learning Today
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                                </Button>
                            </Link>
                            <Link to="/courses">
                                <Button size="lg" variant="outline">
                                    Explore Courses
                                </Button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="flex items-center space-x-3">
                                <Users className="h-8 w-8 text-primary-500" />
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">5,000+</div>
                                    <div className="text-sm text-gray-600">Active Students</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <BookOpen className="h-8 w-8 text-primary-500" />
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">50+</div>
                                    <div className="text-sm text-gray-600">Expert Courses</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Award className="h-8 w-8 text-primary-500" />
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">100%</div>
                                    <div className="text-sm text-gray-600">Certificate Issued</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image/Illustration */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=600&fit=crop"
                                alt="Crypto Education"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Award className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold">Trusted Academy</div>
                                        <div className="text-sm text-gray-600">Borno State Approved</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}