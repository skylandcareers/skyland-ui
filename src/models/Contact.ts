import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
    name: string;
    email: string;
    phone: string;
    source_url?: string;
    subject?: string;
    message?: string;
    // Eligibility Fields
    jobCategory?: string;
    country?: string;
    education?: string;
    desiredSalary?: number;
    experienceYears?: number;
    hasJobOffer?: boolean;
    passportMonths?: number;
    eligibilityStatus?: string;
    eligibilityScore?: number;
    // Lead Management Fields
    status?: 'New' | 'Contacted' | 'In Progress' | 'Converted' | 'Lost';
    priority?: 'Low' | 'Medium' | 'High';
    notes?: string;
    revenue?: number; // Added for Sales Entry
    lastContactedAt?: Date;
    assignedTo?: string | any; // Type 'any' to handle populated user object

    createdAt: Date;
}

const ContactSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill a valid email address'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
    },
    source_url: {
        type: String,
        required: false,
    },
    subject: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: false,
    },
    // Eligibility Fields
    jobCategory: { type: String, required: false },
    country: { type: String, required: false },
    education: { type: String, required: false },
    desiredSalary: { type: Number, required: false },
    experienceYears: { type: Number, required: false },
    hasJobOffer: { type: Boolean, required: false },
    passportMonths: { type: Number, required: false },
    eligibilityStatus: { type: String, required: false },
    eligibilityScore: { type: Number, required: false },

    // Lead Management Fields
    status: {
        type: String,
        enum: ['New', 'Contacted', 'In Progress', 'Converted', 'Lost'],
        default: 'New',
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
    },
    notes: {
        type: String,
        required: false,
    },
    revenue: {
        type: Number,
        default: 0
    },
    lastContactedAt: {
        type: Date,
        required: false,
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Prevent overwrite on HMR
const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
