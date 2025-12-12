import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const s3 = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
});

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Helper to check authentication (optional, but good for security)
async function isAuthenticated() {
    // For now, allowing public uploads for assessments/applications.
    // In strict mode, we might want to rate limit or check basic auth if logged in.
    return true;
}

export async function POST(req: Request) {
    try {
        if (!process.env.AWS_BUCKET_NAME) {
            return NextResponse.json({ error: 'Storage configuration missing' }, { status: 500 });
        }

        const { filename, filetype } = await req.json();

        // Sanitize filename to prevent overwrites or path traversal
        const cleanFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
        const uniqueKey = `${Date.now()}-${cleanFilename}`;

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: uniqueKey,
            ContentType: filetype,
        });

        const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 300 }); // 5 minutes

        return NextResponse.json({
            uploadUrl: presignedUrl,
            fileUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${uniqueKey}`
        });

    } catch (error) {
        console.error('Presigned URL error:', error);
        return NextResponse.json({ error: 'Failed to generate upload URL' }, { status: 500 });
    }
}
