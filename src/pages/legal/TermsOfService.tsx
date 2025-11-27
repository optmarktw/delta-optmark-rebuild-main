import { useEffect } from 'react';
import { Scale, FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary to-blue-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Scale className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">Last Updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none space-y-12">

          {/* Agreement to Terms */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <FileText className="w-8 h-8" />
              1. Agreement to Terms
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you", or "your") and Optmark Accountants ("we", "us", "our", or "the Firm") regarding your use of our professional accounting services and website.
              </p>
              <p>
                By engaging our services or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our services or website.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                <p className="font-semibold mb-2">Important:</p>
                <p>You confirm that you have the legal capacity to enter into this agreement and, if representing a business, that you have the authority to bind that entity to these Terms.</p>
              </div>
            </div>
          </section>

          {/* Our Services */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">2. Our Services</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Optmark Accountants is a professional accounting practice operating in the United Kingdom. Our team includes qualified members of the Institute of Chartered Accountants in England and Wales (ICAEW) holding the ACA designation.
              </p>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Services We Offer:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tax Preparation and Planning (personal and corporate)</li>
                  <li>Audit and Assurance Services</li>
                  <li>Bookkeeping and Payroll Management</li>
                  <li>Management Accounting and Reporting</li>
                  <li>Business Advisory and Strategic Planning</li>
                  <li>Company Secretarial Services</li>
                  <li>HMRC Representation and Compliance</li>
                  <li>VAT Registration and Returns</li>
                </ul>
              </div>

              <p className="mt-6">
                The specific services to be provided will be detailed in your individual Letter of Engagement, which forms part of the contract between us. Services may vary depending on your specific needs and our professional assessment.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
                <h3 className="text-xl font-semibold mb-3">Professional Standards</h3>
                <p>
                  We conduct all services in accordance with professional and ethical standards set by the ICAEW, including the Code of Ethics, technical standards, and practice guidelines. We maintain professional indemnity insurance as required by our professional body.
                </p>
              </div>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <CheckCircle className="w-8 h-8" />
              3. Client Responsibilities
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>As our client, you agree to:</p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Provide Accurate Information</h3>
                  <p>You must provide complete, accurate, and timely information and documentation necessary for us to perform our services. This includes financial records, receipts, invoices, bank statements, and any other relevant documents.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Timely Document Submission</h3>
                  <p>You agree to submit all required information by agreed deadlines to ensure we can meet statutory filing dates and avoid penalties. We cannot be held responsible for late submissions resulting from your failure to provide information on time.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Payment Obligations</h3>
                  <p>You agree to pay all fees and charges as outlined in your engagement letter within the specified payment terms (typically 14-30 days from invoice date).</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Cooperation and Communication</h3>
                  <p>You agree to respond promptly to our requests for information, clarification, or approval. Delays in communication may affect our ability to meet deadlines.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Accuracy of Records</h3>
                  <p>You are responsible for maintaining proper books and records as required by law. We rely on the information you provide and cannot verify all underlying data unless specifically engaged for audit or assurance work.</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded mt-6">
                <p className="font-semibold mb-2">Important Notice:</p>
                <p>Failure to fulfill these responsibilities may result in incomplete or inaccurate work, missed deadlines, regulatory penalties, or termination of our services.</p>
              </div>
            </div>
          </section>

          {/* Professional Engagement */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">4. Professional Engagement</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Letter of Engagement</h3>
                <p className="mb-4">
                  Before commencing work, we will provide you with a Letter of Engagement that outlines:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The scope of services to be provided</li>
                  <li>Our responsibilities and your responsibilities</li>
                  <li>Fee structure and payment terms</li>
                  <li>Expected timescales and deadlines</li>
                  <li>Terms for termination of services</li>
                  <li>Limitations of liability</li>
                </ul>
                <p className="mt-4">
                  You must sign and return the engagement letter before we begin work. The engagement letter, together with these Terms, forms the complete agreement between us.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Scope and Limitations</h3>
                <p>
                  Unless specifically agreed in writing, our services do not include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Detection of fraud, errors, or illegal acts</li>
                  <li>Legal advice (we may refer you to solicitors where appropriate)</li>
                  <li>Investment advice or financial planning</li>
                  <li>Valuation services (unless specifically engaged)</li>
                  <li>Compliance with laws of jurisdictions outside England and Wales</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Professional Independence and Ethics</h3>
                <p>
                  We adhere to the ICAEW Code of Ethics, which requires us to maintain objectivity, integrity, and professional competence. We may decline to act or cease acting if accepting or continuing the engagement would compromise our professional standards or create unacceptable conflicts of interest.
                </p>
              </div>
            </div>
          </section>

          {/* Fees and Payment */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">5. Fees and Payment Terms</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Fee Structures</h3>
                <p className="mb-4">We offer flexible fee arrangements depending on the nature of the work:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fixed Fees:</strong> Agreed upfront for specific, well-defined services (e.g., annual accounts preparation, tax return filing)</li>
                  <li><strong>Hourly Rates:</strong> For advisory work or projects where scope is difficult to define precisely</li>
                  <li><strong>Monthly Retainers:</strong> For ongoing services such as bookkeeping, payroll, or continuous advisory</li>
                  <li><strong>Value-Based Pricing:</strong> For complex projects where our expertise provides significant value</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
                <p className="mb-4">Standard payment terms are:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due within 14-30 days of invoice date (as specified on your invoice)</li>
                  <li>We accept payment by bank transfer, cheque, or electronic payment methods</li>
                  <li>For larger projects, we may require payment in stages or upfront deposits</li>
                  <li>Monthly retainer fees are typically payable in advance</li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded mt-6">
                <h3 className="text-xl font-semibold mb-3">Late Payment</h3>
                <p className="mb-3">
                  If payment is not received by the due date:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We reserve the right to charge interest at 8% per annum above the Bank of England base rate, as permitted under the Late Payment of Commercial Debts (Interest) Act 1998</li>
                  <li>We may suspend services until payment is received</li>
                  <li>We may exercise a lien over your documents and records until outstanding fees are settled</li>
                  <li>Persistent late payment may result in termination of services</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Additional Charges</h3>
                <p>
                  Unless included in your fee agreement, you will be charged separately for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Disbursements (Companies House filing fees, HMRC searches, etc.)</li>
                  <li>Out-of-scope work requested after the engagement letter is signed</li>
                  <li>Travel expenses for off-site meetings (if applicable)</li>
                  <li>Third-party costs (specialist consultants, courier services, etc.)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Confidentiality */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <Shield className="w-8 h-8" />
              6. Confidentiality
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We are bound by a professional duty of confidentiality in accordance with ICAEW ethical standards. We will not disclose your confidential information to third parties without your consent, except where:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Legal Requirements:</strong> Disclosure is required or permitted by law (e.g., to HMRC, under court order, or for anti-money laundering reporting)</li>
                <li><strong>Professional Obligations:</strong> Disclosure is necessary to comply with professional standards or technical requirements</li>
                <li><strong>Quality Reviews:</strong> Our work may be reviewed by our professional body (ICAEW) or regulatory authorities</li>
                <li><strong>Advisers:</strong> We may need to disclose information to our professional advisers (insurers, legal counsel) under confidentiality obligations</li>
                <li><strong>Regulatory Authorities:</strong> Disclosures to bodies such as the Financial Conduct Authority, National Crime Agency, or other statutory bodies</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
                <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
                <p>
                  We process your personal data in accordance with UK GDPR and the Data Protection Act 2018. For full details, please refer to our <a href="/privacy-policy" className="text-accent hover:underline font-semibold">Privacy Policy</a>.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Third-Party Service Providers</h3>
                <p>
                  We may use third-party software and service providers (e.g., cloud accounting platforms like Xero or QuickBooks) to deliver our services efficiently. These providers are bound by confidentiality and data protection agreements. By engaging our services, you consent to this use of third-party tools.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Indemnity Insurance */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">7. Professional Indemnity Insurance</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We maintain professional indemnity insurance in accordance with the requirements of the ICAEW. Our policy covers claims arising from professional negligence in the performance of our services.
              </p>
              <p>
                Details of our insurance coverage, including the territorial coverage and the name and address of our insurer, are available upon request.
              </p>
            </div>
          </section>

          {/* Liability */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <AlertCircle className="w-8 h-8" />
              8. Liability and Limitations
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Standard of Care</h3>
                <p>
                  We will perform our services with reasonable skill and care, consistent with the standards expected of a competent professional accounting firm. However, we cannot guarantee specific outcomes or results, as these may depend on factors outside our control (e.g., HMRC decisions, court rulings, changes in law).
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Limitations of Liability</h3>
                <p className="mb-3">
                  Our liability to you for any loss, damage, or claim arising from our services is limited as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our total aggregate liability shall not exceed the lower of: (a) £1 million, or (b) the amount of our professional indemnity insurance coverage for the claim in question</li>
                  <li>We are not liable for consequential, indirect, or special losses (e.g., loss of profits, loss of business, loss of opportunity)</li>
                  <li>We are not liable for losses arising from your failure to provide accurate or timely information</li>
                  <li>We are not liable for losses resulting from your failure to act on our advice in a timely manner</li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded mt-6">
                <h3 className="text-xl font-semibold mb-3">Time Limits for Claims</h3>
                <p>
                  You must notify us in writing of any claim or potential claim within 12 months of becoming aware of the circumstances giving rise to the claim. Any legal proceedings must be commenced within 6 years of the date of the relevant service or the date you became aware (or should reasonably have become aware) of the loss.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Exclusions</h3>
                <p className="mb-3">We are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Losses arising from events beyond our reasonable control (force majeure)</li>
                  <li>Third-party reliance on our work (unless we have given written consent)</li>
                  <li>Loss or corruption of electronic data, unless caused by our negligence</li>
                  <li>Changes in law or tax treatment occurring after advice is given</li>
                </ul>
              </div>

              <p className="mt-6 text-base italic">
                Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under English law.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">9. Intellectual Property</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                All reports, advice, templates, and other materials we create for you remain our intellectual property. However, you are granted a non-exclusive, non-transferable license to use such materials for your internal business purposes.
              </p>
              <p>
                You retain ownership of all data and information you provide to us. Upon completion or termination of services, we will return or destroy your documents as requested, subject to our legal retention requirements.
              </p>
            </div>
          </section>

          {/* Data Protection */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">10. Data Protection and Privacy</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We are committed to protecting your personal data in accordance with UK GDPR and the Data Protection Act 2018. We act as a data controller for client relationship data and may act as a data processor when handling personal data on your behalf.
              </p>
              <p>
                For full details on how we collect, use, store, and protect your personal data, please refer to our comprehensive <a href="/privacy-policy" className="text-accent hover:underline font-semibold">Privacy Policy</a>.
              </p>
              <p>
                Where we process personal data on your behalf (e.g., payroll information for your employees), we will enter into a separate Data Processing Agreement outlining our respective responsibilities.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">11. Termination of Services</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Your Right to Terminate</h3>
                <p>
                  You may terminate our services at any time by giving written notice. The notice period will be as specified in your engagement letter (typically 30 days for ongoing services, or immediate for one-off projects).
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Our Right to Terminate</h3>
                <p className="mb-3">We may terminate our services immediately if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You fail to pay invoices within 60 days of the due date</li>
                  <li>You fail to provide necessary information or cooperation</li>
                  <li>There is a conflict of interest we cannot resolve</li>
                  <li>Continuing the engagement would breach professional or ethical standards</li>
                  <li>We are required to do so by law or our professional body</li>
                  <li>You engage in fraudulent, illegal, or unethical activities</li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded mt-6">
                <h3 className="text-xl font-semibold mb-3">Consequences of Termination</h3>
                <p className="mb-3">Upon termination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You remain liable for all fees incurred up to the termination date</li>
                  <li>We will provide you with all relevant documents and records (subject to payment of outstanding fees)</li>
                  <li>We may exercise a lien over your documents until all fees are paid</li>
                  <li>We are not liable for any consequences of termination, including missed deadlines or penalties</li>
                  <li>We will take reasonable steps to minimize disruption, but cannot guarantee continuity if termination occurs close to critical deadlines</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Complaints */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">12. Complaints Procedure</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We are committed to providing high-quality service. If you are dissatisfied with our services, we encourage you to raise your concerns promptly so we can address them.
              </p>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Internal Complaints Process</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact your usual point of contact or email info@optmark.co.uk with details of your complaint</li>
                  <li>We will acknowledge your complaint within 5 working days</li>
                  <li>We will investigate and provide a full response within 28 days</li>
                  <li>If you are not satisfied, you may escalate to a senior partner</li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
                <h3 className="text-xl font-semibold mb-3">ICAEW Escalation</h3>
                <p className="mb-3">
                  If you remain dissatisfied after our internal process, you may refer your complaint to:
                </p>
                <p className="mb-2"><strong>Institute of Chartered Accountants in England and Wales (ICAEW)</strong></p>
                <p className="mb-2">Chartered Accountants' Hall, Moorgate Place, London EC2R 6EA</p>
                <p className="mb-2">Phone: 020 7920 8100</p>
                <p>Website: <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.icaew.com</a></p>
              </div>
            </div>
          </section>

          {/* Website Use */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">13. Website Use and Disclaimer</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Our website (www.optmark.co.uk) is provided for general informational purposes only. While we strive to keep information accurate and up-to-date:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Information on the website does not constitute professional advice and should not be relied upon without seeking specific guidance for your circumstances</li>
                <li>Tax laws and regulations change frequently; website content may not reflect the latest changes</li>
                <li>We do not guarantee that the website will be available at all times or free from errors or viruses</li>
                <li>You must not use our website for any unlawful purpose or in violation of these Terms</li>
              </ul>

              <p className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <strong>Important:</strong> Always contact us directly for advice specific to your situation. Do not rely solely on website content for financial or tax decisions.
              </p>
            </div>
          </section>

          {/* Anti-Money Laundering */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">14. Anti-Money Laundering Compliance</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                As a professional services firm, we are subject to the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017. This means we are legally required to:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Verify Your Identity:</strong> We must obtain satisfactory evidence of your identity before commencing services. This typically includes photo ID (passport or driving license) and proof of address (utility bill or bank statement).</li>
                <li><strong>Conduct Due Diligence:</strong> We may need to verify the source of funds and conduct background checks, particularly for larger transactions or higher-risk clients.</li>
                <li><strong>Report Suspicious Activity:</strong> We are obliged to report any suspicious activity to the National Crime Agency (NCA) without informing you if we have reasonable grounds to suspect money laundering or terrorist financing.</li>
                <li><strong>Maintain Records:</strong> We must keep records of identification and due diligence checks for at least 5 years after the relationship ends.</li>
              </ul>

              <p className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                Your cooperation with our AML procedures is a condition of engagement. Failure to provide requested documentation may prevent us from acting for you.
              </p>
            </div>
          </section>

          {/* Force Majeure */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">15. Force Majeure</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We are not liable for any failure or delay in performing our obligations if such failure or delay is due to events beyond our reasonable control, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Natural disasters (floods, earthquakes, severe weather)</li>
                <li>Pandemics or epidemics</li>
                <li>War, terrorism, or civil unrest</li>
                <li>Government actions or restrictions</li>
                <li>Failure of telecommunications or IT systems not caused by our negligence</li>
                <li>Strikes or industrial action</li>
              </ul>
              <p className="mt-4">
                In such circumstances, we will take reasonable steps to minimize disruption and notify you as soon as practicable.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">16. Governing Law and Jurisdiction</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                These Terms and any dispute or claim arising out of or in connection with them or their subject matter (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.
              </p>
              <p>
                The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms or their subject matter.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">17. Changes to These Terms</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We reserve the right to update or modify these Terms at any time. Changes may be necessary due to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Changes in law or professional regulations</li>
                <li>Changes in our business practices or service offerings</li>
                <li>Improvement of clarity or accuracy</li>
              </ul>
              <p className="mt-4">
                We will notify you of material changes by email or by posting a prominent notice on our website. The "Last Updated" date at the top of this page indicates when the Terms were last revised.
              </p>
              <p>
                Your continued use of our services after changes are posted constitutes acceptance of the updated Terms. If you do not agree to the changes, you may terminate the engagement in accordance with Section 11.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">18. Contact Information</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                <p><strong>Email:</strong> info@optmark.co.uk</p>
                <p><strong>Phone:</strong> 020 3581 6781</p>
                <p><strong>Address:</strong> Unit 5 Red Lion Court, Alexandra Road, Hounslow, Middlesex TW3 1JS, United Kingdom</p>
                <p><strong>Website:</strong> <a href="http://www.optmark.co.uk" className="text-accent hover:underline">www.optmark.co.uk</a></p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
