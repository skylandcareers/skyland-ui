import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IJob extends Document {
    title: string;
    country: string; // Added field
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    salaryRange?: string; // e.g. "50k - 70k"
    description: string;
    requirements: string[];
    isActive: boolean;
    createdAt: Date;
}

const JobSchema: Schema = new Schema({
    title: {
        type: String,
        required: [true, 'Job title is required'],
        trim: true
    },
    country: {
        type: String,
        required: [true, 'Country is required'],
        trim: true
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        trim: true
    },
    type: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
        default: 'Full-time'
    },
    salaryRange: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    requirements: {
        type: [String],
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>('Job', JobSchema);

export default Job;
