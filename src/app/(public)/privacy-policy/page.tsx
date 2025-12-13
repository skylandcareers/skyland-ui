import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Skyland Immigration</title>
        <meta
          name="description"
          content="Read the privacy policy of Skyland Immigration to understand how we collect and use your data."
        />
      </Head>

      <section className="bg-blue-600 text-white py-12 px-4 sm:px-8 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm">Last updated: June 6, 2025</p>
        </div>
      </section>

      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 sm:px-8 md:px-20 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Your name and job title</li>
            <li>Contact information including email address</li>
            <li>Demographic information such as postcode, preferences and interests</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">What We Do With The Information We Gather</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>Sending promotional emails</li>
            <li>Market research contact via email, phone, or mail</li>
            <li>Website customization according to your interests</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">Legal Basis for Processing Personal Data</h2>
          <p className="mb-4">
            We process your personal data based on your consent, our contractual obligations with you, compliance with legal obligations, and our legitimate interests in operating and improving our services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Your Data Protection Rights</h2>
          <ul className="list-disc list-inside mb-4">
            <li>The right to access, update, or delete your personal data</li>
            <li>The right to object to or restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time</li>
            <li>The right to lodge a complaint with a data protection authority</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">Links to Other Websites</h2>
          <p className="mb-4">
            We are not responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Controlling Your Personal Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Opt-out via form checkboxes or by contacting us</li>
            <li>No sale of personal data to third parties without consent</li>
            <li>Correction requests accepted via email</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">Cookies and Tracking Technology</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Used for improving user experience</li>
            <li>Cookies may be linked to personal info if provided</li>
            <li>May share aggregated tracking info with third parties</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">Security Of Data</h2>
          <p className="mb-4">
            We use commercially acceptable means to protect your Personal Data, but no method of transmission or storage is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Analytics and Third Party Services</h2>
          <p className="mb-4">
            We use tools like Google Analytics for monitoring site traffic. You may opt-out via browser add-ons.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Children’s Privacy</h2>
          <p className="mb-4">
            Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received such information, we will delete it from our records.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">International Data Transfers</h2>
          <p className="mb-4">
            If you are located outside of our operating country, please note that your information will be transferred, processed, and stored in that country. We take appropriate safeguards to ensure your data is treated securely in accordance with this policy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We update this policy periodically. Last updated: June 6, 2025.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
          <p className="mb-8">
            If you have any questions or concerns about this Privacy Policy, please contact us at: <br />
            <strong>Email:</strong> support@skylandcareers.com <br />
            <strong>Phone:</strong> +91-6300191853
          </p>
        </div>
      </div>
    </>
  );
}
