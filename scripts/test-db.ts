
import dbConnect from '../src/lib/db';

async function main() {
    try {
        console.log('Testing MongoDB connection...');
        await dbConnect();
        console.log('✅ Successfully connected to MongoDB!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

main();
