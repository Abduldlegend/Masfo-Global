import { useState, useEffect } from 'react';
import { Plus, X as XIcon } from 'lucide-react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import toast from 'react-hot-toast';
import api from '../../services/api';

const initialJobData = {
    title: '',
    slug: '',
    company: '',
    companyLogo: '',
    companyDescription: '',
    location: '',
    type: 'Full-time',
    salary: '',
    salaryMin: '',
    salaryMax: '',
    currency: 'NGN',
    experience: '',
    skills: [],
    category: '',
    description: '',
    responsibilities: [],
    requirements: [],
    benefits: [],
    isFeatured: false,
    isActive: true,
    deadline: ''
};

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
const jobCategories = ['Development', 'Security', 'DeFi', 'Frontend', 'Community', 'NFT', 'Content', 'Trading'];
const currencies = ['NGN', 'USD', 'EUR', 'GBP'];

export const JobForm = ({ job, onSuccess, onCancel }) => {
    const [formData, setFormData] = useState(initialJobData);
    const [isLoading, setIsLoading] = useState(false);
    const [newSkill, setNewSkill] = useState('');
    const [newResponsibility, setNewResponsibility] = useState('');
    const [newRequirement, setNewRequirement] = useState('');
    const [newBenefit, setNewBenefit] = useState('');
    const isEditing = !!job;

    useEffect(() => {
        if (job) {
            setFormData({
                ...job,
                skills: job.skills || [],
                responsibilities: job.responsibilities || [],
                requirements: job.requirements || [],
                benefits: job.benefits || [],
                salaryMin: job.salaryMin || '',
                salaryMax: job.salaryMax || ''
            });
        }
    }, [job]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAddItem = (field, value, setter) => {
        if (value.trim()) {
            setFormData(prev => ({
                ...prev,
                [field]: [...prev[field], value.trim()]
            }));
            setter('');
        }
    };

    const handleRemoveItem = (field, index) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            const jobData = {
                ...formData,
                slug,
                salaryMin: parseFloat(formData.salaryMin) || 0,
                salaryMax: parseFloat(formData.salaryMax) || 0
            };

            let response;
            if (isEditing) {
                response = await api.put(`/admin/jobs/${job._id}`, jobData);
                toast.success('Job updated successfully!');
            } else {
                response = await api.post('/admin/jobs', jobData);
                toast.success('Job posted successfully!');
            }

            onSuccess(response.data.data.job);
        } catch (error) {
            console.error('Error saving job:', error);
            toast.error(error.response?.data?.message || 'Failed to save job');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Job Title *"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Senior Blockchain Developer"
                />
                <Input
                    label="Slug (URL)"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="e.g., senior-blockchain-developer"
                    helper="Leave blank to auto-generate from title"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Company Name *"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Web3 Nigeria"
                />
                <Input
                    label="Company Logo URL"
                    name="companyLogo"
                    value={formData.companyLogo}
                    onChange={handleChange}
                    placeholder="https://via.placeholder.com/..."
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
                <textarea
                    name="companyDescription"
                    value={formData.companyDescription}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 resize-none"
                    placeholder="Brief description of the company..."
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Remote, Lagos, Abuja"
                />
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Type *</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        required
                    >
                        {jobTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <Input
                    label="Experience Level"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 3-5 years"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                    <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    >
                        {currencies.map(curr => (
                            <option key={curr} value={curr}>{curr}</option>
                        ))}
                    </select>
                </div>
                <Input
                    label="Min Salary"
                    name="salaryMin"
                    type="number"
                    value={formData.salaryMin}
                    onChange={handleChange}
                    placeholder="e.g., 300000"
                />
                <Input
                    label="Max Salary"
                    name="salaryMax"
                    type="number"
                    value={formData.salaryMax}
                    onChange={handleChange}
                    placeholder="e.g., 500000"
                />
            </div>

            <Input
                label="Salary Display"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g., ₦300k - ₦500k"
                helper="This will be displayed on the job card"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        required
                    >
                        <option value="">Select Category</option>
                        {jobCategories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <Input
                    label="Application Deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline ? formData.deadline.split('T')[0] : ''}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 resize-none"
                    required
                    placeholder="Detailed job description..."
                />
            </div>

            {/* Skills */}
            <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Skills</h3>
                <div className="flex gap-2 mb-3">
                    <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill (e.g., Solidity)"
                        className="flex-1"
                    />
                    <Button type="button" onClick={() => handleAddItem('skills', newSkill, setNewSkill)} size="sm">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.skills.map((item, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                            {item}
                            <button
                                type="button"
                                onClick={() => handleRemoveItem('skills', index)}
                                className="hover:text-red-600"
                            >
                                <XIcon className="h-3 w-3" />
                            </button>
                        </span>
                    ))}
                </div>
            </div>

            {/* Responsibilities */}
            <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Responsibilities</h3>
                <div className="flex gap-2 mb-3">
                    <Input
                        value={newResponsibility}
                        onChange={(e) => setNewResponsibility(e.target.value)}
                        placeholder="Add a responsibility"
                        className="flex-1"
                    />
                    <Button type="button" onClick={() => handleAddItem('responsibilities', newResponsibility, setNewResponsibility)} size="sm">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <div className="space-y-1">
                    {formData.responsibilities.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                            <span className="flex-1 text-sm">{item}</span>
                            <button
                                type="button"
                                onClick={() => handleRemoveItem('responsibilities', index)}
                                className="text-red-600 hover:bg-red-50 p-1 rounded"
                            >
                                <XIcon className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Requirements */}
            <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                <div className="flex gap-2 mb-3">
                    <Input
                        value={newRequirement}
                        onChange={(e) => setNewRequirement(e.target.value)}
                        placeholder="Add a requirement"
                        className="flex-1"
                    />
                    <Button type="button" onClick={() => handleAddItem('requirements', newRequirement, setNewRequirement)} size="sm">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <div className="space-y-1">
                    {formData.requirements.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                            <span className="flex-1 text-sm">{item}</span>
                            <button
                                type="button"
                                onClick={() => handleRemoveItem('requirements', index)}
                                className="text-red-600 hover:bg-red-50 p-1 rounded"
                            >
                                <XIcon className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits */}
            <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Benefits</h3>
                <div className="flex gap-2 mb-3">
                    <Input
                        value={newBenefit}
                        onChange={(e) => setNewBenefit(e.target.value)}
                        placeholder="Add a benefit"
                        className="flex-1"
                    />
                    <Button type="button" onClick={() => handleAddItem('benefits', newBenefit, setNewBenefit)} size="sm">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.benefits.map((item, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                        >
                            {item}
                            <button
                                type="button"
                                onClick={() => handleRemoveItem('benefits', index)}
                                className="hover:text-red-600"
                            >
                                <XIcon className="h-3 w-3" />
                            </button>
                        </span>
                    ))}
                </div>
            </div>

            {/* Additional Options */}
            <div className="border-t pt-4">
                <div className="flex flex-wrap gap-6">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="isFeatured"
                            checked={formData.isFeatured}
                            onChange={handleChange}
                            className="rounded text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">Featured Job</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleChange}
                            className="rounded text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">Active</span>
                    </label>
                </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4 border-t">
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1"
                >
                    {isLoading ? 'Saving...' : isEditing ? 'Update Job' : 'Post Job'}
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    onClick={onCancel}
                    className="flex-1"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};