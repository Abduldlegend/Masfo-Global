const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

// Generate JWT tokens
const generateTokens = (userId, email, role) => {
  const accessToken = jwt.sign(
    { id: userId, email, role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRY }
  );
  
  const refreshToken = jwt.sign(
    { id: userId },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRY }
  );
  
  return { accessToken, refreshToken };
};

// Register user
const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    console.log('Registration attempt:', { name, email, phone });
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }
    
    // Create user
    const user = new User({
      name,
      email,
      password,
      phone
    });
    
    await user.save();
    console.log('User created successfully:', user._id); // Add this line
    
    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(user._id, user.email, user.role);
    
    // Save refresh token to user
    user.refreshToken = refreshToken;
    await user.save();
    
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(user._id, user.email, user.role);
    
    // Update refresh token
    user.refreshToken = refreshToken;
    await user.save();
    
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          profile: user.profile
        },
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get current user
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password -refreshToken')
      .populate('savedJobs')
      .populate('enrolledCourses');
    
    res.json({
      success: true,
      data: { user }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Logout
const logout = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { refreshToken: '' });
    res.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { register, login, getMe, logout };