Extend the existing student portal prototype by adding authentication and onboarding screens.

Important:
Do NOT modify or redesign the current portal pages that already exist (dashboard, lessons, live sessions, community, profile). Leave the original prototype exactly as it is.

Instead, create new frames and components in a separate section called Authentication & Access Flow that visually match the existing design system.

The new screens must follow the same visual style as the existing portal:
	•	soft color palette (purple, teal, light blue, pink)
	•	rounded cards and input fields
	•	soft shadows
	•	minimal and supportive educational aesthetic
	•	mobile-first layout but responsive for desktop

Create the Following Screens
	1.	Login Page

Include:

Portal logo at the top

Title:
Welcome Back

Input fields:
	•	Email address
	•	Password

Additional elements:
	•	Forgot Password link
	•	Primary Login button
	•	Divider with text “or”
	•	Secondary button: Create an Account

Add small text at the bottom:

“Have a teacher invitation? Use your invite link to get free access.”
	2.	Sign Up Page

Include form fields:
	•	Full Name
	•	Email
	•	Password
	•	Confirm Password
	•	Invitation Code (optional)

Add helper text:

“Have an access code from your teacher? Enter it above to unlock free access.”

Buttons:

Primary: Create Account
Secondary text link: Already have an account? Login
	3.	Invite Link Landing Page

Design a page for students who click a teacher invitation link.

Include:

Title:
“You’ve Been Invited to Join”

Description:
“Your teacher has invited you to join the learning portal. Create your account to access lessons, workshops, and resources.”

Buttons:

Primary: Create Account
Secondary: Login

Add small badge:

Access: Free Student Access
	4.	Access Code Success Screen

Include:

Success icon

Title:
Access Granted

Text:
“Your teacher has provided free access to the portal.”

Button:
Continue to Dashboard
	5.	Invalid Code Error State

Create an error state component.

Include:

Error icon

Text:
“Invalid or expired access code”

Buttons:

Try Again
Continue to Payment
	6.	Payment Access Screen

Design a simple purchase page.

Include:

Title:
Unlock Full Access

Description:
“Join the learning portal to access lessons, workshops, and student resources.”

Include:

Price card
Continue to Payment button
Stripe-style payment UI placeholder
	7.	Payment Success Screen

Include:

Success icon

Title:
Welcome to the Learning Portal

Text:
“Your access has been successfully activated.”

Button:
Go to Dashboard
	8.	Forgot Password Screen

Include:

Title:
Reset Password

Input field:
Email address

Button:
Send Reset Link

Small helper text:
“We will send instructions to reset your password.”
	9.	Loading State

Create a simple loading screen for account creation.

Include:

Loading spinner

Text:
“Creating your account…”
	10.	Authentication Flow Diagram

Add a small visual flow diagram showing the user journey:

Login → Dashboard

Sign Up → Invitation Code Check
→ Valid Code → Dashboard
→ No Code → Payment → Dashboard

Invite Link → Create Account → Dashboard

Component System

Also create reusable components:
	•	input field component
	•	primary button
	•	secondary button
	•	error message component
	•	success message component
	•	password visibility toggle

These components should match the style of the existing portal UI.
