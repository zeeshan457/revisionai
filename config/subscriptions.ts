import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const pricingData: SubscriptionPlan[] = [
  {
    title: 'Starter',
    description: 'For Beginners',
    benefits: [
      'Revision scheduler',
      'Practice quizes',
      'Flashcard generator',
    ],
    limitations: [
      'No priority access to new features.',
      'Limited customer support.',
      'No AI Chatbot Assistant / Revison Analytics.',
      'Limited access to business resources.',
    ],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: 'Pro (coming soon)',
    description: 'Unlock Advanced Features',
    benefits: [
      'Revision scheduler',
      'Practice quizes',
      'Flashcard generator',
      'AI Chatbot Assistant',
      'Revision Analytics.',
      'Task Management Integration.',
    ],
    limitations: [
      'No custom branding.',
      'Limited access to business resources.',
    ],
    prices: {
      monthly: 10,
      yearly: 105,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    },
  },
  // {
  //   title: 'Business',
  //   description: 'For Power Users',
  //   benefits: [

  //   ],
  //   limitations: [],
  //   prices: {
  //     monthly: ,
  //     yearly: ,
  //   },
  //   stripeIds: {
  //     monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
  //     yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
  //   },
  // },
];
