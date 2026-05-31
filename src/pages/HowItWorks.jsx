import React from 'react';
import { CustomerCheckoutMockup, ConfigPanelMockup } from '../components/howitworks/StepMockups';
import HeroSquiggles from '../components/layout/HeroSquiggles';
import PaymentTerminal from '../components/home/PaymentTerminal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: '01',
    title: 'Customer Pays With Crypto or Card',
    body: 'Your customer chooses crypto or card at checkout. If they pay with crypto, they cover the transaction fee automatically. If they pay by card, standard card processing applies. Either way, you get paid.',
    visual: <CustomerCheckoutMockup />,
  },
  {
    number: '02',
    title: 'The Customer Covers the Transaction Fee',
    body: 'Unlike traditional processing where the fee comes out of your revenue, FlowPoint passes the transaction cost to the customer at checkout. You keep the full amount of every sale.',
    visual: <ConfigPanelMockup />,
  },
  {
    number: '03',
    title: 'You Receive USD Automatically',
    body: 'Every transaction settles directly to your account in USD. No crypto wallets to manage, no volatility risk, no manual conversions. FlowPoint handles everything in the background while your existing POS keeps running exactly as before.',
    visual: <div className="scale-90 origin-top"><PaymentTerminal /></div>,
  },
];

const faqs = [
  {
    q: 'Do I need to replace my current card processing system?',
    a: 'No. FlowPoint is designed to work alongside your existing payment processor. You keep your current credit card system exactly as it is, and FlowPoint simply adds cryptocurrency as an additional payment option for your customers.',
  },
  {
    q: 'Do I need new hardware?',
    a: 'No new hardware is required. FlowPoint integrates with your existing POS system, tablet, or smartphone. Our team handles the setup and configuration remotely, so there\'s nothing for you to install or configure on your end.',
  },
  {
    q: 'What cryptocurrencies can customers pay with?',
    a: 'Customers can pay with major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and select stablecoins. We\'re continually expanding the supported currencies based on merchant and customer demand.',
  },
  {
    q: 'How do I receive my money?',
    a: 'All crypto payments are automatically converted to USD and deposited into your designated bank account. You never hold cryptocurrency. The conversion happens instantly at the time of the transaction, eliminating any volatility risk.',
  },
  {
    q: 'What are the fees for me?',
    a: 'Zero. FlowPoint charges merchants absolutely nothing in processing fees. The small transaction fee is absorbed by the customer at checkout, meaning you receive 100% of the sale amount in USD.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most merchants are fully set up and processing their first crypto payment within 24 hours of application approval. Our dedicated onboarding team handles all configuration so you can focus on running your business.',
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <HeroSquiggles />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Simple for you. Seamless for your customers.
          </h1>
          <p className="font-dm text-base text-white/60 max-w-xl mx-auto">
            Three steps from application to your first crypto payment.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20 lg:space-y-28">
          {steps.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'lg:direction-rtl' : ''}`}
              >
                <div className={`${reversed ? 'lg:order-2' : ''}`}>
                  <span className="font-syne font-bold text-5xl text-gold/20">{step.number}</span>
                  <h3 className="font-syne font-bold text-xl md:text-2xl text-navy mt-2 mb-4">{step.title}</h3>
                  <p className="font-dm text-base text-gray-500 leading-relaxed">{step.body}</p>
                </div>
                <div className={`flex justify-center ${reversed ? 'lg:order-1' : ''}`}>
                  {step.visual}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note below steps */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
          <p className="font-dm text-sm text-gray-400 text-center">
            FlowPoint works alongside your existing POS system. Nothing about your current setup needs to change.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-syne font-bold text-2xl md:text-3xl text-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-gray-100 px-6 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="font-syne font-semibold text-sm text-navy text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-dm text-sm text-gray-500 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}