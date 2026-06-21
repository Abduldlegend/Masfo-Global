import { useState, useEffect } from 'react';
import { Plus, X as XIcon } from 'lucide-react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import toast from 'react-hot-toast';
import api from '../../services/api';

const initialCourseData = {
    title: '',
    slug: '',
    description: '',
    longDescription: '',
    image: '',
    duration: '',
    level: 'Beginner',
    category: 'foundation',
    price: 'Free',
    instructor: {
        name: '',
        bio: '',
        avatar: ''
    },
    whatYouWillLearn: [],
    requirements: [],
    curriculum: [],
    students: 0,
    rating: 0,
    isPublished: true
};

const categories = [
    { value: 'foundation', label: 'Foundation' },
    { value: 'development', label: 'Development' },
    { value: 'defi', label: 'DeFi' },
    { value: 'nft', label: 'NFT' },
    { value: 'trading', label: 'Trading' },
    { value: 'security', label: 'Security' }
];

const levels = ['Beginner', 'Intermediate', 'Advanced'];
const priceOptions = ['Free', '$49', '$59', '$79', '$89', '$99', '$129', '$149', '$199'];

export const CourseForm = ({ course, onSuccess, onCancel }) => {
    const [formData, setFormData] = useState(initialCourseData);
    const [isLoading, setIsLoading] = useState(false);
    const [newLearnItem, setNewLearnItem] = useState('');
    const [newRequirement, setNewRequirement] = useState('');
    const [newCurriculumItem, setNewCurriculumItem] = useState({ week: '', title: '', topics: [], duration: '' });
    const [newTopic, setNewTopic] = useState('');
    const isEditing = !!course;

    useEffect(() => {
        if (course) {
            setFormData({
                ...course,
                whatYouWillLearn: course.whatYouWillLearn || [],
                requirements: course.requirements || [],
                curriculum: course.curriculum || []
            });
        }
    }, [course]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleAddLearnItem = () => {
        if (newLearnItem.trim()) {
            setFormData(prev => ({
                ...prev,
                whatYouWillLearn: [...prev.whatYouWillLearn, newLearnItem.trim()]
            }));
            setNewLearnItem('');
        }
    };

    const handleRemoveLearnItem = (index) => {
        setFormData(prev => ({
            ...prev,
            whatYouWillLearn: prev.whatYouWillLearn.filter((_, i) => i !== index)
        }));
    };

    const handleAddRequirement = () => {
        if (newRequirement.trim()) {
            setFormData(prev => ({
                ...prev,
                requirements: [...prev.requirements, newRequirement.trim()]
            }));
            setNewRequirement('');
        }
    };

    const handleRemoveRequirement = (index) => {
        setFormData(prev => ({
            ...prev,
            requirements: prev.requirements.filter((_, i) => i !== index)
        }));
    };

    const handleAddTopic = () => {
        if (newTopic.trim()) {
            setNewCurriculumItem(prev => ({
                ...prev,
                topics: [...prev.topics, newTopic.trim()]
            }));
            setNewTopic('');
        }
    };

    const handleRemoveTopic = (index) => {
        setNewCurriculumItem(prev => ({
            ...prev,
            topics: prev.topics.filter((_, i) => i !== index)
        }));
    };

    const handleAddCurriculum = () => {
        if (newCurriculumItem.week && newCurriculumItem.title && newCurriculumItem.topics.length > 0) {
            setFormData(prev => ({
                ...prev,
                curriculum: [...prev.curriculum, {
                    week: parseInt(newCurriculumItem.week),
                    title: newCurriculumItem.title,
                    topics: newCurriculumItem.topics,
                    duration: newCurriculumItem.duration || '45 min'
                }]
            }));
            setNewCurriculumItem({ week: '', title: '', topics: [], duration: '' });
        } else {
            toast.error('Please fill in week, title, and at least one topic');
        }
    };

    const handleRemoveCurriculum = (index) => {
        setFormData(prev => ({
            ...prev,
            curriculum: prev.curriculum.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Generate slug from title if not provided
            const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            const courseData = {
                ...formData,
                slug,
                students: formData.students || 0,
                rating: formData.rating || 0
            };

            let response;
            if (isEditing) {
                response = await api.put(`/admin/courses/${course._id}`, courseData);
                toast.success('Course updated successfully!');
            } else {
                response = await api.post('/admin/courses', courseData);
                toast.success('Course created successfully!');
            }

            onSuccess(response.data.data.course);
        } catch (error) {
            console.error('Error saving course:', error);
            toast.error(error.response?.data?.message || 'Failed to save course');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Course Title *"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Blockchain Fundamentals"
                />
                <Input
                    label="Slug (URL)"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="e.g., blockchain-fundamentals"
                    helper="Leave blank to auto-generate from title"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Level *</label>
                    <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        required
                    >
                        {levels.map(level => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        required
                    >
                        {categories.map(cat => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <select
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    >
                        {priceOptions.map(price => (
                            <option key={price} value={price}>{price}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Duration *"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 6 weeks"
                />
                <Input
                    label="Course Image URL"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://images.unsplash.com/..."
                />
            </div>

            <Input
                label="Short Description *"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Brief description of the course"
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Long Description *</label>
                <textarea
                    name="longDescription"
                    value={formData.longDescription}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 resize-none"
                    required
                    placeholder="Detailed description of the course..."
                />
            </div>

            {/* Instructor Information */}
            <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Instructor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Instructor Name *"
                        name="instructor.name"
                        value={formData.instructor.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Prof. Ahmed Musa"
                    />
                    <Input
                        label="Instructor Avatar URL"
                        name="instructor.avatar"
                        value={formData.instructor.avatar}
                        onChange={handleChange}
                        placeholder="https://randomuser.me/api/portraits/..."
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructor Bio</label>
                    <textarea
                        name="instructor.bio"
                        value={formData.instructor.bio}
                        onChange={handleChange}
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 resize-none"
                        placeholder="Brief bio of the instructor..."
                    />
                </div>
            </div>

            {/* What You'll Learn */}
            <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">What You'll Learn</h3>
                <div className="flex gap-2 mb-3">
                    <Input
                        value={newLearnItem}
                        onChange={(e) => setNewLearnItem(e.target.value)}
                        placeholder="Add a learning outcome"
                        className="flex-1"
                    />
                    <Button type="button" onClick={handleAddLearnItem} size="sm">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.whatYouWillLearn.map((item, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                        >
                            {item}
                            <button
                                type="button"
                                onClick={() => handleRemoveLearnItem(index)}
                                className="hover:text-red-600"
                            >
                                <XIcon className="h-3 w-3" />
                            </button>
                        </span>
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
                    <Button type="button" onClick={handleAddRequirement} size="sm">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.requirements.map((item, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                            {item}
                            <button
                                type="button"
                                onClick={() => handleRemoveRequirement(index)}
                                className="hover:text-red-600"
                            >
                                <XIcon className="h-3 w-3" />
                            </button>
                        </span>
                    ))}
                </div>
            </div>

            {/* Curriculum */}
            <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Curriculum</h3>

                {/* Add Curriculum Form */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <Input
                            label="Week"
                            type="number"
                            value={newCurriculumItem.week}
                            onChange={(e) => setNewCurriculumItem(prev => ({ ...prev, week: e.target.value }))}
                            placeholder="1"
                        />
                        <Input
                            label="Title"
                            value={newCurriculumItem.title}
                            onChange={(e) => setNewCurriculumItem(prev => ({ ...prev, title: e.target.value }))}
                            placeholder="e.g., Introduction to Blockchain"
                        />
                        <Input
                            label="Duration"
                            value={newCurriculumItem.duration}
                            onChange={(e) => setNewCurriculumItem(prev => ({ ...prev, duration: e.target.value }))}
                            placeholder="e.g., 45 min"
                        />
                    </div>

                    <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Topics</label>
                        <div className="flex gap-2 mb-2">
                            <Input
                                value={newTopic}
                                onChange={(e) => setNewTopic(e.target.value)}
                                placeholder="Add a topic"
                                className="flex-1"
                            />
                            <Button type="button" onClick={handleAddTopic} size="sm">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {newCurriculumItem.topics.map((topic, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                                >
                                    {topic}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTopic(index)}
                                        className="hover:text-red-600"
                                    >
                                        <XIcon className="h-3 w-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                        {newCurriculumItem.topics.length > 0 && (
                            <Button
                                type="button"
                                onClick={handleAddCurriculum}
                                size="sm"
                                className="mt-3"
                            >
                                Add Week {newCurriculumItem.week}
                            </Button>
                        )}
                    </div>
                </div>

                {/* Existing Curriculum */}
                <div className="space-y-2">
                    {formData.curriculum.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white border rounded-lg"
                        >
                            <div>
                                <span className="font-semibold text-sm">Week {item.week}:</span>
                                <span className="ml-2">{item.title}</span>
                                <span className="ml-2 text-gray-500 text-sm">({item.duration})</span>
                                <div className="text-xs text-gray-500 mt-1">
                                    Topics: {item.topics.join(', ')}
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleRemoveCurriculum(index)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                                <XIcon className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Options */}
            <div className="border-t pt-4">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="isPublished"
                        checked={formData.isPublished}
                        onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                        className="rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">Published (visible to students)</span>
                </label>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4 border-t">
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1"
                >
                    {isLoading ? 'Saving...' : isEditing ? 'Update Course' : 'Create Course'}
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