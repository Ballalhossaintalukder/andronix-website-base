<template>
  <div class="legal-page bg-background w-full overflow-hidden">
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="max-w-3xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Legal</p>
        <h1 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Refund Policy
        </h1>
        <div class="mt-8 legal-prose text-gray-400">
          <p class="md:text-lg leading-relaxed">
            Andronix offers digital purchases including Andronix Premium, Andronix Modded OS, and the Andronix Commands
            subscription. We aim to make refunds fair, transparent, and consistent with applicable consumer protection
            laws. The sections below explain how refunds work for each purchase channel.
          </p>

          <h2 class="text-xl md:text-2xl text-white mt-10 mb-3 font-bold">
            In-app purchases via Google Play
          </h2>
          <p class="md:text-lg leading-relaxed">
            All in-app purchases (Andronix Premium, Modded OS, and other items bought inside the Android app) are
            processed through Google Play Billing and are subject to
            <a target="_blank" href="https://support.google.com/googleplay/answer/2479637">Google Play's refund policy</a>.
            Google offers an automatic refund window (typically within 48 hours of purchase) directly through the Play
            Store. To request a refund, use your Play Store order history or Google Play's refund flow.
          </p>
          <p class="md:text-lg leading-relaxed mt-3">
            Outside the Google Play window, write to
            <a href="mailto:support@andronix.app">support@andronix.app</a> within 7 days of purchase and we will review
            your request in good faith on a case-by-case basis, considering accidental purchases, duplicate charges,
            and product non-delivery.
          </p>

          <h2 class="text-xl md:text-2xl text-white mt-10 mb-3 font-bold">
            Andronix Premium (web purchases)
          </h2>
          <p class="md:text-lg leading-relaxed">
            For Andronix Premium purchased through our website, refunds are available within 7 days of purchase if you
            have not actively used the premium features. Contact
            <a href="mailto:support@andronix.app">support@andronix.app</a> to initiate the request.
          </p>

          <h2 class="text-xl md:text-2xl text-white mt-10 mb-3 font-bold">
            How to request a refund
          </h2>
          <p class="md:text-lg leading-relaxed">
            Email <a href="mailto:support@andronix.app">support@andronix.app</a> with the subject line
            <span class="font-mono text-gray-300">Refund Request — [Order ID]</span>. Include your order ID, purchase date, payment
            method (Google Play / Razorpay / PayPal), and a brief reason. We respond within 5 business days. Approved
            refunds are credited back to your original payment method within 10 business days of approval. Currency
            conversion is handled by the original payment processor.
          </p>

          <h2 class="text-xl md:text-2xl text-white mt-10 mb-3 font-bold">
            Grievance and escalation
          </h2>
          <p class="md:text-lg leading-relaxed">
            If a refund decision feels unfair or remains unresolved, you can escalate to our Grievance Officer at
            <a href="mailto:grievance@andronix.app">grievance@andronix.app</a> as described in our
            <a href="/legal/privacy-policy">Privacy Policy</a>. Indian consumers may also use the National Consumer
            Helpline at 1915 or
            <a target="_blank" href="https://consumerhelpline.gov.in">consumerhelpline.gov.in</a>.
          </p>

          <div class="mt-10 rounded-2xl border border-gray-800 bg-card_background p-6 text-sm text-gray-400 leading-relaxed">
            <p class="font-semibold text-gray-200">Andronix Apps · Operated by Amita Shukla</p>
            <p>555 Kha/29, Bhola Khera, Krishna Nagar, Lucknow, Uttar Pradesh 226023, India</p>
            <p class="mt-2"><a href="mailto:support@andronix.app">support@andronix.app</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'refund-policy'
}
</script>

<style scoped>
.legal-page {
  position: relative;
}

.legal-prose a,
.legal-prose a:visited {
  color: #ff8b25;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.legal-prose a:hover {
  color: #ffa85c;
}
</style>
