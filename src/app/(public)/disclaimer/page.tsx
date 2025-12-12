import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | Skyland Immigration</title>
        <meta
          name="description"
          content="Disclaimer for the Skyland Immigration website outlining terms, copyright, and liability limitations."
        />
      </Head>

      <section className="bg-blue-600 text-white py-12 px-4 sm:px-8 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Disclaimer</h1>
        </div>
      </section>

      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 sm:px-8 md:px-20 py-10">
        <div className="max-w-5xl mx-auto space-y-6 leading-relaxed">
          <p>
            The term <strong>user</strong> refers to the visitor browsing this site and <strong>Skyland</strong> refers to Skyland Career Services Pvt Ltd. The <strong>site</strong> refers to www.skylandimmigration.com, owned and monitored by Skyland. By using this site, you agree to abide by these terms and conditions.
          </p>

          <p>
            Since the scope of engagement varies per client, it is your responsibility to request a formal Retainer Agreement from Skyland,
            including the refund policy relevant to your case. Please evaluate these documents carefully before making any payments.
          </p>

          <p>
            The information on this site is general and may not apply to your specific situation as laws constantly change. While we strive to keep the site current and accurate, Skyland is not responsible for outdated or incomplete information.
          </p>

          <p>
            This site does not provide legal advice. You should consult a qualified attorney for advice tailored to your situation. Skyland disclaims any liability arising from reliance on the site’s content.
          </p>

          <p>
            Skyland does not guarantee that information on this website is error-free, complete, or current. We reserve the right to change any information at any time without notice.
          </p>

          <p>
            Skyland does not warrant that the site, its servers, or emails are free from viruses or harmful components. We will not be liable for any damages resulting from your use of this website.
          </p>

          <p>
            To the extent permitted by law, Skyland disclaims all warranties and limits liability to the cost of services provided. You must indemnify and hold harmless Skyland, its employees, and agents from liabilities incurred except those caused by our negligence.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Copyright</h2>
          <p>
            All material on this website is the property of Skyland Career Services Pvt Ltd or its licensors. You may download material for personal use only and must not reproduce, modify, distribute, or use any content for commercial purposes without prior written permission.
          </p>

          <p>
            Trademarks, logos, and service marks on this website belong to Skyland or third parties and may not be used without consent.
          </p>

          <p>
            Website content - including text, graphics, logos, images, software, and data - is protected by copyright and trademark laws internationally. Unauthorized copying or redistribution is prohibited.
          </p>

          <p>
            Skyland reserves the right to change the terms and conditions governing this website without notice.
          </p>

          <p>
            The compilation of all content on this site is exclusively owned by Skyland and protected under international copyright laws.
          </p>

          <p>
            All software used on this website is owned by Skyland or its suppliers and protected by copyright laws.
          </p>

          <p>
            No portion of this website or its contents may be republished or redistributed without prior written consent.
          </p>

          <p>
            At Skyland Immigration, we are committed to transforming your dreams of international exploration into reality through expert visa consultancy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Contact Information</h2>
          <p>
            4th Floor Vasavi MPM Grand, Ameerpet, Yella Reddy Guda, Hyderabad, Telangana - 500073<br />
            Phone: +91-9032420020<br />
            Email: info@skylandimmigration.com
          </p>
        </div>
      </div>
    </>
  );
}
