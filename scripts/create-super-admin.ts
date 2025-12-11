import dbConnect from '../src/lib/db';
import User from '../src/models/User';
import bcrypt from 'bcryptjs';

const SUPER_ADMIN_PHONE = '8125588816';
const SUPER_ADMIN_PASS = 'Govinda@13579#';

async function main() {
    await dbConnect();

    const phone = process.argv[2] || SUPER_ADMIN_PHONE;
    const password = process.argv[3] || SUPER_ADMIN_PASS;

    console.log(`Creating Super Admin with Phone: ${phone}`);

    try {
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            console.log('User already exists. Updating role to super_admin...');
            existingUser.role = 'super_admin';
            existingUser.password = await bcrypt.hash(password, 10);
            await existingUser.save();
            console.log('✅ Updated existing user to Super Admin.');
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({
                name: 'Super Admin',
                phone,
                password: hashedPassword,
                role: 'super_admin',
            });
            console.log('✅ Created new Super Admin user.');
        }
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

main();
