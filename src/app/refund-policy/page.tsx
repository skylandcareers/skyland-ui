import Head from "next/head";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy | Skyland Immigration</title>
        <meta
          name="description"
          content="Read the refund policy of Skyland Immigration to understand the terms and conditions for refunds on our services."
        />
      </Head>

      <section className="bg-blue-600 text-white py-12 px-4 sm:px-8 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
          <p className="text-sm">Last updated: June 6, 2025</p>
        </div>
      </section>

      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 sm:px-8 md:px-20 py-10">
        <div className="max-w-5xl mx-auto space-y-6">
          <p>
            At Skyland Immigration, we are committed to providing excellent immigration consultancy services. 
            However, due to the nature of our services, please review our refund policy carefully before making any payments.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">1. Eligibility for Refunds</h2>
          <p>
            Refunds are considered only in the following cases:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>If Skyland Immigration cancels the service before it has been delivered.</li>
            <li>If there is a clear error or mistake on our part that prevents us from providing the agreed services.</li>
            <li>Any other exceptional circumstances approved by Skyland Immigration management.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. Non-Refundable Situations</h2>
          <p>
            Refunds will not be provided in the following situations:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>If the client withdraws or cancels the service after it has commenced.</li>
            <li>Due to client’s failure to provide necessary documents or information on time.</li>
            <li>For visa refusals or government decisions, as these are beyond our control.</li>
            <li>Change of mind or personal circumstances of the client.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. Refund Request Procedure</h2>
          <p>
            To request a refund, please contact us at <strong>support@skylandimmigration.com</strong> with:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Your full name and contact information.</li>
            <li>Details of the service purchased and payment receipt.</li>
            <li>Reason for requesting the refund.</li>
          </ul>
          <p>
            We will review your request and respond within 14 business days.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Refund Processing</h2>
          <p>
            Approved refunds will be processed back to the original payment method within 7-10 business days. Please note that it may take additional time for your bank or payment provider to reflect the refund.
          </p>

          {/* New sections from your other text below */}

          <h2 className="text-xl font-semibold mt-8 mb-2">5. License and Subscription Terms</h2>
          <p>
            The licensed materials, including all intellectual property rights within the licensed materials
            (such as copyright), are the sole and exclusive property of Skyland. By accepting these terms,
            you do not become the owner of the materials but are entitled to use them according to this agreement.
          </p>
          <p>
            You have obtained the right to use and access the licensed materials for the course(s) you have subscribed to
            during the subscription period. At the end of this period, your access will expire unless you renew your subscription.
          </p>
          <p>
            Subscriptions start immediately upon activation unless you notify Skyland with a desired start date before use.
            You must use the materials within the subscription period, with no free extensions for unused time.
          </p>
          <p>
            Renewals are considered a continuation of your current subscription and must be done prior to expiration.
            This agreement and your license will terminate at Skyland’s sole discretion if you fail to comply with any terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">6. Service Modifications and Availability</h2>
          <p>
            Skyland reserves the right to change, suspend, or discontinue any aspect of the Services at any time,
            including features, content, or database availability. Limits may be imposed on certain features or access
            without notice or liability.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">7. Disclaimer of Warranties and Liability</h2>
          <p>
            Skyland PROVIDES ITS SERVICES &quot;AS IS&quot; WITHOUT ANY WARRANTY, EXPRESS, IMPLIED, OR STATUTORY. We specifically disclaim
            implied warranties of title, merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            Skyland does not endorse or take responsibility for the accuracy or reliability of any opinion or advice made
            through the site by any party. Under no circumstances shall Skyland be liable for any loss or damage caused
            by reliance on information obtained through other sites.
          </p>
          <p>
            It is your responsibility to evaluate any information or advice obtained. Please seek professional advice as appropriate.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">8. Site Access and Subscription Withdrawal</h2>
          <p>
            Skyland reserves the right to withdraw subscriptions or the entire site if necessary.
            If this occurs, you will only be charged on a pro-rata basis for the time your subscription was active.
          </p>
          <p>
            Skyland will use reasonable efforts to rectify any site errors but does not guarantee continuous access in cases of
            software errors, viruses, or other technical or natural catastrophes beyond our control.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about our refund policy or terms, please reach out to us:
          </p>
          <p>
            Email: <strong>support@skylandimmigration.com</strong><br />
            Phone: +91-9032420020
          </p>
        </div>
      </div>
    </>
  );
}
