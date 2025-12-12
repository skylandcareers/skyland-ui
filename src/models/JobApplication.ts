import mongoose, { Schema, Document, Model } from 'mongoose';
import { IJob } from './Job';
import { IUser } from './User';

export interface IJobApplication extends Document {
    jobId: IJob['_id'];
    userId?: IUser['_id']; // Optional if user applies as guest (though req says guest applies with name/phone, user with profile)
    name: string;
    phone: string;
    email?: string;
    resumeUrl?: string;
    status: 'Pending' | 'Reviewed' | 'Shortlisted' | 'Rejected' | 'Hired';
    createdAt: Date;
}

const JobApplicationSchema: Schema = new Schema({
    jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false // Optional for guest applications
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    resumeUrl: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected', 'Hired'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const JobApplication: Model<IJobApplication> = mongoose.models.JobApplication || mongoose.model<IJobApplication>('JobApplication', JobApplicationSchema);

export default JobApplication;
