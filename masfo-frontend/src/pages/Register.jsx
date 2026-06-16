
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import toast from 'react-hot-toast'
// import { User, Mail, Lock, Eye, EyeOff, Phone } from 'lucide-react'
// import { Button } from '../components/common/Button'
// import { Input } from '../components/common/Input'

// const registerSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Invalid email address'),
//   phone: z.string().min(10, 'Valid phone number required'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
//   confirmPassword: z.string(),
// }).refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords don't match",
//   path: ['confirmPassword'],
// })

// export const Register = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const navigate = useNavigate()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(registerSchema),
//   })

//   const onSubmit = async (data) => {
//     setIsLoading(true)
//     try {
//       // API call will go here
//       console.log('Register data:', { ...data, password: '***', confirmPassword: '***' })
      
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000))
      
//       toast.success('Registration successful! Please login.')
//       navigate('/login')
//     } catch (err) {
//       // Using 'err' instead of 'error' and actually using it
//       console.error('Registration error:', err)
      
//       // Handle different error types
//       if (err?.response?.status === 409) {
//         toast.error('User already exists. Please login instead.')
//       } else if (err?.response?.data?.message) {
//         toast.error(err.response.data.message)
//       } else {
//         toast.error('Registration failed. Please try again.')
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold gradient-text mb-2">Join MASFO Global</h1>
//           <p className="text-gray-600">Start your crypto journey today</p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <Input
//             label="Full Name"
//             placeholder="John Doe"
//             error={errors.name?.message}
//             {...register('name')}
//           />

//           <Input
//             label="Email Address"
//             type="email"
//             placeholder="you@example.com"
//             error={errors.email?.message}
//             {...register('email')}
//           />

//           <Input
//             label="Phone Number"
//             type="tel"
//             placeholder="+234 123 456 7890"
//             error={errors.phone?.message}
//             {...register('phone')}
//           />

//           <div className="relative">
//             <Input
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Create a password"
//               error={errors.password?.message}
//               {...register('password')}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
//             >
//               {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//             </button>
//           </div>

//           <div className="relative">
//             <Input
//               label="Confirm Password"
//               type={showConfirmPassword ? 'text' : 'password'}
//               placeholder="Confirm your password"
//               error={errors.confirmPassword?.message}
//               {...register('confirmPassword')}
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
//             >
//               {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//             </button>
//           </div>

//           <div className="flex items-center space-x-2">
//             <input 
//               type="checkbox" 
//               required
//               className="rounded text-primary-600 focus:ring-primary-500" 
//             />
//             <span className="text-sm text-gray-600">
//               I agree to the{' '}
//               <Link to="/terms" className="text-primary-600">Terms of Service</Link>
//               {' '}and{' '}
//               <Link to="/privacy" className="text-primary-600">Privacy Policy</Link>
//             </span>
//           </div>

//           <Button type="submit" fullWidth disabled={isLoading}>
//             {isLoading ? 'Creating Account...' : 'Create Account'}
//           </Button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-700">
//               Login
//             </Link>
//           </p>
//         </div>

//         <div className="mt-6 pt-6 border-t">
//           <div className="text-center text-xs text-gray-500">
//             By signing up, you'll get access to our free courses, community, and job board
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { User, Mail, Lock, Eye, EyeOff, Phone } from 'lucide-react'
import { Button } from '../components/common/Button'
import { Input } from '../components/common/Input'
import { authAPI } from '../services/api'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await authAPI.register({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone
      })
      
      toast.success('Registration successful! Please login.')
      navigate('/login')
    } catch (error) {
      console.error('Registration error:', error)
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Join MASFO Global</h1>
          <p className="text-gray-600">Start your crypto journey today</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Full Name"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register('name')}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+234 123 456 7890"
            error={errors.phone?.message}
            {...register('phone')}
          />

          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              error={errors.password?.message}
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <div className="relative">
            <Input
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              required
              className="rounded text-primary-600 focus:ring-primary-500" 
            />
            <span className="text-sm text-gray-600">
              I agree to the{' '}
              <Link to="/terms" className="text-primary-600">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-primary-600">Privacy Policy</Link>
            </span>
          </div>

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-700">
              Login
            </Link>
          </p>
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="text-center text-xs text-gray-500">
            By signing up, you'll get access to our free courses, community, and job board
          </div>
        </div>
      </div>
    </div>
  )
}