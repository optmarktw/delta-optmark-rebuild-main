import { useEffect } from 'react';
import { Shield, Lock, FileText, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary to-blue-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">Last Updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none space-y-12">
          
          {/* Introduction */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <FileText className="w-8 h-8" />
              1. Introduction
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Optmark Accountants ("we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                We are registered in the United Kingdom and operate in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. As a professional accounting firm, we take our data protection responsibilities seriously and are committed to transparency about how we handle your personal information.
              </p>
              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-3">Data Controller Information</h3>
                <p className="mb-2"><strong>Company:</strong> Optmark Accountants</p>
                <p className="mb-2"><strong>Address:</strong> Unit 5 Red Lion Court, Alexandra Road, Hounslow, Middlesex TW3 1JS, United Kingdom</p>
                <p className="mb-2"><strong>Email:</strong> info@optmark.co.uk</p>
                <p><strong>Phone:</strong> 020 3581 6781</p>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">2. Information We Collect</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>We collect several types of information from and about users of our services:</p>
              
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Personal Identification Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Full name, date of birth, and contact details (email address, phone number, postal address)</li>
                    <li>National Insurance number and Unique Taxpayer Reference (UTR)</li>
                    <li>Identification documents (passport, driving license) for anti-money laundering checks</li>
                    <li>Employment details and income information</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Business Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Company registration details and business structure</li>
                    <li>Financial records, including bank statements and transaction data</li>
                    <li>VAT registration numbers and tax-related information</li>
                    <li>Accounting records, invoices, and receipts</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Technical Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited on our website and time spent on pages</li>
                    <li>Referring website addresses and clickstream data</li>
                    <li>Cookies and similar tracking technologies (see our Cookie Policy)</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Communication Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Correspondence via email, phone, or post</li>
                    <li>Records of meetings and consultations</li>
                    <li>Feedback and survey responses</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">3. How We Use Your Information</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>We use the information we collect for the following purposes:</p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Providing Accounting Services:</strong> To prepare accounts, tax returns, and provide bookkeeping and payroll services as engaged by you.</li>
                <li><strong>Client Communication:</strong> To respond to your enquiries, provide updates on your accounts, and communicate about our services.</li>
                <li><strong>Legal and Regulatory Compliance:</strong> To comply with statutory obligations including filing returns with HMRC, Companies House, and other regulatory bodies.</li>
                <li><strong>Anti-Money Laundering (AML):</strong> To conduct identity verification and due diligence as required by the Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017.</li>
                <li><strong>Service Improvement:</strong> To analyze and improve our services, website functionality, and user experience.</li>
                <li><strong>Professional Development:</strong> To maintain our professional standards and for training purposes (anonymized where possible).</li>
                <li><strong>Marketing:</strong> To send information about our services, industry updates, and newsletters (only with your consent, and you can opt out at any time).</li>
                <li><strong>Business Operations:</strong> To manage our internal operations, including troubleshooting, data analysis, and research.</li>
              </ul>
            </div>
          </section>

          {/* Legal Basis */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <Lock className="w-8 h-8" />
              4. Legal Basis for Processing (GDPR)
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Under UK GDPR, we process your personal data on the following legal bases:</p>
              
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-accent">
                  <h3 className="text-xl font-semibold mb-3">Contractual Necessity</h3>
                  <p>Processing is necessary to perform our contract with you for the provision of accounting services.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-accent">
                  <h3 className="text-xl font-semibold mb-3">Legal Obligations</h3>
                  <p>We must process your data to comply with legal requirements, including tax laws, anti-money laundering regulations, and professional body requirements (ICAEW, ACA).</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-accent">
                  <h3 className="text-xl font-semibold mb-3">Legitimate Interests</h3>
                  <p>We process data where it is necessary for our legitimate business interests, such as improving our services, fraud prevention, and maintaining security, provided these interests do not override your rights.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-accent">
                  <h3 className="text-xl font-semibold mb-3">Consent</h3>
                  <p>For marketing communications and certain cookies, we rely on your explicit consent, which you can withdraw at any time.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">5. Data Sharing and Disclosure</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>We may share your personal information with the following categories of recipients:</p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>HMRC and Tax Authorities:</strong> We submit tax returns and related information to HMRC as part of our statutory obligations.</li>
                <li><strong>Companies House:</strong> We file annual accounts and other statutory documents for limited companies.</li>
                <li><strong>Third-Party Service Providers:</strong> We use trusted service providers for cloud storage (e.g., Xero, QuickBooks), email communications, and website hosting. These providers are contractually bound to protect your data.</li>
                <li><strong>Professional Advisers:</strong> We may consult with other professional advisers (lawyers, auditors, consultants) where necessary for your case, subject to confidentiality obligations.</li>
                <li><strong>Regulatory and Professional Bodies:</strong> We may disclose information to the Institute of Chartered Accountants in England and Wales (ICAEW) or other professional bodies as required.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect our legal rights.</li>
                <li><strong>Business Transfers:</strong> If we undergo a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
              </ul>

              <p className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <strong>Important:</strong> We never sell your personal data to third parties for marketing purposes.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">6. Data Security</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction:</p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Encryption:</strong> We use SSL/TLS encryption for data transmission and encrypt sensitive data at rest.</li>
                <li><strong>Access Controls:</strong> Access to personal data is restricted to authorized personnel only, on a need-to-know basis.</li>
                <li><strong>Secure Systems:</strong> We use secure, password-protected systems and regularly update our software to address vulnerabilities.</li>
                <li><strong>Staff Training:</strong> All staff receive regular training on data protection and confidentiality obligations.</li>
                <li><strong>Backup and Recovery:</strong> We maintain secure backups of data with appropriate recovery procedures.</li>
                <li><strong>Breach Notification:</strong> In the event of a data breach, we will notify you and the Information Commissioner's Office (ICO) within 72 hours where required by law.</li>
              </ul>

              <p className="mt-6">
                While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">7. Data Retention</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy and to comply with our legal obligations:</p>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Retention Periods</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Financial Records:</strong> At least 6 years from the end of the accounting period (as required by HMRC and Companies Act 2006).</li>
                  <li><strong>Tax Returns:</strong> 6 years from the end of the tax year to which they relate.</li>
                  <li><strong>Payroll Records:</strong> Minimum of 6 years after the employee leaves.</li>
                  <li><strong>AML Documentation:</strong> 5 years after the business relationship ends (Money Laundering Regulations).</li>
                  <li><strong>Correspondence and Emails:</strong> 6-7 years or as long as relevant to ongoing matters.</li>
                  <li><strong>Marketing Data:</strong> Until you withdraw consent or we no longer have a legitimate interest.</li>
                </ul>
              </div>

              <p className="mt-6">
                After the retention period expires, we will securely delete or anonymize your personal data unless we are required to retain it for legal, regulatory, or legitimate business purposes.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">8. Your Rights Under UK GDPR</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Under UK data protection law, you have the following rights:</p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Right to Access</h3>
                  <p>You can request a copy of the personal data we hold about you.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Right to Rectification</h3>
                  <p>You can request that we correct inaccurate or incomplete personal data.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Right to Erasure ("Right to be Forgotten")</h3>
                  <p>You can request deletion of your personal data in certain circumstances (subject to legal retention requirements).</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Right to Restrict Processing</h3>
                  <p>You can request that we limit how we use your data in certain situations.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Right to Data Portability</h3>
                  <p>You can request a copy of your data in a commonly used, machine-readable format.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Right to Object</h3>
                  <p>You can object to processing based on legitimate interests or for direct marketing purposes.</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Right to Withdraw Consent</h3>
                  <p>Where we rely on consent, you can withdraw it at any time without affecting the lawfulness of prior processing.</p>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-xl font-semibold mb-3">How to Exercise Your Rights</h3>
                <p className="mb-4">To exercise any of these rights, please contact us at:</p>
                <p className="mb-2"><strong>Email:</strong> info@optmark.co.uk</p>
                <p className="mb-2"><strong>Phone:</strong> 020 3581 6781</p>
                <p className="mb-4"><strong>Post:</strong> Unit 5 Red Lion Court, Alexandra Road, Hounslow, Middlesex TW3 1JS</p>
                <p>We will respond to your request within one month. There is no charge for most requests, but we may charge a reasonable fee for excessive or repeat requests.</p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">9. Cookies and Tracking Technologies</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We use cookies and similar tracking technologies to improve your experience on our website. For detailed information about the cookies we use and how to manage them, please see our <a href="/cookie-policy" className="text-accent hover:underline font-semibold">Cookie Policy</a>.
              </p>
              <p>
                In brief, we use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences</li>
              </ul>
            </div>
          </section>

          {/* International Transfers */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">10. International Data Transfers</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We primarily store and process your data within the United Kingdom. However, some of our service providers may process data outside the UK/EEA. Where this occurs, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Contractual Clauses (SCCs) approved by the UK ICO</li>
                <li>Adequacy decisions confirming equivalent data protection standards</li>
                <li>Binding Corporate Rules for multinational service providers</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">11. Third-Party Links</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">12. Children's Privacy</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete it.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">13. Changes to This Privacy Policy</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                <li>Sending you an email notification (for significant changes)</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <Mail className="w-8 h-8" />
              14. Contact Information
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@optmark.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>020 3581 6781</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Post</p>
                    <p>Unit 5 Red Lion Court<br />Alexandra Road<br />Hounslow, Middlesex TW3 1JS<br />United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-xl font-semibold mb-3">Right to Complain</h3>
                <p className="mb-4">
                  If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):
                </p>
                <p className="mb-2"><strong>Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.ico.org.uk</a></p>
                <p className="mb-2"><strong>Phone:</strong> 0303 123 1113</p>
                <p><strong>Address:</strong> Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
