import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Job from '@/models/Job';

const BIKE_RIDER = {
    title: 'Bike Rider',
    country: 'UAE',
    location: 'Kuwait',
    type: 'Full-time',
    salaryRange: '35000 - 40000 INR',
    description: `<h3>🇰🇼 URGENT REQUIREMENT FOR AL-HAZEM EXPRESS (KUWAIT)</h3>
<p><strong>Job Details</strong><br>
Position: Bike Rider<br>
Quantity (QTY): 100<br>
Contract Period: 2 Years</p>

<p><strong>💰 Salary & Compensation</strong><br>
Basic Salary: 120 KD<br>
Food Allowance: 20 KD<br>
Total Monthly Salary: 140 KD<br>
Benefits: Overtime, Annual Leave</p>

<p><strong>✅ Candidate Requirements (Job Description)</strong><br>
Experience: Must have 2-3 years of experience as a bike driver.<br>
Previous Work: Must have previous work experience in India or any GCC country.<br>
License: Must hold a valid Indian or GCC Licence (any one of them).<br>
Hiring Status: Must be ready for immediate recruitment (urgent hiring).<br>
Delivery Experience: Must have experience with Zomato, Swiggy, or other delivery services.<br>
Note: Must have an Experience Certificate from the delivery services.</p>

<p><strong>🏠 Company Provisions</strong><br>
The company provides the following facilities:</p>
<ul>
<li>Accommodation</li>
<li>Food</li>
<li>Medical</li>
<li>Insurance</li>
<li>Kuwait Licence</li>
</ul>

<p><strong>📋 Documents Required</strong></p>
<ul>
<li>Updated CV with contact information</li>
<li>Scanned License Copy</li>
<li>Scanned Passport Copy</li>
<li>Delivery Experience Certificate</li>
<li>Digital Photo</li>
<li>Half Body Photo</li>
</ul>

<p><strong>⚠️ Terms & Conditions</strong><br>
Only ready candidates should apply.<br>
Departure is from Mumbai only.<br>
Processing fee in advance is mandatory.<br>
The balance amount must be completed within 1 week after receiving the visa copy.</p>`,
    isActive: true
};

export async function GET() {
    try {
        await dbConnect();
        // Check by title AND location to avoid duplicates if title is generic
        const existing = await Job.findOne({ title: BIKE_RIDER.title, location: BIKE_RIDER.location });
        if (!existing) {
            await Job.create(BIKE_RIDER);
            return NextResponse.json({ message: 'Seeded Bike Rider job' });
        }
        return NextResponse.json({ message: 'Job already exists' });
    } catch (error) {
        console.error('Seed error:', error);
        return NextResponse.json({ error: 'Failed to seed' }, { status: 500 });
    }
}
