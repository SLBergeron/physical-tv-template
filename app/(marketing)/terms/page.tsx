import { type Metadata } from "next";
import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";

export const metadata: Metadata = {
  title: "Terms of Service - PhysicalTV Studios",
  description: "Terms and conditions for using PhysicalTV Studios website and services.",
};

export default function TermsOfService() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-start justify-between pb-20">
        <div className="relative z-20 w-full max-w-4xl mx-auto py-10 md:pt-40">
          <Heading as="h1" className="mb-8">Terms of Service</Heading>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted dark:text-muted-dark mb-6">
              Last updated: November 6, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                What This Means
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                These terms explain the rules for using our website and working with us. By using this website,
                you agree to follow these rules.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Who We Are
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                PhysicalTV Studios is a creative intelligence company based in Vancouver, British Columbia, Canada.
                We provide strategy, storytelling, and systems work for clients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Using Our Website
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                You can:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>Browse our website and read our content</li>
                <li>Contact us through our contact form</li>
                <li>Learn about our services</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                You cannot:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>Try to hack or break our website</li>
                <li>Copy our content and pretend it&apos;s yours</li>
                <li>Use our website to do anything illegal</li>
                <li>Send us spam or viruses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Our Content
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                All the words, images, designs, and other content on this website belong to PhysicalTV Studios.
                You can read and share links to our content, but you cannot copy it and use it as your own.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Working Together
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                If you want to hire us for a project, we&apos;ll create a separate contract that explains:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>What work we&apos;ll do</li>
                <li>How much it costs</li>
                <li>When we&apos;ll finish</li>
                <li>Who owns what we create</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                These website terms are separate from any work contract. The work contract will have more
                specific details about our projects together.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                What We Promise (and Don&apos;t Promise)
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We try to keep our website working well and the information accurate. However:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>Sometimes the website might be down for maintenance or have technical problems</li>
                <li>Information might have small errors or become outdated</li>
                <li>We might change or remove content without warning</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We provide this website &quot;as is&quot; and cannot guarantee it will always be perfect or available.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Limits on Our Responsibility
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We are not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 dark:text-neutral-300 space-y-2">
                <li>Problems that happen if you can&apos;t access our website</li>
                <li>Decisions you make based on information from our website</li>
                <li>Links to other websites (we don&apos;t control them)</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                If something does go wrong, our total responsibility is limited to the amount you paid us
                (which is nothing for just using the website).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Links to Other Websites
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Our website might have links to other websites. We don&apos;t control those websites and are not
                responsible for their content or privacy practices. When you click a link to another site,
                their rules apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Changes to These Terms
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                We can change these terms at any time. When we do, we&apos;ll update the date at the top of this page.
                If you keep using our website after we make changes, it means you accept the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Which Laws Apply
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                These terms are governed by the laws of British Columbia, Canada. If there&apos;s ever a legal
                dispute, it will be handled in the courts of British Columbia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Contact Us
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                If you have questions about these terms, please contact us through our website contact form.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
