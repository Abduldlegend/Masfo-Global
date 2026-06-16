import { Link } from 'react-router-dom'
import { ArrowRight, Rocket } from 'lucide-react'
import { Button } from '../common/Button'

export const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto">
                    <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Ready to Start Your Crypto Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Join MASFO GLOBAL today and become part of Nigeria's fastest-growing crypto community
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/register">
                            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                                Get Started Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                    <p className="text-white/80 mt-6 text-sm">
                        ✓ 5,000+ students trained ✓ 50+ expert courses ✓ Blockchain certificates
                    </p>
                </div>
            </div>
        </section>
    )
}