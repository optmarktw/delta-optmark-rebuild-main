import { useEffect } from 'react';
import { Cookie, Shield, BarChart, Settings, Chrome, Globe } from 'lucide-react';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary to-blue-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Cookie className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-white/90">Last Updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none space-y-12">

          {/* What Are Cookies */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <Cookie className="w-8 h-8" />
              1. What Are Cookies?
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p>
                Cookies allow websites to remember your actions and preferences (such as login details, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you return to the site or browse from one page to another.
              </p>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How Cookies Work</h3>
                <p className="mb-4">When you visit a website:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>The website sends a cookie to your browser</li>
                  <li>Your browser stores the cookie on your device</li>
                  <li>When you revisit the website, your browser sends the cookie back</li>
                  <li>The website reads the cookie to recognize you and personalize your experience</li>
                </ol>
              </div>

              <p className="mt-6">
                Cookies can be "session cookies" (which expire when you close your browser) or "persistent cookies" (which remain on your device for a set period or until you delete them).
              </p>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">2. How We Use Cookies</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Optmark Accountants uses cookies on our website (www.optmark.co.uk) to:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Improve Website Functionality:</strong> To ensure our website works properly and provides a smooth user experience</li>
                <li><strong>Remember Your Preferences:</strong> To save your settings and preferences so you don't have to re-enter them on each visit</li>
                <li><strong>Analyze Website Performance:</strong> To understand how visitors use our site and identify areas for improvement</li>
                <li><strong>Enhance Security:</strong> To protect against fraudulent activity and ensure the security of our website</li>
                <li><strong>Provide Relevant Content:</strong> To show you information that is most relevant to your interests</li>
              </ul>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">3. Types of Cookies We Use</h2>
            <div className="text-lg leading-relaxed space-y-6">
              
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold">Essential Cookies (Required)</h3>
                </div>
                <p className="mb-3">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as the website cannot function properly without them.
                </p>
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Session management cookies</li>
                  <li>Authentication and security cookies</li>
                  <li>Load balancing cookies</li>
                  <li>Accessibility cookies (font size, contrast preferences)</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 mb-3">
                  <BarChart className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold">Performance Cookies (Analytics)</h3>
                </div>
                <p className="mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website's functionality and user experience.
                </p>
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Analytics cookies (if used)</li>
                  <li>Page visit tracking</li>
                  <li>Time spent on pages</li>
                  <li>Navigation patterns</li>
                  <li>Error reporting and debugging</li>
                </ul>
                <p className="mt-3 text-base italic">
                  You can opt out of these cookies without affecting your ability to use the website.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-3 mb-3">
                  <Settings className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold">Functional Cookies</h3>
                </div>
                <p className="mb-3">
                  These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, more personalized features.
                </p>
                <p className="font-semibold mb-2">Examples:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Language preferences</li>
                  <li>Region or location selection</li>
                  <li>Font size and display preferences</li>
                  <li>Form data retention (to prevent data loss)</li>
                </ul>
                <p className="mt-3 text-base italic">
                  Disabling these cookies may result in less functionality and a less personalized experience.
                </p>
              </div>

            </div>
          </section>

          {/* Cookie Table */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">4. Detailed Cookie Information</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Below is a detailed list of cookies used on our website:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-slate-300 px-4 py-3 text-left">Cookie Name</th>
                      <th className="border border-slate-300 px-4 py-3 text-left">Purpose</th>
                      <th className="border border-slate-300 px-4 py-3 text-left">Duration</th>
                      <th className="border border-slate-300 px-4 py-3 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-base">
                    <tr>
                      <td className="border border-slate-300 px-4 py-3 font-mono">session_id</td>
                      <td className="border border-slate-300 px-4 py-3">Maintains your session across pages</td>
                      <td className="border border-slate-300 px-4 py-3">Session</td>
                      <td className="border border-slate-300 px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Essential</span></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-mono">security_token</td>
                      <td className="border border-slate-300 px-4 py-3">Protects against cross-site request forgery</td>
                      <td className="border border-slate-300 px-4 py-3">Session</td>
                      <td className="border border-slate-300 px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Essential</span></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3 font-mono">cookie_consent</td>
                      <td className="border border-slate-300 px-4 py-3">Records your cookie preferences</td>
                      <td className="border border-slate-300 px-4 py-3">1 year</td>
                      <td className="border border-slate-300 px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Essential</span></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-mono">_ga</td>
                      <td className="border border-slate-300 px-4 py-3">Google Analytics - distinguishes users</td>
                      <td className="border border-slate-300 px-4 py-3">2 years</td>
                      <td className="border border-slate-300 px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3 font-mono">_gid</td>
                      <td className="border border-slate-300 px-4 py-3">Google Analytics - distinguishes users</td>
                      <td className="border border-slate-300 px-4 py-3">24 hours</td>
                      <td className="border border-slate-300 px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Analytics</span></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-mono">_gat</td>
                      <td className="border border-slate-300 px-4 py-3">Google Analytics - throttles request rate</td>
                      <td className="border border-slate-300 px-4 py-3">1 minute</td>
                      <td className="border border-slate-300 px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3 font-mono">preferences</td>
                      <td className="border border-slate-300 px-4 py-3">Stores your site preferences</td>
                      <td className="border border-slate-300 px-4 py-3">6 months</td>
                      <td className="border border-slate-300 px-4 py-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Functional</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-base italic">
                Note: This list may be updated from time to time as we add or remove functionality from our website.
              </p>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">5. Third-Party Cookies</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Some cookies on our website are set by third-party service providers. We use these services to help us operate and improve our website:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Google Analytics</h3>
                  <p className="mb-3">
                    We use Google Analytics to understand how visitors use our site. Google Analytics uses cookies to collect information about your use of our website, including your IP address (anonymized), which is transmitted to and stored by Google.
                  </p>
                  <p className="mb-2">
                    <strong>Purpose:</strong> Website analytics and performance measurement
                  </p>
                  <p className="mb-2">
                    <strong>Data Collected:</strong> Page views, session duration, bounce rate, geographic location, device type
                  </p>
                  <p>
                    <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Privacy Policy</a>
                  </p>
                  <p className="mt-3">
                    <strong>Opt-out:</strong> You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Analytics Opt-out Browser Add-on</a>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Social Media Plugins</h3>
                  <p className="mb-3">
                    If we include social media sharing buttons (LinkedIn, Twitter, Facebook), these platforms may set cookies when you interact with them. We do not control these cookies.
                  </p>
                  <p>
                    Please refer to the respective privacy policies of these platforms:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-3">
                    <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn Privacy Policy</a></li>
                    <li><a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Twitter Privacy Policy</a></li>
                    <li><a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Facebook Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <Settings className="w-8 h-8" />
              6. Managing Your Cookie Preferences
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences in several ways:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-xl font-semibold mb-3">Cookie Consent Banner</h3>
                <p>
                  When you first visit our website, you will see a cookie consent banner allowing you to accept or reject non-essential cookies. You can change your preferences at any time by clearing your cookies and refreshing the page.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
                <p className="mb-3">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Clear all cookies when you close your browser</li>
                  <li>Allow cookies only from specific websites</li>
                </ul>
                <p className="mt-4">
                  Please note that if you block or delete essential cookies, some parts of our website may not function properly.
                </p>
              </div>
            </div>
          </section>

          {/* Browser Instructions */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
              <Globe className="w-8 h-8" />
              7. Browser-Specific Cookie Management
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Here's how to manage cookies in popular web browsers:</p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Chrome className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold">Google Chrome</h3>
                  </div>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Click the three-dot menu in the top-right corner</li>
                    <li>Select "Settings" → "Privacy and security" → "Cookies and other site data"</li>
                    <li>Choose your preferred cookie settings</li>
                    <li>To delete existing cookies, click "See all site data and permissions" → "Remove all"</li>
                  </ol>
                  <p className="mt-3">
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Chrome Help Center</a>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Mozilla Firefox</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Click the menu button and select "Settings"</li>
                    <li>Go to "Privacy & Security"</li>
                    <li>Under "Cookies and Site Data", choose your preferences</li>
                    <li>Click "Clear Data" to remove existing cookies</li>
                  </ol>
                  <p className="mt-3">
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Firefox Help Center</a>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Safari</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Go to Safari → "Preferences"</li>
                    <li>Click the "Privacy" tab</li>
                    <li>Choose your cookie blocking preferences</li>
                    <li>To remove cookies, go to Safari → "Clear History"</li>
                  </ol>
                  <p className="mt-3">
                    <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari Help Center</a>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Microsoft Edge</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Click the three-dot menu in the top-right corner</li>
                    <li>Select "Settings" → "Cookies and site permissions" → "Manage and delete cookies and site data"</li>
                    <li>Choose your cookie preferences</li>
                    <li>Toggle "Block third-party cookies" if desired</li>
                  </ol>
                  <p className="mt-3">
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Edge Help Center</a>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Mobile Browsers</h3>
                  <p className="mb-3"><strong>iOS (iPhone/iPad):</strong></p>
                  <p className="mb-3">Go to Settings → Safari → "Block All Cookies" or "Prevent Cross-Site Tracking"</p>
                  <p className="mb-3"><strong>Android:</strong></p>
                  <p>Open Chrome → Menu → Settings → Site settings → Cookies</p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact of Disabling */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">8. Impact of Disabling Cookies</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                While you have the right to block or delete cookies, doing so may affect your experience on our website:
              </p>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong>Essential Cookies:</strong> Blocking these will prevent the website from functioning properly. You may experience broken features, security issues, or inability to access certain pages.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong>Performance/Analytics Cookies:</strong> Disabling these will not affect website functionality, but will prevent us from understanding how visitors use our site and making improvements.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p><strong>Functional Cookies:</strong> Blocking these means the website won't remember your preferences, and you'll need to re-enter them each time you visit.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
                <p className="font-semibold mb-2">Our Recommendation:</p>
                <p>
                  For the best experience, we recommend allowing essential and functional cookies while making your own choice about analytics cookies based on your privacy preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">9. Updates to This Cookie Policy</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Updating the "Last Updated" date at the top of this page</li>
                <li>Displaying a notice on our website</li>
                <li>Requesting your consent again if required by law</li>
              </ul>
              <p className="mt-4">
                We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">10. Contact Information</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              
              <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                <p><strong>Email:</strong> info@optmark.co.uk</p>
                <p><strong>Phone:</strong> 020 3581 6781</p>
                <p><strong>Address:</strong> Unit 5 Red Lion Court, Alexandra Road, Hounslow, Middlesex TW3 1JS, United Kingdom</p>
                <p><strong>Website:</strong> <a href="http://www.optmark.co.uk" className="text-accent hover:underline">www.optmark.co.uk</a></p>
              </div>

              <p className="mt-6">
                For more information about your privacy rights, please see our <a href="/privacy-policy" className="text-accent hover:underline font-semibold">Privacy Policy</a>.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
