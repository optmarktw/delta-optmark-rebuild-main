import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// HTML escaping function to prevent HTML injection attacks
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, service });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Validation failed: Missing required fields");
      return new Response(JSON.stringify({ error: "Name, email, and message are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Sanitize user inputs to prevent HTML injection
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeService = service ? escapeHtml(service) : '';
    const safeMessage = escapeHtml(message);

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Optmark Accountants <onboarding@resend.dev>",
      to: ["optmarktw@gmail.com"],
      subject: `Website Enquiry${safeService ? ` - ${safeService}` : ""} - ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { 
                margin: 0; 
                padding: 0; 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
                line-height: 1.6; 
                color: #262f3d;
                background-color: #f5f5f5;
              }
              .email-container { 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: #ffffff;
              }
              .header { 
                background-color: #262f3d;
                padding: 30px 20px;
                text-align: center;
              }
              .header-accent {
                height: 4px;
                background: linear-gradient(90deg, #30b5a6 0%, #26a89a 100%);
                margin-bottom: 20px;
              }
              .logo-text {
                color: #ffffff;
                font-size: 28px;
                font-weight: bold;
                margin: 0;
                letter-spacing: 1px;
              }
              .logo-subtitle {
                color: #30b5a6;
                font-size: 14px;
                margin: 5px 0 0 0;
                letter-spacing: 2px;
                text-transform: uppercase;
              }
              .content { 
                padding: 40px 30px;
                background-color: #ffffff;
              }
              .enquiry-badge {
                display: inline-block;
                background-color: #30b5a6;
                color: #ffffff;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 20px;
              }
              .title {
                color: #262f3d;
                font-size: 22px;
                font-weight: bold;
                margin: 0 0 25px 0;
              }
              .info-card {
                background-color: #f8fafa;
                border-left: 4px solid #30b5a6;
                padding: 20px;
                margin-bottom: 20px;
                border-radius: 4px;
              }
              .field { 
                margin-bottom: 18px;
                padding-bottom: 18px;
                border-bottom: 1px solid #e8eef0;
              }
              .field:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
              }
              .label { 
                color: #30b5a6;
                font-weight: 600;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 6px;
              }
              .value { 
                color: #262f3d;
                font-size: 15px;
                margin-top: 6px;
              }
              .value a {
                color: #30b5a6;
                text-decoration: none;
                font-weight: 500;
              }
              .message-box {
                background-color: #ffffff;
                border: 1px solid #e8eef0;
                padding: 20px;
                border-radius: 4px;
                color: #262f3d;
                font-size: 15px;
                line-height: 1.8;
                white-space: pre-wrap;
                margin-top: 10px;
              }
              .action-buttons {
                margin: 30px 0 20px 0;
                text-align: center;
              }
              .button {
                display: inline-block;
                padding: 14px 28px;
                margin: 5px 8px;
                background-color: #30b5a6;
                color: #ffffff !important;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                font-size: 14px;
                letter-spacing: 0.5px;
                transition: background-color 0.3s;
              }
              .button-secondary {
                background-color: #262f3d;
              }
              .footer { 
                background-color: #262f3d;
                padding: 30px 20px;
                text-align: center;
                color: #9ca3af;
                font-size: 13px;
              }
              .footer-logo {
                color: #30b5a6;
                font-weight: bold;
                font-size: 16px;
                margin-bottom: 15px;
              }
              .footer-divider {
                height: 2px;
                background: linear-gradient(90deg, transparent 0%, #30b5a6 50%, transparent 100%);
                margin: 20px auto;
                max-width: 200px;
              }
              .footer-info {
                line-height: 1.8;
              }
              .footer-info a {
                color: #30b5a6;
                text-decoration: none;
              }
              .timestamp {
                margin-top: 20px;
                padding-top: 15px;
                border-top: 1px solid #3d4654;
                font-size: 12px;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <!-- Header -->
              <div class="header">
                <div class="header-accent"></div>
                <h1 class="logo-text">OPTMARK</h1>
                <p class="logo-subtitle">Accountants</p>
              </div>

              <!-- Content -->
              <div class="content">
                <div class="enquiry-badge">New Website Enquiry</div>
                <h2 class="title">Contact Form Submission</h2>

                <!-- Contact Information Card -->
                <div class="info-card">
                  <div class="field">
                    <div class="label">👤 Full Name</div>
                    <div class="value">${safeName}</div>
                  </div>

                  <div class="field">
                    <div class="label">📧 Email Address</div>
                    <div class="value">
                      <a href="mailto:${safeEmail}">${safeEmail}</a>
                    </div>
                  </div>

                  ${
                    safePhone
                      ? `
                  <div class="field">
                    <div class="label">📱 Phone Number</div>
                    <div class="value">
                      <a href="tel:${safePhone}">${safePhone}</a>
                    </div>
                  </div>
                  `
                      : ""
                  }

                  ${
                    safeService
                      ? `
                  <div class="field">
                    <div class="label">🔖 Service Interest</div>
                    <div class="value">${safeService}</div>
                  </div>
                  `
                      : ""
                  }
                </div>

                <!-- Message -->
                <div class="field" style="border: none;">
                  <div class="label">💬 Message</div>
                  <div class="message-box">${safeMessage}</div>
                </div>

                <!-- Action Buttons -->
                <div class="action-buttons">
                  <a href="mailto:${safeEmail}" class="button">Reply via Email</a>
                  ${safePhone ? `<a href="tel:${safePhone}" class="button button-secondary">Call Back</a>` : ""}
                </div>
              </div>

              <!-- Footer -->
              <div class="footer">
                <div class="footer-logo">OPTMARK ACCOUNTANTS</div>
                <div class="footer-divider"></div>
                <div class="footer-info">
                  Unit 5 Red Lion Court, Alexandra Road<br>
                  Hounslow, Middlesex, TW3 1JS<br>
                  <a href="tel:020 8696 7090">📞 020 8696 7090</a><br>
                  <a href="mailto:info@optmark.co.uk">✉️ info@optmark.co.uk</a>
                </div>
                <div class="timestamp">
                  Enquiry received on ${new Date().toLocaleString("en-GB", {
                    timeZone: "Europe/London",
                    dateStyle: "full",
                    timeStyle: "short",
                  })}
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  }
};

serve(handler);
