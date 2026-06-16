import { Link } from 'react-router-dom'
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  BookOpen, 
  Globe, 
  Shield, 
  TrendingUp,
  Quote,
  Mail,
  MapPin,
  Phone,
  Calendar,
  CheckCircle,
  Heart,
  Lightbulb,
  Sparkles,
  Star
} from 'lucide-react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'

export const About = () => {
  const stats = [
    { icon: Users, value: '5,000+', label: 'Students Trained', color: 'bg-primary-100 text-primary-600' },
    { icon: BookOpen, value: '50+', label: 'Expert Courses', color: 'bg-green-100 text-green-600' },
    { icon: Award, value: '3,000+', label: 'Certificates Issued', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Globe, value: '15+', label: 'Countries Reached', color: 'bg-purple-100 text-purple-600' },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We strive for excellence in every course, ensuring our students receive world-class blockchain education.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying ahead of the curve with cutting-edge curriculum and emerging blockchain technologies.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong community of blockchain enthusiasts and professionals across Nigeria.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest standards of honesty and transparency in all our dealings.',
    },
  ]

  const milestones = [
    { year: '2020', title: 'Founded in Maiduguri', description: 'MASFO GLOBAL was established with a vision to democratize blockchain education.' },
    { year: '2021', title: 'First 100 Students', description: 'Graduated our first cohort of blockchain fundamentals students.' },
    { year: '2022', title: 'Expanded Curriculum', description: 'Launched advanced courses in Smart Contract Development and DeFi.' },
    { year: '2023', title: 'International Recognition', description: 'Partnered with global blockchain organizations and reached 15+ countries.' },
    { year: '2024', title: '10,000+ Community', description: 'Growing community of alumni and active learners across Nigeria and beyond.' },
  ]

  const team = [
    {
      name: 'Abdulrahman Ali',
      role: 'Founder & CEO',
      image: 'https://via.placeholder.com/400x400?text=CEO',
      quote: 'Empowering the next generation of blockchain leaders in Africa.',
      bio: 'Blockchain educator and entrepreneur passionate about bringing Web3 education to Nigeria.',
    },
    {
      name: 'Dr. Fatima Bello',
      role: 'Head of Academics',
      image: 'https://via.placeholder.com/400x400?text=Dr.+Fatima',
      quote: 'Making complex blockchain concepts accessible to everyone.',
      bio: 'PhD in Computer Science with 10+ years of experience in blockchain education.',
    },
    {
      name: 'Engr. Yusuf Muhammad',
      role: 'Technical Director',
      image: 'https://via.placeholder.com/400x400?text=Engr.+Yusuf',
      quote: 'Building the bridge between traditional development and Web3.',
      bio: 'Full-stack developer and smart contract auditor with multiple dApp deployments.',
    },
    {
      name: 'Amina Usman',
      role: 'Community Manager',
      image: 'https://via.placeholder.com/400x400?text=Amina',
      quote: 'Creating a supportive community for blockchain learners.',
      bio: 'Community builder focused on fostering collaboration and growth.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About MASFO GLOBAL
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Nigeria's Leading Crypto Academy Based in Maiduguri, Borno State
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                MASFO GLOBAL was founded in Maiduguri, Borno State, with a simple but powerful mission: 
                to make blockchain and cryptocurrency education accessible to everyone in Nigeria and beyond.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                What started as a small initiative has grown into one of Nigeria's most respected crypto academies, 
                training over 5,000 students and issuing thousands of blockchain-verified certificates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to be at the forefront of Web3 education in Africa, preparing the next generation 
                of blockchain developers, traders, and innovators for the digital economy.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="MASFO GLOBAL Team"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold">5+ Years</div>
                    <div className="text-sm text-gray-600">Of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Transforming lives through quality blockchain education
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition">
                <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Message from the <span className="gradient-text">CEO</span>
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>
            
            <Card className="p-8 md:p-12 bg-gradient-to-r from-primary-50 to-secondary-50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* CEO Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src="https://via.placeholder.com/200x200?text=Abdulrahman+Ali"
                      alt="Abdulrahman Ali - CEO"
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary-600 rounded-full p-2">
                      <Quote className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Quote and Bio */}
                <div className="flex-1">
                  <div className="mb-4">
                    <Quote className="h-10 w-10 text-primary-400 opacity-50" />
                  </div>
                  <p className="text-xl md:text-2xl font-semibold text-gray-800 italic mb-6">
                    "At MASFO GLOBAL, we believe that blockchain technology has the power to transform Africa. 
                    Our mission is to equip every Nigerian with the knowledge and skills needed to thrive in the 
                    digital economy. The future is decentralized, and we're building the bridge to that future."
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Abdulrahman Ali</h3>
                    <p className="text-primary-600 font-semibold">Founder & CEO</p>
                    <p className="text-gray-500 mt-2">Blockchain Educator | Web3 Advocate | Tech Entrepreneur</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="p-8 text-center hover:shadow-xl transition group">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition">
                <Target className="h-10 w-10 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize blockchain education and empower individuals with practical skills 
                to participate in and benefit from the decentralized economy, starting from Maiduguri, 
                Nigeria, and extending across Africa.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 text-center hover:shadow-xl transition group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition">
                <Eye className="h-10 w-10 text-green-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Africa's leading blockchain education hub, producing world-class blockchain 
                professionals who drive innovation and economic growth across the continent.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition group">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition">
                  <value.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose MASFO GLOBAL?
            </h2>
            <p className="text-xl opacity-90">
              What makes us different from other crypto academies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert-Led Courses</h3>
              <p className="opacity-90">Learn from industry professionals with real-world experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Blockchain Certificates</h3>
              <p className="opacity-90">Earn verifiable NFT certificates on the blockchain</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Active Community</h3>
              <p className="opacity-90">Join a thriving community of blockchain enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and impact
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:text-right p-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-primary-600 mb-2">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white font-bold mx-4">
                    {index + 1}
                  </div>
                  <div className="flex-1 p-6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated experts committed to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden text-center hover:shadow-xl transition">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm italic">"{member.quote}"</p>
                  <p className="text-gray-500 text-xs mt-3">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Crypto Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with MASFO GLOBAL
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Enroll Now
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}