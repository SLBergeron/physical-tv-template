import { type Metadata } from "next";
import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";

export const metadata: Metadata = {
  title: "Privacy Policy - PhysicalTV Studios",
  description: "Learn how PhysicalTV Studios collects and uses your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-start justify-between pb-20">
        <div className="relative z-20 w-full max-w-4xl mx-auto py-10 md:pt-40">
          <Heading as="h1" className="mb-8">Privacy Policy</Heading>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted dark:text-muted-dark mb-6">
              Last updated: November 6, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                What This Means
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                This privacy policy explains how we collect and use your information when you visit our website.
                We keep things simple and only collect what we need.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Who We Are
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                PhysicalTV Studios is a creative intelligence company based in Vancouver, Canada.
                We help clients with strategy, storytelling, and systems.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                What Information We Collect
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We collect very little information about you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>
                  <strong>Contact Information:</strong> If you fill out our contact form, we collect your name,
                  email address, and any message you send us.
                </li>
                <li>
                  <strong>Basic Website Data:</strong> Our website hosting service (Vercel) automatically collects
                  basic information like which pages you visit and how long you stay. This helps us understand how
                  people use our site.
                </li>
                <li>
                  <strong>Cookies:</strong> We use a small file called a cookie to remember that you accepted
                  this privacy notice. That&apos;s it.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We only use your information to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>Respond to your messages and questions</li>
                <li>Improve our website and understand how people use it</li>
                <li>Send you information you asked for</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We will never sell your information to anyone. We will never spam you with emails you didn&apos;t ask for.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Who We Share Your Information With
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We only share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>
                  <strong>Vercel:</strong> Our website hosting company. They help keep our website running and
                  provide basic analytics about visitors.
                </li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                That&apos;s it. We don&apos;t use any other tracking services or share your data with advertisers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                How We Protect Your Information
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We take reasonable steps to protect your information from unauthorized access. Our website uses
                secure connections (HTTPS), and we store contact form submissions securely.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Your Rights
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>Ask us what information we have about you</li>
                <li>Ask us to delete your information</li>
                <li>Ask us to correct wrong information</li>
                <li>Ask us to stop contacting you</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                To do any of these things, just send us an email using our contact form.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Our website is not designed for children under 13 years old. We don&apos;t knowingly collect
                information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We may update this privacy policy from time to time. If we make big changes, we&apos;ll update
                the date at the top of this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Questions?
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                If you have any questions about this privacy policy, please contact us through our website.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
